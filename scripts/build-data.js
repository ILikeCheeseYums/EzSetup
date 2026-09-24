#!/usr/bin/env node
/**
 * EzSetup Data Builder
 * 
 * Compiles individual JSON files from data/items/*.json and data/categories.json
 * into js/data.js so EzSetup works seamlessly out of the box in any browser
 * without CORS issues or complex bundling.
 *
 * Usage:
 *   node scripts/build-data.js          # Single build
 *   node scripts/build-data.js --watch  # Rebuild automatically on file changes
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT_DIR, 'data');
const ITEMS_DIR = path.join(DATA_DIR, 'items');
const CATEGORIES_FILE = path.join(DATA_DIR, 'categories.json');
const TEMPLATES_DIR = path.join(ROOT_DIR, 'templates');
const SETUP_ENV_TPL = path.join(TEMPLATES_DIR, 'setup-env.sh');
const README_TXT_TPL = path.join(TEMPLATES_DIR, 'README.txt');
const OUTPUT_TEMPLATES_JS = path.join(ROOT_DIR, 'js', 'templates.js');
const OUTPUT_JS_FILE = path.join(ROOT_DIR, 'js', 'data.js');

function build() {
  console.log('[build] Compiling catalog data from data/items/ ...');

  // 1. Read categories
  if (!fs.existsSync(CATEGORIES_FILE)) {
    console.error(`[error] Categories file not found: ${CATEGORIES_FILE}`);
    process.exit(1);
  }
  const categories = JSON.parse(fs.readFileSync(CATEGORIES_FILE, 'utf8'));
  const categoryIds = new Set(categories.map(c => c.id));

  // 2. Read items
  if (!fs.existsSync(ITEMS_DIR)) {
    console.error(`[error] Items directory not found: ${ITEMS_DIR}`);
    process.exit(1);
  }

  const files = fs.readdirSync(ITEMS_DIR).filter(file => file.endsWith('.json')).sort();
  const items = [];
  const errors = [];

  for (const file of files) {
    const filePath = path.join(ITEMS_DIR, file);
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const item = JSON.parse(content);

      // Validation
      if (!item.id) errors.push(`${file}: Missing 'id' field`);
      if (!item.name) errors.push(`${file}: Missing 'name' field`);
      if (!item.primaryCategory) errors.push(`${file}: Missing 'primaryCategory' field`);
      if (item.primaryCategory && !categoryIds.has(item.primaryCategory)) {
        errors.push(`${file}: Invalid primaryCategory '${item.primaryCategory}'`);
      }
      if (!item.categories || !Array.isArray(item.categories) || item.categories.length === 0) {
        errors.push(`${file}: Missing or empty 'categories' array`);
      }
      if (!item.desc) errors.push(`${file}: Missing 'desc' field`);
      if (!['brew', 'cask', 'tweak'].includes(item.type)) {
        errors.push(`${file}: Invalid type '${item.type}' (must be 'brew', 'cask', or 'tweak')`);
      }
      if ((item.type === 'brew' || item.type === 'cask') && !item.brewPackage) {
        errors.push(`${file}: Missing 'brewPackage' for ${item.type} item`);
      }
      if (item.type === 'tweak' && (!item.tweakCommands || !Array.isArray(item.tweakCommands))) {
        errors.push(`${file}: Missing 'tweakCommands' array for tweak item`);
      }

      items.push(item);
    } catch (err) {
      errors.push(`${file}: JSON parse error: ${err.message}`);
    }
  }

  if (errors.length > 0) {
    console.error(`[error] Found ${errors.length} validation errors:`);
    errors.forEach(e => console.error(`  - ${e}`));
    process.exit(1);
  }

  // 3. Sort items by category order, then maintain clean order
  const categoryOrderMap = new Map();
  categories.forEach((cat, index) => categoryOrderMap.set(cat.id, index));

  items.sort((a, b) => {
    const orderA = categoryOrderMap.get(a.primaryCategory) ?? 999;
    const orderB = categoryOrderMap.get(b.primaryCategory) ?? 999;
    if (orderA !== orderB) return orderA - orderB;
    return a.id.localeCompare(b.id);
  });

  // 4. Generate js/data.js content
  const jsContent = `// EzSetup Catalog Data
// NOTE: Automatically compiled from data/items/*.json and data/categories.json
// To add new items, create a new .json file in data/items/ and run: npm run build

const CATEGORIES = ${JSON.stringify(categories, null, 2)};

// Helper to find category by ID
function getCategoryById(catId) {
  return CATEGORIES.find(c => c.id === catId);
}

const ITEMS = ${JSON.stringify(items, null, 2)};
`;

  fs.writeFileSync(OUTPUT_JS_FILE, jsContent, 'utf8');

  // 5. Compile templates
  let tplContent = '// EzSetup Static Templates\n// Automatically compiled from templates/* - do not edit directly\n\n';
  if (fs.existsSync(SETUP_ENV_TPL)) {
    const envScript = fs.readFileSync(SETUP_ENV_TPL, 'utf8');
    tplContent += `const SETUP_ENV_SCRIPT = ${JSON.stringify(envScript)};\n\n`;
  }
  if (fs.existsSync(README_TXT_TPL)) {
    const readmeTxt = fs.readFileSync(README_TXT_TPL, 'utf8');
    tplContent += `const README_TXT_TEMPLATE = ${JSON.stringify(readmeTxt)};\n`;
  }
  fs.writeFileSync(OUTPUT_TEMPLATES_JS, tplContent, 'utf8');
  console.log('[ok] Built js/templates.js from templates/ (setup-env.sh, README.txt)');

  console.log(`[ok] Built js/data.js (${categories.length} categories, ${items.length} items from data/items/)`);
}

// Execute build
build();

// Watch mode
if (process.argv.includes('--watch')) {
  console.log('[watch] Watching data/, data/items/, and templates/ for changes... (Ctrl+C to stop)');
  let debounceTimeout = null;

  const onChange = (eventType, filename) => {
    if (!filename || (!filename.endsWith('.json') && !filename.endsWith('.sh') && !filename.endsWith('.txt'))) return;
    if (debounceTimeout) clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      console.log(`[watch] Detected change in ${filename}, rebuilding...`);
      try {
        build();
      } catch (err) {
        console.error('[watch] Build failed:', err.message);
      }
    }, 100);
  };

  if (fs.existsSync(ITEMS_DIR)) {
    fs.watch(ITEMS_DIR, onChange);
  }
  if (fs.existsSync(DATA_DIR)) {
    fs.watch(DATA_DIR, onChange);
  }
  if (fs.existsSync(TEMPLATES_DIR)) {
    fs.watch(TEMPLATES_DIR, onChange);
  }
}
