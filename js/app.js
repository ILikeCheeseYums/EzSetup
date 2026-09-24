
const appState = {
  selected: new Set(),
  searchQuery: '',
  activeCategory: 'all',
  previewTab: 'brewfile'
};

// Initialize App
function initApp() {
  renderCategoryFilters();
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
}

// Render Category Filters
function renderCategoryFilters() {
  const container = document.getElementById('filters-container');
  const actionsContainer = document.getElementById('selection-actions');
  if (!container) return;

  container.innerHTML = '';

  // "All" filter button
  const allBtn = document.createElement('button');
  allBtn.type = 'button';
  const isAllActive = appState.activeCategory === 'all';
  allBtn.className = `px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
    isAllActive
      ? 'bg-zinc-100 text-zinc-950 font-semibold shadow-sm'
      : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700'
  }`;
  allBtn.textContent = `All (${ITEMS.length})`;
  allBtn.onclick = function() {
    setCategoryFilter('all');
  };
  container.appendChild(allBtn);

  // Each category filter button (counts all items with this category tag)
  CATEGORIES.forEach(category => {
    const categoryCount = ITEMS.filter(item => item.categories && item.categories.includes(category.id)).length;
    const isActive = appState.activeCategory === category.id;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
      isActive
        ? 'bg-zinc-100 text-zinc-950 font-semibold shadow-sm'
        : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700'
    }`;
    btn.textContent = `${category.shortName} (${categoryCount})`;
    btn.onclick = function() {
      setCategoryFilter(category.id);
    };
    container.appendChild(btn);
  });

  // Deselect / Clear selection button
  if (actionsContainer) {
    actionsContainer.innerHTML = '';
    if (appState.selected.size > 0) {
      const clearBtn = document.createElement('button');
      clearBtn.type = 'button';
      clearBtn.className = 'px-3 py-1.5 rounded-lg text-xs font-mono text-zinc-500 hover:text-zinc-300 border border-zinc-800 hover:border-zinc-700 transition-all';
      clearBtn.textContent = 'Deselect All';
      clearBtn.onclick = clearAll;
      actionsContainer.appendChild(clearBtn);
    }
  }
}

// Set Category Filter
function setCategoryFilter(categoryId) {
  appState.activeCategory = categoryId;
  renderCategoryFilters();
  renderCategories();
  filterCards();
}

// Click category tag on card
function onCategoryTagClick(event, categoryId) {
  event.stopPropagation();
  setCategoryFilter(categoryId);
}

// Render Categories and Cards
function renderCategories() {
  const container = document.getElementById('categories-container');
  if (!container) return;

  container.innerHTML = '';

  const categoriesToRender = appState.activeCategory === 'all'
    ? CATEGORIES
    : CATEGORIES.filter(c => c.id === appState.activeCategory);

  categoriesToRender.forEach(category => {
    // When "all", group by primaryCategory to avoid duplicate cards.
    // When a specific category is active, show ALL items having that category tag!
    const categoryItems = appState.activeCategory === 'all'
      ? ITEMS.filter(item => item.primaryCategory === category.id)
      : ITEMS.filter(item => item.categories && item.categories.includes(category.id));

    if (categoryItems.length === 0) return;

    const section = document.createElement('section');
    section.className = 'category-section mb-10';
    section.setAttribute('data-category-id', category.id);

    // Section Header with clean SVG icon
    const header = document.createElement('div');
    header.className = 'flex items-center gap-2.5 mb-4 pb-2 border-b border-zinc-800';
    header.innerHTML = `
      <div class="flex items-center justify-center w-6 h-6 rounded bg-zinc-900 border border-zinc-800">
        ${getIcon(category.iconKey)}
      </div>
      <h2 class="text-sm font-semibold tracking-wide text-zinc-200 uppercase">${category.name}</h2>
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

// Create an Item Card Element with Authentic SVG Logo & Category Tags
function createItemCard(item) {
  const isSelected = appState.selected.has(item.id);
  const card = document.createElement('div');
  card.id = `item-${item.id}`;
  card.className = `item-card group relative p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
    isSelected
      ? 'bg-zinc-850 border-zinc-400 shadow-sm shadow-black/40'
      : 'bg-zinc-900/40 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-850/50'
  }`;

  const categoryTags = (item.categories || [item.primaryCategory]).map(catId => {
    const cat = getCategoryById(catId);
    return cat ? cat.shortName : catId;
  });

  const searchTagString = categoryTags.join(' ').toLowerCase();

  card.setAttribute('data-name', item.name.toLowerCase());
  card.setAttribute('data-desc', item.desc.toLowerCase());
  card.setAttribute('data-type', item.type);
  card.setAttribute('data-tags', searchTagString);

  // Render clickable category tags
  const tagsHtml = (item.categories || [item.primaryCategory]).map(catId => {
    const cat = getCategoryById(catId);
    if (!cat) return '';
    const isThisActive = appState.activeCategory === catId;
    return `
      <button
        type="button"
        title="Filter by ${cat.name}"
        onclick="onCategoryTagClick(event, '${catId}')"
        class="text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded border transition-colors ${
          isThisActive
            ? 'bg-zinc-200 text-zinc-950 font-semibold border-zinc-200'
            : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-600'
        }"
      >
        ${cat.shortName}
      </button>
    `;
  }).join('');

  card.innerHTML = `
    <div>
      <div class="flex items-start gap-3">
        <div class="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 text-zinc-300 group-hover:border-zinc-700 transition-colors">
          ${getIcon(item.id)}
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center justify-between gap-1.5 mb-1">
            <h3 class="font-medium text-sm text-zinc-100 group-hover:text-white transition-colors truncate">${item.name}</h3>
          </div>
          <div class="flex flex-wrap items-center gap-1 mb-2">
            ${tagsHtml}
          </div>
          <p class="text-xs text-zinc-400 leading-relaxed">${item.desc}</p>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-between mt-3 pt-2.5 border-t border-zinc-800/80">
      <span class="text-[11px] font-mono text-zinc-500 truncate max-w-[180px]">
        ${item.brewPackage || (item.type === 'tweak' ? 'defaults write' : '')}
      </span>
      <div class="card-checkbox w-4 h-4 rounded border flex items-center justify-center transition-colors ${
        isSelected
          ? 'bg-zinc-100 border-zinc-100 text-zinc-950'
          : 'border-zinc-700 group-hover:border-zinc-500'
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
        .replace('bg-zinc-900/40 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-850/50', '')
        .trim() + ' bg-zinc-850 border-zinc-400 shadow-sm shadow-black/40';
    } else {
      card.className = card.className
        .replace('bg-zinc-850 border-zinc-400 shadow-sm shadow-black/40', '')
        .trim() + ' bg-zinc-900/40 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-850/50';
    }

    const checkbox = card.querySelector('.card-checkbox');
    const checkmark = checkbox ? checkbox.querySelector('svg') : null;
    if (checkmark && checkbox) {
      if (isSelected) {
        checkmark.classList.remove('hidden');
        checkmark.classList.add('block');
        checkbox.className = 'card-checkbox w-4 h-4 rounded border flex items-center justify-center transition-colors bg-zinc-100 border-zinc-100 text-zinc-950';
      } else {
        checkmark.classList.remove('block');
        checkmark.classList.add('hidden');
        checkbox.className = 'card-checkbox w-4 h-4 rounded border flex items-center justify-center transition-colors border-zinc-700 group-hover:border-zinc-500';
      }
    }
  }

  updateActionBar();
  renderCategoryFilters();
  updateLivePreviewIfOpen();
}

// Clear All
function clearAll() {
  appState.selected.clear();
  renderCategories();
  renderCategoryFilters();
  filterCards();
  updateActionBar();
  updateLivePreviewIfOpen();
}

// Filter Cards based on search query
function filterCards() {
  const query = appState.searchQuery;
  const sections = document.querySelectorAll('.category-section');

  sections.forEach(section => {
    let visibleCardsCount = 0;
    const cards = section.querySelectorAll('.item-card');
    cards.forEach(card => {
      const name = card.getAttribute('data-name') || '';
      const desc = card.getAttribute('data-desc') || '';
      const tags = card.getAttribute('data-tags') || '';
      const matchesSearch = query === '' || name.includes(query) || desc.includes(query) || tags.includes(query);
      card.style.display = matchesSearch ? 'flex' : 'none';
      if (matchesSearch) visibleCardsCount++;
    });

    section.style.display = visibleCardsCount > 0 ? 'block' : 'none';
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
      downloadBtn.classList.add('opacity-40', 'cursor-not-allowed');
    } else {
      downloadBtn.disabled = false;
      downloadBtn.classList.remove('opacity-40', 'cursor-not-allowed');
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
  const tabEnvScript = document.getElementById('tab-envscript');
  const tabReadme = document.getElementById('tab-readmetxt');
  if (!codeEl) return;

  const activeStyle = 'px-3 py-1.5 text-xs font-mono font-medium text-white border-b-2 border-zinc-200';
  const inactiveStyle = 'px-3 py-1.5 text-xs font-mono font-medium text-zinc-500 hover:text-zinc-300 border-b-2 border-transparent';

  if (appState.previewTab === 'brewfile') {
    codeEl.textContent = generateBrewfile(appState.selected);
  } else if (appState.previewTab === 'env') {
    codeEl.textContent = getSetupEnvScript();
  } else if (appState.previewTab === 'readme') {
    codeEl.textContent = getReadmeText();
  } else {
    codeEl.textContent = generateRunScript(appState.selected);
  }

  if (tabBrewfile) tabBrewfile.className = appState.previewTab === 'brewfile' ? activeStyle : inactiveStyle;
  if (tabRunScript) tabRunScript.className = appState.previewTab === 'script' ? activeStyle : inactiveStyle;
  if (tabEnvScript) tabEnvScript.className = appState.previewTab === 'env' ? activeStyle : inactiveStyle;
  if (tabReadme) tabReadme.className = appState.previewTab === 'readme' ? activeStyle : inactiveStyle;
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
