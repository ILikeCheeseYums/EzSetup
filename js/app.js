// EzSetup Application Logic (Pure Functions - No Classes)

const appState = {
  selected: new Set(['vscode', 'fnm', 'pnpm', 'chrome', 'starship', 'tweak-finder-hidden', 'tweak-key-repeat']),
  searchQuery: '',
  previewTab: 'brewfile'
};

// Initialize App
function initApp() {
  renderPresets();
  renderCategories();
  updateActionBar();
  setupEventListeners();
}

// Setup Event Listeners
function setupEventListeners() {
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', function(e) {
      appState.searchQuery = e.target.value.toLowerCase().trim();
      filterCards();
    });
  }

  // Clear search on Esc
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      const modal = document.getElementById('preview-modal');
      if (modal && !modal.classList.contains('hidden')) {
        closePreview();
      }
    }
  });
}

// Render Presets
function renderPresets() {
  const container = document.getElementById('presets-container');
  if (!container) return;

  container.innerHTML = '';

  // Preset pills
  PRESETS.forEach(preset => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'px-3 py-1.5 rounded-full text-xs font-medium border border-zinc-700 bg-zinc-800/80 text-zinc-300 hover:text-white hover:border-zinc-500 transition-all';
    btn.textContent = preset.name;
    btn.title = preset.desc;
    btn.onclick = function() {
      applyPreset(preset.id);
    };
    container.appendChild(btn);
  });

  // Clear button
  const clearBtn = document.createElement('button');
  clearBtn.type = 'button';
  clearBtn.className = 'px-3 py-1.5 rounded-full text-xs font-medium border border-red-900/50 bg-red-950/20 text-red-400 hover:bg-red-900/40 hover:text-red-200 transition-all';
  clearBtn.textContent = 'Clear All';
  clearBtn.onclick = clearAll;
  container.appendChild(clearBtn);
}

// Render Categories and Cards
function renderCategories() {
  const container = document.getElementById('categories-container');
  if (!container) return;

  container.innerHTML = '';

  CATEGORIES.forEach(category => {
    const categoryItems = ITEMS.filter(item => item.category === category.id);
    if (categoryItems.length === 0) return;

    const section = document.createElement('section');
    section.className = 'category-section mb-10';
    section.setAttribute('data-category-id', category.id);

    // Section Header
    const header = document.createElement('div');
    header.className = 'flex items-center gap-2 mb-4 pb-2 border-b border-zinc-800/80';
    header.innerHTML = `
      <span class="text-xl">${category.icon}</span>
      <h2 class="text-base font-semibold text-zinc-200">${category.name}</h2>
      <span class="text-xs text-zinc-500 ml-auto font-mono category-count">${categoryItems.length} items</span>
    `;
    section.appendChild(header);

    // Grid of cards
    const grid = document.createElement('div');
    grid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3';

    categoryItems.forEach(item => {
      const card = createItemCard(item);
      grid.appendChild(card);
    });

    section.appendChild(grid);
    container.appendChild(section);
  });
}

// Create an Item Card Element
function createItemCard(item) {
  const isSelected = appState.selected.has(item.id);
  const card = document.createElement('div');
  card.id = `item-${item.id}`;
  card.className = `item-card group relative p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
    isSelected
      ? 'bg-zinc-800/80 border-indigo-500/80 shadow-sm shadow-indigo-500/10'
      : 'bg-zinc-900/40 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-800/30'
  }`;

  card.setAttribute('data-name', item.name.toLowerCase());
  card.setAttribute('data-desc', item.desc.toLowerCase());
  card.setAttribute('data-type', item.type);

  // Type badge styling
  let badgeColor = 'bg-zinc-800 text-zinc-400 border-zinc-700';
  let badgeText = item.type;
  if (item.type === 'cask') {
    badgeColor = 'bg-blue-950/60 text-blue-300 border-blue-800/50';
    badgeText = 'GUI App';
  } else if (item.type === 'brew') {
    badgeColor = 'bg-emerald-950/60 text-emerald-300 border-emerald-800/50';
    badgeText = 'CLI Tool';
  } else if (item.type === 'tweak') {
    badgeColor = 'bg-purple-950/60 text-purple-300 border-purple-800/50';
    badgeText = 'macOS Tweak';
  }

  card.innerHTML = `
    <div>
      <div class="flex items-start justify-between gap-2 mb-1.5">
        <h3 class="font-medium text-sm text-zinc-100 group-hover:text-white transition-colors">${item.name}</h3>
        <span class="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border font-mono ${badgeColor}">
          ${badgeText}
        </span>
      </div>
      <p class="text-xs text-zinc-400 leading-relaxed">${item.desc}</p>
    </div>
    <div class="flex items-center justify-between mt-3 pt-2.5 border-t border-zinc-800/60">
      <span class="text-[11px] font-mono text-zinc-500 truncate max-w-[170px]">
        ${item.brewPackage || (item.type === 'tweak' ? 'defaults write' : '')}
      </span>
      <div class="w-4 h-4 rounded border flex items-center justify-center transition-colors ${
        isSelected
          ? 'bg-indigo-600 border-indigo-500 text-white'
          : 'border-zinc-700 group-hover:border-zinc-600'
      }">
        <svg class="w-3 h-3 ${isSelected ? 'block' : 'hidden'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
    </div>
  `;

  card.onclick = function() {
    toggleItem(item.id);
  };

  return card;
}

