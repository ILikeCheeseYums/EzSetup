// EzSetup Catalog Data
// NOTE: Automatically compiled from data/items/*.json and data/categories.json
// To add new items, create a new .json file in data/items/ and run: npm run build

const CATEGORIES = [
  {
    "id": "editors",
    "name": "Code Editors & IDEs",
    "shortName": "Editors",
    "iconKey": "category-editors"
  },
  {
    "id": "languages",
    "name": "Languages & Runtimes",
    "shortName": "Languages",
    "iconKey": "category-languages"
  },
  {
    "id": "terminals",
    "name": "Terminals & Shell",
    "shortName": "Terminals",
    "iconKey": "category-terminals"
  },
  {
    "id": "cli",
    "name": "Modern CLI Utils",
    "shortName": "CLI",
    "iconKey": "category-cli"
  },
  {
    "id": "ai",
    "name": "AI Agents & LLMs",
    "shortName": "AI Agents",
    "iconKey": "category-ai"
  },
  {
    "id": "containers",
    "name": "Containers & Databases",
    "shortName": "Containers",
    "iconKey": "category-containers"
  },
  {
    "id": "browsers",
    "name": "Web Browsers",
    "shortName": "Browsers",
    "iconKey": "category-browsers"
  },
  {
    "id": "productivity",
    "name": "Productivity & Utilities",
    "shortName": "Productivity",
    "iconKey": "category-productivity"
  },
  {
    "id": "tweaks",
    "name": "macOS Defaults",
    "shortName": "macOS",
    "iconKey": "category-tweaks"
  }
];

// Helper to find category by ID
function getCategoryById(catId) {
  return CATEGORIES.find(c => c.id === catId);
}

