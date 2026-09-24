// EzSetup Catalog Data (Plain Objects & Arrays - No Classes)

const CATEGORIES = [
  { id: 'editors', name: 'Code Editors & IDEs', icon: '📝' },
  { id: 'languages', name: 'Languages & Runtimes', icon: '☕' },
  { id: 'terminals', name: 'Terminals & Shell', icon: '📟' },
  { id: 'cli', name: 'Modern CLI Utils', icon: '🛠️' },
  { id: 'containers', name: 'Containers & DBs', icon: '🐳' },
  { id: 'apps', name: 'Productivity & Browsers', icon: '🌐' },
  { id: 'tweaks', name: 'macOS Dev Defaults', icon: '🍎' }
];

const PRESETS = [
  {
    id: 'frontend',
    name: 'Frontend Web',
    desc: 'VS Code, fnm (Node), pnpm, Chrome, Starship',
    itemIds: ['vscode', 'fnm', 'pnpm', 'chrome', 'starship', 'tweak-finder-hidden', 'tweak-key-repeat']
  },
  {
    id: 'fullstack',
    name: 'Full-Stack Web',
    desc: 'VS Code, fnm, uv (Python), OrbStack, TablePlus, Bruno',
    itemIds: ['vscode', 'fnm', 'pnpm', 'uv', 'orbstack', 'tableplus', 'bruno', 'starship', 'zoxide', 'eza', 'bat', 'tweak-finder-hidden', 'tweak-key-repeat']
  },
  {
    id: 'python_ai',
    name: 'Python & AI',
    desc: 'VS Code, uv (Python), Ghostty, btop, jq',
    itemIds: ['vscode', 'uv', 'ghostty', 'starship', 'btop', 'jq', 'tweak-finder-hidden', 'tweak-key-repeat']
  },
  {
    id: 'rust_systems',
    name: 'Systems & Rust',
    desc: 'Zed, Neovim, Rustup, Go, Ghostty, ripgrep, fzf',
    itemIds: ['zed', 'neovim', 'rustup', 'go', 'ghostty', 'ripgrep', 'fzf', 'bat', 'eza', 'tweak-finder-hidden', 'tweak-key-repeat']
  },
  {
    id: 'terminal_pro',
    name: 'Terminal Wizard',
    desc: 'Ghostty, Starship, bat, eza, zoxide, fzf, ripgrep, btop',
    itemIds: ['ghostty', 'starship', 'bat', 'eza', 'zoxide', 'fzf', 'ripgrep', 'jq', 'gh', 'btop', 'tweak-finder-hidden', 'tweak-key-repeat', 'tweak-press-and-hold']
  }
];

