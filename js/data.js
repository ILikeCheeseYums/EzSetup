// EzSetup Catalog Data (Plain Objects & Arrays - No Classes)

const CATEGORIES = [
  { id: 'editors', name: 'Code Editors & IDEs', iconKey: 'category-editors' },
  { id: 'languages', name: 'Languages & Runtimes', iconKey: 'category-languages' },
  { id: 'terminals', name: 'Terminals & Shell', iconKey: 'category-terminals' },
  { id: 'cli', name: 'Modern CLI Utils', iconKey: 'category-cli' },
  { id: 'containers', name: 'Containers & Databases', iconKey: 'category-containers' },
  { id: 'apps', name: 'Productivity & Browsers', iconKey: 'category-apps' },
  { id: 'tweaks', name: 'macOS Developer Defaults', iconKey: 'category-tweaks' }
];

const ITEMS = [
  // Code Editors
  {
    id: 'vscode',
    name: 'Visual Studio Code',
    category: 'editors',
    desc: "Microsoft's popular extensible code editor with huge plugin ecosystem",
    type: 'cask',
    brewPackage: 'visual-studio-code',
    tags: ['GUI', 'Editor', 'Microsoft']
  },
  {
    id: 'cursor',
    name: 'Cursor',
    category: 'editors',
    desc: 'AI-first code editor fork of VS Code with smart completions & agent mode',
    type: 'cask',
    brewPackage: 'cursor',
    tags: ['GUI', 'Editor', 'AI']
  },
  {
    id: 'zed',
    name: 'Zed',
    category: 'editors',
    desc: 'High-performance, multiplayer code editor written in Rust with GPU rendering',
    type: 'cask',
    brewPackage: 'zed',
    tags: ['GUI', 'Editor', 'Rust', 'GPU']
  },
  {
    id: 'neovim',
    name: 'Neovim',
    category: 'editors',
    desc: 'Hyperextensible Vim-based text editor built for speed and Lua plugins',
    type: 'brew',
    brewPackage: 'neovim',
    tags: ['CLI', 'Editor', 'Vim', 'Lua']
  },
  {
    id: 'jetbrains-toolbox',
    name: 'JetBrains Toolbox',
    category: 'editors',
    desc: 'Launcher and updater for IntelliJ, WebStorm, PyCharm, and Android Studio',
    type: 'cask',
    brewPackage: 'jetbrains-toolbox',
    tags: ['GUI', 'Launcher', 'JetBrains']
  },

  // Languages & Runtimes
  {
    id: 'fnm',
    name: 'fnm (Fast Node Manager)',
    category: 'languages',
    desc: 'Ultra-fast Node.js version manager built in Rust (modern nvm alternative)',
    type: 'brew',
    brewPackage: 'fnm',
    tags: ['CLI', 'Node', 'Runtime', 'Rust']
  },
  {
    id: 'pnpm',
    name: 'pnpm',
    category: 'languages',
    desc: 'Fast, disk space efficient package manager using hard links',
    type: 'brew',
    brewPackage: 'pnpm',
    tags: ['CLI', 'Package Manager', 'Fast']
  },
  {
    id: 'bun',
    name: 'Bun',
    category: 'languages',
    desc: 'Incredibly fast all-in-one JavaScript runtime, bundler, and package manager',
    type: 'brew',
    brewPackage: 'oven-sh/bun/bun',
    tags: ['CLI', 'Runtime', 'JS/TS', 'Fast']
  },
  {
    id: 'uv',
    name: 'uv (Fast Python Manager)',
    category: 'languages',
    desc: 'Extremely fast Python package and version manager written in Rust',
    type: 'brew',
    brewPackage: 'uv',
    tags: ['CLI', 'Python', 'Rust', 'Astral']
  },
  {
    id: 'rustup',
    name: 'Rust (rustup)',
    category: 'languages',
    desc: 'The official installer and toolchain manager for Rust and cargo',
    type: 'brew',
    brewPackage: 'rustup-init',
    tags: ['CLI', 'Toolchain', 'Rust', 'Cargo']
  },
  {
    id: 'go',
    name: 'Go',
    category: 'languages',
    desc: 'Open-source programming language by Google built for simplicity and scale',
    type: 'brew',
    brewPackage: 'go',
    tags: ['CLI', 'Compiler', 'Google', 'Go']
  },

  // Terminals & Shell
  {
    id: 'ghostty',
    name: 'Ghostty',
    category: 'terminals',
    desc: 'Fast, native, GPU-accelerated terminal emulator designed by Mitchell Hashimoto',
    type: 'cask',
    brewPackage: 'ghostty',
    tags: ['GUI', 'Terminal', 'GPU', 'Native']
  },
  {
    id: 'iterm2',
    name: 'iTerm2',
    category: 'terminals',
    desc: 'Battle-tested macOS terminal replacement with split panes and search',
    type: 'cask',
    brewPackage: 'iterm2',
    tags: ['GUI', 'Terminal', 'macOS']
  },
  {
    id: 'warp',
    name: 'Warp Terminal',
    category: 'terminals',
    desc: 'Modern Rust-based terminal with IDE-style block commands and AI assist',
    type: 'cask',
    brewPackage: 'warp',
    tags: ['GUI', 'Terminal', 'AI', 'Rust']
  },
  {
    id: 'alacritty',
    name: 'Alacritty',
    category: 'terminals',
    desc: 'Cross-platform, GPU-accelerated minimalist terminal emulator',
    type: 'cask',
    brewPackage: 'alacritty',
    tags: ['GUI', 'Terminal', 'Rust', 'Minimal']
  },
  {
    id: 'starship',
    name: 'Starship Prompt',
    category: 'terminals',
    desc: 'Blazingly fast, customizable cross-shell prompt showing git and runtime info',
    type: 'brew',
    brewPackage: 'starship',
    tags: ['CLI', 'Prompt', 'Rust', 'Zsh']
  },

  // Modern CLI Utils
  {
    id: 'bat',
    name: 'bat',
    category: 'cli',
    desc: 'A modern cat clone with syntax highlighting and git modifications',
    type: 'brew',
    brewPackage: 'bat',
    tags: ['CLI', 'Syntax', 'Rust']
  },
  {
    id: 'eza',
    name: 'eza',
    category: 'cli',
    desc: 'Modern replacement for ls with colors, file icons, and git status',
    type: 'brew',
    brewPackage: 'eza',
    tags: ['CLI', 'Files', 'Rust']
  },
  {
    id: 'zoxide',
    name: 'zoxide',
    category: 'cli',
    desc: 'Smarter cd command that learns your most frequent directories',
    type: 'brew',
    brewPackage: 'zoxide',
    tags: ['CLI', 'Navigation', 'Rust']
  },
  {
    id: 'fzf',
    name: 'fzf',
    category: 'cli',
    desc: 'General-purpose command-line fuzzy finder for files, history, and git',
    type: 'brew',
    brewPackage: 'fzf',
    tags: ['CLI', 'Search', 'Go']
  },
  {
    id: 'ripgrep',
    name: 'ripgrep (rg)',
    category: 'cli',
    desc: 'Ultra-fast line-oriented search tool that respects your .gitignore',
    type: 'brew',
    brewPackage: 'ripgrep',
    tags: ['CLI', 'Search', 'Rust', 'Fast']
  },
  {
    id: 'jq',
    name: 'jq',
    category: 'cli',
    desc: 'Flexible and lightweight command-line JSON processor',
    type: 'brew',
    brewPackage: 'jq',
    tags: ['CLI', 'JSON', 'Parser']
  },
  {
    id: 'gh',
    name: 'GitHub CLI (gh)',
    category: 'cli',
    desc: "Take GitHub to your command line: PRs, issues, and repos",
    type: 'brew',
    brewPackage: 'gh',
    tags: ['CLI', 'GitHub', 'Git', 'Go']
  },
  {
    id: 'btop',
    name: 'btop',
    category: 'cli',
    desc: 'Aesthetic resource monitor showing CPU, memory, disk, and process stats',
    type: 'brew',
    brewPackage: 'btop',
    tags: ['CLI', 'Monitor', 'Performance']
  },

  // Containers & Databases
  {
    id: 'orbstack',
    name: 'OrbStack',
    category: 'containers',
    desc: 'Fast, ultra-lightweight Mac alternative to Docker Desktop with instant startup',
    type: 'cask',
    brewPackage: 'orbstack',
    tags: ['GUI', 'Docker', 'Containers', 'Fast']
  },
  {
    id: 'docker',
    name: 'Docker Desktop',
    category: 'containers',
    desc: 'Standard Docker environment for building and running containers',
    type: 'cask',
    brewPackage: 'docker',
    tags: ['GUI', 'Docker', 'Containers']
  },
  {
    id: 'tableplus',
    name: 'TablePlus',
    category: 'containers',
    desc: 'Modern, native GUI client for PostgreSQL, MySQL, SQLite, and Redis',
    type: 'cask',
    brewPackage: 'tableplus',
    tags: ['GUI', 'Database', 'SQL', 'Native']
  },
  {
    id: 'bruno',
    name: 'Bruno',
    category: 'containers',
    desc: 'Fast, open-source, Git-friendly API client (lightweight Postman alternative)',
    type: 'cask',
    brewPackage: 'bruno',
    tags: ['GUI', 'API', 'Git-Friendly', 'Open Source']
  },

  // Productivity & Browsers
  {
    id: 'chrome',
    name: 'Google Chrome',
    category: 'apps',
    desc: 'Fast, standard web browser with essential DevTools',
    type: 'cask',
    brewPackage: 'google-chrome',
    tags: ['GUI', 'Browser', 'DevTools']
  },
  {
    id: 'arc',
    name: 'Arc Browser',
    category: 'apps',
    desc: 'Innovative browser designed for focused multitasking and spaces',
    type: 'cask',
    brewPackage: 'arc',
    tags: ['GUI', 'Browser', 'Productivity']
  },
  {
    id: 'raycast',
    name: 'Raycast',
    category: 'apps',
    desc: 'Blazingly fast, extensible replacement for macOS Spotlight',
    type: 'cask',
    brewPackage: 'raycast',
    tags: ['GUI', 'Spotlight', 'Productivity']
  },
  {
    id: 'rectangle',
    name: 'Rectangle',
    category: 'apps',
    desc: 'Lightweight window manager with keyboard shortcuts (Magnet alternative)',
    type: 'cask',
    brewPackage: 'rectangle',
    tags: ['GUI', 'Window Manager', 'macOS']
  },

  // macOS Developer Defaults
  {
    id: 'tweak-finder-hidden',
    name: 'Show Hidden Files in Finder',
    category: 'tweaks',
    desc: 'Makes dotfiles (.git, .env, .zshrc) visible in Finder windows',
    type: 'tweak',
    tags: ['System', 'Finder', 'Dotfiles'],
    tweakCommands: [
      'defaults write com.apple.finder AppleShowAllFiles -bool true'
    ]
  },
  {
    id: 'tweak-finder-ext',
    name: 'Show All File Extensions',
    category: 'tweaks',
    desc: 'Always displays filename extensions (.ts, .py, .json) in Finder',
    type: 'tweak',
    tags: ['System', 'Finder', 'Files'],
    tweakCommands: [
      'defaults write NSGlobalDomain AppleShowAllExtensions -bool true'
    ]
  },
  {
    id: 'tweak-finder-path',
    name: 'Show Path Bar in Finder',
    category: 'tweaks',
    desc: 'Displays the full directory path breadcrumb at the bottom of Finder',
    type: 'tweak',
    tags: ['System', 'Finder', 'Breadcrumb'],
    tweakCommands: [
      'defaults write com.apple.finder ShowPathbar -bool true'
    ]
  },
  {
    id: 'tweak-key-repeat',
    name: 'Fast Key Repeat Rate',
    category: 'tweaks',
    desc: 'Accelerates key repeat speed for coding, navigation, and Vim',
    type: 'tweak',
    tags: ['System', 'Keyboard', 'Speed'],
    tweakCommands: [
      'defaults write NSGlobalDomain KeyRepeat -int 2',
      'defaults write NSGlobalDomain InitialKeyRepeat -int 15'
    ]
  },
  {
    id: 'tweak-press-and-hold',
    name: 'Disable Press-and-Hold for Keys',
    category: 'tweaks',
    desc: 'Allows holding down keys (h/j/k/l) to repeat rather than showing accented letters',
    type: 'tweak',
    tags: ['System', 'Keyboard', 'Vim'],
    tweakCommands: [
      'defaults write NSGlobalDomain ApplePressAndHoldEnabled -bool false'
    ]
  },
  {
    id: 'tweak-dock-speed',
    name: 'Instant Dock Auto-Hide',
    category: 'tweaks',
    desc: 'Removes the delay and speeds up the animation when auto-hiding the macOS Dock',
    type: 'tweak',
    tags: ['System', 'Dock', 'Animation'],
    tweakCommands: [
      'defaults write com.apple.dock autohide-time-modifier -float 0.15',
      'defaults write com.apple.dock autohide-delay -float 0'
    ]
  }
];