const ITEMS = [
  {
    "id": "cursor",
    "name": "Cursor",
    "primaryCategory": "editors",
    "categories": [
      "editors",
      "ai"
    ],
    "desc": "AI-first code editor fork of VS Code with smart completions & agent mode",
    "type": "cask",
    "brewPackage": "cursor"
  },
  {
    "id": "helix",
    "name": "Helix Editor",
    "primaryCategory": "editors",
    "categories": [
      "editors",
      "cli"
    ],
    "desc": "Post-modern modal text editor built in Rust with built-in Tree-sitter & LSP",
    "type": "brew",
    "brewPackage": "helix"
  },
  {
    "id": "jetbrains-toolbox",
    "name": "JetBrains Toolbox",
    "primaryCategory": "editors",
    "categories": [
      "editors",
      "productivity"
    ],
    "desc": "Launcher and updater for IntelliJ, WebStorm, PyCharm, and Android Studio",
    "type": "cask",
    "brewPackage": "jetbrains-toolbox"
  },
  {
    "id": "neovim",
    "name": "Neovim",
    "primaryCategory": "editors",
    "categories": [
      "editors",
      "cli"
    ],
    "desc": "Hyperextensible Vim-based text editor built for speed and Lua plugins",
    "type": "brew",
    "brewPackage": "neovim"
  },
  {
    "id": "sublime-text",
    "name": "Sublime Text",
    "primaryCategory": "editors",
    "categories": [
      "editors"
    ],
    "desc": "Sophisticated text editor for code, markup, and prose with lightning speed",
    "type": "cask",
    "brewPackage": "sublime-text"
  },
  {
    "id": "vscode",
    "name": "Visual Studio Code",
    "primaryCategory": "editors",
    "categories": [
      "editors"
    ],
    "desc": "Microsoft's popular extensible code editor with huge plugin ecosystem",
    "type": "cask",
    "brewPackage": "visual-studio-code"
  },
  {
    "id": "zed",
    "name": "Zed",
    "primaryCategory": "editors",
    "categories": [
      "editors"
    ],
    "desc": "High-performance, multiplayer code editor written in Rust with GPU rendering",
    "type": "cask",
    "brewPackage": "zed"
  },
  {
    "id": "bun",
    "name": "Bun",
    "primaryCategory": "languages",
    "categories": [
      "languages",
      "cli"
    ],
    "desc": "Incredibly fast all-in-one JavaScript runtime, bundler, and package manager",
    "type": "brew",
    "brewPackage": "oven-sh/bun/bun"
  },
  {
    "id": "fnm",
    "name": "fnm (Fast Node Manager)",
    "primaryCategory": "languages",
    "categories": [
      "languages",
      "cli"
    ],
    "desc": "Ultra-fast Node.js version manager built in Rust (modern nvm alternative)",
    "type": "brew",
    "brewPackage": "fnm"
  },
  {
    "id": "go",
    "name": "Go",
    "primaryCategory": "languages",
    "categories": [
      "languages",
      "cli"
    ],
    "desc": "Open-source programming language by Google built for simplicity and scale",
    "type": "brew",
    "brewPackage": "go"
  },
  {
    "id": "pnpm",
    "name": "pnpm",
    "primaryCategory": "languages",
    "categories": [
      "languages",
      "cli"
    ],
    "desc": "Fast, disk space efficient package manager using hard links",
    "type": "brew",
    "brewPackage": "pnpm"
  },
  {
    "id": "rustup",
    "name": "Rust (rustup)",
    "primaryCategory": "languages",
    "categories": [
      "languages",
      "cli"
    ],
    "desc": "The official installer and toolchain manager for Rust and cargo",
    "type": "brew",
    "brewPackage": "rustup-init"
  },
  {
    "id": "uv",
    "name": "uv (Fast Python Manager)",
    "primaryCategory": "languages",
    "categories": [
      "languages",
      "cli"
    ],
    "desc": "Extremely fast Python package and version manager written in Rust",
    "type": "brew",
    "brewPackage": "uv"
  },
  {
    "id": "alacritty",
    "name": "Alacritty",
    "primaryCategory": "terminals",
    "categories": [
      "terminals"
    ],
    "desc": "Cross-platform, GPU-accelerated minimalist terminal emulator",
    "type": "cask",
    "brewPackage": "alacritty"
  },
  {
    "id": "fish",
    "name": "Fish Shell",
    "primaryCategory": "terminals",
    "categories": [
      "terminals",
      "cli"
    ],
    "desc": "Smart and user-friendly commandline shell with autosuggestions out of the box",
    "type": "brew",
    "brewPackage": "fish"
  },
  {
    "id": "ghostty",
    "name": "Ghostty",
    "primaryCategory": "terminals",
    "categories": [
      "terminals"
    ],
    "desc": "Fast, native, GPU-accelerated terminal emulator designed by Mitchell Hashimoto",
    "type": "cask",
    "brewPackage": "ghostty"
  },
  {
    "id": "iterm2",
    "name": "iTerm2",
    "primaryCategory": "terminals",
    "categories": [
      "terminals"
    ],
    "desc": "Battle-tested macOS terminal replacement with split panes and search",
    "type": "cask",
    "brewPackage": "iterm2"
  },
  {
    "id": "kitty",
    "name": "kitty",
    "primaryCategory": "terminals",
    "categories": [
      "terminals"
    ],
    "desc": "Fast, feature-rich, GPU-based terminal emulator with graphics & kitten extensions",
    "type": "cask",
    "brewPackage": "kitty"
  },
  {
    "id": "starship",
    "name": "Starship Prompt",
    "primaryCategory": "terminals",
    "categories": [
      "terminals",
      "cli"
    ],
    "desc": "Blazingly fast, customizable cross-shell prompt showing git and runtime info",
    "type": "brew",
    "brewPackage": "starship"
  },
  {
    "id": "warp",
    "name": "Warp Terminal",
    "primaryCategory": "terminals",
    "categories": [
      "terminals",
      "ai"
    ],
    "desc": "Modern Rust-based terminal with IDE-style block commands and AI assist",
    "type": "cask",
    "brewPackage": "warp"
  },
  {
    "id": "wezterm",
    "name": "WezTerm",
    "primaryCategory": "terminals",
    "categories": [
      "terminals"
    ],
    "desc": "GPU-accelerated cross-platform terminal emulator & multiplexer in Rust",
    "type": "cask",
    "brewPackage": "wezterm"
  },
  {
    "id": "bat",
    "name": "bat",
    "primaryCategory": "cli",
    "categories": [
      "cli"
    ],
    "desc": "A modern cat clone with syntax highlighting and git modifications",
    "type": "brew",
    "brewPackage": "bat"
  },
  {
    "id": "btop",
    "name": "btop",
    "primaryCategory": "cli",
    "categories": [
      "cli"
    ],
    "desc": "Aesthetic resource monitor showing CPU, memory, disk, and process stats",
    "type": "brew",
    "brewPackage": "btop"
  },
  {
    "id": "eza",
    "name": "eza",
    "primaryCategory": "cli",
    "categories": [
      "cli"
    ],
    "desc": "Modern replacement for ls with colors, file icons, and git status",
    "type": "brew",
    "brewPackage": "eza"
  },
  {
    "id": "fd",
    "name": "fd",
    "primaryCategory": "cli",
    "categories": [
      "cli"
    ],
    "desc": "Simple, fast and user-friendly alternative to the find command",
    "type": "brew",
    "brewPackage": "fd"
  },
  {
    "id": "fzf",
    "name": "fzf",
    "primaryCategory": "cli",
    "categories": [
      "cli"
    ],
    "desc": "General-purpose command-line fuzzy finder for files, history, and git",
    "type": "brew",
    "brewPackage": "fzf"
  },
  {
    "id": "gh",
    "name": "GitHub CLI (gh)",
    "primaryCategory": "cli",
    "categories": [
      "cli"
    ],
    "desc": "Take GitHub to your command line: PRs, issues, and repos",
    "type": "brew",
    "brewPackage": "gh"
  },
  {
    "id": "jq",
    "name": "jq",
    "primaryCategory": "cli",
    "categories": [
      "cli"
    ],
    "desc": "Flexible and lightweight command-line JSON processor",
    "type": "brew",
    "brewPackage": "jq"
  },
  {
    "id": "lazygit",
    "name": "lazygit",
    "primaryCategory": "cli",
    "categories": [
      "cli"
    ],
    "desc": "Simple terminal UI for git commands that makes branch & merge workflows effortless",
    "type": "brew",
    "brewPackage": "lazygit"
  },
  {
    "id": "ripgrep",
    "name": "ripgrep (rg)",
    "primaryCategory": "cli",
    "categories": [
      "cli"
    ],
    "desc": "Ultra-fast line-oriented search tool that respects your .gitignore",
    "type": "brew",
    "brewPackage": "ripgrep"
  },
  {
    "id": "yazi",
    "name": "yazi",
    "primaryCategory": "cli",
    "categories": [
      "cli"
    ],
    "desc": "Blazingly fast terminal file manager written in Rust with async I/O",
    "type": "brew",
    "brewPackage": "yazi"
  },
  {
    "id": "zoxide",
    "name": "zoxide",
    "primaryCategory": "cli",
    "categories": [
      "cli"
    ],
    "desc": "Smarter cd command that learns your most frequent directories",
    "type": "brew",
    "brewPackage": "zoxide"
  },
  {
    "id": "agy",
    "name": "Antigravity CLI (agy)",
    "primaryCategory": "ai",
    "categories": [
      "ai",
      "cli"
    ],
    "desc": "Google DeepMind's advanced agentic AI coding assistant & terminal interface",
    "type": "cask",
    "brewPackage": "antigravity-cli"
  },
  {
    "id": "aider",
    "name": "Aider",
    "primaryCategory": "ai",
    "categories": [
      "ai",
      "cli"
    ],
    "desc": "AI pair programming terminal agent that coordinates git commits and multi-file edits",
    "type": "brew",
    "brewPackage": "aider"
  },
  {
    "id": "chatgpt",
    "name": "ChatGPT Desktop",
    "primaryCategory": "ai",
    "categories": [
      "ai",
      "productivity"
    ],
    "desc": "Official OpenAI ChatGPT desktop application with macOS system shortcut integration",
    "type": "cask",
    "brewPackage": "chatgpt"
  },
  {
    "id": "claude",
    "name": "Claude Desktop",
    "primaryCategory": "ai",
    "categories": [
      "ai",
      "productivity"
    ],
    "desc": "Anthropic's official Claude AI desktop application for macOS",
    "type": "cask",
    "brewPackage": "claude"
  },
  {
    "id": "claude-code",
    "name": "Claude Code",
    "primaryCategory": "ai",
    "categories": [
      "ai",
      "cli"
    ],
    "desc": "Anthropic's official terminal-based agentic AI coding assistant",
    "type": "cask",
    "brewPackage": "claude-code"
  },
  {
    "id": "hermes-agent",
    "name": "Hermes Agent",
    "primaryCategory": "ai",
    "categories": [
      "ai",
      "cli"
    ],
    "desc": "Nous Research's autonomous self-improving agent loop with persistent memory",
    "type": "brew",
    "brewPackage": "hermes-agent"
  },
  {
    "id": "jan",
    "name": "Jan",
    "primaryCategory": "ai",
    "categories": [
      "ai",
      "productivity"
    ],
    "desc": "Open-source desktop AI assistant and local LLM runner working 100% offline",
    "type": "cask",
    "brewPackage": "jan"
  },
  {
    "id": "lm-studio",
    "name": "LM Studio",
    "primaryCategory": "ai",
    "categories": [
      "ai",
      "productivity"
    ],
    "desc": "Discover, download, and experiment with local LLMs on your Mac via a native GUI",
    "type": "cask",
    "brewPackage": "lm-studio"
  },
  {
    "id": "ollama",
    "name": "Ollama",
    "primaryCategory": "ai",
    "categories": [
      "ai",
      "cli"
    ],
    "desc": "Run Llama 3, DeepSeek, and Mistral models locally with Apple Silicon Metal acceleration",
    "type": "brew",
    "brewPackage": "ollama"
  },
  {
    "id": "openclaw",
    "name": "OpenClaw",
    "primaryCategory": "ai",
    "categories": [
      "ai",
      "productivity"
    ],
    "desc": "Self-hosted autonomous AI agent framework and developer automation gateway",
    "type": "cask",
    "brewPackage": "openclaw"
  },
  {
    "id": "bruno",
    "name": "Bruno",
    "primaryCategory": "containers",
    "categories": [
      "containers",
      "productivity"
    ],
    "desc": "Fast, open-source, Git-friendly API client (lightweight Postman alternative)",
    "type": "cask",
    "brewPackage": "bruno"
  },
  {
    "id": "dbeaver",
    "name": "DBeaver Community",
    "primaryCategory": "containers",
    "categories": [
      "containers",
      "productivity"
    ],
    "desc": "Free multi-platform database tool for developers, SQL programmers, and DBAs",
    "type": "cask",
    "brewPackage": "dbeaver-community"
  },
  {
    "id": "docker",
    "name": "Docker Desktop",
    "primaryCategory": "containers",
    "categories": [
      "containers"
    ],
    "desc": "Standard Docker environment for building and running containers",
    "type": "cask",
    "brewPackage": "docker"
  },
  {
    "id": "orbstack",
    "name": "OrbStack",
    "primaryCategory": "containers",
    "categories": [
      "containers"
    ],
    "desc": "Fast, ultra-lightweight Mac alternative to Docker Desktop with instant startup",
    "type": "cask",
    "brewPackage": "orbstack"
  },
  {
    "id": "postman",
    "name": "Postman",
    "primaryCategory": "containers",
    "categories": [
      "containers",
      "productivity"
    ],
    "desc": "Comprehensive API platform for building, testing, and mocking APIs",
    "type": "cask",
    "brewPackage": "postman"
  },
  {
    "id": "tableplus",
    "name": "TablePlus",
    "primaryCategory": "containers",
    "categories": [
      "containers",
      "productivity"
    ],
    "desc": "Modern, native GUI client for PostgreSQL, MySQL, SQLite, and Redis",
    "type": "cask",
    "brewPackage": "tableplus"
  },
  {
    "id": "arc",
    "name": "Arc Browser",
    "primaryCategory": "browsers",
    "categories": [
      "browsers",
      "productivity"
    ],
    "desc": "Innovative browser designed for focused multitasking, spaces, and clean tabs",
    "type": "cask",
    "brewPackage": "arc"
  },
  {
    "id": "brave",
    "name": "Brave Browser",
    "primaryCategory": "browsers",
    "categories": [
      "browsers"
    ],
    "desc": "Privacy-focused browser blocking trackers and ads by default on Chromium",
    "type": "cask",
    "brewPackage": "brave-browser"
  },
  {
    "id": "chrome",
    "name": "Google Chrome",
    "primaryCategory": "browsers",
    "categories": [
      "browsers"
    ],
    "desc": "Fast, standard Chromium web browser with industry-leading DevTools",
    "type": "cask",
    "brewPackage": "google-chrome"
  },
  {
    "id": "firefox",
    "name": "Mozilla Firefox",
    "primaryCategory": "browsers",
    "categories": [
      "browsers"
    ],
    "desc": "Fast, open-source, independent Gecko-powered browser with great privacy",
    "type": "cask",
    "brewPackage": "firefox"
  },
  {
    "id": "zen",
    "name": "Zen Browser",
    "primaryCategory": "browsers",
    "categories": [
      "browsers"
    ],
    "desc": "Beautiful, privacy-respecting Firefox-based browser with vertical tabs & workspaces",
    "type": "cask",
    "brewPackage": "zen"
  },
  {
    "id": "discord",
    "name": "Discord",
    "primaryCategory": "productivity",
    "categories": [
      "productivity"
    ],
    "desc": "Voice, video, and text chat for developer communities and open-source projects",
    "type": "cask",
    "brewPackage": "discord"
  },
  {
    "id": "linear",
    "name": "Linear",
    "primaryCategory": "productivity",
    "categories": [
      "productivity"
    ],
    "desc": "Fast, high-craft project management and issue tracker designed for software teams",
    "type": "cask",
    "brewPackage": "linear"
  },
  {
    "id": "notion",
    "name": "Notion",
    "primaryCategory": "productivity",
    "categories": [
      "productivity"
    ],
    "desc": "All-in-one connected workspace for notes, wiki, tasks, and project roadmaps",
    "type": "cask",
    "brewPackage": "notion"
  },
  {
    "id": "obsidian",
    "name": "Obsidian",
    "primaryCategory": "productivity",
    "categories": [
      "productivity"
    ],
    "desc": "Powerful markdown knowledge base and second brain working on local plain text files",
    "type": "cask",
    "brewPackage": "obsidian"
  },
  {
    "id": "raycast",
    "name": "Raycast",
    "primaryCategory": "productivity",
    "categories": [
      "productivity"
    ],
    "desc": "Blazingly fast, extensible replacement for macOS Spotlight with hundreds of extensions",
    "type": "cask",
    "brewPackage": "raycast"
  },
  {
    "id": "rectangle",
    "name": "Rectangle",
    "primaryCategory": "productivity",
    "categories": [
      "productivity"
    ],
    "desc": "Move and resize windows in macOS with simple keyboard shortcuts",
    "type": "cask",
    "brewPackage": "rectangle"
  },
  {
    "id": "slack",
    "name": "Slack",
    "primaryCategory": "productivity",
    "categories": [
      "productivity"
    ],
    "desc": "Industry standard team messaging and communication platform for developers",
    "type": "cask",
    "brewPackage": "slack"
  },
  {
    "id": "tweak-dock-speed",
    "name": "Instant Dock Auto-Hide",
    "primaryCategory": "tweaks",
    "categories": [
      "tweaks"
    ],
    "desc": "Removes the delay and speeds up the animation when auto-hiding the macOS Dock",
    "type": "tweak",
    "tweakCommands": [
      "defaults write com.apple.dock autohide-time-modifier -float 0.15",
      "defaults write com.apple.dock autohide-delay -float 0"
    ]
  },
  {
    "id": "tweak-finder-ext",
    "name": "Show All File Extensions",
    "primaryCategory": "tweaks",
    "categories": [
      "tweaks"
    ],
    "desc": "Always displays filename extensions (.ts, .py, .json) in Finder",
    "type": "tweak",
    "tweakCommands": [
      "defaults write NSGlobalDomain AppleShowAllExtensions -bool true"
    ]
  },
  {
    "id": "tweak-finder-hidden",
    "name": "Show Hidden Files in Finder",
    "primaryCategory": "tweaks",
    "categories": [
      "tweaks"
    ],
    "desc": "Makes dotfiles (.git, .env, .zshrc) visible in Finder windows",
    "type": "tweak",
    "tweakCommands": [
      "defaults write com.apple.finder AppleShowAllFiles -bool true"
    ]
  },
  {
    "id": "tweak-finder-path",
    "name": "Show Path Bar in Finder",
    "primaryCategory": "tweaks",
    "categories": [
      "tweaks"
    ],
    "desc": "Displays the full directory path breadcrumb at the bottom of Finder",
    "type": "tweak",
    "tweakCommands": [
      "defaults write com.apple.finder ShowPathbar -bool true"
    ]
  },
  {
    "id": "tweak-key-repeat",
    "name": "Fast Key Repeat Rate",
    "primaryCategory": "tweaks",
    "categories": [
      "tweaks"
    ],
    "desc": "Accelerates key repeat speed for coding, navigation, and Vim",
    "type": "tweak",
    "tweakCommands": [
      "defaults write NSGlobalDomain KeyRepeat -int 2",
      "defaults write NSGlobalDomain InitialKeyRepeat -int 15"
    ]
  },
  {
    "id": "tweak-press-and-hold",
    "name": "Disable Press-and-Hold for Keys",
    "primaryCategory": "tweaks",
    "categories": [
      "tweaks"
    ],
    "desc": "Allows holding down keys (h/j/k/l) to repeat rather than showing accented letters",
    "type": "tweak",
    "tweakCommands": [
      "defaults write NSGlobalDomain ApplePressAndHoldEnabled -bool false"
    ]
  }
];