const ITEMS = [
  // Code Editors
  {
    id: 'vscode',
    name: 'Visual Studio Code',
    category: 'editors',
    desc: "Microsoft's popular extensible code editor with huge plugin ecosystem",
    type: 'cask',
    brewPackage: 'visual-studio-code'
  },
  {
    id: 'cursor',
    name: 'Cursor',
    category: 'editors',
    desc: 'AI-first code editor fork of VS Code with smart completions & agent mode',
    type: 'cask',
    brewPackage: 'cursor'
  },
  {
    id: 'zed',
    name: 'Zed',
    category: 'editors',
    desc: 'High-performance, multiplayer code editor written in Rust with GPU rendering',
    type: 'cask',
    brewPackage: 'zed'
  },
  {
    id: 'neovim',
    name: 'Neovim',
    category: 'editors',
    desc: 'Hyperextensible Vim-based text editor built for speed and Lua plugins',
    type: 'brew',
    brewPackage: 'neovim'
  },
  {
    id: 'jetbrains-toolbox',
    name: 'JetBrains Toolbox',
    category: 'editors',
    desc: 'Launcher and updater for IntelliJ, WebStorm, PyCharm, and Android Studio',
    type: 'cask',
    brewPackage: 'jetbrains-toolbox'
  },

  // Languages & Runtimes
  {
    id: 'fnm',
    name: 'fnm (Fast Node Manager)',
    category: 'languages',
    desc: 'Ultra-fast Node.js version manager built in Rust (modern nvm alternative)',
    type: 'brew',
    brewPackage: 'fnm'
  },
  {
    id: 'pnpm',
    name: 'pnpm',
    category: 'languages',
    desc: 'Fast, disk space efficient package manager using hard links',
    type: 'brew',
    brewPackage: 'pnpm'
  },
  {
    id: 'bun',
    name: 'Bun',
    category: 'languages',
    desc: 'Incredibly fast all-in-one JavaScript runtime, bundler, and package manager',
    type: 'brew',
    brewPackage: 'oven-sh/bun/bun'
  },
  {
    id: 'uv',
    name: 'uv (Fast Python Manager)',
    category: 'languages',
    desc: 'Extremely fast Python package and version manager written in Rust',
    type: 'brew',
    brewPackage: 'uv'
  },
  {
    id: 'rustup',
    name: 'Rust (rustup)',
    category: 'languages',
    desc: 'The official installer and toolchain manager for Rust and cargo',
    type: 'brew',
    brewPackage: 'rustup-init'
  },
  {
    id: 'go',
    name: 'Go',
    category: 'languages',
    desc: 'Open-source programming language by Google built for simplicity and scale',
    type: 'brew',
    brewPackage: 'go'
  },

  // Terminals & Shell
  {
    id: 'ghostty',
    name: 'Ghostty',
    category: 'terminals',
    desc: 'Fast, native, GPU-accelerated terminal emulator designed by Mitchell Hashimoto',
    type: 'cask',
    brewPackage: 'ghostty'
  },
  {
    id: 'iterm2',
    name: 'iTerm2',
    category: 'terminals',
    desc: 'Battle-tested macOS terminal replacement with split panes and search',
    type: 'cask',
    brewPackage: 'iterm2'
  },
  {
    id: 'warp',
    name: 'Warp Terminal',
    category: 'terminals',
    desc: 'Modern Rust-based terminal with IDE-style block commands and AI assist',
    type: 'cask',
    brewPackage: 'warp'
  },
  {
    id: 'alacritty',
    name: 'Alacritty',
    category: 'terminals',
    desc: 'Cross-platform, GPU-accelerated minimalist terminal emulator',
    type: 'cask',
    brewPackage: 'alacritty'
  },
  {
    id: 'starship',
    name: 'Starship Prompt',
    category: 'terminals',
    desc: 'Blazingly fast, customizable cross-shell prompt showing git and runtime info',
    type: 'brew',
    brewPackage: 'starship'
  },

  // Modern CLI Utils
  {
    id: 'bat',
    name: 'bat',
    category: 'cli',
    desc: 'A modern cat clone with syntax highlighting and git modifications',
    type: 'brew',
    brewPackage: 'bat'
  },
  {
    id: 'eza',
    name: 'eza',
    category: 'cli',
    desc: 'Modern replacement for ls with colors, file icons, and git status',
    type: 'brew',
    brewPackage: 'eza'
  },
  {
    id: 'zoxide',
    name: 'zoxide',
    category: 'cli',
    desc: 'Smarter cd command that learns your most frequent directories',
    type: 'brew',
    brewPackage: 'zoxide'
  },
  {
    id: 'fzf',
    name: 'fzf',
    category: 'cli',
    desc: 'General-purpose command-line fuzzy finder for files, history, and git',
    type: 'brew',
    brewPackage: 'fzf'
  },
  {
    id: 'ripgrep',
    name: 'ripgrep (rg)',
    category: 'cli',
    desc: 'Ultra-fast line-oriented search tool that respects your .gitignore',
    type: 'brew',
    brewPackage: 'ripgrep'
  },
  {
    id: 'jq',
    name: 'jq',
    category: 'cli',
    desc: 'Flexible and lightweight command-line JSON processor',
    type: 'brew',
    brewPackage: 'jq'
  },
  {
    id: 'gh',
    name: 'GitHub CLI (gh)',
    category: 'cli',
    desc: "Take GitHub to your command line: PRs, issues, and repos",
    type: 'brew',
    brewPackage: 'gh'
  },
  {
    id: 'btop',
    name: 'btop',
    category: 'cli',
    desc: 'Aesthetic resource monitor showing CPU, memory, disk, and process stats',
    type: 'brew',
    brewPackage: 'btop'
  },

  // Containers & Databases
  {
    id: 'orbstack',
    name: 'OrbStack',
    category: 'containers',
    desc: 'Fast, ultra-lightweight Mac alternative to Docker Desktop with instant startup',
    type: 'cask',
    brewPackage: 'orbstack'
  },
  {
    id: 'docker',
    name: 'Docker Desktop',
    category: 'containers',
    desc: 'Standard Docker environment for building and running containers',
    type: 'cask',
    brewPackage: 'docker'
  },
  {
    id: 'tableplus',
    name: 'TablePlus',
    category: 'containers',
    desc: 'Modern, native GUI client for PostgreSQL, MySQL, SQLite, and Redis',
    type: 'cask',
    brewPackage: 'tableplus'
  },
  {
    id: 'bruno',
    name: 'Bruno',
    category: 'containers',
    desc: 'Fast, open-source, Git-friendly API client (lightweight Postman alternative)',
    type: 'cask',
    brewPackage: 'bruno'
  },

  // Productivity & Browsers
  {
    id: 'chrome',
    name: 'Google Chrome',
    category: 'apps',
    desc: 'Fast, standard web browser with essential DevTools',
    type: 'cask',
    brewPackage: 'google-chrome'
  },
  {
    id: 'arc',
    name: 'Arc Browser',
    category: 'apps',
    desc: 'Innovative browser designed for focused multitasking and spaces',
    type: 'cask',
    brewPackage: 'arc'
  },
  {
    id: 'raycast',
    name: 'Raycast',
    category: 'apps',
    desc: 'Blazingly fast, extensible replacement for macOS Spotlight',
    type: 'cask',
    brewPackage: 'raycast'
  },
  {
    id: 'rectangle',
    name: 'Rectangle',
    category: 'apps',
    desc: 'Lightweight window manager with keyboard shortcuts (Magnet alternative)',
    type: 'cask',
    brewPackage: 'rectangle'
  },

  // macOS Dev Defaults
  {
    id: 'tweak-finder-hidden',
    name: 'Show Hidden Files in Finder',
    category: 'tweaks',
    desc: 'Makes dotfiles (.git, .env, .zshrc) visible in Finder windows',
    type: 'tweak',
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
    tweakCommands: [
      'defaults write com.apple.dock autohide-time-modifier -float 0.15',
      'defaults write com.apple.dock autohide-delay -float 0'
    ]
  }
];
