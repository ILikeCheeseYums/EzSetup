// EzSetup Catalog Data (Plain Objects & Arrays - No Classes)

const CATEGORIES = [
  { id: 'editors', name: 'Code Editors & IDEs', shortName: 'Editors', iconKey: 'category-editors' },
  { id: 'languages', name: 'Languages & Runtimes', shortName: 'Languages', iconKey: 'category-languages' },
  { id: 'terminals', name: 'Terminals & Shell', shortName: 'Terminals', iconKey: 'category-terminals' },
  { id: 'cli', name: 'Modern CLI Utils', shortName: 'CLI', iconKey: 'category-cli' },
  { id: 'ai', name: 'AI Agents & LLMs', shortName: 'AI Agents', iconKey: 'category-ai' },
  { id: 'containers', name: 'Containers & Databases', shortName: 'Containers', iconKey: 'category-containers' },
  { id: 'apps', name: 'Productivity & Apps', shortName: 'Apps', iconKey: 'category-apps' },
  { id: 'tweaks', name: 'macOS Defaults', shortName: 'macOS', iconKey: 'category-tweaks' }
];

// Helper to find category by ID
function getCategoryById(catId) {
  return CATEGORIES.find(c => c.id === catId);
}

const ITEMS = [
  // Code Editors
  {
    id: 'vscode',
    name: 'Visual Studio Code',
    primaryCategory: 'editors',
    categories: ['editors', 'apps'],
    desc: "Microsoft's popular extensible code editor with huge plugin ecosystem",
    type: 'cask',
    brewPackage: 'visual-studio-code'
  },
  {
    id: 'cursor',
    name: 'Cursor',
    primaryCategory: 'editors',
    categories: ['editors', 'apps', 'ai'],
    desc: 'AI-first code editor fork of VS Code with smart completions & agent mode',
    type: 'cask',
    brewPackage: 'cursor'
  },
  {
    id: 'zed',
    name: 'Zed',
    primaryCategory: 'editors',
    categories: ['editors', 'apps'],
    desc: 'High-performance, multiplayer code editor written in Rust with GPU rendering',
    type: 'cask',
    brewPackage: 'zed'
  },
  {
    id: 'neovim',
    name: 'Neovim',
    primaryCategory: 'editors',
    categories: ['editors', 'cli'],
    desc: 'Hyperextensible Vim-based text editor built for speed and Lua plugins',
    type: 'brew',
    brewPackage: 'neovim'
  },
  {
    id: 'jetbrains-toolbox',
    name: 'JetBrains Toolbox',
    primaryCategory: 'editors',
    categories: ['editors', 'apps'],
    desc: 'Launcher and updater for IntelliJ, WebStorm, PyCharm, and Android Studio',
    type: 'cask',
    brewPackage: 'jetbrains-toolbox'
  },

  // Languages & Runtimes
  {
    id: 'fnm',
    name: 'fnm (Fast Node Manager)',
    primaryCategory: 'languages',
    categories: ['languages', 'cli'],
    desc: 'Ultra-fast Node.js version manager built in Rust (modern nvm alternative)',
    type: 'brew',
    brewPackage: 'fnm'
  },
  {
    id: 'pnpm',
    name: 'pnpm',
    primaryCategory: 'languages',
    categories: ['languages', 'cli'],
    desc: 'Fast, disk space efficient package manager using hard links',
    type: 'brew',
    brewPackage: 'pnpm'
  },
  {
    id: 'bun',
    name: 'Bun',
    primaryCategory: 'languages',
    categories: ['languages', 'cli'],
    desc: 'Incredibly fast all-in-one JavaScript runtime, bundler, and package manager',
    type: 'brew',
    brewPackage: 'oven-sh/bun/bun'
  },
  {
    id: 'uv',
    name: 'uv (Fast Python Manager)',
    primaryCategory: 'languages',
    categories: ['languages', 'cli'],
    desc: 'Extremely fast Python package and version manager written in Rust',
    type: 'brew',
    brewPackage: 'uv'
  },
  {
    id: 'rustup',
    name: 'Rust (rustup)',
    primaryCategory: 'languages',
    categories: ['languages', 'cli'],
    desc: 'The official installer and toolchain manager for Rust and cargo',
    type: 'brew',
    brewPackage: 'rustup-init'
  },
  {
    id: 'go',
    name: 'Go',
    primaryCategory: 'languages',
    categories: ['languages', 'cli'],
    desc: 'Open-source programming language by Google built for simplicity and scale',
    type: 'brew',
    brewPackage: 'go'
  },

  // Terminals & Shell
  {
    id: 'ghostty',
    name: 'Ghostty',
    primaryCategory: 'terminals',
    categories: ['terminals', 'apps'],
    desc: 'Fast, native, GPU-accelerated terminal emulator designed by Mitchell Hashimoto',
    type: 'cask',
    brewPackage: 'ghostty'
  },
  {
    id: 'iterm2',
    name: 'iTerm2',
    primaryCategory: 'terminals',
    categories: ['terminals', 'apps'],
    desc: 'Battle-tested macOS terminal replacement with split panes and search',
    type: 'cask',
    brewPackage: 'iterm2'
  },
  {
    id: 'warp',
    name: 'Warp Terminal',
    primaryCategory: 'terminals',
    categories: ['terminals', 'apps', 'ai'],
    desc: 'Modern Rust-based terminal with IDE-style block commands and AI assist',
    type: 'cask',
    brewPackage: 'warp'
  },
  {
    id: 'alacritty',
    name: 'Alacritty',
    primaryCategory: 'terminals',
    categories: ['terminals', 'apps'],
    desc: 'Cross-platform, GPU-accelerated minimalist terminal emulator',
    type: 'cask',
    brewPackage: 'alacritty'
  },
  {
    id: 'starship',
    name: 'Starship Prompt',
    primaryCategory: 'terminals',
    categories: ['terminals', 'cli'],
    desc: 'Blazingly fast, customizable cross-shell prompt showing git and runtime info',
    type: 'brew',
    brewPackage: 'starship'
  },

  // Modern CLI Utils
  {
    id: 'bat',
    name: 'bat',
    primaryCategory: 'cli',
    categories: ['cli'],
    desc: 'A modern cat clone with syntax highlighting and git modifications',
    type: 'brew',
    brewPackage: 'bat'
  },
  {
    id: 'eza',
    name: 'eza',
    primaryCategory: 'cli',
    categories: ['cli'],
    desc: 'Modern replacement for ls with colors, file icons, and git status',
    type: 'brew',
    brewPackage: 'eza'
  },
  {
    id: 'zoxide',
    name: 'zoxide',
    primaryCategory: 'cli',
    categories: ['cli'],
    desc: 'Smarter cd command that learns your most frequent directories',
    type: 'brew',
    brewPackage: 'zoxide'
  },
  {
    id: 'fzf',
    name: 'fzf',
    primaryCategory: 'cli',
    categories: ['cli'],
    desc: 'General-purpose command-line fuzzy finder for files, history, and git',
    type: 'brew',
    brewPackage: 'fzf'
  },
  {
    id: 'ripgrep',
    name: 'ripgrep (rg)',
    primaryCategory: 'cli',
    categories: ['cli'],
    desc: 'Ultra-fast line-oriented search tool that respects your .gitignore',
    type: 'brew',
    brewPackage: 'ripgrep'
  },
  {
    id: 'jq',
    name: 'jq',
    primaryCategory: 'cli',
    categories: ['cli'],
    desc: 'Flexible and lightweight command-line JSON processor',
    type: 'brew',
    brewPackage: 'jq'
  },
  {
    id: 'gh',
    name: 'GitHub CLI (gh)',
    primaryCategory: 'cli',
    categories: ['cli'],
    desc: "Take GitHub to your command line: PRs, issues, and repos",
    type: 'brew',
    brewPackage: 'gh'
  },
  {
    id: 'btop',
    name: 'btop',
    primaryCategory: 'cli',
    categories: ['cli'],
    desc: 'Aesthetic resource monitor showing CPU, memory, disk, and process stats',
    type: 'brew',
    brewPackage: 'btop'
  },

  // AI Agents & LLMs
  {
    id: 'ollama',
    name: 'Ollama',
    primaryCategory: 'ai',
    categories: ['ai', 'cli'],
    desc: 'Run Llama 3, DeepSeek, and Mistral models locally with Apple Silicon Metal acceleration',
    type: 'brew',
    brewPackage: 'ollama'
  },
  {
    id: 'aider',
    name: 'Aider',
    primaryCategory: 'ai',
    categories: ['ai', 'cli'],
    desc: 'AI pair programming terminal agent that coordinates git commits and multi-file edits',
    type: 'brew',
    brewPackage: 'aider'
  },
  {
    id: 'lm-studio',
    name: 'LM Studio',
    primaryCategory: 'ai',
    categories: ['ai', 'apps'],
    desc: 'Discover, download, and experiment with local LLMs on your Mac via a native GUI',
    type: 'cask',
    brewPackage: 'lm-studio'
  },
  {
    id: 'jan',
    name: 'Jan',
    primaryCategory: 'ai',
    categories: ['ai', 'apps'],
    desc: 'Open-source desktop AI assistant and local LLM runner working 100% offline',
    type: 'cask',
    brewPackage: 'jan'
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT Desktop',
    primaryCategory: 'ai',
    categories: ['ai', 'apps'],
    desc: 'Official OpenAI ChatGPT desktop application with macOS system shortcut integration',
    type: 'cask',
    brewPackage: 'chatgpt'
  },

  // Containers & Databases
  {
    id: 'orbstack',
    name: 'OrbStack',
    primaryCategory: 'containers',
    categories: ['containers', 'apps'],
    desc: 'Fast, ultra-lightweight Mac alternative to Docker Desktop with instant startup',
    type: 'cask',
    brewPackage: 'orbstack'
  },
  {
    id: 'docker',
    name: 'Docker Desktop',
    primaryCategory: 'containers',
    categories: ['containers', 'apps'],
    desc: 'Standard Docker environment for building and running containers',
    type: 'cask',
    brewPackage: 'docker'
  },
  {
    id: 'tableplus',
    name: 'TablePlus',
    primaryCategory: 'containers',
    categories: ['containers', 'apps'],
    desc: 'Modern, native GUI client for PostgreSQL, MySQL, SQLite, and Redis',
    type: 'cask',
    brewPackage: 'tableplus'
  },
  {
    id: 'bruno',
    name: 'Bruno',
    primaryCategory: 'containers',
    categories: ['containers', 'apps'],
    desc: 'Fast, open-source, Git-friendly API client (lightweight Postman alternative)',
    type: 'cask',
    brewPackage: 'bruno'
  },

  // Productivity & Browsers
  {
    id: 'chrome',
    name: 'Google Chrome',
    primaryCategory: 'apps',
    categories: ['apps'],
    desc: 'Fast, standard web browser with essential DevTools',
    type: 'cask',
    brewPackage: 'google-chrome'
  },
  {
    id: 'arc',
    name: 'Arc Browser',
    primaryCategory: 'apps',
    categories: ['apps'],
    desc: 'Innovative browser designed for focused multitasking and spaces',
    type: 'cask',
    brewPackage: 'arc'
  },
  {
    id: 'raycast',
    name: 'Raycast',
    primaryCategory: 'apps',
    categories: ['apps'],
    desc: 'Blazingly fast, extensible replacement for macOS Spotlight',
    type: 'cask',
    brewPackage: 'raycast'
  },
  {
    id: 'rectangle',
    name: 'Rectangle',
    primaryCategory: 'apps',
    categories: ['apps'],
    desc: 'Lightweight window manager with keyboard shortcuts (Magnet alternative)',
    type: 'cask',
    brewPackage: 'rectangle'
  },

  // macOS Developer Defaults
  {
    id: 'tweak-finder-hidden',
    name: 'Show Hidden Files in Finder',
    primaryCategory: 'tweaks',
    categories: ['tweaks'],
    desc: 'Makes dotfiles (.git, .env, .zshrc) visible in Finder windows',
    type: 'tweak',
    tweakCommands: [
      'defaults write com.apple.finder AppleShowAllFiles -bool true'
    ]
  },
  {
    id: 'tweak-finder-ext',
    name: 'Show All File Extensions',
    primaryCategory: 'tweaks',
    categories: ['tweaks'],
    desc: 'Always displays filename extensions (.ts, .py, .json) in Finder',
    type: 'tweak',
    tweakCommands: [
      'defaults write NSGlobalDomain AppleShowAllExtensions -bool true'
    ]
  },
  {
    id: 'tweak-finder-path',
    name: 'Show Path Bar in Finder',
    primaryCategory: 'tweaks',
    categories: ['tweaks'],
    desc: 'Displays the full directory path breadcrumb at the bottom of Finder',
    type: 'tweak',
    tweakCommands: [
      'defaults write com.apple.finder ShowPathbar -bool true'
    ]
  },
  {
    id: 'tweak-key-repeat',
    name: 'Fast Key Repeat Rate',
    primaryCategory: 'tweaks',
    categories: ['tweaks'],
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
    primaryCategory: 'tweaks',
    categories: ['tweaks'],
    desc: 'Allows holding down keys (h/j/k/l) to repeat rather than showing accented letters',
    type: 'tweak',
    tweakCommands: [
      'defaults write NSGlobalDomain ApplePressAndHoldEnabled -bool false'
    ]
  },
  {
    id: 'tweak-dock-speed',
    name: 'Instant Dock Auto-Hide',
    primaryCategory: 'tweaks',
    categories: ['tweaks'],
    desc: 'Removes the delay and speeds up the animation when auto-hiding the macOS Dock',
    type: 'tweak',
    tweakCommands: [
      'defaults write com.apple.dock autohide-time-modifier -float 0.15',
      'defaults write com.apple.dock autohide-delay -float 0'
    ]
  }
];