// Toggle Item Selection
function toggleItem(itemId) {
  if (appState.selected.has(itemId)) {
    appState.selected.delete(itemId);
  } else {
    appState.selected.add(itemId);
  }

  // Update card UI
  const card = document.getElementById(`item-${itemId}`);
  if (card) {
    const isSelected = appState.selected.has(itemId);
    if (isSelected) {
      card.className = card.className
        .replace('bg-zinc-900/40 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-800/30', '')
        .trim() + ' bg-zinc-800/80 border-indigo-500/80 shadow-sm shadow-indigo-500/10';
    } else {
      card.className = card.className
        .replace('bg-zinc-800/80 border-indigo-500/80 shadow-sm shadow-indigo-500/10', '')
        .trim() + ' bg-zinc-900/40 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-800/30';
    }

    const checkmark = card.querySelector('svg');
    const checkbox = checkmark ? checkmark.parentElement : null;
    if (checkmark && checkbox) {
      if (isSelected) {
        checkmark.classList.remove('hidden');
        checkmark.classList.add('block');
        checkbox.className = 'w-4 h-4 rounded border flex items-center justify-center transition-colors bg-indigo-600 border-indigo-500 text-white';
      } else {
        checkmark.classList.remove('block');
        checkmark.classList.add('hidden');
        checkbox.className = 'w-4 h-4 rounded border flex items-center justify-center transition-colors border-zinc-700 group-hover:border-zinc-600';
      }
    }
  }

  updateActionBar();
  updateLivePreviewIfOpen();
}

// Apply Preset
function applyPreset(presetId) {
  const preset = PRESETS.find(p => p.id === presetId);
  if (!preset) return;

  appState.selected = new Set(preset.itemIds);
  renderCategories();
  updateActionBar();
  updateLivePreviewIfOpen();
}

// Clear All
function clearAll() {
  appState.selected.clear();
  renderCategories();
  updateActionBar();
  updateLivePreviewIfOpen();
}

// Filter Cards based on search query
function filterCards() {
  const query = appState.searchQuery;
  const cards = document.querySelectorAll('.item-card');
  const sections = document.querySelectorAll('.category-section');

  cards.forEach(card => {
    const name = card.getAttribute('data-name') || '';
    const desc = card.getAttribute('data-desc') || '';
    const matches = name.includes(query) || desc.includes(query);
    card.style.display = matches ? 'flex' : 'none';
  });

  // Hide empty category sections
  sections.forEach(section => {
    const visibleCards = section.querySelectorAll('.item-card[style*="display: flex"]');
    const allCards = section.querySelectorAll('.item-card');
    const hasVisible = query === '' ? true : visibleCards.length > 0;
    section.style.display = hasVisible ? 'block' : 'none';
  });
}

// Update Bottom Action Bar
function updateActionBar() {
  const count = appState.selected.size;
  const countEl = document.getElementById('selected-count');
  const downloadBtn = document.getElementById('download-zip-btn');
  const previewBtn = document.getElementById('preview-btn');

  if (countEl) {
    countEl.textContent = `${count} ${count === 1 ? 'item' : 'items'} selected`;
  }

  if (downloadBtn) {
    if (count === 0) {
      downloadBtn.disabled = true;
      downloadBtn.classList.add('opacity-50', 'cursor-not-allowed');
    } else {
      downloadBtn.disabled = false;
      downloadBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    }
  }

  if (previewBtn) {
    previewBtn.disabled = count === 0;
  }
}

// Open Preview Modal
function openPreview(tab) {
  if (tab) appState.previewTab = tab;
  const modal = document.getElementById('preview-modal');
  if (!modal) return;

  modal.classList.remove('hidden');
  renderPreviewContent();
}

// Close Preview Modal
function closePreview() {
  const modal = document.getElementById('preview-modal');
  if (modal) modal.classList.add('hidden');
}

// Switch Tab in Preview Modal
function switchPreviewTab(tab) {
  appState.previewTab = tab;
  renderPreviewContent();
}

// Render Preview Content in Modal
function renderPreviewContent() {
  const codeEl = document.getElementById('preview-code');
  const tabBrewfile = document.getElementById('tab-brewfile');
  const tabRunScript = document.getElementById('tab-runscript');
  if (!codeEl) return;

  if (appState.previewTab === 'brewfile') {
    codeEl.textContent = generateBrewfile(appState.selected);
    if (tabBrewfile) {
      tabBrewfile.className = 'px-3 py-1.5 text-xs font-medium text-white border-b-2 border-indigo-500';
    }
    if (tabRunScript) {
      tabRunScript.className = 'px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-zinc-200 border-b-2 border-transparent';
    }
  } else {
    codeEl.textContent = generateRunScript(appState.selected);
    if (tabBrewfile) {
      tabBrewfile.className = 'px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-zinc-200 border-b-2 border-transparent';
    }
    if (tabRunScript) {
      tabRunScript.className = 'px-3 py-1.5 text-xs font-medium text-white border-b-2 border-indigo-500';
    }
  }
}

// Update preview live if currently open
function updateLivePreviewIfOpen() {
  const modal = document.getElementById('preview-modal');
  if (modal && !modal.classList.contains('hidden')) {
    renderPreviewContent();
  }
}

// Copy Preview Code
function copyPreviewCode() {
  const codeEl = document.getElementById('preview-code');
  const copyBtn = document.getElementById('copy-code-btn');
  if (!codeEl) return;

  navigator.clipboard.writeText(codeEl.textContent).then(function() {
    if (copyBtn) {
      const originalText = copyBtn.textContent;
      copyBtn.textContent = 'Copied!';
      setTimeout(function() {
        copyBtn.textContent = originalText;
      }, 2000);
    }
  });
}

// Download Zip
function onDownloadZipClick() {
  if (appState.selected.size === 0) {
    alert('Please select at least one tool or tweak before downloading.');
    return;
  }
  generateAndDownloadZip(appState.selected);
}

// Auto init on DOM ready
document.addEventListener('DOMContentLoaded', initApp);
