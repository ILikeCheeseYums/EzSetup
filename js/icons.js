// EzSetup Vector SVG Icons & App Logos (Zero Emojis, Clean Monochrome / Brand Vectors)

const ICONS = {
  // Brand & App Logos
  'vscode': `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.5 2.5L7.2 10.4 3.5 7.6 2 8.6l3.5 3.4L2 15.4l1.5 1 3.7-2.8 10.3 7.9 4.5-2.2V4.7L17.5 2.5zm1.5 15.6l-6.8-5.2 6.8-5.2v10.4z" fill="#3B82F6"/>
  </svg>`,

  'cursor': `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <polygon points="3 3 10.07 19.97 12.58 12.58 19.97 10.07 3 3" fill="currentColor" fill-opacity="0.15"/>
    <polygon points="3 3 10.07 19.97 12.58 12.58 19.97 10.07 3 3"/>
  </svg>`,

  'zed': `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 6h16L7 18h13"/>
  </svg>`,

  'neovim': `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4v16l6-4V4L4 4z" fill="#10B981" fill-opacity="0.8"/>
    <path d="M14 4l6 4v12l-6-4V4z" fill="#059669"/>
    <path d="M10 4l10 12v4L10 8V4z" fill="#34D399" fill-opacity="0.6"/>
  </svg>`,

  'jetbrains-toolbox': `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8">
    <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor"/>
    <path d="M7 8h4M7 16h10" stroke-linecap="round"/>
  </svg>`,

  'fnm': `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8">
    <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z" stroke-linejoin="round"/>
    <path d="M12 12v8M12 12L4 7.5M12 12l8-4.5" stroke-linejoin="round"/>
  </svg>`,

  'pnpm': `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8">
    <rect x="3" y="3" width="4.5" height="4.5" rx="1" fill="currentColor" fill-opacity="0.3"/>
    <rect x="9.5" y="3" width="4.5" height="4.5" rx="1" fill="currentColor" fill-opacity="0.3"/>
    <rect x="16" y="3" width="4.5" height="4.5" rx="1" fill="currentColor" fill-opacity="0.3"/>
    <rect x="9.5" y="9.5" width="4.5" height="4.5" rx="1" fill="currentColor" fill-opacity="0.3"/>
    <rect x="16" y="9.5" width="4.5" height="4.5" rx="1" fill="currentColor" fill-opacity="0.3"/>
    <rect x="3" y="16" width="4.5" height="4.5" rx="1" fill="currentColor" fill-opacity="0.3"/>
    <rect x="9.5" y="16" width="4.5" height="4.5" rx="1" fill="currentColor" fill-opacity="0.3"/>
    <rect x="16" y="16" width="4.5" height="4.5" rx="1" fill="currentColor" fill-opacity="0.3"/>
  </svg>`,

  'bun': `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8">
    <ellipse cx="12" cy="14" rx="8" ry="6"/>
    <path d="M7 11c1-4 3.5-6 5-6s4 2 5 6" stroke-linecap="round"/>
    <circle cx="9.5" cy="13.5" r="0.8" fill="currentColor"/>
    <circle cx="14.5" cy="13.5" r="0.8" fill="currentColor"/>
  </svg>`,

  'uv': `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2L4 6v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V6l-8-4z"/>
    <path d="M9 10v4a3 3 0 006 0v-4"/>
  </svg>`,

  'rustup': `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
    <circle cx="12" cy="12" r="8"/>
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 2v2M12 20v2M2 12h2M20 12h2"/>
    <path d="M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5"/>
  </svg>`,

  'go': `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="8" cy="12" r="5"/>
    <circle cx="16" cy="12" r="5"/>
    <path d="M8 7v5h3M16 17v-5h3"/>
  </svg>`,

  'ghostty': `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 3a7 7 0 00-7 7v10l3-2 3 2 3-2 3 2 2-2V10a7 7 0 00-7-7z"/>
    <circle cx="9.5" cy="10" r="1.2" fill="currentColor"/>
    <circle cx="14.5" cy="10" r="1.2" fill="currentColor"/>
  </svg>`,

  'iterm2': `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="4" width="18" height="16" rx="3"/>
    <path d="M7 9l3 3-3 3M12 15h5"/>
  </svg>`,

  'warp': `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 12l8-8 8 8-8 8-8-8z"/>
    <path d="M9 12h6"/>
  </svg>`,

  'alacritty': `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 3L4 19h4l2-4h4l2 4h4L12 3z"/>
  </svg>`,

  'starship': `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2l4 4-2 7 4 4-3 1-3 4-3-4-3-1 4-4-2-7 5-4z"/>
    <circle cx="12" cy="10" r="1.5" fill="currentColor"/>
  </svg>`,

  'bat': `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="8" y1="13" x2="16" y2="13"/>
    <line x1="8" y1="17" x2="13" y2="17"/>
  </svg>`,

  'eza': `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <line x1="8" y1="6" x2="21" y2="6"/>
    <line x1="8" y1="12" x2="21" y2="12"/>
    <line x1="8" y1="18" x2="21" y2="18"/>
    <polyline points="3 6 4 7 6 5"/>
    <polyline points="3 12 4 13 6 11"/>
    <polyline points="3 18 4 19 6 17"/>
  </svg>`,

  'zoxide': `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>`,

  'fzf': `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="11" cy="11" r="7"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    <line x1="8" y1="11" x2="14" y2="11"/>
    <line x1="11" y1="8" x2="11" y2="14"/>
  </svg>`,

  'ripgrep': `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="11" cy="11" r="7"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    <path d="M8 11h6M8 8h6M8 14h4"/>
  </svg>`,

  'jq': `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M8 3H6a2 2 0 00-2 2v4a2 2 0 01-2 2 2 2 0 012 2v4a2 2 0 002 2h2"/>
    <path d="M16 3h2a2 2 0 012 2v4a2 2 0 002 2 2 2 0 00-2 2v4a2 2 0 01-2 2h-2"/>
  </svg>`,

  'gh': `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="currentColor">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
  </svg>`,

  'btop': `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
  </svg>`,

  'orbstack': `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8">
    <circle cx="12" cy="12" r="8"/>
    <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(-30 12 12)"/>
  </svg>`,

  'docker': `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 13h16a8 8 0 01-16 0z"/>
    <rect x="7" y="9" width="3" height="3" rx="0.5"/>
    <rect x="11" y="9" width="3" height="3" rx="0.5"/>
    <rect x="15" y="9" width="3" height="3" rx="0.5"/>
    <rect x="11" y="5" width="3" height="3" rx="0.5"/>
    <circle cx="19" cy="11.5" r="0.7" fill="currentColor"/>
  </svg>`,

  'tableplus': `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="4" width="18" height="16" rx="2"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
    <line x1="10" y1="10" x2="10" y2="20"/>
  </svg>`,

  'bruno': `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="7"/>
    <path d="M12 9v6M9 12h6"/>
    <circle cx="8" cy="7" r="1.5"/>
    <circle cx="16" cy="7" r="1.5"/>
  </svg>`,

  'chrome': `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8">
    <circle cx="12" cy="12" r="8"/>
    <circle cx="12" cy="12" r="3"/>
    <line x1="12" y1="4" x2="12" y2="9"/>
    <line x1="19" y1="16" x2="14.6" y2="13.5"/>
    <line x1="5" y1="16" x2="9.4" y2="13.5"/>
  </svg>`,

  'arc': `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
    <path d="M4 17a8 8 0 1116 0"/>
    <circle cx="12" cy="17" r="2"/>
  </svg>`,

  'raycast': `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <polygon points="12 2 15 8 22 9 17 14 18 21 12 18 6 21 7 14 2 9 9 8 12 2"/>
  </svg>`,

  'rectangle': `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="4" width="18" height="16" rx="2"/>
    <line x1="12" y1="4" x2="12" y2="20"/>
  </svg>`,

  // macOS Developer Tweaks
  'tweak-finder-hidden': `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>`,

  'tweak-finder-ext': `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <path d="M9 15h6M12 12v6"/>
  </svg>`,

  'tweak-finder-path': `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/>
    <line x1="8" y1="13" x2="16" y2="13"/>
  </svg>`,

  'tweak-key-repeat': `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="6" width="20" height="12" rx="2"/>
    <line x1="6" y1="10" x2="6" y2="10.01"/>
    <line x1="10" y1="10" x2="10" y2="10.01"/>
    <line x1="14" y1="10" x2="14" y2="10.01"/>
    <line x1="18" y1="10" x2="18" y2="10.01"/>
    <line x1="8" y1="14" x2="16" y2="14"/>
  </svg>`,

  'tweak-press-and-hold': `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>`,

  'tweak-dock-speed': `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="9"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>`,

  // Category Stroke Icons (Clean minimalist Lucide-style)
  'category-editors': `<svg viewBox="0 0 24 24" class="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
  </svg>`,

  'category-languages': `<svg viewBox="0 0 24 24" class="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2"/>
    <rect x="9" y="9" width="6" height="6"/>
    <line x1="9" y1="1" x2="9" y2="4"/>
    <line x1="15" y1="1" x2="15" y2="4"/>
    <line x1="9" y1="20" x2="9" y2="23"/>
    <line x1="15" y1="20" x2="15" y2="23"/>
    <line x1="20" y1="9" x2="23" y2="9"/>
    <line x1="20" y1="14" x2="23" y2="14"/>
    <line x1="1" y1="9" x2="4" y2="9"/>
    <line x1="1" y1="14" x2="4" y2="14"/>
  </svg>`,

  'category-terminals': `<svg viewBox="0 0 24 24" class="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="4 17 10 11 4 5"/>
    <line x1="12" y1="19" x2="20" y2="19"/>
  </svg>`,

  'category-cli': `<svg viewBox="0 0 24 24" class="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
  </svg>`,

  'category-containers': `<svg viewBox="0 0 24 24" class="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
    <line x1="12" y1="22.08" x2="12" y2="12"/>
  </svg>`,

  'category-apps': `<svg viewBox="0 0 24 24" class="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <line x1="3" y1="9" x2="21" y2="9"/>
    <line x1="9" y1="21" x2="9" y2="9"/>
  </svg>`,

  'category-tweaks': `<svg viewBox="0 0 24 24" class="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="4" y1="21" x2="4" y2="14"/>
    <line x1="4" y1="10" x2="4" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="12"/>
    <line x1="12" y1="8" x2="12" y2="3"/>
    <line x1="20" y1="21" x2="20" y2="16"/>
    <line x1="20" y1="12" x2="20" y2="3"/>
    <line x1="1" y1="14" x2="7" y2="14"/>
    <line x1="9" y1="8" x2="15" y2="8"/>
    <line x1="17" y1="16" x2="23" y2="16"/>
  </svg>`,

  'category-ai': `<svg viewBox="0 0 24 24" class="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>`,

  'ollama': `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="8"/>
    <circle cx="9" cy="11" r="1.2" fill="currentColor"/>
    <circle cx="15" cy="11" r="1.2" fill="currentColor"/>
    <path d="M9 15c1 1 5 1 6 0"/>
    <path d="M8 4l2 3M16 4l-2 3"/>
  </svg>`,

  'aider': `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="4 17 10 11 4 5"/>
    <line x1="12" y1="19" x2="20" y2="19"/>
    <path d="M14 6l3 3 4-4"/>
  </svg>`,

  'lm-studio': `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>`,

  'jan': `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <rect x="4" y="6" width="16" height="12" rx="3"/>
    <circle cx="9" cy="12" r="1.5" fill="currentColor"/>
    <circle cx="15" cy="12" r="1.5" fill="currentColor"/>
    <path d="M12 2v4M2 12h2M20 12h2"/>
  </svg>`,

  'chatgpt': `<svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 3a4 4 0 00-3.6 2.3 4 4 0 00-4.1 2.2 4 4 0 00.5 4.7 4 4 0 00-.5 4.7 4 4 0 004.1 2.2 4 4 0 003.6 2.3 4 4 0 003.6-2.3 4 4 0 004.1-2.2 4 4 0 00-.5-4.7 4 4 0 00.5-4.7 4 4 0 00-4.1-2.2A4 4 0 0012 3z"/>
  </svg>`,

  // Default fallback icon
  'default': `<svg viewBox="0 0 24 24" class="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>`
};

// Helper function to get an icon
function getIcon(id) {
  return ICONS[id] || ICONS['default'];
}
