import { ROUTES_AREA, SIDEBAR_NAV_AREA } from '@hermes/plugin-sdk'
import { jsx, jsxs } from 'react/jsx-runtime'

const ID = 'hermes-desktop-packs'

// Generated from BChop's Hermes Skins Pack. These are full DesktopTheme maps,
// not the basic backend skin conversion. Every mapped app surface comes from
// the original skin palette: background, panels, tools, borders, error state,
// selection, and status bar.
const fullThemes = [
  {
    name: 'pack-abyssal-plain', label: 'Abyssal Plain Pack', description: 'Full desktop pack from the abyssal-plain Hermes skin.',
    colors: {
      background: '#081620', foreground: '#d4e6ee', card: '#081620', cardForeground: '#d4e6ee',
      muted: '#1c2b35', mutedForeground: '#7e949f', popover: '#14303f', popoverForeground: '#d4e6ee',
      primary: '#46c2c9', primaryForeground: '#081620', secondary: '#14303f', secondaryForeground: '#d4e6ee',
      accent: '#58a0dc', accentForeground: '#081620', border: '#1e3d4c', input: '#081620', ring: '#58a0dc',
      midground: '#46c2c9', midgroundForeground: '#081620', composerRing: '#58a0dc',
      destructive: '#e05f6e', destructiveForeground: '#081620',
      sidebarBackground: '#040b10', sidebarBorder: '#1e3d4c', userBubble: '#14303f', userBubbleBorder: '#58a0dc'
    },
    darkColors: null,
    terminal: {
      foreground: '#d4e6ee', cursor: '#58a0dc', selectionBackground: '#14303f', black: '#081620',
      red: '#e05f6e', green: '#58c78c', yellow: '#d9a45a', blue: '#58a0dc', magenta: '#46c2c9', cyan: '#46c2c9', white: '#d4e6ee',
      brightBlack: '#4a6878', brightRed: '#e05f6e', brightGreen: '#58c78c', brightYellow: '#d9a45a',
      brightBlue: '#58a0dc', brightMagenta: '#46c2c9', brightCyan: '#46c2c9', brightWhite: '#d4e6ee'
    },
    semantic: { ok: '#58c78c', warn: '#d9a45a', error: '#e05f6e', tool: '#58a0dc' }
  },
  {
    name: 'pack-alabaster', label: 'Alabaster Pack', description: 'Full desktop pack from the alabaster Hermes skin.',
    colors: {
      background: '#fdfdfa', foreground: '#1a1a1a', card: '#fdfdfa', cardForeground: '#1a1a1a',
      muted: '#efefed', mutedForeground: '#6b6b6b', popover: '#e0e0d8', popoverForeground: '#1a1a1a',
      primary: '#3858b0', primaryForeground: '#fdfdfa', secondary: '#e0e0d8', secondaryForeground: '#1a1a1a',
      accent: '#3858b0', accentForeground: '#fdfdfa', border: '#909090', input: '#fdfdfa', ring: '#3858b0',
      midground: '#3858b0', midgroundForeground: '#fdfdfa', composerRing: '#3858b0',
      destructive: '#b03838', destructiveForeground: '#fdfdfa',
      sidebarBackground: '#f0f0e8', sidebarBorder: '#909090', userBubble: '#e0e0d8', userBubbleBorder: '#3858b0'
    },
    darkColors: null,
    terminal: {
      foreground: '#1a1a1a', cursor: '#3858b0', selectionBackground: '#e0e0d8', black: '#fdfdfa',
      red: '#b03838', green: '#388040', yellow: '#b08020', blue: '#3858b0', magenta: '#3858b0', cyan: '#1a1a1a', white: '#1a1a1a',
      brightBlack: '#b0b0b0', brightRed: '#b03838', brightGreen: '#388040', brightYellow: '#b08020',
      brightBlue: '#3858b0', brightMagenta: '#3858b0', brightCyan: '#1a1a1a', brightWhite: '#1a1a1a'
    },
    semantic: { ok: '#388040', warn: '#b08020', error: '#b03838', tool: '#3858b0' }
  },
  {
    name: 'pack-amber-terminal', label: 'Amber Terminal Pack', description: 'Full desktop pack from the amber-terminal Hermes skin.',
    colors: {
      background: '#0c0804', foreground: '#e0c088', card: '#0c0804', cardForeground: '#e0c088',
      muted: '#211a11', mutedForeground: '#918160', popover: '#1a1008', popoverForeground: '#e0c088',
      primary: '#c89030', primaryForeground: '#0c0804', secondary: '#1a1008', secondaryForeground: '#e0c088',
      accent: '#e0b040', accentForeground: '#0c0804', border: '#b08020', input: '#0c0804', ring: '#e0b040',
      midground: '#c89030', midgroundForeground: '#0c0804', composerRing: '#e0b040',
      destructive: '#e05030', destructiveForeground: '#0c0804',
      sidebarBackground: '#060402', sidebarBorder: '#b08020', userBubble: '#1a1008', userBubbleBorder: '#e0b040'
    },
    darkColors: null,
    terminal: {
      foreground: '#e0c088', cursor: '#e0b040', selectionBackground: '#1a1008', black: '#0c0804',
      red: '#e05030', green: '#c0b040', yellow: '#e0b040', blue: '#e0b040', magenta: '#c89030', cyan: '#e0b040', white: '#e0c088',
      brightBlack: '#604818', brightRed: '#e05030', brightGreen: '#c0b040', brightYellow: '#e0b040',
      brightBlue: '#e0b040', brightMagenta: '#c89030', brightCyan: '#e0b040', brightWhite: '#e0c088'
    },
    semantic: { ok: '#c0b040', warn: '#e0b040', error: '#e05030', tool: '#e0b040' }
  },
  {
    name: 'pack-anodized', label: 'Anodized Pack', description: 'Full desktop pack from the anodized Hermes skin.',
    colors: {
      background: '#101216', foreground: '#d4dcea', card: '#101216', cardForeground: '#d4dcea',
      muted: '#24262b', mutedForeground: '#858e99', popover: '#1e222a', popoverForeground: '#d4dcea',
      primary: '#8a6ce8', primaryForeground: '#101216', secondary: '#1e222a', secondaryForeground: '#d4dcea',
      accent: '#7c78d8', accentForeground: '#101216', border: '#272c34', input: '#101216', ring: '#7c78d8',
      midground: '#8a6ce8', midgroundForeground: '#101216', composerRing: '#7c78d8',
      destructive: '#d05c64', destructiveForeground: '#101216',
      sidebarBackground: '#08090b', sidebarBorder: '#272c34', userBubble: '#1e222a', userBubbleBorder: '#7c78d8'
    },
    darkColors: null,
    terminal: {
      foreground: '#d4dcea', cursor: '#7c78d8', selectionBackground: '#1e222a', black: '#101216',
      red: '#d05c64', green: '#62b87c', yellow: '#d0a858', blue: '#7c78d8', magenta: '#8a6ce8', cyan: '#8a6ce8', white: '#d4dcea',
      brightBlack: '#64707e', brightRed: '#d05c64', brightGreen: '#62b87c', brightYellow: '#d0a858',
      brightBlue: '#7c78d8', brightMagenta: '#8a6ce8', brightCyan: '#8a6ce8', brightWhite: '#d4dcea'
    },
    semantic: { ok: '#62b87c', warn: '#d0a858', error: '#d05c64', tool: '#7c78d8' }
  },
  {
    name: 'pack-arcane-tome', label: 'Arcane Tome Pack', description: 'Full desktop pack from the arcane-tome Hermes skin.',
    colors: {
      background: '#161022', foreground: '#c8c0e0', card: '#161022', cardForeground: '#c8c0e0',
      muted: '#282235', mutedForeground: '#9187a1', popover: '#221838', popoverForeground: '#c8c0e0',
      primary: '#c0a040', primaryForeground: '#161022', secondary: '#221838', secondaryForeground: '#c8c0e0',
      accent: '#70b8f0', accentForeground: '#161022', border: '#7a58a8', input: '#161022', ring: '#70b8f0',
      midground: '#c0a040', midgroundForeground: '#161022', composerRing: '#70b8f0',
      destructive: '#c05060', destructiveForeground: '#fdfdfd',
      sidebarBackground: '#0c0816', sidebarBorder: '#7a58a8', userBubble: '#221838', userBubbleBorder: '#70b8f0'
    },
    darkColors: null,
    terminal: {
      foreground: '#c8c0e0', cursor: '#70b8f0', selectionBackground: '#221838', black: '#161022',
      red: '#c05060', green: '#50c080', yellow: '#c0a040', blue: '#70b8f0', magenta: '#c0a040', cyan: '#70b8f0', white: '#c8c0e0',
      brightBlack: '#3a2858', brightRed: '#c05060', brightGreen: '#50c080', brightYellow: '#c0a040',
      brightBlue: '#70b8f0', brightMagenta: '#c0a040', brightCyan: '#70b8f0', brightWhite: '#c8c0e0'
    },
    semantic: { ok: '#50c080', warn: '#c0a040', error: '#c05060', tool: '#70b8f0' }
  },
  {
    name: 'pack-aurora-boreal', label: 'Aurora Boreal Pack', description: 'Full desktop pack from the aurora-boreal Hermes skin.',
    colors: {
      background: '#0a1820', foreground: '#c8e8f0', card: '#0a1820', cardForeground: '#c8e8f0',
      muted: '#1d2d35', mutedForeground: '#8295a3', popover: '#102838', popoverForeground: '#c8e8f0',
      primary: '#6090d0', primaryForeground: '#0a1820', secondary: '#102838', secondaryForeground: '#c8e8f0',
      accent: '#80e8c0', accentForeground: '#0a1820', border: '#40b090', input: '#0a1820', ring: '#80e8c0',
      midground: '#6090d0', midgroundForeground: '#0a1820', composerRing: '#80e8c0',
      destructive: '#e06070', destructiveForeground: '#0a1820',
      sidebarBackground: '#061014', sidebarBorder: '#40b090', userBubble: '#102838', userBubbleBorder: '#80e8c0'
    },
    darkColors: null,
    terminal: {
      foreground: '#c8e8f0', cursor: '#80e8c0', selectionBackground: '#102838', black: '#0a1820',
      red: '#e06070', green: '#60e0a0', yellow: '#e0b040', blue: '#80e8c0', magenta: '#6090d0', cyan: '#80e8c0', white: '#c8e8f0',
      brightBlack: '#284860', brightRed: '#e06070', brightGreen: '#60e0a0', brightYellow: '#e0b040',
      brightBlue: '#80e8c0', brightMagenta: '#6090d0', brightCyan: '#80e8c0', brightWhite: '#c8e8f0'
    },
    semantic: { ok: '#60e0a0', warn: '#e0b040', error: '#e06070', tool: '#80e8c0' }
  },
  {
    name: 'pack-baby-blue', label: 'Baby Blue Pack', description: 'Full desktop pack from the baby-blue Hermes skin.',
    colors: {
      background: '#181c24', foreground: '#d0dce8', card: '#181c24', cardForeground: '#d0dce8',
      muted: '#2a2f38', mutedForeground: '#8e97a0', popover: '#202a38', popoverForeground: '#d0dce8',
      primary: '#80a0c0', primaryForeground: '#181c24', secondary: '#202a38', secondaryForeground: '#d0dce8',
      accent: '#a0c0e0', accentForeground: '#181c24', border: '#6888a8', input: '#181c24', ring: '#a0c0e0',
      midground: '#80a0c0', midgroundForeground: '#181c24', composerRing: '#a0c0e0',
      destructive: '#c88888', destructiveForeground: '#181c24',
      sidebarBackground: '#0e1218', sidebarBorder: '#6888a8', userBubble: '#202a38', userBubbleBorder: '#a0c0e0'
    },
    darkColors: null,
    terminal: {
      foreground: '#d0dce8', cursor: '#a0c0e0', selectionBackground: '#202a38', black: '#181c24',
      red: '#c88888', green: '#88c098', yellow: '#c8b060', blue: '#a0c0e0', magenta: '#80a0c0', cyan: '#a0c0e0', white: '#d0dce8',
      brightBlack: '#384858', brightRed: '#c88888', brightGreen: '#88c098', brightYellow: '#c8b060',
      brightBlue: '#a0c0e0', brightMagenta: '#80a0c0', brightCyan: '#a0c0e0', brightWhite: '#d0dce8'
    },
    semantic: { ok: '#88c098', warn: '#c8b060', error: '#c88888', tool: '#a0c0e0' }
  },
  {
    name: 'pack-black-canary', label: 'Black Canary Pack', description: 'Full desktop pack from the black-canary Hermes skin.',
    colors: {
      background: '#101010', foreground: '#f0f0f0', card: '#101010', cardForeground: '#f0f0f0',
      muted: '#262626', mutedForeground: '#8d8d8d', popover: '#282828', popoverForeground: '#f0f0f0',
      primary: '#ffd700', primaryForeground: '#101010', secondary: '#282828', secondaryForeground: '#f0f0f0',
      accent: '#40b0ff', accentForeground: '#101010', border: '#ffd700', input: '#101010', ring: '#40b0ff',
      midground: '#ffd700', midgroundForeground: '#101010', composerRing: '#40b0ff',
      destructive: '#ff3030', destructiveForeground: '#101010',
      sidebarBackground: '#080808', sidebarBorder: '#ffd700', userBubble: '#282828', userBubbleBorder: '#40b0ff'
    },
    darkColors: null,
    terminal: {
      foreground: '#f0f0f0', cursor: '#40b0ff', selectionBackground: '#282828', black: '#101010',
      red: '#ff3030', green: '#00e070', yellow: '#ffd700', blue: '#40b0ff', magenta: '#ffd700', cyan: '#ffffff', white: '#f0f0f0',
      brightBlack: '#606060', brightRed: '#ff3030', brightGreen: '#00e070', brightYellow: '#ffd700',
      brightBlue: '#40b0ff', brightMagenta: '#ffd700', brightCyan: '#ffffff', brightWhite: '#f0f0f0'
    },
    semantic: { ok: '#00e070', warn: '#ffd700', error: '#ff3030', tool: '#40b0ff' }
  },
  {
    name: 'pack-blacklight-poster', label: 'Blacklight Poster Pack', description: 'Full desktop pack from the blacklight-poster Hermes skin.',
    colors: {
      background: '#0c0614', foreground: '#ecdff8', card: '#0c0614', cardForeground: '#ecdff8',
      muted: '#221c2b', mutedForeground: '#907ea5', popover: '#2c1438', popoverForeground: '#ecdff8',
      primary: '#ff4cd8', primaryForeground: '#0c0614', secondary: '#2c1438', secondaryForeground: '#ecdff8',
      accent: '#4cc8ff', accentForeground: '#0c0614', border: '#341c48', input: '#0c0614', ring: '#4cc8ff',
      midground: '#ff4cd8', midgroundForeground: '#0c0614', composerRing: '#4cc8ff',
      destructive: '#ff5c70', destructiveForeground: '#0c0614',
      sidebarBackground: '#06030a', sidebarBorder: '#341c48', userBubble: '#2c1438', userBubbleBorder: '#4cc8ff'
    },
    darkColors: null,
    terminal: {
      foreground: '#ecdff8', cursor: '#4cc8ff', selectionBackground: '#2c1438', black: '#0c0614',
      red: '#ff5c70', green: '#58f0a8', yellow: '#ffe05c', blue: '#4cc8ff', magenta: '#ff4cd8', cyan: '#ff4cd8', white: '#ecdff8',
      brightBlack: '#715a8c', brightRed: '#ff5c70', brightGreen: '#58f0a8', brightYellow: '#ffe05c',
      brightBlue: '#4cc8ff', brightMagenta: '#ff4cd8', brightCyan: '#ff4cd8', brightWhite: '#ecdff8'
    },
    semantic: { ok: '#58f0a8', warn: '#ffe05c', error: '#ff5c70', tool: '#4cc8ff' }
  },
  {
    name: 'pack-blueprint', label: 'Blueprint Pack', description: 'Full desktop pack from the blueprint Hermes skin.',
    colors: {
      background: '#d8e4f0', foreground: '#102848', card: '#d8e4f0', cardForeground: '#102848',
      muted: '#ccd9e6', mutedForeground: '#4f5e72', popover: '#b0c8e0', popoverForeground: '#102848',
      primary: '#2858a0', primaryForeground: '#d8e4f0', secondary: '#b0c8e0', secondaryForeground: '#102848',
      accent: '#2858a0', accentForeground: '#d8e4f0', border: '#3a6090', input: '#d8e4f0', ring: '#2858a0',
      midground: '#2858a0', midgroundForeground: '#d8e4f0', composerRing: '#2858a0',
      destructive: '#902820', destructiveForeground: '#d8e4f0',
      sidebarBackground: '#c8d8e8', sidebarBorder: '#3a6090', userBubble: '#b0c8e0', userBubbleBorder: '#2858a0'
    },
    darkColors: null,
    terminal: {
      foreground: '#102848', cursor: '#2858a0', selectionBackground: '#b0c8e0', black: '#d8e4f0',
      red: '#902820', green: '#307050', yellow: '#906020', blue: '#2858a0', magenta: '#2858a0', cyan: '#102848', white: '#102848',
      brightBlack: '#8098b8', brightRed: '#902820', brightGreen: '#307050', brightYellow: '#906020',
      brightBlue: '#2858a0', brightMagenta: '#2858a0', brightCyan: '#102848', brightWhite: '#102848'
    },
    semantic: { ok: '#307050', warn: '#906020', error: '#902820', tool: '#2858a0' }
  },
  {
    name: 'pack-bone-white', label: 'Bone White Pack', description: 'Full desktop pack from the bone-white Hermes skin.',
    colors: {
      background: '#1a1a1a', foreground: '#d8d8d8', card: '#1a1a1a', cardForeground: '#d8d8d8',
      muted: '#2d2d2d', mutedForeground: '#949494', popover: '#282828', popoverForeground: '#d8d8d8',
      primary: '#608088', primaryForeground: '#0f0f0f', secondary: '#282828', secondaryForeground: '#d8d8d8',
      accent: '#608088', accentForeground: '#0f0f0f', border: '#444a50', input: '#1a1a1a', ring: '#608088',
      midground: '#608088', midgroundForeground: '#0f0f0f', composerRing: '#608088',
      destructive: '#987878', destructiveForeground: '#171717',
      sidebarBackground: '#101010', sidebarBorder: '#444a50', userBubble: '#282828', userBubbleBorder: '#608088'
    },
    darkColors: null,
    terminal: {
      foreground: '#d8d8d8', cursor: '#608088', selectionBackground: '#282828', black: '#1a1a1a',
      red: '#987878', green: '#789880', yellow: '#989078', blue: '#608088', magenta: '#608088', cyan: '#c8d0d8', white: '#d8d8d8',
      brightBlack: '#383838', brightRed: '#987878', brightGreen: '#789880', brightYellow: '#989078',
      brightBlue: '#608088', brightMagenta: '#608088', brightCyan: '#c8d0d8', brightWhite: '#d8d8d8'
    },
    semantic: { ok: '#789880', warn: '#989078', error: '#987878', tool: '#608088' }
  },
  {
    name: 'pack-bonsai', label: 'Bonsai Pack', description: 'Full desktop pack from the bonsai Hermes skin.',
    colors: {
      background: '#12140e', foreground: '#d8dcc8', card: '#12140e', cardForeground: '#d8dcc8',
      muted: '#262821', mutedForeground: '#8b907b', popover: '#282c1c', popoverForeground: '#d8dcc8',
      primary: '#98a850', primaryForeground: '#12140e', secondary: '#282c1c', secondaryForeground: '#d8dcc8',
      accent: '#78a078', accentForeground: '#12140e', border: '#3a3e2a', input: '#12140e', ring: '#78a078',
      midground: '#98a850', midgroundForeground: '#12140e', composerRing: '#78a078',
      destructive: '#c86a58', destructiveForeground: '#12140e',
      sidebarBackground: '#090a07', sidebarBorder: '#3a3e2a', userBubble: '#282c1c', userBubbleBorder: '#78a078'
    },
    darkColors: null,
    terminal: {
      foreground: '#d8dcc8', cursor: '#78a078', selectionBackground: '#282c1c', black: '#12140e',
      red: '#c86a58', green: '#90b058', yellow: '#cda44e', blue: '#78a078', magenta: '#98a850', cyan: '#98a850', white: '#d8dcc8',
      brightBlack: '#767c64', brightRed: '#c86a58', brightGreen: '#90b058', brightYellow: '#cda44e',
      brightBlue: '#78a078', brightMagenta: '#98a850', brightCyan: '#98a850', brightWhite: '#d8dcc8'
    },
    semantic: { ok: '#90b058', warn: '#cda44e', error: '#c86a58', tool: '#78a078' }
  },
  {
    name: 'pack-brushed-steel', label: 'Brushed Steel Pack', description: 'Full desktop pack from the brushed-steel Hermes skin.',
    colors: {
      background: '#121418', foreground: '#d6dae0', card: '#121418', cardForeground: '#d6dae0',
      muted: '#26282c', mutedForeground: '#8a9098', popover: '#22262c', popoverForeground: '#d6dae0',
      primary: '#8fa4b8', primaryForeground: '#121418', secondary: '#22262c', secondaryForeground: '#d6dae0',
      accent: '#7494b4', accentForeground: '#121418', border: '#2e333a', input: '#121418', ring: '#7494b4',
      midground: '#8fa4b8', midgroundForeground: '#121418', composerRing: '#7494b4',
      destructive: '#c26068', destructiveForeground: '#121418',
      sidebarBackground: '#090a0c', sidebarBorder: '#2e333a', userBubble: '#22262c', userBubbleBorder: '#7494b4'
    },
    darkColors: null,
    terminal: {
      foreground: '#d6dae0', cursor: '#7494b4', selectionBackground: '#22262c', black: '#121418',
      red: '#c26068', green: '#6fae72', yellow: '#c6a058', blue: '#7494b4', magenta: '#8fa4b8', cyan: '#8fa4b8', white: '#d6dae0',
      brightBlack: '#6b727c', brightRed: '#c26068', brightGreen: '#6fae72', brightYellow: '#c6a058',
      brightBlue: '#7494b4', brightMagenta: '#8fa4b8', brightCyan: '#8fa4b8', brightWhite: '#d6dae0'
    },
    semantic: { ok: '#6fae72', warn: '#c6a058', error: '#c26068', tool: '#7494b4' }
  },
  {
    name: 'pack-brutalist-concrete', label: 'Brutalist Concrete Pack', description: 'Full desktop pack from the brutalist-concrete Hermes skin.',
    colors: {
      background: '#202020', foreground: '#c0c0c0', card: '#202020', cardForeground: '#c0c0c0',
      muted: '#303030', mutedForeground: '#989898', popover: '#2a2a2a', popoverForeground: '#c0c0c0',
      primary: '#ff5500', primaryForeground: '#202020', secondary: '#2a2a2a', secondaryForeground: '#c0c0c0',
      accent: '#ff5500', accentForeground: '#202020', border: '#505050', input: '#202020', ring: '#ff5500',
      midground: '#ff5500', midgroundForeground: '#202020', composerRing: '#ff5500',
      destructive: '#e04030', destructiveForeground: '#0f0f0f',
      sidebarBackground: '#141414', sidebarBorder: '#505050', userBubble: '#2a2a2a', userBubbleBorder: '#ff5500'
    },
    darkColors: null,
    terminal: {
      foreground: '#c0c0c0', cursor: '#ff5500', selectionBackground: '#2a2a2a', black: '#202020',
      red: '#e04030', green: '#60a060', yellow: '#ff8800', blue: '#ff5500', magenta: '#ff5500', cyan: '#a0a0a0', white: '#c0c0c0',
      brightBlack: '#383838', brightRed: '#e04030', brightGreen: '#60a060', brightYellow: '#ff8800',
      brightBlue: '#ff5500', brightMagenta: '#ff5500', brightCyan: '#a0a0a0', brightWhite: '#c0c0c0'
    },
    semantic: { ok: '#60a060', warn: '#ff8800', error: '#e04030', tool: '#ff5500' }
  },
  {
    name: 'pack-bubblegum', label: 'Bubblegum Pack', description: 'Full desktop pack from the bubblegum Hermes skin.',
    colors: {
      background: '#fff0f6', foreground: '#4a2c3c', card: '#fff0f6', cardForeground: '#4a2c3c',
      muted: '#f4e4eb', mutedForeground: '#7c6171', popover: '#f4d0e0', popoverForeground: '#4a2c3c',
      primary: '#d8307c', primaryForeground: '#030202', secondary: '#f4d0e0', secondaryForeground: '#4a2c3c',
      accent: '#3c78b8', accentForeground: '#fffcfd', border: '#ecc8da', input: '#fff0f6', ring: '#3c78b8',
      midground: '#d8307c', midgroundForeground: '#030202', composerRing: '#3c78b8',
      destructive: '#d03050', destructiveForeground: '#fff0f6',
      sidebarBackground: '#ebdde2', sidebarBorder: '#ecc8da', userBubble: '#f4d0e0', userBubbleBorder: '#3c78b8'
    },
    darkColors: null,
    terminal: {
      foreground: '#4a2c3c', cursor: '#3c78b8', selectionBackground: '#f4d0e0', black: '#fff0f6',
      red: '#d03050', green: '#3c8a50', yellow: '#9a6406', blue: '#3c78b8', magenta: '#d8307c', cyan: '#d8307c', white: '#4a2c3c',
      brightBlack: '#b48ca4', brightRed: '#d03050', brightGreen: '#3c8a50', brightYellow: '#9a6406',
      brightBlue: '#3c78b8', brightMagenta: '#d8307c', brightCyan: '#d8307c', brightWhite: '#4a2c3c'
    },
    semantic: { ok: '#3c8a50', warn: '#9a6406', error: '#d03050', tool: '#3c78b8' }
  },
  {
    name: 'pack-cactus-bloom', label: 'Cactus Bloom Pack', description: 'Full desktop pack from the cactus-bloom Hermes skin.',
    colors: {
      background: '#101408', foreground: '#dce8cc', card: '#101408', cardForeground: '#dce8cc',
      muted: '#24291c', mutedForeground: '#879274', popover: '#242b12', popoverForeground: '#dce8cc',
      primary: '#e86a90', primaryForeground: '#101408', secondary: '#242b12', secondaryForeground: '#dce8cc',
      accent: '#c87898', accentForeground: '#101408', border: '#38401f', input: '#101408', ring: '#c87898',
      midground: '#e86a90', midgroundForeground: '#101408', composerRing: '#c87898',
      destructive: '#d85868', destructiveForeground: '#101408',
      sidebarBackground: '#080a04', sidebarBorder: '#38401f', userBubble: '#242b12', userBubbleBorder: '#c87898'
    },
    darkColors: null,
    terminal: {
      foreground: '#dce8cc', cursor: '#c87898', selectionBackground: '#242b12', black: '#101408',
      red: '#d85868', green: '#88b84c', yellow: '#d8a848', blue: '#c87898', magenta: '#e86a90', cyan: '#e86a90', white: '#dce8cc',
      brightBlack: '#6e7c58', brightRed: '#d85868', brightGreen: '#88b84c', brightYellow: '#d8a848',
      brightBlue: '#c87898', brightMagenta: '#e86a90', brightCyan: '#e86a90', brightWhite: '#dce8cc'
    },
    semantic: { ok: '#88b84c', warn: '#d8a848', error: '#d85868', tool: '#c87898' }
  },
  {
    name: 'pack-candlelight', label: 'Candlelight Pack', description: 'Full desktop pack from the candlelight Hermes skin.',
    colors: {
      background: '#1e0f08', foreground: '#f0dcc0', card: '#1e0f08', cardForeground: '#f0dcc0',
      muted: '#33241a', mutedForeground: '#a38976', popover: '#3c2010', popoverForeground: '#f0dcc0',
      primary: '#f09038', primaryForeground: '#1e0f08', secondary: '#3c2010', secondaryForeground: '#f0dcc0',
      accent: '#d0783c', accentForeground: '#1e0f08', border: '#4e2c16', input: '#1e0f08', ring: '#d0783c',
      midground: '#f09038', midgroundForeground: '#1e0f08', composerRing: '#d0783c',
      destructive: '#e04830', destructiveForeground: '#1e0f08',
      sidebarBackground: '#0f0804', sidebarBorder: '#4e2c16', userBubble: '#3c2010', userBubbleBorder: '#d0783c'
    },
    darkColors: null,
    terminal: {
      foreground: '#f0dcc0', cursor: '#d0783c', selectionBackground: '#3c2010', black: '#1e0f08',
      red: '#e04830', green: '#b0a850', yellow: '#f0a840', blue: '#d0783c', magenta: '#f09038', cyan: '#f09038', white: '#f0dcc0',
      brightBlack: '#8a6a52', brightRed: '#e04830', brightGreen: '#b0a850', brightYellow: '#f0a840',
      brightBlue: '#d0783c', brightMagenta: '#f09038', brightCyan: '#f09038', brightWhite: '#f0dcc0'
    },
    semantic: { ok: '#b0a850', warn: '#f0a840', error: '#e04830', tool: '#d0783c' }
  },
  {
    name: 'pack-canyon-shade', label: 'Canyon Shade Pack', description: 'Full desktop pack from the canyon-shade Hermes skin.',
    colors: {
      background: '#120e14', foreground: '#d8ccd4', card: '#120e14', cardForeground: '#d8ccd4',
      muted: '#262127', mutedForeground: '#908692', popover: '#2a1e26', popoverForeground: '#d8ccd4',
      primary: '#c06858', primaryForeground: '#120e14', secondary: '#2a1e26', secondaryForeground: '#d8ccd4',
      accent: '#a87880', accentForeground: '#120e14', border: '#38262e', input: '#120e14', ring: '#a87880',
      midground: '#c06858', midgroundForeground: '#120e14', composerRing: '#a87880',
      destructive: '#d05248', destructiveForeground: '#120e14',
      sidebarBackground: '#09070a', sidebarBorder: '#38262e', userBubble: '#2a1e26', userBubbleBorder: '#a87880'
    },
    darkColors: null,
    terminal: {
      foreground: '#d8ccd4', cursor: '#a87880', selectionBackground: '#2a1e26', black: '#120e14',
      red: '#d05248', green: '#98a058', yellow: '#cc9848', blue: '#a87880', magenta: '#c06858', cyan: '#c06858', white: '#d8ccd4',
      brightBlack: '#766a78', brightRed: '#d05248', brightGreen: '#98a058', brightYellow: '#cc9848',
      brightBlue: '#a87880', brightMagenta: '#c06858', brightCyan: '#c06858', brightWhite: '#d8ccd4'
    },
    semantic: { ok: '#98a058', warn: '#cc9848', error: '#d05248', tool: '#a87880' }
  },
  {
    name: 'pack-carbon-fiber', label: 'Carbon Fiber Pack', description: 'Full desktop pack from the carbon-fiber Hermes skin.',
    colors: {
      background: '#0c0c0e', foreground: '#d2d4d8', card: '#0c0c0e', cardForeground: '#d2d4d8',
      muted: '#202022', mutedForeground: '#86888b', popover: '#1c1e22', popoverForeground: '#d2d4d8',
      primary: '#e8b840', primaryForeground: '#0c0c0e', secondary: '#1c1e22', secondaryForeground: '#d2d4d8',
      accent: '#6c8cb8', accentForeground: '#0c0c0e', border: '#26282c', input: '#0c0c0e', ring: '#6c8cb8',
      midground: '#e8b840', midgroundForeground: '#0c0c0e', composerRing: '#6c8cb8',
      destructive: '#c85858', destructiveForeground: '#0c0c0e',
      sidebarBackground: '#060607', sidebarBorder: '#26282c', userBubble: '#1c1e22', userBubbleBorder: '#6c8cb8'
    },
    darkColors: null,
    terminal: {
      foreground: '#d2d4d8', cursor: '#6c8cb8', selectionBackground: '#1c1e22', black: '#0c0c0e',
      red: '#c85858', green: '#68b06c', yellow: '#e0ac40', blue: '#6c8cb8', magenta: '#e8b840', cyan: '#e8b840', white: '#d2d4d8',
      brightBlack: '#606266', brightRed: '#c85858', brightGreen: '#68b06c', brightYellow: '#e0ac40',
      brightBlue: '#6c8cb8', brightMagenta: '#e8b840', brightCyan: '#e8b840', brightWhite: '#d2d4d8'
    },
    semantic: { ok: '#68b06c', warn: '#e0ac40', error: '#c85858', tool: '#6c8cb8' }
  },
  {
    name: 'pack-chromatic-drift', label: 'Chromatic Drift Pack', description: 'Full desktop pack from the chromatic-drift Hermes skin.',
    colors: {
      background: '#111015', foreground: '#dcdce4', card: '#111015', cardForeground: '#dcdce4',
      muted: '#25242a', mutedForeground: '#8b8b96', popover: '#22222a', popoverForeground: '#dcdce4',
      primary: '#f0d040', primaryForeground: '#111015', secondary: '#22222a', secondaryForeground: '#dcdce4',
      accent: '#5090e0', accentForeground: '#111015', border: '#2c2c34', input: '#111015', ring: '#5090e0',
      midground: '#f0d040', midgroundForeground: '#111015', composerRing: '#5090e0',
      destructive: '#f05050', destructiveForeground: '#111015',
      sidebarBackground: '#08080a', sidebarBorder: '#2c2c34', userBubble: '#22222a', userBubbleBorder: '#5090e0'
    },
    darkColors: null,
    terminal: {
      foreground: '#dcdce4', cursor: '#5090e0', selectionBackground: '#22222a', black: '#111015',
      red: '#f05050', green: '#4cd88c', yellow: '#f0a040', blue: '#5090e0', magenta: '#f0d040', cyan: '#f0d040', white: '#dcdce4',
      brightBlack: '#6a6a78', brightRed: '#f05050', brightGreen: '#4cd88c', brightYellow: '#f0a040',
      brightBlue: '#5090e0', brightMagenta: '#f0d040', brightCyan: '#f0d040', brightWhite: '#dcdce4'
    },
    semantic: { ok: '#4cd88c', warn: '#f0a040', error: '#f05050', tool: '#5090e0' }
  },
  {
    name: 'pack-chrome-rain', label: 'Chrome Rain Pack', description: 'Full desktop pack from the chrome-rain Hermes skin.',
    colors: {
      background: '#120c2e', foreground: '#e8def8', card: '#120c2e', cardForeground: '#e8def8',
      muted: '#272142', mutedForeground: '#9087b8', popover: '#2a1a50', popoverForeground: '#e8def8',
      primary: '#e6398c', primaryForeground: '#120c2e', secondary: '#2a1a50', secondaryForeground: '#e8def8',
      accent: '#4dc9f6', accentForeground: '#120c2e', border: '#4dc9f6', input: '#120c2e', ring: '#4dc9f6',
      midground: '#e6398c', midgroundForeground: '#120c2e', composerRing: '#4dc9f6',
      destructive: '#e74c3c', destructiveForeground: '#120c2e',
      sidebarBackground: '#0a081c', sidebarBorder: '#4dc9f6', userBubble: '#2a1a50', userBubbleBorder: '#4dc9f6'
    },
    darkColors: null,
    terminal: {
      foreground: '#e8def8', cursor: '#4dc9f6', selectionBackground: '#2a1a50', black: '#120c2e',
      red: '#e74c3c', green: '#2ecc71', yellow: '#f4d03f', blue: '#4dc9f6', magenta: '#e6398c', cyan: '#4dc9f6', white: '#e8def8',
      brightBlack: '#6b5fa0', brightRed: '#e74c3c', brightGreen: '#2ecc71', brightYellow: '#f4d03f',
      brightBlue: '#4dc9f6', brightMagenta: '#e6398c', brightCyan: '#4dc9f6', brightWhite: '#e8def8'
    },
    semantic: { ok: '#2ecc71', warn: '#f4d03f', error: '#e74c3c', tool: '#4dc9f6' }
  },
  {
    name: 'pack-cocoa-nib', label: 'Cocoa Nib Pack', description: 'Full desktop pack from the cocoa-nib Hermes skin.',
    colors: {
      background: '#171110', foreground: '#e0d2c8', card: '#171110', cardForeground: '#e0d2c8',
      muted: '#2b2422', mutedForeground: '#968a85', popover: '#2b2220', popoverForeground: '#e0d2c8',
      primary: '#b07a52', primaryForeground: '#171110', secondary: '#2b2220', secondaryForeground: '#e0d2c8',
      accent: '#9c7a60', accentForeground: '#171110', border: '#3b2f2a', input: '#171110', ring: '#9c7a60',
      midground: '#b07a52', midgroundForeground: '#171110', composerRing: '#9c7a60',
      destructive: '#c45c4c', destructiveForeground: '#150f0f',
      sidebarBackground: '#0c0808', sidebarBorder: '#3b2f2a', userBubble: '#2b2220', userBubbleBorder: '#9c7a60'
    },
    darkColors: null,
    terminal: {
      foreground: '#e0d2c8', cursor: '#9c7a60', selectionBackground: '#2b2220', black: '#171110',
      red: '#c45c4c', green: '#8a9c5c', yellow: '#cb9c4e', blue: '#9c7a60', magenta: '#b07a52', cyan: '#b07a52', white: '#e0d2c8',
      brightBlack: '#7d6f68', brightRed: '#c45c4c', brightGreen: '#8a9c5c', brightYellow: '#cb9c4e',
      brightBlue: '#9c7a60', brightMagenta: '#b07a52', brightCyan: '#b07a52', brightWhite: '#e0d2c8'
    },
    semantic: { ok: '#8a9c5c', warn: '#cb9c4e', error: '#c45c4c', tool: '#9c7a60' }
  },
  {
    name: 'pack-comet-tail', label: 'Comet Tail Pack', description: 'Full desktop pack from the comet-tail Hermes skin.',
    colors: {
      background: '#0c1018', foreground: '#e0e8f0', card: '#0c1018', cardForeground: '#e0e8f0',
      muted: '#21262e', mutedForeground: '#818e9b', popover: '#1a2430', popoverForeground: '#e0e8f0',
      primary: '#f0c060', primaryForeground: '#0c1018', secondary: '#1a2430', secondaryForeground: '#e0e8f0',
      accent: '#68a8d8', accentForeground: '#0c1018', border: '#243040', input: '#0c1018', ring: '#68a8d8',
      midground: '#f0c060', midgroundForeground: '#0c1018', composerRing: '#68a8d8',
      destructive: '#e06868', destructiveForeground: '#0c1018',
      sidebarBackground: '#06080c', sidebarBorder: '#243040', userBubble: '#1a2430', userBubbleBorder: '#68a8d8'
    },
    darkColors: null,
    terminal: {
      foreground: '#e0e8f0', cursor: '#68a8d8', selectionBackground: '#1a2430', black: '#0c1018',
      red: '#e06868', green: '#70cc8c', yellow: '#e0b458', blue: '#68a8d8', magenta: '#f0c060', cyan: '#f0c060', white: '#e0e8f0',
      brightBlack: '#607080', brightRed: '#e06868', brightGreen: '#70cc8c', brightYellow: '#e0b458',
      brightBlue: '#68a8d8', brightMagenta: '#f0c060', brightCyan: '#f0c060', brightWhite: '#e0e8f0'
    },
    semantic: { ok: '#70cc8c', warn: '#e0b458', error: '#e06868', tool: '#68a8d8' }
  },
  {
    name: 'pack-commodore-64', label: 'Commodore 64 Pack', description: 'Full desktop pack from the commodore-64 Hermes skin.',
    colors: {
      background: '#202840', foreground: '#c8c8e8', card: '#202840', cardForeground: '#c8c8e8',
      muted: '#313851', mutedForeground: '#a79fb7', popover: '#283050', popoverForeground: '#c8c8e8',
      primary: '#9070d0', primaryForeground: '#141928', secondary: '#283050', secondaryForeground: '#c8c8e8',
      accent: '#a088e0', accentForeground: '#202840', border: '#8068c0', input: '#202840', ring: '#a088e0',
      midground: '#9070d0', midgroundForeground: '#141928', composerRing: '#a088e0',
      destructive: '#d06060', destructiveForeground: '#161b2c',
      sidebarBackground: '#141828', sidebarBorder: '#8068c0', userBubble: '#283050', userBubbleBorder: '#a088e0'
    },
    darkColors: null,
    terminal: {
      foreground: '#c8c8e8', cursor: '#a088e0', selectionBackground: '#283050', black: '#202840',
      red: '#d06060', green: '#70d070', yellow: '#d0c050', blue: '#a088e0', magenta: '#9070d0', cyan: '#a088e0', white: '#c8c8e8',
      brightBlack: '#483868', brightRed: '#d06060', brightGreen: '#70d070', brightYellow: '#d0c050',
      brightBlue: '#a088e0', brightMagenta: '#9070d0', brightCyan: '#a088e0', brightWhite: '#c8c8e8'
    },
    semantic: { ok: '#70d070', warn: '#d0c050', error: '#d06060', tool: '#a088e0' }
  },
  {
    name: 'pack-copper-patina', label: 'Copper Patina Pack', description: 'Full desktop pack from the copper-patina Hermes skin.',
    colors: {
      background: '#12100e', foreground: '#e0d6c8', card: '#12100e', cardForeground: '#e0d6c8',
      muted: '#272421', mutedForeground: '#918a82', popover: '#2a2620', popoverForeground: '#e0d6c8',
      primary: '#c87e4e', primaryForeground: '#12100e', secondary: '#2a2620', secondaryForeground: '#e0d6c8',
      accent: '#b07a58', accentForeground: '#12100e', border: '#3a332c', input: '#12100e', ring: '#b07a58',
      midground: '#c87e4e', midgroundForeground: '#12100e', composerRing: '#b07a58',
      destructive: '#c85a48', destructiveForeground: '#12100e',
      sidebarBackground: '#090807', sidebarBorder: '#3a332c', userBubble: '#2a2620', userBubbleBorder: '#b07a58'
    },
    darkColors: null,
    terminal: {
      foreground: '#e0d6c8', cursor: '#b07a58', selectionBackground: '#2a2620', black: '#12100e',
      red: '#c85a48', green: '#62a88c', yellow: '#cfa24e', blue: '#b07a58', magenta: '#c87e4e', cyan: '#c87e4e', white: '#e0d6c8',
      brightBlack: '#7b7268', brightRed: '#c85a48', brightGreen: '#62a88c', brightYellow: '#cfa24e',
      brightBlue: '#b07a58', brightMagenta: '#c87e4e', brightCyan: '#c87e4e', brightWhite: '#e0d6c8'
    },
    semantic: { ok: '#62a88c', warn: '#cfa24e', error: '#c85a48', tool: '#b07a58' }
  },
  {
    name: 'pack-coral-reef', label: 'Coral Reef Pack', description: 'Full desktop pack from the coral-reef Hermes skin.',
    colors: {
      background: '#101820', foreground: '#f0e4dc', card: '#101820', cardForeground: '#f0e4dc',
      muted: '#262c33', mutedForeground: '#929298', popover: '#28242e', popoverForeground: '#f0e4dc',
      primary: '#ff8f70', primaryForeground: '#101820', secondary: '#28242e', secondaryForeground: '#f0e4dc',
      accent: '#70b0e0', accentForeground: '#101820', border: '#3a3440', input: '#101820', ring: '#70b0e0',
      midground: '#ff8f70', midgroundForeground: '#101820', composerRing: '#70b0e0',
      destructive: '#f06068', destructiveForeground: '#101820',
      sidebarBackground: '#080c10', sidebarBorder: '#3a3440', userBubble: '#28242e', userBubbleBorder: '#70b0e0'
    },
    darkColors: null,
    terminal: {
      foreground: '#f0e4dc', cursor: '#70b0e0', selectionBackground: '#28242e', black: '#101820',
      red: '#f06068', green: '#7fd08a', yellow: '#f0b860', blue: '#70b0e0', magenta: '#ff8f70', cyan: '#ff8f70', white: '#f0e4dc',
      brightBlack: '#6a6a72', brightRed: '#f06068', brightGreen: '#7fd08a', brightYellow: '#f0b860',
      brightBlue: '#70b0e0', brightMagenta: '#ff8f70', brightCyan: '#ff8f70', brightWhite: '#f0e4dc'
    },
    semantic: { ok: '#7fd08a', warn: '#f0b860', error: '#f06068', tool: '#70b0e0' }
  },
  {
    name: 'pack-cotton-candy', label: 'Cotton Candy Pack', description: 'Full desktop pack from the cotton-candy Hermes skin.',
    colors: {
      background: '#fef4fa', foreground: '#4a3040', card: '#fef4fa', cardForeground: '#4a3040',
      muted: '#f3e8ef', mutedForeground: '#776371', popover: '#f6dcea', popoverForeground: '#4a3040',
      primary: '#1f78ac', primaryForeground: '#fef4fa', secondary: '#f6dcea', secondaryForeground: '#4a3040',
      accent: '#2c80b0', accentForeground: '#0a0a0a', border: '#eed0e0', input: '#fef4fa', ring: '#2c80b0',
      midground: '#1f78ac', midgroundForeground: '#fef4fa', composerRing: '#2c80b0',
      destructive: '#d03860', destructiveForeground: '#fef7fb',
      sidebarBackground: '#eae0e6', sidebarBorder: '#eed0e0', userBubble: '#f6dcea', userBubbleBorder: '#2c80b0'
    },
    darkColors: null,
    terminal: {
      foreground: '#4a3040', cursor: '#2c80b0', selectionBackground: '#f6dcea', black: '#fef4fa',
      red: '#d03860', green: '#40905c', yellow: '#966e06', blue: '#2c80b0', magenta: '#1f78ac', cyan: '#1f78ac', white: '#4a3040',
      brightBlack: '#b294a8', brightRed: '#d03860', brightGreen: '#40905c', brightYellow: '#966e06',
      brightBlue: '#2c80b0', brightMagenta: '#1f78ac', brightCyan: '#1f78ac', brightWhite: '#4a3040'
    },
    semantic: { ok: '#40905c', warn: '#966e06', error: '#d03860', tool: '#2c80b0' }
  },
  {
    name: 'pack-datamosh', label: 'Datamosh Pack', description: 'Full desktop pack from the datamosh Hermes skin.',
    colors: {
      background: '#0e0e10', foreground: '#d8d8dc', card: '#0e0e10', cardForeground: '#d8d8dc',
      muted: '#222224', mutedForeground: '#88888e', popover: '#1e1e24', popoverForeground: '#d8d8dc',
      primary: '#3ce0c8', primaryForeground: '#0e0e10', secondary: '#1e1e24', secondaryForeground: '#d8d8dc',
      accent: '#c84ce0', accentForeground: '#0e0e10', border: '#28282e', input: '#0e0e10', ring: '#c84ce0',
      midground: '#3ce0c8', midgroundForeground: '#0e0e10', composerRing: '#c84ce0',
      destructive: '#f04868', destructiveForeground: '#0e0e10',
      sidebarBackground: '#070708', sidebarBorder: '#28282e', userBubble: '#1e1e24', userBubbleBorder: '#c84ce0'
    },
    darkColors: null,
    terminal: {
      foreground: '#d8d8dc', cursor: '#c84ce0', selectionBackground: '#1e1e24', black: '#0e0e10',
      red: '#f04868', green: '#58d880', yellow: '#e8c048', blue: '#c84ce0', magenta: '#3ce0c8', cyan: '#3ce0c8', white: '#d8d8dc',
      brightBlack: '#5c5c64', brightRed: '#f04868', brightGreen: '#58d880', brightYellow: '#e8c048',
      brightBlue: '#c84ce0', brightMagenta: '#3ce0c8', brightCyan: '#3ce0c8', brightWhite: '#d8d8dc'
    },
    semantic: { ok: '#58d880', warn: '#e8c048', error: '#f04868', tool: '#c84ce0' }
  },
  {
    name: 'pack-deep-ocean', label: 'Deep Ocean Pack', description: 'Full desktop pack from the deep-ocean Hermes skin.',
    colors: {
      background: '#0a1a20', foreground: '#c0e8e8', card: '#0a1a20', cardForeground: '#c0e8e8',
      muted: '#1c2f34', mutedForeground: '#7c97a0', popover: '#0a2838', popoverForeground: '#c0e8e8',
      primary: '#3098a8', primaryForeground: '#0a1a20', secondary: '#0a2838', secondaryForeground: '#c0e8e8',
      accent: '#50c8d0', accentForeground: '#0a1a20', border: '#206880', input: '#0a1a20', ring: '#50c8d0',
      midground: '#3098a8', midgroundForeground: '#0a1a20', composerRing: '#50c8d0',
      destructive: '#d05060', destructiveForeground: '#071217',
      sidebarBackground: '#061014', sidebarBorder: '#206880', userBubble: '#0a2838', userBubbleBorder: '#50c8d0'
    },
    darkColors: null,
    terminal: {
      foreground: '#c0e8e8', cursor: '#50c8d0', selectionBackground: '#0a2838', black: '#0a1a20',
      red: '#d05060', green: '#50d0a0', yellow: '#d0a840', blue: '#50c8d0', magenta: '#3098a8', cyan: '#50c8d0', white: '#c0e8e8',
      brightBlack: '#1a4858', brightRed: '#d05060', brightGreen: '#50d0a0', brightYellow: '#d0a840',
      brightBlue: '#50c8d0', brightMagenta: '#3098a8', brightCyan: '#50c8d0', brightWhite: '#c0e8e8'
    },
    semantic: { ok: '#50d0a0', warn: '#d0a840', error: '#d05060', tool: '#50c8d0' }
  },
  {
    name: 'pack-deep-void', label: 'Deep Void Pack', description: 'Full desktop pack from the deep-void Hermes skin.',
    colors: {
      background: '#000000', foreground: '#b0a0c0', card: '#050508', cardForeground: '#b0a0c0',
      muted: '#121013', mutedForeground: '#7f798c', popover: '#1a102a', popoverForeground: '#b0a0c0',
      primary: '#7060a0', primaryForeground: '#ebebeb', secondary: '#1a102a', secondaryForeground: '#b0a0c0',
      accent: '#6070a0', accentForeground: '#f7f7f7', border: '#3a3050', input: '#050508', ring: '#6070a0',
      midground: '#7060a0', midgroundForeground: '#ebebeb', composerRing: '#6070a0',
      destructive: '#904040', destructiveForeground: '#cfcfcf',
      sidebarBackground: '#000000', sidebarBorder: '#3a3050', userBubble: '#1a102a', userBubbleBorder: '#6070a0'
    },
    darkColors: null,
    terminal: {
      foreground: '#b0a0c0', cursor: '#6070a0', selectionBackground: '#1a102a', black: '#000000',
      red: '#904040', green: '#508050', yellow: '#908050', blue: '#6070a0', magenta: '#7060a0', cyan: '#9080c0', white: '#b0a0c0',
      brightBlack: '#2a2040', brightRed: '#904040', brightGreen: '#508050', brightYellow: '#908050',
      brightBlue: '#6070a0', brightMagenta: '#7060a0', brightCyan: '#9080c0', brightWhite: '#b0a0c0'
    },
    semantic: { ok: '#508050', warn: '#908050', error: '#904040', tool: '#6070a0' }
  },
  {
    name: 'pack-desert-neon', label: 'Desert Neon Pack', description: 'Full desktop pack from the desert-neon Hermes skin.',
    colors: {
      background: '#14100c', foreground: '#e8d8c8', card: '#14100c', cardForeground: '#e8d8c8',
      muted: '#29241f', mutedForeground: '#948980', popover: '#281810', popoverForeground: '#e8d8c8',
      primary: '#ffb800', primaryForeground: '#14100c', secondary: '#281810', secondaryForeground: '#e8d8c8',
      accent: '#00e8e8', accentForeground: '#14100c', border: '#ff4088', input: '#14100c', ring: '#00e8e8',
      midground: '#ffb800', midgroundForeground: '#14100c', composerRing: '#00e8e8',
      destructive: '#ff4088', destructiveForeground: '#14100c',
      sidebarBackground: '#0a0804', sidebarBorder: '#ff4088', userBubble: '#281810', userBubbleBorder: '#00e8e8'
    },
    darkColors: null,
    terminal: {
      foreground: '#e8d8c8', cursor: '#00e8e8', selectionBackground: '#281810', black: '#14100c',
      red: '#ff4088', green: '#40e880', yellow: '#ffb800', blue: '#00e8e8', magenta: '#ffb800', cyan: '#00e8e8', white: '#e8d8c8',
      brightBlack: '#443020', brightRed: '#ff4088', brightGreen: '#40e880', brightYellow: '#ffb800',
      brightBlue: '#00e8e8', brightMagenta: '#ffb800', brightCyan: '#00e8e8', brightWhite: '#e8d8c8'
    },
    semantic: { ok: '#40e880', warn: '#ffb800', error: '#ff4088', tool: '#00e8e8' }
  },
  {
    name: 'pack-dragon-blood', label: 'Dragon Blood Pack', description: 'Full desktop pack from the dragon-blood Hermes skin.',
    colors: {
      background: '#141010', foreground: '#e0d0c0', card: '#141010', cardForeground: '#e0d0c0',
      muted: '#282322', mutedForeground: '#a08484', popover: '#281010', popoverForeground: '#e0d0c0',
      primary: '#d04040', primaryForeground: '#fdfdfd', secondary: '#281010', secondaryForeground: '#e0d0c0',
      accent: '#f0c840', accentForeground: '#141010', border: '#b83030', input: '#141010', ring: '#f0c840',
      midground: '#d04040', midgroundForeground: '#fdfdfd', composerRing: '#f0c840',
      destructive: '#e03030', destructiveForeground: '#060404',
      sidebarBackground: '#0a0808', sidebarBorder: '#b83030', userBubble: '#281010', userBubbleBorder: '#f0c840'
    },
    darkColors: null,
    terminal: {
      foreground: '#e0d0c0', cursor: '#f0c840', selectionBackground: '#281010', black: '#141010',
      red: '#e03030', green: '#50a050', yellow: '#f0c840', blue: '#f0c840', magenta: '#d04040', cyan: '#f0c840', white: '#e0d0c0',
      brightBlack: '#582828', brightRed: '#e03030', brightGreen: '#50a050', brightYellow: '#f0c840',
      brightBlue: '#f0c840', brightMagenta: '#d04040', brightCyan: '#f0c840', brightWhite: '#e0d0c0'
    },
    semantic: { ok: '#50a050', warn: '#f0c840', error: '#e03030', tool: '#f0c840' }
  },
  {
    name: 'pack-dusty-rose', label: 'Dusty Rose Pack', description: 'Full desktop pack from the dusty-rose Hermes skin.',
    colors: {
      background: '#1c181a', foreground: '#d8d0d4', card: '#1c181a', cardForeground: '#d8d0d4',
      muted: '#2f2a2d', mutedForeground: '#999094', popover: '#281e24', popoverForeground: '#d8d0d4',
      primary: '#b88898', primaryForeground: '#1c181a', secondary: '#281e24', secondaryForeground: '#d8d0d4',
      accent: '#88a0b8', accentForeground: '#1c181a', border: '#a87088', input: '#1c181a', ring: '#88a0b8',
      midground: '#b88898', midgroundForeground: '#1c181a', composerRing: '#88a0b8',
      destructive: '#c87070', destructiveForeground: '#1c181a',
      sidebarBackground: '#120e10', sidebarBorder: '#a87088', userBubble: '#281e24', userBubbleBorder: '#88a0b8'
    },
    darkColors: null,
    terminal: {
      foreground: '#d8d0d4', cursor: '#88a0b8', selectionBackground: '#281e24', black: '#1c181a',
      red: '#c87070', green: '#88b898', yellow: '#c8a870', blue: '#88a0b8', magenta: '#b88898', cyan: '#d0a0b8', white: '#d8d0d4',
      brightBlack: '#483840', brightRed: '#c87070', brightGreen: '#88b898', brightYellow: '#c8a870',
      brightBlue: '#88a0b8', brightMagenta: '#b88898', brightCyan: '#d0a0b8', brightWhite: '#d8d0d4'
    },
    semantic: { ok: '#88b898', warn: '#c8a870', error: '#c87070', tool: '#88a0b8' }
  },
  {
    name: 'pack-eclipse', label: 'Eclipse Pack', description: 'Full desktop pack from the eclipse Hermes skin.',
    colors: {
      background: '#18181a', foreground: '#d0d0d8', card: '#18181a', cardForeground: '#d0d0d8',
      muted: '#2a2a2d', mutedForeground: '#958fa0', popover: '#282838', popoverForeground: '#d0d0d8',
      primary: '#9a88c0', primaryForeground: '#18181a', secondary: '#282838', secondaryForeground: '#d0d0d8',
      accent: '#7890b8', accentForeground: '#18181a', border: '#6a5a8a', input: '#18181a', ring: '#7890b8',
      midground: '#9a88c0', midgroundForeground: '#18181a', composerRing: '#7890b8',
      destructive: '#b86868', destructiveForeground: '#151517',
      sidebarBackground: '#101012', sidebarBorder: '#6a5a8a', userBubble: '#282838', userBubbleBorder: '#7890b8'
    },
    darkColors: null,
    terminal: {
      foreground: '#d0d0d8', cursor: '#7890b8', selectionBackground: '#282838', black: '#18181a',
      red: '#b86868', green: '#78a878', yellow: '#c8a870', blue: '#7890b8', magenta: '#9a88c0', cyan: '#c8b8e8', white: '#d0d0d8',
      brightBlack: '#3a3050', brightRed: '#b86868', brightGreen: '#78a878', brightYellow: '#c8a870',
      brightBlue: '#7890b8', brightMagenta: '#9a88c0', brightCyan: '#c8b8e8', brightWhite: '#d0d0d8'
    },
    semantic: { ok: '#78a878', warn: '#c8a870', error: '#b86868', tool: '#7890b8' }
  },
  {
    name: 'pack-ember-glow', label: 'Ember Glow Pack', description: 'Full desktop pack from the ember-glow Hermes skin.',
    colors: {
      background: '#140e0c', foreground: '#e4d4c8', card: '#140e0c', cardForeground: '#e4d4c8',
      muted: '#29221f', mutedForeground: '#988881', popover: '#2a1e18', popoverForeground: '#e4d4c8',
      primary: '#e06838', primaryForeground: '#140e0c', secondary: '#2a1e18', secondaryForeground: '#e4d4c8',
      accent: '#b87a5c', accentForeground: '#140e0c', border: '#3a2a24', input: '#140e0c', ring: '#b87a5c',
      midground: '#e06838', midgroundForeground: '#140e0c', composerRing: '#b87a5c',
      destructive: '#d85038', destructiveForeground: '#140e0c',
      sidebarBackground: '#0a0706', sidebarBorder: '#3a2a24', userBubble: '#2a1e18', userBubbleBorder: '#b87a5c'
    },
    darkColors: null,
    terminal: {
      foreground: '#e4d4c8', cursor: '#b87a5c', selectionBackground: '#2a1e18', black: '#140e0c',
      red: '#d85038', green: '#94a858', yellow: '#dca44c', blue: '#b87a5c', magenta: '#e06838', cyan: '#e06838', white: '#e4d4c8',
      brightBlack: '#7c6860', brightRed: '#d85038', brightGreen: '#94a858', brightYellow: '#dca44c',
      brightBlue: '#b87a5c', brightMagenta: '#e06838', brightCyan: '#e06838', brightWhite: '#e4d4c8'
    },
    semantic: { ok: '#94a858', warn: '#dca44c', error: '#d85038', tool: '#b87a5c' }
  },
  {
    name: 'pack-enchanted-forest', label: 'Enchanted Forest Pack', description: 'Full desktop pack from the enchanted-forest Hermes skin.',
    colors: {
      background: '#0e1814', foreground: '#c0e0d0', card: '#0e1814', cardForeground: '#c0e0d0',
      muted: '#202c27', mutedForeground: '#82958c', popover: '#142818', popoverForeground: '#c0e0d0',
      primary: '#c8b040', primaryForeground: '#0e1814', secondary: '#142818', secondaryForeground: '#c0e0d0',
      accent: '#60d8a0', accentForeground: '#0e1814', border: '#388060', input: '#0e1814', ring: '#60d8a0',
      midground: '#c8b040', midgroundForeground: '#0e1814', composerRing: '#60d8a0',
      destructive: '#d06060', destructiveForeground: '#0e1814',
      sidebarBackground: '#08100c', sidebarBorder: '#388060', userBubble: '#142818', userBubbleBorder: '#60d8a0'
    },
    darkColors: null,
    terminal: {
      foreground: '#c0e0d0', cursor: '#60d8a0', selectionBackground: '#142818', black: '#0e1814',
      red: '#d06060', green: '#60d8a0', yellow: '#c8b040', blue: '#60d8a0', magenta: '#c8b040', cyan: '#60d8a0', white: '#c0e0d0',
      brightBlack: '#284838', brightRed: '#d06060', brightGreen: '#60d8a0', brightYellow: '#c8b040',
      brightBlue: '#60d8a0', brightMagenta: '#c8b040', brightCyan: '#60d8a0', brightWhite: '#c0e0d0'
    },
    semantic: { ok: '#60d8a0', warn: '#c8b040', error: '#d06060', tool: '#60d8a0' }
  },
  {
    name: 'pack-event-horizon', label: 'Event Horizon Pack', description: 'Full desktop pack from the event-horizon Hermes skin.',
    colors: {
      background: '#08080c', foreground: '#d8dce8', card: '#08080c', cardForeground: '#d8dce8',
      muted: '#1d1d22', mutedForeground: '#808592', popover: '#181c26', popoverForeground: '#d8dce8',
      primary: '#4c90e8', primaryForeground: '#08080c', secondary: '#181c26', secondaryForeground: '#d8dce8',
      accent: '#5c9ce4', accentForeground: '#08080c', border: '#222630', input: '#08080c', ring: '#5c9ce4',
      midground: '#4c90e8', midgroundForeground: '#08080c', composerRing: '#5c9ce4',
      destructive: '#dc5c6c', destructiveForeground: '#08080c',
      sidebarBackground: '#040406', sidebarBorder: '#222630', userBubble: '#181c26', userBubbleBorder: '#5c9ce4'
    },
    darkColors: null,
    terminal: {
      foreground: '#d8dce8', cursor: '#5c9ce4', selectionBackground: '#181c26', black: '#08080c',
      red: '#dc5c6c', green: '#60c488', yellow: '#d4a85c', blue: '#5c9ce4', magenta: '#4c90e8', cyan: '#4c90e8', white: '#d8dce8',
      brightBlack: '#585e70', brightRed: '#dc5c6c', brightGreen: '#60c488', brightYellow: '#d4a85c',
      brightBlue: '#5c9ce4', brightMagenta: '#4c90e8', brightCyan: '#4c90e8', brightWhite: '#d8dce8'
    },
    semantic: { ok: '#60c488', warn: '#d4a85c', error: '#dc5c6c', tool: '#5c9ce4' }
  },
  {
    name: 'pack-fern-hollow', label: 'Fern Hollow Pack', description: 'Full desktop pack from the fern-hollow Hermes skin.',
    colors: {
      background: '#0e1a12', foreground: '#d2e6da', card: '#0e1a12', cardForeground: '#d2e6da',
      muted: '#222e26', mutedForeground: '#7e9889', popover: '#1c3026', popoverForeground: '#d2e6da',
      primary: '#6ec87e', primaryForeground: '#0e1a12', secondary: '#1c3026', secondaryForeground: '#d2e6da',
      accent: '#68b4a8', accentForeground: '#0e1a12', border: '#28443a', input: '#0e1a12', ring: '#68b4a8',
      midground: '#6ec87e', midgroundForeground: '#0e1a12', composerRing: '#68b4a8',
      destructive: '#d86870', destructiveForeground: '#0e1a12',
      sidebarBackground: '#070d09', sidebarBorder: '#28443a', userBubble: '#1c3026', userBubbleBorder: '#68b4a8'
    },
    darkColors: null,
    terminal: {
      foreground: '#d2e6da', cursor: '#68b4a8', selectionBackground: '#1c3026', black: '#0e1a12',
      red: '#d86870', green: '#76cc84', yellow: '#d8b05c', blue: '#68b4a8', magenta: '#6ec87e', cyan: '#6ec87e', white: '#d2e6da',
      brightBlack: '#5c7c6a', brightRed: '#d86870', brightGreen: '#76cc84', brightYellow: '#d8b05c',
      brightBlue: '#68b4a8', brightMagenta: '#6ec87e', brightCyan: '#6ec87e', brightWhite: '#d2e6da'
    },
    semantic: { ok: '#76cc84', warn: '#d8b05c', error: '#d86870', tool: '#68b4a8' }
  },
  {
    name: 'pack-forge-master', label: 'Forge Master Pack', description: 'Full desktop pack from the forge-master Hermes skin.',
    colors: {
      background: '#141210', foreground: '#d0c8b8', card: '#141210', cardForeground: '#d0c8b8',
      muted: '#272421', mutedForeground: '#978980', popover: '#281810', popoverForeground: '#d0c8b8',
      primary: '#6888a8', primaryForeground: '#141210', secondary: '#281810', secondaryForeground: '#d0c8b8',
      accent: '#6888a8', accentForeground: '#141210', border: '#c86030', input: '#141210', ring: '#6888a8',
      midground: '#6888a8', midgroundForeground: '#141210', composerRing: '#6888a8',
      destructive: '#d04030', destructiveForeground: '#fafafa',
      sidebarBackground: '#0a0808', sidebarBorder: '#c86030', userBubble: '#281810', userBubbleBorder: '#6888a8'
    },
    darkColors: null,
    terminal: {
      foreground: '#d0c8b8', cursor: '#6888a8', selectionBackground: '#281810', black: '#141210',
      red: '#d04030', green: '#60a860', yellow: '#f0a050', blue: '#6888a8', magenta: '#6888a8', cyan: '#f0a050', white: '#d0c8b8',
      brightBlack: '#483020', brightRed: '#d04030', brightGreen: '#60a860', brightYellow: '#f0a050',
      brightBlue: '#6888a8', brightMagenta: '#6888a8', brightCyan: '#f0a050', brightWhite: '#d0c8b8'
    },
    semantic: { ok: '#60a860', warn: '#f0a050', error: '#d04030', tool: '#6888a8' }
  },
  {
    name: 'pack-fountain-pen', label: 'Fountain Pen Pack', description: 'Full desktop pack from the fountain-pen Hermes skin.',
    colors: {
      background: '#f2f3f5', foreground: '#23262c', card: '#f2f3f5', cardForeground: '#23262c',
      muted: '#e6e7e9', mutedForeground: '#65686e', popover: '#dde2ea', popoverForeground: '#23262c',
      primary: '#1f4e8c', primaryForeground: '#f2f3f5', secondary: '#dde2ea', secondaryForeground: '#23262c',
      accent: '#1f5c9c', accentForeground: '#f2f3f5', border: '#ced2da', input: '#f2f3f5', ring: '#1f5c9c',
      midground: '#1f4e8c', midgroundForeground: '#f2f3f5', composerRing: '#1f5c9c',
      destructive: '#a12c34', destructiveForeground: '#f2f3f5',
      sidebarBackground: '#dfe0e1', sidebarBorder: '#ced2da', userBubble: '#dde2ea', userBubbleBorder: '#1f5c9c'
    },
    darkColors: null,
    terminal: {
      foreground: '#23262c', cursor: '#1f5c9c', selectionBackground: '#dde2ea', black: '#f2f3f5',
      red: '#a12c34', green: '#2f6b3c', yellow: '#8f6c14', blue: '#1f5c9c', magenta: '#1f4e8c', cyan: '#1f4e8c', white: '#23262c',
      brightBlack: '#9499a2', brightRed: '#a12c34', brightGreen: '#2f6b3c', brightYellow: '#8f6c14',
      brightBlue: '#1f5c9c', brightMagenta: '#1f4e8c', brightCyan: '#1f4e8c', brightWhite: '#23262c'
    },
    semantic: { ok: '#2f6b3c', warn: '#8f6c14', error: '#a12c34', tool: '#1f5c9c' }
  },
  {
    name: 'pack-glitch-punk', label: 'Glitch Punk Pack', description: 'Full desktop pack from the glitch-punk Hermes skin.',
    colors: {
      background: '#0d0d0d', foreground: '#c0ffc0', card: '#0d0d0d', cardForeground: '#c0ffc0',
      muted: '#1f251f', mutedForeground: '#63965b', popover: '#1a2a1a', popoverForeground: '#c0ffc0',
      primary: '#ff003c', primaryForeground: '#0d0d0d', secondary: '#1a2a1a', secondaryForeground: '#c0ffc0',
      accent: '#39ff14', accentForeground: '#0d0d0d', border: '#39ff14', input: '#0d0d0d', ring: '#39ff14',
      midground: '#ff003c', midgroundForeground: '#0d0d0d', composerRing: '#39ff14',
      destructive: '#ff003c', destructiveForeground: '#0d0d0d',
      sidebarBackground: '#050505', sidebarBorder: '#39ff14', userBubble: '#1a2a1a', userBubbleBorder: '#39ff14'
    },
    darkColors: null,
    terminal: {
      foreground: '#c0ffc0', cursor: '#39ff14', selectionBackground: '#1a2a1a', black: '#0d0d0d',
      red: '#ff003c', green: '#39ff14', yellow: '#ff8800', blue: '#39ff14', magenta: '#ff003c', cyan: '#39ff14', white: '#c0ffc0',
      brightBlack: '#3a7a30', brightRed: '#ff003c', brightGreen: '#39ff14', brightYellow: '#ff8800',
      brightBlue: '#39ff14', brightMagenta: '#ff003c', brightCyan: '#39ff14', brightWhite: '#c0ffc0'
    },
    semantic: { ok: '#39ff14', warn: '#ff8800', error: '#ff003c', tool: '#39ff14' }
  },
  {
    name: 'pack-glow-stick', label: 'Glow Stick Pack', description: 'Full desktop pack from the glow-stick Hermes skin.',
    colors: {
      background: '#08120a', foreground: '#e0f4dc', card: '#08120a', cardForeground: '#e0f4dc',
      muted: '#1e291f', mutedForeground: '#799476', popover: '#162a12', popoverForeground: '#e0f4dc',
      primary: '#a8ff3c', primaryForeground: '#08120a', secondary: '#162a12', secondaryForeground: '#e0f4dc',
      accent: '#5ce0c8', accentForeground: '#08120a', border: '#223c1e', input: '#08120a', ring: '#5ce0c8',
      midground: '#a8ff3c', midgroundForeground: '#08120a', composerRing: '#5ce0c8',
      destructive: '#ff6a6a', destructiveForeground: '#08120a',
      sidebarBackground: '#040905', sidebarBorder: '#223c1e', userBubble: '#162a12', userBubbleBorder: '#5ce0c8'
    },
    darkColors: null,
    terminal: {
      foreground: '#e0f4dc', cursor: '#5ce0c8', selectionBackground: '#162a12', black: '#08120a',
      red: '#ff6a6a', green: '#7ce86c', yellow: '#ffd05c', blue: '#5ce0c8', magenta: '#a8ff3c', cyan: '#a8ff3c', white: '#e0f4dc',
      brightBlack: '#5c7c58', brightRed: '#ff6a6a', brightGreen: '#7ce86c', brightYellow: '#ffd05c',
      brightBlue: '#5ce0c8', brightMagenta: '#a8ff3c', brightCyan: '#a8ff3c', brightWhite: '#e0f4dc'
    },
    semantic: { ok: '#7ce86c', warn: '#ffd05c', error: '#ff6a6a', tool: '#5ce0c8' }
  },
  {
    name: 'pack-graphite', label: 'Graphite Pack', description: 'Full desktop pack from the graphite Hermes skin.',
    colors: {
      background: '#1e1e1e', foreground: '#c8c8c8', card: '#1e1e1e', cardForeground: '#c8c8c8',
      muted: '#2f2f2f', mutedForeground: '#979797', popover: '#2a2a2a', popoverForeground: '#c8c8c8',
      primary: '#608080', primaryForeground: '#0e0e0e', secondary: '#2a2a2a', secondaryForeground: '#c8c8c8',
      accent: '#607888', accentForeground: '#fdfdfd', border: '#4a4a4a', input: '#1e1e1e', ring: '#607888',
      midground: '#608080', midgroundForeground: '#0e0e0e', composerRing: '#607888',
      destructive: '#886060', destructiveForeground: '#ebebeb',
      sidebarBackground: '#141414', sidebarBorder: '#4a4a4a', userBubble: '#2a2a2a', userBubbleBorder: '#607888'
    },
    darkColors: null,
    terminal: {
      foreground: '#c8c8c8', cursor: '#607888', selectionBackground: '#2a2a2a', black: '#1e1e1e',
      red: '#886060', green: '#608860', yellow: '#888060', blue: '#607888', magenta: '#608080', cyan: '#809090', white: '#c8c8c8',
      brightBlack: '#3a3a3a', brightRed: '#886060', brightGreen: '#608860', brightYellow: '#888060',
      brightBlue: '#607888', brightMagenta: '#608080', brightCyan: '#809090', brightWhite: '#c8c8c8'
    },
    semantic: { ok: '#608860', warn: '#888060', error: '#886060', tool: '#607888' }
  },
  {
    name: 'pack-green-screen', label: 'Green Screen Pack', description: 'Full desktop pack from the green-screen Hermes skin.',
    colors: {
      background: '#0a0e08', foreground: '#b0e8b0', card: '#0a0e08', cardForeground: '#b0e8b0',
      muted: '#1b2419', mutedForeground: '#6f916d', popover: '#0a1808', popoverForeground: '#b0e8b0',
      primary: '#40b840', primaryForeground: '#0a0e08', secondary: '#0a1808', secondaryForeground: '#b0e8b0',
      accent: '#50e050', accentForeground: '#0a0e08', border: '#308830', input: '#0a0e08', ring: '#50e050',
      midground: '#40b840', midgroundForeground: '#0a0e08', composerRing: '#50e050',
      destructive: '#e05050', destructiveForeground: '#0a0e08',
      sidebarBackground: '#050804', sidebarBorder: '#308830', userBubble: '#0a1808', userBubbleBorder: '#50e050'
    },
    darkColors: null,
    terminal: {
      foreground: '#b0e8b0', cursor: '#50e050', selectionBackground: '#0a1808', black: '#0a0e08',
      red: '#e05050', green: '#50e050', yellow: '#e0e050', blue: '#50e050', magenta: '#40b840', cyan: '#50e050', white: '#b0e8b0',
      brightBlack: '#1a5018', brightRed: '#e05050', brightGreen: '#50e050', brightYellow: '#e0e050',
      brightBlue: '#50e050', brightMagenta: '#40b840', brightCyan: '#50e050', brightWhite: '#b0e8b0'
    },
    semantic: { ok: '#50e050', warn: '#e0e050', error: '#e05050', tool: '#50e050' }
  },
  {
    name: 'pack-hearth-stone', label: 'Hearth Stone Pack', description: 'Full desktop pack from the hearth-stone Hermes skin.',
    colors: {
      background: '#ece7e0', foreground: '#3e3833', card: '#ece7e0', cardForeground: '#3e3833',
      muted: '#e2dcd6', mutedForeground: '#66615b', popover: '#d8cfc2', popoverForeground: '#3e3833',
      primary: '#7a4a30', primaryForeground: '#ece7e0', secondary: '#d8cfc2', secondaryForeground: '#3e3833',
      accent: '#4e6478', accentForeground: '#ece7e0', border: '#cfc6ba', input: '#ece7e0', ring: '#4e6478',
      midground: '#7a4a30', midgroundForeground: '#ece7e0', composerRing: '#4e6478',
      destructive: '#a63e34', destructiveForeground: '#ece7e0',
      sidebarBackground: '#d9d5ce', sidebarBorder: '#cfc6ba', userBubble: '#d8cfc2', userBubbleBorder: '#4e6478'
    },
    darkColors: null,
    terminal: {
      foreground: '#3e3833', cursor: '#4e6478', selectionBackground: '#d8cfc2', black: '#ece7e0',
      red: '#a63e34', green: '#556e36', yellow: '#96701e', blue: '#4e6478', magenta: '#7a4a30', cyan: '#7a4a30', white: '#3e3833',
      brightBlack: '#9b938a', brightRed: '#a63e34', brightGreen: '#556e36', brightYellow: '#96701e',
      brightBlue: '#4e6478', brightMagenta: '#7a4a30', brightCyan: '#7a4a30', brightWhite: '#3e3833'
    },
    semantic: { ok: '#556e36', warn: '#96701e', error: '#a63e34', tool: '#4e6478' }
  },
  {
    name: 'pack-high-noon', label: 'High Noon Pack', description: 'Full desktop pack from the high-noon Hermes skin.',
    colors: {
      background: '#f5f5f0', foreground: '#1a2a44', card: '#f5f5f0', cardForeground: '#1a2a44',
      muted: '#e8e9e6', mutedForeground: '#5f6a76', popover: '#d0d8e8', popoverForeground: '#1a2a44',
      primary: '#3366aa', primaryForeground: '#f5f5f0', secondary: '#d0d8e8', secondaryForeground: '#1a2a44',
      accent: '#3366aa', accentForeground: '#f5f5f0', border: '#335588', input: '#f5f5f0', ring: '#3366aa',
      midground: '#3366aa', midgroundForeground: '#f5f5f0', composerRing: '#3366aa',
      destructive: '#aa2222', destructiveForeground: '#f5f5f0',
      sidebarBackground: '#e8e8e0', sidebarBorder: '#335588', userBubble: '#d0d8e8', userBubbleBorder: '#3366aa'
    },
    darkColors: null,
    terminal: {
      foreground: '#1a2a44', cursor: '#3366aa', selectionBackground: '#d0d8e8', black: '#f5f5f0',
      red: '#aa2222', green: '#227744', yellow: '#aa6622', blue: '#3366aa', magenta: '#3366aa', cyan: '#1a2a44', white: '#1a2a44',
      brightBlack: '#8898a8', brightRed: '#aa2222', brightGreen: '#227744', brightYellow: '#aa6622',
      brightBlue: '#3366aa', brightMagenta: '#3366aa', brightCyan: '#1a2a44', brightWhite: '#1a2a44'
    },
    semantic: { ok: '#227744', warn: '#aa6622', error: '#aa2222', tool: '#3366aa' }
  },
  {
    name: 'pack-ivy-wall', label: 'Ivy Wall Pack', description: 'Full desktop pack from the ivy-wall Hermes skin.',
    colors: {
      background: '#0f1410', foreground: '#cfe0d2', card: '#0f1410', cardForeground: '#cfe0d2',
      muted: '#222823', mutedForeground: '#7f9285', popover: '#1e2c22', popoverForeground: '#cfe0d2',
      primary: '#58a86a', primaryForeground: '#0f1410', secondary: '#1e2c22', secondaryForeground: '#cfe0d2',
      accent: '#64a4a0', accentForeground: '#0f1410', border: '#2a3c30', input: '#0f1410', ring: '#64a4a0',
      midground: '#58a86a', midgroundForeground: '#0f1410', composerRing: '#64a4a0',
      destructive: '#cc6464', destructiveForeground: '#0f1410',
      sidebarBackground: '#080a08', sidebarBorder: '#2a3c30', userBubble: '#1e2c22', userBubbleBorder: '#64a4a0'
    },
    darkColors: null,
    terminal: {
      foreground: '#cfe0d2', cursor: '#64a4a0', selectionBackground: '#1e2c22', black: '#0f1410',
      red: '#cc6464', green: '#64b874', yellow: '#caa652', blue: '#64a4a0', magenta: '#58a86a', cyan: '#58a86a', white: '#cfe0d2',
      brightBlack: '#637a6a', brightRed: '#cc6464', brightGreen: '#64b874', brightYellow: '#caa652',
      brightBlue: '#64a4a0', brightMagenta: '#58a86a', brightCyan: '#58a86a', brightWhite: '#cfe0d2'
    },
    semantic: { ok: '#64b874', warn: '#caa652', error: '#cc6464', tool: '#64a4a0' }
  },
  {
    name: 'pack-jellybean', label: 'Jellybean Pack', description: 'Full desktop pack from the jellybean Hermes skin.',
    colors: {
      background: '#14101c', foreground: '#ece4f4', card: '#14101c', cardForeground: '#ece4f4',
      muted: '#2a2532', mutedForeground: '#948ba0', popover: '#261e34', popoverForeground: '#ece4f4',
      primary: '#6ce0b8', primaryForeground: '#14101c', secondary: '#261e34', secondaryForeground: '#ece4f4',
      accent: '#68b8f0', accentForeground: '#14101c', border: '#342c44', input: '#14101c', ring: '#68b8f0',
      midground: '#6ce0b8', midgroundForeground: '#14101c', composerRing: '#68b8f0',
      destructive: '#f06080', destructiveForeground: '#14101c',
      sidebarBackground: '#0a080e', sidebarBorder: '#342c44', userBubble: '#261e34', userBubbleBorder: '#68b8f0'
    },
    darkColors: null,
    terminal: {
      foreground: '#ece4f4', cursor: '#68b8f0', selectionBackground: '#261e34', black: '#14101c',
      red: '#f06080', green: '#68e090', yellow: '#f0c860', blue: '#68b8f0', magenta: '#6ce0b8', cyan: '#6ce0b8', white: '#ece4f4',
      brightBlack: '#746884', brightRed: '#f06080', brightGreen: '#68e090', brightYellow: '#f0c860',
      brightBlue: '#68b8f0', brightMagenta: '#6ce0b8', brightCyan: '#6ce0b8', brightWhite: '#ece4f4'
    },
    semantic: { ok: '#68e090', warn: '#f0c860', error: '#f06080', tool: '#68b8f0' }
  },
  {
    name: 'pack-kelp-forest', label: 'Kelp Forest Pack', description: 'Full desktop pack from the kelp-forest Hermes skin.',
    colors: {
      background: '#0a1618', foreground: '#d0e4e0', card: '#0a1618', cardForeground: '#d0e4e0',
      muted: '#1e2b2c', mutedForeground: '#789496', popover: '#142c2e', popoverForeground: '#d0e4e0',
      primary: '#54b8a8', primaryForeground: '#0a1618', secondary: '#142c2e', secondaryForeground: '#d0e4e0',
      accent: '#58a8b8', accentForeground: '#0a1618', border: '#1e3a3c', input: '#0a1618', ring: '#58a8b8',
      midground: '#54b8a8', midgroundForeground: '#0a1618', composerRing: '#58a8b8',
      destructive: '#d86868', destructiveForeground: '#0a1618',
      sidebarBackground: '#050b0c', sidebarBorder: '#1e3a3c', userBubble: '#142c2e', userBubbleBorder: '#58a8b8'
    },
    darkColors: null,
    terminal: {
      foreground: '#d0e4e0', cursor: '#58a8b8', selectionBackground: '#142c2e', black: '#0a1618',
      red: '#d86868', green: '#6cc878', yellow: '#d4ac58', blue: '#58a8b8', magenta: '#54b8a8', cyan: '#54b8a8', white: '#d0e4e0',
      brightBlack: '#54787a', brightRed: '#d86868', brightGreen: '#6cc878', brightYellow: '#d4ac58',
      brightBlue: '#58a8b8', brightMagenta: '#54b8a8', brightCyan: '#54b8a8', brightWhite: '#d0e4e0'
    },
    semantic: { ok: '#6cc878', warn: '#d4ac58', error: '#d86868', tool: '#58a8b8' }
  },
  {
    name: 'pack-knit-wool', label: 'Knit Wool Pack', description: 'Full desktop pack from the knit-wool Hermes skin.',
    colors: {
      background: '#ece8ec', foreground: '#403c44', card: '#ece8ec', cardForeground: '#403c44',
      muted: '#e2dee2', mutedForeground: '#65606b', popover: '#ded6e0', popoverForeground: '#403c44',
      primary: '#7c5468', primaryForeground: '#ece8ec', secondary: '#ded6e0', secondaryForeground: '#403c44',
      accent: '#5c6c88', accentForeground: '#efecef', border: '#d2cbd4', input: '#ece8ec', ring: '#5c6c88',
      midground: '#7c5468', midgroundForeground: '#ece8ec', composerRing: '#5c6c88',
      destructive: '#a84438', destructiveForeground: '#ece8ec',
      sidebarBackground: '#d9d5d9', sidebarBorder: '#d2cbd4', userBubble: '#ded6e0', userBubbleBorder: '#5c6c88'
    },
    darkColors: null,
    terminal: {
      foreground: '#403c44', cursor: '#5c6c88', selectionBackground: '#ded6e0', black: '#ece8ec',
      red: '#a84438', green: '#5c7038', yellow: '#9c7420', blue: '#5c6c88', magenta: '#7c5468', cyan: '#7c5468', white: '#403c44',
      brightBlack: '#9c94a4', brightRed: '#a84438', brightGreen: '#5c7038', brightYellow: '#9c7420',
      brightBlue: '#5c6c88', brightMagenta: '#7c5468', brightCyan: '#7c5468', brightWhite: '#403c44'
    },
    semantic: { ok: '#5c7038', warn: '#9c7420', error: '#a84438', tool: '#5c6c88' }
  },
  {
    name: 'pack-laser-lemon', label: 'Laser Lemon Pack', description: 'Full desktop pack from the laser-lemon Hermes skin.',
    colors: {
      background: '#0e0a16', foreground: '#f0e4f8', card: '#0e0a16', cardForeground: '#f0e4f8',
      muted: '#25202d', mutedForeground: '#9185a3', popover: '#221836', popoverForeground: '#f0e4f8',
      primary: '#ffe44c', primaryForeground: '#0e0a16', secondary: '#221836', secondaryForeground: '#f0e4f8',
      accent: '#6ca8ff', accentForeground: '#0e0a16', border: '#322448', input: '#0e0a16', ring: '#6ca8ff',
      midground: '#ffe44c', midgroundForeground: '#0e0a16', composerRing: '#6ca8ff',
      destructive: '#ff5c8c', destructiveForeground: '#0e0a16',
      sidebarBackground: '#07050b', sidebarBorder: '#322448', userBubble: '#221836', userBubbleBorder: '#6ca8ff'
    },
    darkColors: null,
    terminal: {
      foreground: '#f0e4f8', cursor: '#6ca8ff', selectionBackground: '#221836', black: '#0e0a16',
      red: '#ff5c8c', green: '#58e888', yellow: '#ffcc48', blue: '#6ca8ff', magenta: '#ffe44c', cyan: '#ffe44c', white: '#f0e4f8',
      brightBlack: '#706088', brightRed: '#ff5c8c', brightGreen: '#58e888', brightYellow: '#ffcc48',
      brightBlue: '#6ca8ff', brightMagenta: '#ffe44c', brightCyan: '#ffe44c', brightWhite: '#f0e4f8'
    },
    semantic: { ok: '#58e888', warn: '#ffcc48', error: '#ff5c8c', tool: '#6ca8ff' }
  },
  {
    name: 'pack-lavender-dream', label: 'Lavender Dream Pack', description: 'Full desktop pack from the lavender-dream Hermes skin.',
    colors: {
      background: '#1e1a2a', foreground: '#d8d0e8', card: '#1e1a2a', cardForeground: '#d8d0e8',
      muted: '#312c3d', mutedForeground: '#9a92a3', popover: '#2a2038', popoverForeground: '#d8d0e8',
      primary: '#a088c8', primaryForeground: '#1e1a2a', secondary: '#2a2038', secondaryForeground: '#d8d0e8',
      accent: '#88b8d0', accentForeground: '#1e1a2a', border: '#8870a8', input: '#1e1a2a', ring: '#88b8d0',
      midground: '#a088c8', midgroundForeground: '#1e1a2a', composerRing: '#88b8d0',
      destructive: '#c87078', destructiveForeground: '#1e1a2a',
      sidebarBackground: '#141020', sidebarBorder: '#8870a8', userBubble: '#2a2038', userBubbleBorder: '#88b8d0'
    },
    darkColors: null,
    terminal: {
      foreground: '#d8d0e8', cursor: '#88b8d0', selectionBackground: '#2a2038', black: '#1e1a2a',
      red: '#c87078', green: '#88c898', yellow: '#c8a878', blue: '#88b8d0', magenta: '#a088c8', cyan: '#c0a8e0', white: '#d8d0e8',
      brightBlack: '#483858', brightRed: '#c87078', brightGreen: '#88c898', brightYellow: '#c8a878',
      brightBlue: '#88b8d0', brightMagenta: '#a088c8', brightCyan: '#c0a8e0', brightWhite: '#d8d0e8'
    },
    semantic: { ok: '#88c898', warn: '#c8a878', error: '#c87078', tool: '#88b8d0' }
  },
  {
    name: 'pack-lighthouse-beam', label: 'Lighthouse Beam Pack', description: 'Full desktop pack from the lighthouse-beam Hermes skin.',
    colors: {
      background: '#f2f0ea', foreground: '#2a3038', card: '#f2f0ea', cardForeground: '#2a3038',
      muted: '#e6e4df', mutedForeground: '#63666c', popover: '#dcd8cc', popoverForeground: '#2a3038',
      primary: '#96600f', primaryForeground: '#f2f0ea', secondary: '#dcd8cc', secondaryForeground: '#2a3038',
      accent: '#2868a8', accentForeground: '#f2f0ea', border: '#c8c4b8', input: '#f2f0ea', ring: '#2868a8',
      midground: '#96600f', midgroundForeground: '#f2f0ea', composerRing: '#2868a8',
      destructive: '#c04048', destructiveForeground: '#f2f0ea',
      sidebarBackground: '#dfddd7', sidebarBorder: '#c8c4b8', userBubble: '#dcd8cc', userBubbleBorder: '#2868a8'
    },
    darkColors: null,
    terminal: {
      foreground: '#2a3038', cursor: '#2868a8', selectionBackground: '#dcd8cc', black: '#f2f0ea',
      red: '#c04048', green: '#3a7a48', yellow: '#a06c10', blue: '#2868a8', magenta: '#96600f', cyan: '#96600f', white: '#2a3038',
      brightBlack: '#9aa0a8', brightRed: '#c04048', brightGreen: '#3a7a48', brightYellow: '#a06c10',
      brightBlue: '#2868a8', brightMagenta: '#96600f', brightCyan: '#96600f', brightWhite: '#2a3038'
    },
    semantic: { ok: '#3a7a48', warn: '#a06c10', error: '#c04048', tool: '#2868a8' }
  },
  {
    name: 'pack-linen-sage', label: 'Linen Sage Pack', description: 'Full desktop pack from the linen-sage Hermes skin.',
    colors: {
      background: '#f4f0e8', foreground: '#384830', card: '#f4f0e8', cardForeground: '#384830',
      muted: '#e9e6dd', mutedForeground: '#63685a', popover: '#d8d0c0', popoverForeground: '#384830',
      primary: '#687858', primaryForeground: '#faf9f5', secondary: '#d8d0c0', secondaryForeground: '#384830',
      accent: '#587088', accentForeground: '#f4f0e8', border: '#889878', input: '#f4f0e8', ring: '#587088',
      midground: '#687858', midgroundForeground: '#faf9f5', composerRing: '#587088',
      destructive: '#905048', destructiveForeground: '#f4f0e8',
      sidebarBackground: '#e8e4d8', sidebarBorder: '#889878', userBubble: '#d8d0c0', userBubbleBorder: '#587088'
    },
    darkColors: null,
    terminal: {
      foreground: '#384830', cursor: '#587088', selectionBackground: '#d8d0c0', black: '#f4f0e8',
      red: '#905048', green: '#588050', yellow: '#907048', blue: '#587088', magenta: '#687858', cyan: '#384830', white: '#384830',
      brightBlack: '#a8b098', brightRed: '#905048', brightGreen: '#588050', brightYellow: '#907048',
      brightBlue: '#587088', brightMagenta: '#687858', brightCyan: '#384830', brightWhite: '#384830'
    },
    semantic: { ok: '#588050', warn: '#907048', error: '#905048', tool: '#587088' }
  },
  {
    name: 'pack-liquid-silver', label: 'Liquid Silver Pack', description: 'Full desktop pack from the liquid-silver Hermes skin.',
    colors: {
      background: '#121216', foreground: '#d0d0d8', card: '#121216', cardForeground: '#d0d0d8',
      muted: '#252529', mutedForeground: '#8c8c90', popover: '#222230', popoverForeground: '#d0d0d8',
      primary: '#9090a8', primaryForeground: '#121216', secondary: '#222230', secondaryForeground: '#d0d0d8',
      accent: '#78a0c0', accentForeground: '#121216', border: '#707080', input: '#121216', ring: '#78a0c0',
      midground: '#9090a8', midgroundForeground: '#121216', composerRing: '#78a0c0',
      destructive: '#b07080', destructiveForeground: '#121216',
      sidebarBackground: '#08080c', sidebarBorder: '#707080', userBubble: '#222230', userBubbleBorder: '#78a0c0'
    },
    darkColors: null,
    terminal: {
      foreground: '#d0d0d8', cursor: '#78a0c0', selectionBackground: '#222230', black: '#121216',
      red: '#b07080', green: '#78b090', yellow: '#b0a070', blue: '#78a0c0', magenta: '#9090a8', cyan: '#c0c0d0', white: '#d0d0d8',
      brightBlack: '#383840', brightRed: '#b07080', brightGreen: '#78b090', brightYellow: '#b0a070',
      brightBlue: '#78a0c0', brightMagenta: '#9090a8', brightCyan: '#c0c0d0', brightWhite: '#d0d0d8'
    },
    semantic: { ok: '#78b090', warn: '#b0a070', error: '#b07080', tool: '#78a0c0' }
  },
  {
    name: 'pack-manuscript', label: 'Manuscript Pack', description: 'Full desktop pack from the manuscript Hermes skin.',
    colors: {
      background: '#f7f2e7', foreground: '#33302a', card: '#f7f2e7', cardForeground: '#33302a',
      muted: '#ebe6dc', mutedForeground: '#6d675d', popover: '#e6dcc6', popoverForeground: '#33302a',
      primary: '#6a4c22', primaryForeground: '#f7f2e7', secondary: '#e6dcc6', secondaryForeground: '#33302a',
      accent: '#3c5a78', accentForeground: '#f7f2e7', border: '#ddd3bf', input: '#f7f2e7', ring: '#3c5a78',
      midground: '#6a4c22', midgroundForeground: '#f7f2e7', composerRing: '#3c5a78',
      destructive: '#a03428', destructiveForeground: '#f7f2e7',
      sidebarBackground: '#e3dfd5', sidebarBorder: '#ddd3bf', userBubble: '#e6dcc6', userBubbleBorder: '#3c5a78'
    },
    darkColors: null,
    terminal: {
      foreground: '#33302a', cursor: '#3c5a78', selectionBackground: '#e6dcc6', black: '#f7f2e7',
      red: '#a03428', green: '#4a6a2c', yellow: '#93701a', blue: '#3c5a78', magenta: '#6a4c22', cyan: '#6a4c22', white: '#33302a',
      brightBlack: '#a29a8b', brightRed: '#a03428', brightGreen: '#4a6a2c', brightYellow: '#93701a',
      brightBlue: '#3c5a78', brightMagenta: '#6a4c22', brightCyan: '#6a4c22', brightWhite: '#33302a'
    },
    semantic: { ok: '#4a6a2c', warn: '#93701a', error: '#a03428', tool: '#3c5a78' }
  },
  {
    name: 'pack-marginalia', label: 'Marginalia Pack', description: 'Full desktop pack from the marginalia Hermes skin.',
    colors: {
      background: '#faf8f4', foreground: '#2e2c28', card: '#faf8f4', cardForeground: '#2e2c28',
      muted: '#eeece8', mutedForeground: '#6c6a66', popover: '#e8e4da', popoverForeground: '#2e2c28',
      primary: '#8c3c50', primaryForeground: '#faf8f4', secondary: '#e8e4da', secondaryForeground: '#2e2c28',
      accent: '#3c5a80', accentForeground: '#faf8f4', border: '#dedad2', input: '#faf8f4', ring: '#3c5a80',
      midground: '#8c3c50', midgroundForeground: '#faf8f4', composerRing: '#3c5a80',
      destructive: '#a83240', destructiveForeground: '#faf8f4',
      sidebarBackground: '#e6e4e0', sidebarBorder: '#dedad2', userBubble: '#e8e4da', userBubbleBorder: '#3c5a80'
    },
    darkColors: null,
    terminal: {
      foreground: '#2e2c28', cursor: '#3c5a80', selectionBackground: '#e8e4da', black: '#faf8f4',
      red: '#a83240', green: '#3f6a34', yellow: '#957018', blue: '#3c5a80', magenta: '#8c3c50', cyan: '#8c3c50', white: '#2e2c28',
      brightBlack: '#a4a09a', brightRed: '#a83240', brightGreen: '#3f6a34', brightYellow: '#957018',
      brightBlue: '#3c5a80', brightMagenta: '#8c3c50', brightCyan: '#8c3c50', brightWhite: '#2e2c28'
    },
    semantic: { ok: '#3f6a34', warn: '#957018', error: '#a83240', tool: '#3c5a80' }
  },
  {
    name: 'pack-mesa-verde', label: 'Mesa Verde Pack', description: 'Full desktop pack from the mesa-verde Hermes skin.',
    colors: {
      background: '#181410', foreground: '#e2d8c8', card: '#181410', cardForeground: '#e2d8c8',
      muted: '#2c2822', mutedForeground: '#968e7f', popover: '#302a20', popoverForeground: '#e2d8c8',
      primary: '#9a9a52', primaryForeground: '#181410', secondary: '#302a20', secondaryForeground: '#e2d8c8',
      accent: '#7a9a60', accentForeground: '#181410', border: '#443a2e', input: '#181410', ring: '#7a9a60',
      midground: '#9a9a52', midgroundForeground: '#181410', composerRing: '#7a9a60',
      destructive: '#cc5f50', destructiveForeground: '#181410',
      sidebarBackground: '#0c0a08', sidebarBorder: '#443a2e', userBubble: '#302a20', userBubbleBorder: '#7a9a60'
    },
    darkColors: null,
    terminal: {
      foreground: '#e2d8c8', cursor: '#7a9a60', selectionBackground: '#302a20', black: '#181410',
      red: '#cc5f50', green: '#8aa858', yellow: '#d0a048', blue: '#7a9a60', magenta: '#9a9a52', cyan: '#9a9a52', white: '#e2d8c8',
      brightBlack: '#847a68', brightRed: '#cc5f50', brightGreen: '#8aa858', brightYellow: '#d0a048',
      brightBlue: '#7a9a60', brightMagenta: '#9a9a52', brightCyan: '#9a9a52', brightWhite: '#e2d8c8'
    },
    semantic: { ok: '#8aa858', warn: '#d0a048', error: '#cc5f50', tool: '#7a9a60' }
  },
  {
    name: 'pack-midnight-studio', label: 'Midnight Studio Pack', description: 'Full desktop pack from the midnight-studio Hermes skin.',
    colors: {
      background: '#1a1a2e', foreground: '#d8d0c8', card: '#1a1a2e', cardForeground: '#d8d0c8',
      muted: '#2d2c3d', mutedForeground: '#9893a6', popover: '#282840', popoverForeground: '#d8d0c8',
      primary: '#c8a050', primaryForeground: '#1a1a2e', secondary: '#282840', secondaryForeground: '#d8d0c8',
      accent: '#7088b0', accentForeground: '#1a1a2e', border: '#504868', input: '#1a1a2e', ring: '#7088b0',
      midground: '#c8a050', midgroundForeground: '#1a1a2e', composerRing: '#7088b0',
      destructive: '#b05850', destructiveForeground: '#f8f8f9',
      sidebarBackground: '#121224', sidebarBorder: '#504868', userBubble: '#282840', userBubbleBorder: '#7088b0'
    },
    darkColors: null,
    terminal: {
      foreground: '#d8d0c8', cursor: '#7088b0', selectionBackground: '#282840', black: '#1a1a2e',
      red: '#b05850', green: '#80a870', yellow: '#d8a040', blue: '#7088b0', magenta: '#c8a050', cyan: '#e8d080', white: '#d8d0c8',
      brightBlack: '#504868', brightRed: '#b05850', brightGreen: '#80a870', brightYellow: '#d8a040',
      brightBlue: '#7088b0', brightMagenta: '#c8a050', brightCyan: '#e8d080', brightWhite: '#d8d0c8'
    },
    semantic: { ok: '#80a870', warn: '#d8a040', error: '#b05850', tool: '#7088b0' }
  },
  {
    name: 'pack-mirage', label: 'Mirage Pack', description: 'Full desktop pack from the mirage Hermes skin.',
    colors: {
      background: '#f4ece0', foreground: '#40342a', card: '#f4ece0', cardForeground: '#40342a',
      muted: '#e9e1d5', mutedForeground: '#6d6358', popover: '#e0d4c0', popoverForeground: '#40342a',
      primary: '#a85c20', primaryForeground: '#f8f3eb', secondary: '#e0d4c0', secondaryForeground: '#40342a',
      accent: '#906040', accentForeground: '#f4ece0', border: '#d4c4b0', input: '#f4ece0', ring: '#906040',
      midground: '#a85c20', midgroundForeground: '#f8f3eb', composerRing: '#906040',
      destructive: '#b03830', destructiveForeground: '#f4ece0',
      sidebarBackground: '#e0d9ce', sidebarBorder: '#d4c4b0', userBubble: '#e0d4c0', userBubbleBorder: '#906040'
    },
    darkColors: null,
    terminal: {
      foreground: '#40342a', cursor: '#906040', selectionBackground: '#e0d4c0', black: '#f4ece0',
      red: '#b03830', green: '#5a7a38', yellow: '#9c7014', blue: '#906040', magenta: '#a85c20', cyan: '#a85c20', white: '#40342a',
      brightBlack: '#a89888', brightRed: '#b03830', brightGreen: '#5a7a38', brightYellow: '#9c7014',
      brightBlue: '#906040', brightMagenta: '#a85c20', brightCyan: '#a85c20', brightWhite: '#40342a'
    },
    semantic: { ok: '#5a7a38', warn: '#9c7014', error: '#b03830', tool: '#906040' }
  },
  {
    name: 'pack-moss-stone', label: 'Moss Stone Pack', description: 'Full desktop pack from the moss-stone Hermes skin.',
    colors: {
      background: '#1c2018', foreground: '#c8d0b8', card: '#1c2018', cardForeground: '#c8d0b8',
      muted: '#2d3228', mutedForeground: '#959a8f', popover: '#283020', popoverForeground: '#c8d0b8',
      primary: '#788860', primaryForeground: '#191c15', secondary: '#283020', secondaryForeground: '#c8d0b8',
      accent: '#7098a0', accentForeground: '#1c2018', border: '#6a7a5a', input: '#1c2018', ring: '#7098a0',
      midground: '#788860', midgroundForeground: '#191c15', composerRing: '#7098a0',
      destructive: '#b87060', destructiveForeground: '#191c15',
      sidebarBackground: '#121610', sidebarBorder: '#6a7a5a', userBubble: '#283020', userBubbleBorder: '#7098a0'
    },
    darkColors: null,
    terminal: {
      foreground: '#c8d0b8', cursor: '#7098a0', selectionBackground: '#283020', black: '#1c2018',
      red: '#b87060', green: '#80b870', yellow: '#c0a860', blue: '#7098a0', magenta: '#788860', cyan: '#90a878', white: '#c8d0b8',
      brightBlack: '#3a4430', brightRed: '#b87060', brightGreen: '#80b870', brightYellow: '#c0a860',
      brightBlue: '#7098a0', brightMagenta: '#788860', brightCyan: '#90a878', brightWhite: '#c8d0b8'
    },
    semantic: { ok: '#80b870', warn: '#c0a860', error: '#b87060', tool: '#7098a0' }
  },
  {
    name: 'pack-nebula-drift', label: 'Nebula Drift Pack', description: 'Full desktop pack from the nebula-drift Hermes skin.',
    colors: {
      background: '#120e1e', foreground: '#ded8ec', card: '#120e1e', cardForeground: '#ded8ec',
      muted: '#262233', mutedForeground: '#8e889f', popover: '#261e38', popoverForeground: '#ded8ec',
      primary: '#a878e8', primaryForeground: '#120e1e', secondary: '#261e38', secondaryForeground: '#ded8ec',
      accent: '#7888e0', accentForeground: '#120e1e', border: '#342c48', input: '#120e1e', ring: '#7888e0',
      midground: '#a878e8', midgroundForeground: '#120e1e', composerRing: '#7888e0',
      destructive: '#e06080', destructiveForeground: '#120e1e',
      sidebarBackground: '#09070f', sidebarBorder: '#342c48', userBubble: '#261e38', userBubbleBorder: '#7888e0'
    },
    darkColors: null,
    terminal: {
      foreground: '#ded8ec', cursor: '#7888e0', selectionBackground: '#261e38', black: '#120e1e',
      red: '#e06080', green: '#70c890', yellow: '#d8b060', blue: '#7888e0', magenta: '#a878e8', cyan: '#a878e8', white: '#ded8ec',
      brightBlack: '#6c6482', brightRed: '#e06080', brightGreen: '#70c890', brightYellow: '#d8b060',
      brightBlue: '#7888e0', brightMagenta: '#a878e8', brightCyan: '#a878e8', brightWhite: '#ded8ec'
    },
    semantic: { ok: '#70c890', warn: '#d8b060', error: '#e06080', tool: '#7888e0' }
  },
  {
    name: 'pack-neon-ghost', label: 'Neon Ghost Pack', description: 'Full desktop pack from the neon-ghost Hermes skin.',
    colors: {
      background: '#0a0a0f', foreground: '#e0e0ff', card: '#0a0a0f', cardForeground: '#e0e0ff',
      muted: '#1f1f27', mutedForeground: '#a375b6', popover: '#2a1040', popoverForeground: '#e0e0ff',
      primary: '#ff00ff', primaryForeground: '#0a0a0f', secondary: '#2a1040', secondaryForeground: '#e0e0ff',
      accent: '#00ffff', accentForeground: '#0a0a0f', border: '#ff00ff', input: '#0a0a0f', ring: '#00ffff',
      midground: '#ff00ff', midgroundForeground: '#0a0a0f', composerRing: '#00ffff',
      destructive: '#ff3366', destructiveForeground: '#0a0a0f',
      sidebarBackground: '#05050a', sidebarBorder: '#ff00ff', userBubble: '#2a1040', userBubbleBorder: '#00ffff'
    },
    darkColors: null,
    terminal: {
      foreground: '#e0e0ff', cursor: '#00ffff', selectionBackground: '#2a1040', black: '#0a0a0f',
      red: '#ff3366', green: '#00ff88', yellow: '#ffaa00', blue: '#00ffff', magenta: '#ff00ff', cyan: '#00ffff', white: '#e0e0ff',
      brightBlack: '#7d3c98', brightRed: '#ff3366', brightGreen: '#00ff88', brightYellow: '#ffaa00',
      brightBlue: '#00ffff', brightMagenta: '#ff00ff', brightCyan: '#00ffff', brightWhite: '#e0e0ff'
    },
    semantic: { ok: '#00ff88', warn: '#ffaa00', error: '#ff3366', tool: '#00ffff' }
  },
  {
    name: 'pack-neon-koi', label: 'Neon Koi Pack', description: 'Full desktop pack from the neon-koi Hermes skin.',
    colors: {
      background: '#0a0e14', foreground: '#e4ecf2', card: '#0a0e14', cardForeground: '#e4ecf2',
      muted: '#20242a', mutedForeground: '#7f8d99', popover: '#18222e', popoverForeground: '#e4ecf2',
      primary: '#ff7a3c', primaryForeground: '#0a0e14', secondary: '#18222e', secondaryForeground: '#e4ecf2',
      accent: '#48c0e8', accentForeground: '#0a0e14', border: '#223040', input: '#0a0e14', ring: '#48c0e8',
      midground: '#ff7a3c', midgroundForeground: '#0a0e14', composerRing: '#48c0e8',
      destructive: '#ff5c5c', destructiveForeground: '#0a0e14',
      sidebarBackground: '#05070a', sidebarBorder: '#223040', userBubble: '#18222e', userBubbleBorder: '#48c0e8'
    },
    darkColors: null,
    terminal: {
      foreground: '#e4ecf2', cursor: '#48c0e8', selectionBackground: '#18222e', black: '#0a0e14',
      red: '#ff5c5c', green: '#58e0a0', yellow: '#ffc858', blue: '#48c0e8', magenta: '#ff7a3c', cyan: '#ff7a3c', white: '#e4ecf2',
      brightBlack: '#5f7080', brightRed: '#ff5c5c', brightGreen: '#58e0a0', brightYellow: '#ffc858',
      brightBlue: '#48c0e8', brightMagenta: '#ff7a3c', brightCyan: '#ff7a3c', brightWhite: '#e4ecf2'
    },
    semantic: { ok: '#58e0a0', warn: '#ffc858', error: '#ff5c5c', tool: '#48c0e8' }
  },
  {
    name: 'pack-netrunner', label: 'Netrunner Pack', description: 'Full desktop pack from the netrunner Hermes skin.',
    colors: {
      background: '#0a1628', foreground: '#d0e0f0', card: '#0a1628', cardForeground: '#d0e0f0',
      muted: '#1e2a3c', mutedForeground: '#7b92aa', popover: '#1a2a40', popoverForeground: '#d0e0f0',
      primary: '#ffb000', primaryForeground: '#0a1628', secondary: '#1a2a40', secondaryForeground: '#d0e0f0',
      accent: '#00d4aa', accentForeground: '#0a1628', border: '#ffb000', input: '#0a1628', ring: '#00d4aa',
      midground: '#ffb000', midgroundForeground: '#0a1628', composerRing: '#00d4aa',
      destructive: '#ff3344', destructiveForeground: '#0a1628',
      sidebarBackground: '#050e1a', sidebarBorder: '#ffb000', userBubble: '#1a2a40', userBubbleBorder: '#00d4aa'
    },
    darkColors: null,
    terminal: {
      foreground: '#d0e0f0', cursor: '#00d4aa', selectionBackground: '#1a2a40', black: '#0a1628',
      red: '#ff3344', green: '#00d4aa', yellow: '#ffb000', blue: '#00d4aa', magenta: '#ffb000', cyan: '#00d4aa', white: '#d0e0f0',
      brightBlack: '#4a6a8a', brightRed: '#ff3344', brightGreen: '#00d4aa', brightYellow: '#ffb000',
      brightBlue: '#00d4aa', brightMagenta: '#ffb000', brightCyan: '#00d4aa', brightWhite: '#d0e0f0'
    },
    semantic: { ok: '#00d4aa', warn: '#ffb000', error: '#ff3344', tool: '#00d4aa' }
  },
  {
    name: 'pack-newsprint-noir', label: 'Newsprint Noir Pack', description: 'Full desktop pack from the newsprint-noir Hermes skin.',
    colors: {
      background: '#101012', foreground: '#d8d8e0', card: '#101012', cardForeground: '#d8d8e0',
      muted: '#242427', mutedForeground: '#8a8a93', popover: '#202028', popoverForeground: '#d8d8e0',
      primary: '#787890', primaryForeground: '#0d0d0f', secondary: '#202028', secondaryForeground: '#d8d8e0',
      accent: '#6090a0', accentForeground: '#101012', border: '#505870', input: '#101012', ring: '#6090a0',
      midground: '#787890', midgroundForeground: '#0d0d0f', composerRing: '#6090a0',
      destructive: '#b05850', destructiveForeground: '#f8f8f8',
      sidebarBackground: '#08080a', sidebarBorder: '#505870', userBubble: '#202028', userBubbleBorder: '#6090a0'
    },
    darkColors: null,
    terminal: {
      foreground: '#d8d8e0', cursor: '#6090a0', selectionBackground: '#202028', black: '#101012',
      red: '#b05850', green: '#60a070', yellow: '#c0a860', blue: '#6090a0', magenta: '#787890', cyan: '#d0d0d8', white: '#d8d8e0',
      brightBlack: '#383848', brightRed: '#b05850', brightGreen: '#60a070', brightYellow: '#c0a860',
      brightBlue: '#6090a0', brightMagenta: '#787890', brightCyan: '#d0d0d8', brightWhite: '#d8d8e0'
    },
    semantic: { ok: '#60a070', warn: '#c0a860', error: '#b05850', tool: '#6090a0' }
  },
  {
    name: 'pack-obsidian', label: 'Obsidian Pack', description: 'Full desktop pack from the obsidian Hermes skin.',
    colors: {
      background: '#0f0f0f', foreground: '#d0d0d0', card: '#0f0f0f', cardForeground: '#d0d0d0',
      muted: '#222222', mutedForeground: '#898989', popover: '#222222', popoverForeground: '#d0d0d0',
      primary: '#787878', primaryForeground: '#090909', secondary: '#222222', secondaryForeground: '#d0d0d0',
      accent: '#6088c0', accentForeground: '#0f0f0f', border: '#555555', input: '#0f0f0f', ring: '#6088c0',
      midground: '#787878', midgroundForeground: '#090909', composerRing: '#6088c0',
      destructive: '#c05050', destructiveForeground: '#fdfdfd',
      sidebarBackground: '#080808', sidebarBorder: '#555555', userBubble: '#222222', userBubbleBorder: '#6088c0'
    },
    darkColors: null,
    terminal: {
      foreground: '#d0d0d0', cursor: '#6088c0', selectionBackground: '#222222', black: '#0f0f0f',
      red: '#c05050', green: '#6aaa64', yellow: '#c8a050', blue: '#6088c0', magenta: '#787878', cyan: '#a0a0a0', white: '#d0d0d0',
      brightBlack: '#444444', brightRed: '#c05050', brightGreen: '#6aaa64', brightYellow: '#c8a050',
      brightBlue: '#6088c0', brightMagenta: '#787878', brightCyan: '#a0a0a0', brightWhite: '#d0d0d0'
    },
    semantic: { ok: '#6aaa64', warn: '#c8a050', error: '#c05050', tool: '#6088c0' }
  },
  {
    name: 'pack-peach-fuzz', label: 'Peach Fuzz Pack', description: 'Full desktop pack from the peach-fuzz Hermes skin.',
    colors: {
      background: '#201c18', foreground: '#e8d8c8', card: '#201c18', cardForeground: '#e8d8c8',
      muted: '#342f2a', mutedForeground: '#a0978e', popover: '#2a2218', popoverForeground: '#e8d8c8',
      primary: '#e0a080', primaryForeground: '#201c18', secondary: '#2a2218', secondaryForeground: '#e8d8c8',
      accent: '#90b8c0', accentForeground: '#201c18', border: '#d89070', input: '#201c18', ring: '#90b8c0',
      midground: '#e0a080', midgroundForeground: '#201c18', composerRing: '#90b8c0',
      destructive: '#d07068', destructiveForeground: '#201c18',
      sidebarBackground: '#141210', sidebarBorder: '#d89070', userBubble: '#2a2218', userBubbleBorder: '#90b8c0'
    },
    darkColors: null,
    terminal: {
      foreground: '#e8d8c8', cursor: '#90b8c0', selectionBackground: '#2a2218', black: '#201c18',
      red: '#d07068', green: '#90c090', yellow: '#e0b870', blue: '#90b8c0', magenta: '#e0a080', cyan: '#f0c8a8', white: '#e8d8c8',
      brightBlack: '#584838', brightRed: '#d07068', brightGreen: '#90c090', brightYellow: '#e0b870',
      brightBlue: '#90b8c0', brightMagenta: '#e0a080', brightCyan: '#f0c8a8', brightWhite: '#e8d8c8'
    },
    semantic: { ok: '#90c090', warn: '#e0b870', error: '#d07068', tool: '#90b8c0' }
  },
  {
    name: 'pack-pencil-sketch', label: 'Pencil Sketch Pack', description: 'Full desktop pack from the pencil-sketch Hermes skin.',
    colors: {
      background: '#f5f5f2', foreground: '#3a3a38', card: '#f5f5f2', cardForeground: '#3a3a38',
      muted: '#eaeae7', mutedForeground: '#696965', popover: '#e2e2d9', popoverForeground: '#3a3a38',
      primary: '#5c5c56', primaryForeground: '#f5f5f2', secondary: '#e2e2d9', secondaryForeground: '#3a3a38',
      accent: '#5a6a7a', accentForeground: '#f5f5f2', border: '#d5d5cd', input: '#f5f5f2', ring: '#5a6a7a',
      midground: '#5c5c56', midgroundForeground: '#f5f5f2', composerRing: '#5a6a7a',
      destructive: '#a03c34', destructiveForeground: '#f5f5f2',
      sidebarBackground: '#e1e1df', sidebarBorder: '#d5d5cd', userBubble: '#e2e2d9', userBubbleBorder: '#5a6a7a'
    },
    darkColors: null,
    terminal: {
      foreground: '#3a3a38', cursor: '#5a6a7a', selectionBackground: '#e2e2d9', black: '#f5f5f2',
      red: '#a03c34', green: '#4c6a38', yellow: '#8c7420', blue: '#5a6a7a', magenta: '#5c5c56', cyan: '#5c5c56', white: '#3a3a38',
      brightBlack: '#a2a29c', brightRed: '#a03c34', brightGreen: '#4c6a38', brightYellow: '#8c7420',
      brightBlue: '#5a6a7a', brightMagenta: '#5c5c56', brightCyan: '#5c5c56', brightWhite: '#3a3a38'
    },
    semantic: { ok: '#4c6a38', warn: '#8c7420', error: '#a03c34', tool: '#5a6a7a' }
  },
  {
    name: 'pack-phosphor-burn', label: 'Phosphor Burn Pack', description: 'Full desktop pack from the phosphor-burn Hermes skin.',
    colors: {
      background: '#0a0c08', foreground: '#d0e8c0', card: '#0a0c08', cardForeground: '#d0e8c0',
      muted: '#1e221a', mutedForeground: '#768e6c', popover: '#16220f', popoverForeground: '#d0e8c0',
      primary: '#a0e040', primaryForeground: '#0a0c08', secondary: '#16220f', secondaryForeground: '#d0e8c0',
      accent: '#68b888', accentForeground: '#0a0c08', border: '#22301a', input: '#0a0c08', ring: '#68b888',
      midground: '#a0e040', midgroundForeground: '#0a0c08', composerRing: '#68b888',
      destructive: '#d06858', destructiveForeground: '#0a0c08',
      sidebarBackground: '#050604', sidebarBorder: '#22301a', userBubble: '#16220f', userBubbleBorder: '#68b888'
    },
    darkColors: null,
    terminal: {
      foreground: '#d0e8c0', cursor: '#68b888', selectionBackground: '#16220f', black: '#0a0c08',
      red: '#d06858', green: '#90d858', yellow: '#d8b850', blue: '#68b888', magenta: '#a0e040', cyan: '#a0e040', white: '#d0e8c0',
      brightBlack: '#5c7850', brightRed: '#d06858', brightGreen: '#90d858', brightYellow: '#d8b850',
      brightBlue: '#68b888', brightMagenta: '#a0e040', brightCyan: '#a0e040', brightWhite: '#d0e8c0'
    },
    semantic: { ok: '#90d858', warn: '#d8b850', error: '#d06858', tool: '#68b888' }
  },
  {
    name: 'pack-pulsar', label: 'Pulsar Pack', description: 'Full desktop pack from the pulsar Hermes skin.',
    colors: {
      background: '#0a0c14', foreground: '#d0daec', card: '#0a0c14', cardForeground: '#d0daec',
      muted: '#1e212a', mutedForeground: '#7d889d', popover: '#16202e', popoverForeground: '#d0daec',
      primary: '#58c8e8', primaryForeground: '#0a0c14', secondary: '#16202e', secondaryForeground: '#d0daec',
      accent: '#58b0dc', accentForeground: '#0a0c14', border: '#1f2a3c', input: '#0a0c14', ring: '#58b0dc',
      midground: '#58c8e8', midgroundForeground: '#0a0c14', composerRing: '#58b0dc',
      destructive: '#e06270', destructiveForeground: '#0a0c14',
      sidebarBackground: '#05060a', sidebarBorder: '#1f2a3c', userBubble: '#16202e', userBubbleBorder: '#58b0dc'
    },
    darkColors: null,
    terminal: {
      foreground: '#d0daec', cursor: '#58b0dc', selectionBackground: '#16202e', black: '#0a0c14',
      red: '#e06270', green: '#5ec890', yellow: '#dab060', blue: '#58b0dc', magenta: '#58c8e8', cyan: '#58c8e8', white: '#d0daec',
      brightBlack: '#5c6a84', brightRed: '#e06270', brightGreen: '#5ec890', brightYellow: '#dab060',
      brightBlue: '#58b0dc', brightMagenta: '#58c8e8', brightCyan: '#58c8e8', brightWhite: '#d0daec'
    },
    semantic: { ok: '#5ec890', warn: '#dab060', error: '#e06270', tool: '#58b0dc' }
  },
  {
    name: 'pack-red-alert', label: 'Red Alert Pack', description: 'Full desktop pack from the red-alert Hermes skin.',
    colors: {
      background: '#0a0a0a', foreground: '#e8e0e0', card: '#0a0a0a', cardForeground: '#e8e0e0',
      muted: '#201f1f', mutedForeground: '#a57d7d', popover: '#2a1010', popoverForeground: '#e8e0e0',
      primary: '#ff4400', primaryForeground: '#0a0a0a', secondary: '#2a1010', secondaryForeground: '#e8e0e0',
      accent: '#ff6644', accentForeground: '#0a0a0a', border: '#cc2222', input: '#0a0a0a', ring: '#ff6644',
      midground: '#ff4400', midgroundForeground: '#0a0a0a', composerRing: '#ff6644',
      destructive: '#ff2222', destructiveForeground: '#0a0a0a',
      sidebarBackground: '#050505', sidebarBorder: '#cc2222', userBubble: '#2a1010', userBubbleBorder: '#ff6644'
    },
    darkColors: null,
    terminal: {
      foreground: '#e8e0e0', cursor: '#ff6644', selectionBackground: '#2a1010', black: '#0a0a0a',
      red: '#ff2222', green: '#44cc44', yellow: '#ff8800', blue: '#ff6644', magenta: '#ff4400', cyan: '#ffffff', white: '#e8e0e0',
      brightBlack: '#662222', brightRed: '#ff2222', brightGreen: '#44cc44', brightYellow: '#ff8800',
      brightBlue: '#ff6644', brightMagenta: '#ff4400', brightCyan: '#ffffff', brightWhite: '#e8e0e0'
    },
    semantic: { ok: '#44cc44', warn: '#ff8800', error: '#ff2222', tool: '#ff6644' }
  },
  {
    name: 'pack-redwood', label: 'Redwood Pack', description: 'Full desktop pack from the redwood Hermes skin.',
    colors: {
      background: '#1e1814', foreground: '#d8d0c0', card: '#1e1814', cardForeground: '#d8d0c0',
      muted: '#312a25', mutedForeground: '#9a9087', popover: '#2a201a', popoverForeground: '#d8d0c0',
      primary: '#8a7050', primaryForeground: '#fdfdfd', secondary: '#2a201a', secondaryForeground: '#d8d0c0',
      accent: '#80a868', accentForeground: '#1e1814', border: '#6b8a5a', input: '#1e1814', ring: '#80a868',
      midground: '#8a7050', midgroundForeground: '#fdfdfd', composerRing: '#80a868',
      destructive: '#b87050', destructiveForeground: '#1e1814',
      sidebarBackground: '#14100c', sidebarBorder: '#6b8a5a', userBubble: '#2a201a', userBubbleBorder: '#80a868'
    },
    darkColors: null,
    terminal: {
      foreground: '#d8d0c0', cursor: '#80a868', selectionBackground: '#2a201a', black: '#1e1814',
      red: '#b87050', green: '#90b870', yellow: '#c8a050', blue: '#80a868', magenta: '#8a7050', cyan: '#a0c080', white: '#d8d0c0',
      brightBlack: '#4a3828', brightRed: '#b87050', brightGreen: '#90b870', brightYellow: '#c8a050',
      brightBlue: '#80a868', brightMagenta: '#8a7050', brightCyan: '#a0c080', brightWhite: '#d8d0c0'
    },
    semantic: { ok: '#90b870', warn: '#c8a050', error: '#b87050', tool: '#80a868' }
  },
  {
    name: 'pack-rice-paper', label: 'Rice Paper Pack', description: 'Full desktop pack from the rice-paper Hermes skin.',
    colors: {
      background: '#fafaf5', foreground: '#1a1a1a', card: '#fafaf5', cardForeground: '#1a1a1a',
      muted: '#edede8', mutedForeground: '#6b6b6b', popover: '#e0e0d8', popoverForeground: '#1a1a1a',
      primary: '#cc3333', primaryForeground: '#fafaf5', secondary: '#e0e0d8', secondaryForeground: '#1a1a1a',
      accent: '#336688', accentForeground: '#fafaf5', border: '#888888', input: '#fafaf5', ring: '#336688',
      midground: '#cc3333', midgroundForeground: '#fafaf5', composerRing: '#336688',
      destructive: '#cc3333', destructiveForeground: '#fafaf5',
      sidebarBackground: '#efefe8', sidebarBorder: '#888888', userBubble: '#e0e0d8', userBubbleBorder: '#336688'
    },
    darkColors: null,
    terminal: {
      foreground: '#1a1a1a', cursor: '#336688', selectionBackground: '#e0e0d8', black: '#fafaf5',
      red: '#cc3333', green: '#408040', yellow: '#aa6622', blue: '#336688', magenta: '#cc3333', cyan: '#1a1a1a', white: '#1a1a1a',
      brightBlack: '#aaaaaa', brightRed: '#cc3333', brightGreen: '#408040', brightYellow: '#aa6622',
      brightBlue: '#336688', brightMagenta: '#cc3333', brightCyan: '#1a1a1a', brightWhite: '#1a1a1a'
    },
    semantic: { ok: '#408040', warn: '#aa6622', error: '#cc3333', tool: '#336688' }
  },
  {
    name: 'pack-rust-belt', label: 'Rust Belt Pack', description: 'Full desktop pack from the rust-belt Hermes skin.',
    colors: {
      background: '#161210', foreground: '#ddd2c4', card: '#161210', cardForeground: '#ddd2c4',
      muted: '#2a2522', mutedForeground: '#948b82', popover: '#2c2620', popoverForeground: '#ddd2c4',
      primary: '#c06434', primaryForeground: '#161210', secondary: '#2c2620', secondaryForeground: '#ddd2c4',
      accent: '#a07850', accentForeground: '#161210', border: '#3e342c', input: '#161210', ring: '#a07850',
      midground: '#c06434', midgroundForeground: '#161210', composerRing: '#a07850',
      destructive: '#cc5240', destructiveForeground: '#0e0c0a',
      sidebarBackground: '#0b0908', sidebarBorder: '#3e342c', userBubble: '#2c2620', userBubbleBorder: '#a07850'
    },
    darkColors: null,
    terminal: {
      foreground: '#ddd2c4', cursor: '#a07850', selectionBackground: '#2c2620', black: '#161210',
      red: '#cc5240', green: '#949e52', yellow: '#ce9c46', blue: '#a07850', magenta: '#c06434', cyan: '#c06434', white: '#ddd2c4',
      brightBlack: '#7d7266', brightRed: '#cc5240', brightGreen: '#949e52', brightYellow: '#ce9c46',
      brightBlue: '#a07850', brightMagenta: '#c06434', brightCyan: '#c06434', brightWhite: '#ddd2c4'
    },
    semantic: { ok: '#949e52', warn: '#ce9c46', error: '#cc5240', tool: '#a07850' }
  },
  {
    name: 'pack-sahara-dusk', label: 'Sahara Dusk Pack', description: 'Full desktop pack from the sahara-dusk Hermes skin.',
    colors: {
      background: '#1c130c', foreground: '#ecdcc4', card: '#1c130c', cardForeground: '#ecdcc4',
      muted: '#31271e', mutedForeground: '#9e8c7b', popover: '#38281a', popoverForeground: '#ecdcc4',
      primary: '#e8a34c', primaryForeground: '#1c130c', secondary: '#38281a', secondaryForeground: '#ecdcc4',
      accent: '#c87f58', accentForeground: '#1c130c', border: '#4a3626', input: '#1c130c', ring: '#c87f58',
      midground: '#e8a34c', midgroundForeground: '#1c130c', composerRing: '#c87f58',
      destructive: '#d85c50', destructiveForeground: '#1c130c',
      sidebarBackground: '#0e0a06', sidebarBorder: '#4a3626', userBubble: '#38281a', userBubbleBorder: '#c87f58'
    },
    darkColors: null,
    terminal: {
      foreground: '#ecdcc4', cursor: '#c87f58', selectionBackground: '#38281a', black: '#1c130c',
      red: '#d85c50', green: '#98b85c', yellow: '#e0b050', blue: '#c87f58', magenta: '#e8a34c', cyan: '#e8a34c', white: '#ecdcc4',
      brightBlack: '#8a7460', brightRed: '#d85c50', brightGreen: '#98b85c', brightYellow: '#e0b050',
      brightBlue: '#c87f58', brightMagenta: '#e8a34c', brightCyan: '#e8a34c', brightWhite: '#ecdcc4'
    },
    semantic: { ok: '#98b85c', warn: '#e0b050', error: '#d85c50', tool: '#c87f58' }
  },
  {
    name: 'pack-sandstone', label: 'Sandstone Pack', description: 'Full desktop pack from the sandstone Hermes skin.',
    colors: {
      background: '#1e1a14', foreground: '#e8dcc8', card: '#1e1a14', cardForeground: '#e8dcc8',
      muted: '#322d26', mutedForeground: '#a19289', popover: '#2a2018', popoverForeground: '#e8dcc8',
      primary: '#c87840', primaryForeground: '#1e1a14', secondary: '#2a2018', secondaryForeground: '#e8dcc8',
      accent: '#80a0c0', accentForeground: '#1e1a14', border: '#b89060', input: '#1e1a14', ring: '#80a0c0',
      midground: '#c87840', midgroundForeground: '#1e1a14', composerRing: '#80a0c0',
      destructive: '#b05838', destructiveForeground: '#f6f6f6',
      sidebarBackground: '#14100c', sidebarBorder: '#b89060', userBubble: '#2a2018', userBubbleBorder: '#80a0c0'
    },
    darkColors: null,
    terminal: {
      foreground: '#e8dcc8', cursor: '#80a0c0', selectionBackground: '#2a2018', black: '#1e1a14',
      red: '#b05838', green: '#80a860', yellow: '#d8a040', blue: '#80a0c0', magenta: '#c87840', cyan: '#d8b880', white: '#e8dcc8',
      brightBlack: '#5a4030', brightRed: '#b05838', brightGreen: '#80a860', brightYellow: '#d8a040',
      brightBlue: '#80a0c0', brightMagenta: '#c87840', brightCyan: '#d8b880', brightWhite: '#e8dcc8'
    },
    semantic: { ok: '#80a860', warn: '#d8a040', error: '#b05838', tool: '#80a0c0' }
  },
  {
    name: 'pack-seafoam-silk', label: 'Seafoam Silk Pack', description: 'Full desktop pack from the seafoam-silk Hermes skin.',
    colors: {
      background: '#1a201e', foreground: '#c8e0d8', card: '#1a201e', cardForeground: '#c8e0d8',
      muted: '#2b3331', mutedForeground: '#8c9e95', popover: '#243028', popoverForeground: '#c8e0d8',
      primary: '#78b898', primaryForeground: '#1a201e', secondary: '#243028', secondaryForeground: '#c8e0d8',
      accent: '#80b8c8', accentForeground: '#1a201e', border: '#68a890', input: '#1a201e', ring: '#80b8c8',
      midground: '#78b898', midgroundForeground: '#1a201e', composerRing: '#80b8c8',
      destructive: '#d08880', destructiveForeground: '#1a201e',
      sidebarBackground: '#101614', sidebarBorder: '#68a890', userBubble: '#243028', userBubbleBorder: '#80b8c8'
    },
    darkColors: null,
    terminal: {
      foreground: '#c8e0d8', cursor: '#80b8c8', selectionBackground: '#243028', black: '#1a201e',
      red: '#d08880', green: '#90d0a0', yellow: '#d0b880', blue: '#80b8c8', magenta: '#78b898', cyan: '#90d0b8', white: '#c8e0d8',
      brightBlack: '#385848', brightRed: '#d08880', brightGreen: '#90d0a0', brightYellow: '#d0b880',
      brightBlue: '#80b8c8', brightMagenta: '#78b898', brightCyan: '#90d0b8', brightWhite: '#c8e0d8'
    },
    semantic: { ok: '#90d0a0', warn: '#d0b880', error: '#d08880', tool: '#80b8c8' }
  },
  {
    name: 'pack-sepia-archive', label: 'Sepia Archive Pack', description: 'Full desktop pack from the sepia-archive Hermes skin.',
    colors: {
      background: '#efe6d4', foreground: '#40332a', card: '#efe6d4', cardForeground: '#40332a',
      muted: '#e4dbca', mutedForeground: '#6b5e50', popover: '#e0d2b6', popoverForeground: '#40332a',
      primary: '#7a4a1c', primaryForeground: '#efe6d4', secondary: '#e0d2b6', secondaryForeground: '#40332a',
      accent: '#7a5638', accentForeground: '#efe6d4', border: '#d8c8ae', input: '#efe6d4', ring: '#7a5638',
      midground: '#7a4a1c', midgroundForeground: '#efe6d4', composerRing: '#7a5638',
      destructive: '#a03a2c', destructiveForeground: '#efe6d4',
      sidebarBackground: '#dcd4c3', sidebarBorder: '#d8c8ae', userBubble: '#e0d2b6', userBubbleBorder: '#7a5638'
    },
    darkColors: null,
    terminal: {
      foreground: '#40332a', cursor: '#7a5638', selectionBackground: '#e0d2b6', black: '#efe6d4',
      red: '#a03a2c', green: '#5c6e2e', yellow: '#9c7014', blue: '#7a5638', magenta: '#7a4a1c', cyan: '#7a4a1c', white: '#40332a',
      brightBlack: '#a08c78', brightRed: '#a03a2c', brightGreen: '#5c6e2e', brightYellow: '#9c7014',
      brightBlue: '#7a5638', brightMagenta: '#7a4a1c', brightCyan: '#7a4a1c', brightWhite: '#40332a'
    },
    semantic: { ok: '#5c6e2e', warn: '#9c7014', error: '#a03a2c', tool: '#7a5638' }
  },
  {
    name: 'pack-shadow-thief', label: 'Shadow Thief Pack', description: 'Full desktop pack from the shadow-thief Hermes skin.',
    colors: {
      background: '#101014', foreground: '#b0b0c0', card: '#101014', cardForeground: '#b0b0c0',
      muted: '#202025', mutedForeground: '#888790', popover: '#201e2a', popoverForeground: '#b0b0c0',
      primary: '#50a8a8', primaryForeground: '#101014', secondary: '#201e2a', secondaryForeground: '#b0b0c0',
      accent: '#50a8a8', accentForeground: '#101014', border: '#4a4060', input: '#101014', ring: '#50a8a8',
      midground: '#50a8a8', midgroundForeground: '#101014', composerRing: '#50a8a8',
      destructive: '#a05060', destructiveForeground: '#e9e9ea',
      sidebarBackground: '#08080c', sidebarBorder: '#4a4060', userBubble: '#201e2a', userBubbleBorder: '#50a8a8'
    },
    darkColors: null,
    terminal: {
      foreground: '#b0b0c0', cursor: '#50a8a8', selectionBackground: '#201e2a', black: '#101014',
      red: '#a05060', green: '#50a070', yellow: '#a09050', blue: '#50a8a8', magenta: '#50a8a8', cyan: '#8898b0', white: '#b0b0c0',
      brightBlack: '#2a2838', brightRed: '#a05060', brightGreen: '#50a070', brightYellow: '#a09050',
      brightBlue: '#50a8a8', brightMagenta: '#50a8a8', brightCyan: '#8898b0', brightWhite: '#b0b0c0'
    },
    semantic: { ok: '#50a070', warn: '#a09050', error: '#a05060', tool: '#50a8a8' }
  },
  {
    name: 'pack-single-malt', label: 'Single Malt Pack', description: 'Full desktop pack from the single-malt Hermes skin.',
    colors: {
      background: '#1a1410', foreground: '#d0c0a0', card: '#1a1410', cardForeground: '#d0c0a0',
      muted: '#2c251e', mutedForeground: '#958b82', popover: '#2a1e10', popoverForeground: '#d0c0a0',
      primary: '#907040', primaryForeground: '#fdfdfd', secondary: '#2a1e10', secondaryForeground: '#d0c0a0',
      accent: '#80a090', accentForeground: '#1a1410', border: '#705830', input: '#1a1410', ring: '#80a090',
      midground: '#907040', midgroundForeground: '#fdfdfd', composerRing: '#80a090',
      destructive: '#a06040', destructiveForeground: '#f6f6f5',
      sidebarBackground: '#0e0a08', sidebarBorder: '#705830', userBubble: '#2a1e10', userBubbleBorder: '#80a090'
    },
    darkColors: null,
    terminal: {
      foreground: '#d0c0a0', cursor: '#80a090', selectionBackground: '#2a1e10', black: '#1a1410',
      red: '#a06040', green: '#80a060', yellow: '#c09860', blue: '#80a090', magenta: '#907040', cyan: '#c09860', white: '#d0c0a0',
      brightBlack: '#3a2818', brightRed: '#a06040', brightGreen: '#80a060', brightYellow: '#c09860',
      brightBlue: '#80a090', brightMagenta: '#907040', brightCyan: '#c09860', brightWhite: '#d0c0a0'
    },
    semantic: { ok: '#80a060', warn: '#c09860', error: '#a06040', tool: '#80a090' }
  },
  {
    name: 'pack-slate-mist', label: 'Slate Mist Pack', description: 'Full desktop pack from the slate-mist Hermes skin.',
    colors: {
      background: '#1c1e22', foreground: '#c0c4cc', card: '#1c1e22', cardForeground: '#c0c4cc',
      muted: '#2c2f33', mutedForeground: '#93979c', popover: '#282a30', popoverForeground: '#c0c4cc',
      primary: '#687488', primaryForeground: '#fafafb', secondary: '#282a30', secondaryForeground: '#c0c4cc',
      accent: '#687488', accentForeground: '#fafafb', border: '#444a54', input: '#1c1e22', ring: '#687488',
      midground: '#687488', midgroundForeground: '#fafafb', composerRing: '#687488',
      destructive: '#907a7a', destructiveForeground: '#15161a',
      sidebarBackground: '#121418', sidebarBorder: '#444a54', userBubble: '#282a30', userBubbleBorder: '#687488'
    },
    darkColors: null,
    terminal: {
      foreground: '#c0c4cc', cursor: '#687488', selectionBackground: '#282a30', black: '#1c1e22',
      red: '#907a7a', green: '#7a907a', yellow: '#908a70', blue: '#687488', magenta: '#687488', cyan: '#a0a8b4', white: '#c0c4cc',
      brightBlack: '#343a44', brightRed: '#907a7a', brightGreen: '#7a907a', brightYellow: '#908a70',
      brightBlue: '#687488', brightMagenta: '#687488', brightCyan: '#a0a8b4', brightWhite: '#c0c4cc'
    },
    semantic: { ok: '#7a907a', warn: '#908a70', error: '#907a7a', tool: '#687488' }
  },
  {
    name: 'pack-solar-flare', label: 'Solar Flare Pack', description: 'Full desktop pack from the solar-flare Hermes skin.',
    colors: {
      background: '#002b36', foreground: '#eee8d5', card: '#002b36', cardForeground: '#eee8d5',
      muted: '#183e46', mutedForeground: '#97a5a9', popover: '#073642', popoverForeground: '#eee8d5',
      primary: '#cb4b16', primaryForeground: '#fcfdfd', secondary: '#073642', secondaryForeground: '#eee8d5',
      accent: '#268bd2', accentForeground: '#00222b', border: '#b58900', input: '#002b36', ring: '#268bd2',
      midground: '#cb4b16', midgroundForeground: '#fcfdfd', composerRing: '#268bd2',
      destructive: '#dc322f', destructiveForeground: '#fcfdfd',
      sidebarBackground: '#001b24', sidebarBorder: '#b58900', userBubble: '#073642', userBubbleBorder: '#268bd2'
    },
    darkColors: null,
    terminal: {
      foreground: '#eee8d5', cursor: '#268bd2', selectionBackground: '#073642', black: '#002b36',
      red: '#dc322f', green: '#859900', yellow: '#b58900', blue: '#268bd2', magenta: '#cb4b16', cyan: '#fdf6e3', white: '#eee8d5',
      brightBlack: '#586e75', brightRed: '#dc322f', brightGreen: '#859900', brightYellow: '#b58900',
      brightBlue: '#268bd2', brightMagenta: '#cb4b16', brightCyan: '#fdf6e3', brightWhite: '#eee8d5'
    },
    semantic: { ok: '#859900', warn: '#b58900', error: '#dc322f', tool: '#268bd2' }
  },
  {
    name: 'pack-sorbet', label: 'Sorbet Pack', description: 'Full desktop pack from the sorbet Hermes skin.',
    colors: {
      background: '#fff8ec', foreground: '#453023', card: '#fff8ec', cardForeground: '#453023',
      muted: '#f4ece0', mutedForeground: '#78695c', popover: '#f4e2cc', popoverForeground: '#453023',
      primary: '#c05414', primaryForeground: '#fffbf3', secondary: '#f4e2cc', secondaryForeground: '#453023',
      accent: '#3888a8', accentForeground: '#171615', border: '#ecd8c0', input: '#fff8ec', ring: '#3888a8',
      midground: '#c05414', midgroundForeground: '#fffbf3', composerRing: '#3888a8',
      destructive: '#c83828', destructiveForeground: '#fff8ec',
      sidebarBackground: '#ebe4d9', sidebarBorder: '#ecd8c0', userBubble: '#f4e2cc', userBubbleBorder: '#3888a8'
    },
    darkColors: null,
    terminal: {
      foreground: '#453023', cursor: '#3888a8', selectionBackground: '#f4e2cc', black: '#fff8ec',
      red: '#c83828', green: '#4c8a34', yellow: '#966e06', blue: '#3888a8', magenta: '#c05414', cyan: '#c05414', white: '#453023',
      brightBlack: '#b09a88', brightRed: '#c83828', brightGreen: '#4c8a34', brightYellow: '#966e06',
      brightBlue: '#3888a8', brightMagenta: '#c05414', brightCyan: '#c05414', brightWhite: '#453023'
    },
    semantic: { ok: '#4c8a34', warn: '#966e06', error: '#c83828', tool: '#3888a8' }
  },
  {
    name: 'pack-stained-glass', label: 'Stained Glass Pack', description: 'Full desktop pack from the stained-glass Hermes skin.',
    colors: {
      background: '#141420', foreground: '#d8d0c8', card: '#141420', cardForeground: '#d8d0c8',
      muted: '#282731', mutedForeground: '#8e8e97', popover: '#202038', popoverForeground: '#d8d0c8',
      primary: '#50a0d0', primaryForeground: '#141420', secondary: '#202038', secondaryForeground: '#d8d0c8',
      accent: '#50a0d0', accentForeground: '#141420', border: '#c0a050', input: '#141420', ring: '#50a0d0',
      midground: '#50a0d0', midgroundForeground: '#141420', composerRing: '#50a0d0',
      destructive: '#c05050', destructiveForeground: '#fdfdfd',
      sidebarBackground: '#0a0a14', sidebarBorder: '#c0a050', userBubble: '#202038', userBubbleBorder: '#50a0d0'
    },
    darkColors: null,
    terminal: {
      foreground: '#d8d0c8', cursor: '#50a0d0', selectionBackground: '#202038', black: '#141420',
      red: '#c05050', green: '#60b870', yellow: '#c0a050', blue: '#50a0d0', magenta: '#50a0d0', cyan: '#e07050', white: '#d8d0c8',
      brightBlack: '#383848', brightRed: '#c05050', brightGreen: '#60b870', brightYellow: '#c0a050',
      brightBlue: '#50a0d0', brightMagenta: '#50a0d0', brightCyan: '#e07050', brightWhite: '#d8d0c8'
    },
    semantic: { ok: '#60b870', warn: '#c0a050', error: '#c05050', tool: '#50a0d0' }
  },
  {
    name: 'pack-starlight-ash', label: 'Starlight Ash Pack', description: 'Full desktop pack from the starlight-ash Hermes skin.',
    colors: {
      background: '#16151a', foreground: '#d4d2dc', card: '#16151a', cardForeground: '#d4d2dc',
      muted: '#29282d', mutedForeground: '#908e99', popover: '#262430', popoverForeground: '#d4d2dc',
      primary: '#b0a8c8', primaryForeground: '#16151a', secondary: '#262430', secondaryForeground: '#d4d2dc',
      accent: '#8890bc', accentForeground: '#16151a', border: '#36343e', input: '#16151a', ring: '#8890bc',
      midground: '#b0a8c8', midgroundForeground: '#16151a', composerRing: '#8890bc',
      destructive: '#c46a72', destructiveForeground: '#16151a',
      sidebarBackground: '#0b0a0d', sidebarBorder: '#36343e', userBubble: '#262430', userBubbleBorder: '#8890bc'
    },
    darkColors: null,
    terminal: {
      foreground: '#d4d2dc', cursor: '#8890bc', selectionBackground: '#262430', black: '#16151a',
      red: '#c46a72', green: '#7cba8a', yellow: '#c4a468', blue: '#8890bc', magenta: '#b0a8c8', cyan: '#b0a8c8', white: '#d4d2dc',
      brightBlack: '#716e7c', brightRed: '#c46a72', brightGreen: '#7cba8a', brightYellow: '#c4a468',
      brightBlue: '#8890bc', brightMagenta: '#b0a8c8', brightCyan: '#b0a8c8', brightWhite: '#d4d2dc'
    },
    semantic: { ok: '#7cba8a', warn: '#c4a468', error: '#c46a72', tool: '#8890bc' }
  },
  {
    name: 'pack-steel-thread', label: 'Steel Thread Pack', description: 'Full desktop pack from the steel-thread Hermes skin.',
    colors: {
      background: '#18181a', foreground: '#c0c0c8', card: '#18181a', cardForeground: '#c0c0c8',
      muted: '#29292b', mutedForeground: '#8f8f92', popover: '#262630', popoverForeground: '#c0c0c8',
      primary: '#707078', primaryForeground: '#f6f6f6', secondary: '#262630', secondaryForeground: '#c0c0c8',
      accent: '#7088a0', accentForeground: '#18181a', border: '#4a4a50', input: '#18181a', ring: '#7088a0',
      midground: '#707078', midgroundForeground: '#f6f6f6', composerRing: '#7088a0',
      destructive: '#a07070', destructiveForeground: '#111113',
      sidebarBackground: '#0e0e10', sidebarBorder: '#4a4a50', userBubble: '#262630', userBubbleBorder: '#7088a0'
    },
    darkColors: null,
    terminal: {
      foreground: '#c0c0c8', cursor: '#7088a0', selectionBackground: '#262630', black: '#18181a',
      red: '#a07070', green: '#78a078', yellow: '#a09860', blue: '#7088a0', magenta: '#707078', cyan: '#a0a0a8', white: '#c0c0c8',
      brightBlack: '#343438', brightRed: '#a07070', brightGreen: '#78a078', brightYellow: '#a09860',
      brightBlue: '#7088a0', brightMagenta: '#707078', brightCyan: '#a0a0a8', brightWhite: '#c0c0c8'
    },
    semantic: { ok: '#78a078', warn: '#a09860', error: '#a07070', tool: '#7088a0' }
  },
  {
    name: 'pack-sunflower-field', label: 'Sunflower Field Pack', description: 'Full desktop pack from the sunflower-field Hermes skin.',
    colors: {
      background: '#fbf3dc', foreground: '#423822', card: '#fbf3dc', cardForeground: '#423822',
      muted: '#f0e8d1', mutedForeground: '#70684e', popover: '#ece0b8', popoverForeground: '#423822',
      primary: '#9a6406', primaryForeground: '#fbf3dc', secondary: '#ece0b8', secondaryForeground: '#423822',
      accent: '#4870a0', accentForeground: '#fbf3dc', border: '#e0d0a8', input: '#fbf3dc', ring: '#4870a0',
      midground: '#9a6406', midgroundForeground: '#fbf3dc', composerRing: '#4870a0',
      destructive: '#c04a30', destructiveForeground: '#fcf5e1',
      sidebarBackground: '#e7e0ca', sidebarBorder: '#e0d0a8', userBubble: '#ece0b8', userBubbleBorder: '#4870a0'
    },
    darkColors: null,
    terminal: {
      foreground: '#423822', cursor: '#4870a0', selectionBackground: '#ece0b8', black: '#fbf3dc',
      red: '#c04a30', green: '#5c7c28', yellow: '#a87808', blue: '#4870a0', magenta: '#9a6406', cyan: '#9a6406', white: '#423822',
      brightBlack: '#a09470', brightRed: '#c04a30', brightGreen: '#5c7c28', brightYellow: '#a87808',
      brightBlue: '#4870a0', brightMagenta: '#9a6406', brightCyan: '#9a6406', brightWhite: '#423822'
    },
    semantic: { ok: '#5c7c28', warn: '#a87808', error: '#c04a30', tool: '#4870a0' }
  },
  {
    name: 'pack-taffy', label: 'Taffy Pack', description: 'Full desktop pack from the taffy Hermes skin.',
    colors: {
      background: '#fdf0ff', foreground: '#442c48', card: '#fdf0ff', cardForeground: '#442c48',
      muted: '#f2e4f4', mutedForeground: '#77617c', popover: '#eed6f4', popoverForeground: '#442c48',
      primary: '#9838c8', primaryForeground: '#fdf0ff', secondary: '#eed6f4', secondaryForeground: '#442c48',
      accent: '#5070c8', accentForeground: '#fefaff', border: '#e4ccec', input: '#fdf0ff', ring: '#5070c8',
      midground: '#9838c8', midgroundForeground: '#fdf0ff', composerRing: '#5070c8',
      destructive: '#c83058', destructiveForeground: '#fdf0ff',
      sidebarBackground: '#e9ddeb', sidebarBorder: '#e4ccec', userBubble: '#eed6f4', userBubbleBorder: '#5070c8'
    },
    darkColors: null,
    terminal: {
      foreground: '#442c48', cursor: '#5070c8', selectionBackground: '#eed6f4', black: '#fdf0ff',
      red: '#c83058', green: '#3c8a58', yellow: '#946806', blue: '#5070c8', magenta: '#9838c8', cyan: '#9838c8', white: '#442c48',
      brightBlack: '#ad8cb4', brightRed: '#c83058', brightGreen: '#3c8a58', brightYellow: '#946806',
      brightBlue: '#5070c8', brightMagenta: '#9838c8', brightCyan: '#9838c8', brightWhite: '#442c48'
    },
    semantic: { ok: '#3c8a58', warn: '#946806', error: '#c83058', tool: '#5070c8' }
  },
  {
    name: 'pack-terminal-bloom', label: 'Terminal Bloom Pack', description: 'Full desktop pack from the terminal-bloom Hermes skin.',
    colors: {
      background: '#0c1014', foreground: '#d0e4f0', card: '#0c1014', cardForeground: '#d0e4f0',
      muted: '#20252a', mutedForeground: '#7b8e9b', popover: '#16222a', popoverForeground: '#d0e4f0',
      primary: '#ff5ca8', primaryForeground: '#0c1014', secondary: '#16222a', secondaryForeground: '#d0e4f0',
      accent: '#58c0e8', accentForeground: '#0c1014', border: '#1e3038', input: '#0c1014', ring: '#58c0e8',
      midground: '#ff5ca8', midgroundForeground: '#0c1014', composerRing: '#58c0e8',
      destructive: '#ff6060', destructiveForeground: '#0c1014',
      sidebarBackground: '#06080a', sidebarBorder: '#1e3038', userBubble: '#16222a', userBubbleBorder: '#58c0e8'
    },
    darkColors: null,
    terminal: {
      foreground: '#d0e4f0', cursor: '#58c0e8', selectionBackground: '#16222a', black: '#0c1014',
      red: '#ff6060', green: '#58e0a8', yellow: '#f0c058', blue: '#58c0e8', magenta: '#ff5ca8', cyan: '#ff5ca8', white: '#d0e4f0',
      brightBlack: '#587080', brightRed: '#ff6060', brightGreen: '#58e0a8', brightYellow: '#f0c058',
      brightBlue: '#58c0e8', brightMagenta: '#ff5ca8', brightCyan: '#ff5ca8', brightWhite: '#d0e4f0'
    },
    semantic: { ok: '#58e0a8', warn: '#f0c058', error: '#ff6060', tool: '#58c0e8' }
  },
  {
    name: 'pack-tidal-pool', label: 'Tidal Pool Pack', description: 'Full desktop pack from the tidal-pool Hermes skin.',
    colors: {
      background: '#0a1a1a', foreground: '#d8ece6', card: '#0a1a1a', cardForeground: '#d8ece6',
      muted: '#1f2f2e', mutedForeground: '#7a9992', popover: '#16332e', popoverForeground: '#d8ece6',
      primary: '#5ad4a8', primaryForeground: '#0a1a1a', secondary: '#16332e', secondaryForeground: '#d8ece6',
      accent: '#66b8d8', accentForeground: '#0a1a1a', border: '#23423c', input: '#0a1a1a', ring: '#66b8d8',
      midground: '#5ad4a8', midgroundForeground: '#0a1a1a', composerRing: '#66b8d8',
      destructive: '#e07070', destructiveForeground: '#0a1a1a',
      sidebarBackground: '#050d0d', sidebarBorder: '#23423c', userBubble: '#16332e', userBubbleBorder: '#66b8d8'
    },
    darkColors: null,
    terminal: {
      foreground: '#d8ece6', cursor: '#66b8d8', selectionBackground: '#16332e', black: '#0a1a1a',
      red: '#e07070', green: '#6ecf8e', yellow: '#dcb266', blue: '#66b8d8', magenta: '#5ad4a8', cyan: '#5ad4a8', white: '#d8ece6',
      brightBlack: '#527a72', brightRed: '#e07070', brightGreen: '#6ecf8e', brightYellow: '#dcb266',
      brightBlue: '#66b8d8', brightMagenta: '#5ad4a8', brightCyan: '#5ad4a8', brightWhite: '#d8ece6'
    },
    semantic: { ok: '#6ecf8e', warn: '#dcb266', error: '#e07070', tool: '#66b8d8' }
  },
  {
    name: 'pack-typewriter-cream', label: 'Typewriter Cream Pack', description: 'Full desktop pack from the typewriter-cream Hermes skin.',
    colors: {
      background: '#2a2418', foreground: '#e0d8c0', card: '#2a2418', cardForeground: '#e0d8c0',
      muted: '#3c3629', mutedForeground: '#a89f91', popover: '#382818', popoverForeground: '#e0d8c0',
      primary: '#a08860', primaryForeground: '#2a2418', secondary: '#382818', secondaryForeground: '#e0d8c0',
      accent: '#80a090', accentForeground: '#2a2418', border: '#8a7850', input: '#2a2418', ring: '#80a090',
      midground: '#a08860', midgroundForeground: '#2a2418', composerRing: '#80a090',
      destructive: '#b05840', destructiveForeground: '#f6f6f6',
      sidebarBackground: '#1a1810', sidebarBorder: '#8a7850', userBubble: '#382818', userBubbleBorder: '#80a090'
    },
    darkColors: null,
    terminal: {
      foreground: '#e0d8c0', cursor: '#80a090', selectionBackground: '#382818', black: '#2a2418',
      red: '#b05840', green: '#80a060', yellow: '#c0a050', blue: '#80a090', magenta: '#a08860', cyan: '#c8b890', white: '#e0d8c0',
      brightBlack: '#5a4a30', brightRed: '#b05840', brightGreen: '#80a060', brightYellow: '#c0a050',
      brightBlue: '#80a090', brightMagenta: '#a08860', brightCyan: '#c8b890', brightWhite: '#e0d8c0'
    },
    semantic: { ok: '#80a060', warn: '#c0a050', error: '#b05840', tool: '#80a090' }
  },
  {
    name: 'pack-ultraviolet', label: 'Ultraviolet Pack', description: 'Full desktop pack from the ultraviolet Hermes skin.',
    colors: {
      background: '#10061c', foreground: '#e8dcf4', card: '#10061c', cardForeground: '#e8dcf4',
      muted: '#261b32', mutedForeground: '#9080a3', popover: '#28123c', popoverForeground: '#e8dcf4',
      primary: '#b45cff', primaryForeground: '#10061c', secondary: '#28123c', secondaryForeground: '#e8dcf4',
      accent: '#5cb8ff', accentForeground: '#10061c', border: '#38204e', input: '#10061c', ring: '#5cb8ff',
      midground: '#b45cff', midgroundForeground: '#10061c', composerRing: '#5cb8ff',
      destructive: '#ff5c88', destructiveForeground: '#10061c',
      sidebarBackground: '#08030e', sidebarBorder: '#38204e', userBubble: '#28123c', userBubbleBorder: '#5cb8ff'
    },
    darkColors: null,
    terminal: {
      foreground: '#e8dcf4', cursor: '#5cb8ff', selectionBackground: '#28123c', black: '#10061c',
      red: '#ff5c88', green: '#5ce89a', yellow: '#ffc45c', blue: '#5cb8ff', magenta: '#b45cff', cyan: '#b45cff', white: '#e8dcf4',
      brightBlack: '#6f5a88', brightRed: '#ff5c88', brightGreen: '#5ce89a', brightYellow: '#ffc45c',
      brightBlue: '#5cb8ff', brightMagenta: '#b45cff', brightCyan: '#b45cff', brightWhite: '#e8dcf4'
    },
    semantic: { ok: '#5ce89a', warn: '#ffc45c', error: '#ff5c88', tool: '#5cb8ff' }
  },
  {
    name: 'pack-vapor-trail', label: 'Vapor Trail Pack', description: 'Full desktop pack from the vapor-trail Hermes skin.',
    colors: {
      background: '#0a1418', foreground: '#d4e8ec', card: '#0a1418', cardForeground: '#d4e8ec',
      muted: '#1e292d', mutedForeground: '#7b939c', popover: '#142630', popoverForeground: '#d4e8ec',
      primary: '#4cd8e0', primaryForeground: '#0a1418', secondary: '#142630', secondaryForeground: '#d4e8ec',
      accent: '#58b0e0', accentForeground: '#0a1418', border: '#1e343c', input: '#0a1418', ring: '#58b0e0',
      midground: '#4cd8e0', midgroundForeground: '#0a1418', composerRing: '#58b0e0',
      destructive: '#e06078', destructiveForeground: '#0a1418',
      sidebarBackground: '#050a0c', sidebarBorder: '#1e343c', userBubble: '#142630', userBubbleBorder: '#58b0e0'
    },
    darkColors: null,
    terminal: {
      foreground: '#d4e8ec', cursor: '#58b0e0', selectionBackground: '#142630', black: '#0a1418',
      red: '#e06078', green: '#68d89c', yellow: '#e0b858', blue: '#58b0e0', magenta: '#4cd8e0', cyan: '#4cd8e0', white: '#d4e8ec',
      brightBlack: '#567480', brightRed: '#e06078', brightGreen: '#68d89c', brightYellow: '#e0b858',
      brightBlue: '#58b0e0', brightMagenta: '#4cd8e0', brightCyan: '#4cd8e0', brightWhite: '#d4e8ec'
    },
    semantic: { ok: '#68d89c', warn: '#e0b858', error: '#e06078', tool: '#58b0e0' }
  },
  {
    name: 'pack-vaporwave-mall', label: 'Vaporwave Mall Pack', description: 'Full desktop pack from the vaporwave-mall Hermes skin.',
    colors: {
      background: '#1a1a28', foreground: '#d8d8f0', card: '#1a1a28', cardForeground: '#d8d8f0',
      muted: '#2d2d3c', mutedForeground: '#9a91ae', popover: '#2a2a40', popoverForeground: '#d8d8f0',
      primary: '#ff6ac1', primaryForeground: '#1a1a28', secondary: '#2a2a40', secondaryForeground: '#d8d8f0',
      accent: '#66d9ef', accentForeground: '#1a1a28', border: '#ff6ac1', input: '#1a1a28', ring: '#66d9ef',
      midground: '#ff6ac1', midgroundForeground: '#1a1a28', composerRing: '#66d9ef',
      destructive: '#f92672', destructiveForeground: '#1a1a28',
      sidebarBackground: '#101018', sidebarBorder: '#ff6ac1', userBubble: '#2a2a40', userBubbleBorder: '#66d9ef'
    },
    darkColors: null,
    terminal: {
      foreground: '#d8d8f0', cursor: '#66d9ef', selectionBackground: '#2a2a40', black: '#1a1a28',
      red: '#f92672', green: '#a6e22e', yellow: '#e6db74', blue: '#66d9ef', magenta: '#ff6ac1', cyan: '#66d9ef', white: '#d8d8f0',
      brightBlack: '#5a4a7a', brightRed: '#f92672', brightGreen: '#a6e22e', brightYellow: '#e6db74',
      brightBlue: '#66d9ef', brightMagenta: '#ff6ac1', brightCyan: '#66d9ef', brightWhite: '#d8d8f0'
    },
    semantic: { ok: '#a6e22e', warn: '#e6db74', error: '#f92672', tool: '#66d9ef' }
  },
  {
    name: 'pack-void-sunset', label: 'Void Sunset Pack', description: 'Full desktop pack from the void-sunset Hermes skin.',
    colors: {
      background: '#1a1030', foreground: '#e6d8f0', card: '#1a1030', cardForeground: '#e6d8f0',
      muted: '#2e2443', mutedForeground: '#9b87b8', popover: '#2a1a40', popoverForeground: '#e6d8f0',
      primary: '#ff5fd2', primaryForeground: '#1a1030', secondary: '#2a1a40', secondaryForeground: '#e6d8f0',
      accent: '#5af7b0', accentForeground: '#1a1030', border: '#ffb870', input: '#1a1030', ring: '#5af7b0',
      midground: '#ff5fd2', midgroundForeground: '#1a1030', composerRing: '#5af7b0',
      destructive: '#ff5fd2', destructiveForeground: '#1a1030',
      sidebarBackground: '#0f0820', sidebarBorder: '#ffb870', userBubble: '#2a1a40', userBubbleBorder: '#5af7b0'
    },
    darkColors: null,
    terminal: {
      foreground: '#e6d8f0', cursor: '#5af7b0', selectionBackground: '#2a1a40', black: '#1a1030',
      red: '#ff5fd2', green: '#5af7b0', yellow: '#ffb870', blue: '#5af7b0', magenta: '#ff5fd2', cyan: '#ffb870', white: '#e6d8f0',
      brightBlack: '#7a5fa0', brightRed: '#ff5fd2', brightGreen: '#5af7b0', brightYellow: '#ffb870',
      brightBlue: '#5af7b0', brightMagenta: '#ff5fd2', brightCyan: '#ffb870', brightWhite: '#e6d8f0'
    },
    semantic: { ok: '#5af7b0', warn: '#ffb870', error: '#ff5fd2', tool: '#5af7b0' }
  },
  {
    name: 'pack-warm-ash', label: 'Warm Ash Pack', description: 'Full desktop pack from the warm-ash Hermes skin.',
    colors: {
      background: '#1e1c18', foreground: '#c8c0b8', card: '#1e1c18', cardForeground: '#c8c0b8',
      muted: '#2f2c28', mutedForeground: '#979391', popover: '#2a2820', popoverForeground: '#c8c0b8',
      primary: '#786858', primaryForeground: '#ededed', secondary: '#2a2820', secondaryForeground: '#c8c0b8',
      accent: '#7098a0', accentForeground: '#1e1c18', border: '#504840', input: '#1e1c18', ring: '#7098a0',
      midground: '#786858', midgroundForeground: '#ededed', composerRing: '#7098a0',
      destructive: '#987060', destructiveForeground: '#0c0b0a',
      sidebarBackground: '#141210', sidebarBorder: '#504840', userBubble: '#2a2820', userBubbleBorder: '#7098a0'
    },
    darkColors: null,
    terminal: {
      foreground: '#c8c0b8', cursor: '#7098a0', selectionBackground: '#2a2820', black: '#1e1c18',
      red: '#987060', green: '#809868', yellow: '#988850', blue: '#7098a0', magenta: '#786858', cyan: '#b0a898', white: '#c8c0b8',
      brightBlack: '#3a3430', brightRed: '#987060', brightGreen: '#809868', brightYellow: '#988850',
      brightBlue: '#7098a0', brightMagenta: '#786858', brightCyan: '#b0a898', brightWhite: '#c8c0b8'
    },
    semantic: { ok: '#809868', warn: '#988850', error: '#987060', tool: '#7098a0' }
  },
  {
    name: 'pack-warm-parchment', label: 'Warm Parchment Pack', description: 'Full desktop pack from the warm-parchment Hermes skin.',
    colors: {
      background: '#f8f0e0', foreground: '#3a2818', card: '#f8f0e0', cardForeground: '#3a2818',
      muted: '#ede4d4', mutedForeground: '#6f6454', popover: '#d8c8a8', popoverForeground: '#3a2818',
      primary: '#5a4040', primaryForeground: '#f8f0e0', secondary: '#d8c8a8', secondaryForeground: '#3a2818',
      accent: '#486880', accentForeground: '#f8f0e0', border: '#8a7058', input: '#f8f0e0', ring: '#486880',
      midground: '#5a4040', midgroundForeground: '#f8f0e0', composerRing: '#486880',
      destructive: '#883838', destructiveForeground: '#f8f0e0',
      sidebarBackground: '#efe4d0', sidebarBorder: '#8a7058', userBubble: '#d8c8a8', userBubbleBorder: '#486880'
    },
    darkColors: null,
    terminal: {
      foreground: '#3a2818', cursor: '#486880', selectionBackground: '#d8c8a8', black: '#f8f0e0',
      red: '#883838', green: '#406840', yellow: '#886838', blue: '#486880', magenta: '#5a4040', cyan: '#3a2818', white: '#3a2818',
      brightBlack: '#a89880', brightRed: '#883838', brightGreen: '#406840', brightYellow: '#886838',
      brightBlue: '#486880', brightMagenta: '#5a4040', brightCyan: '#3a2818', brightWhite: '#3a2818'
    },
    semantic: { ok: '#406840', warn: '#886838', error: '#883838', tool: '#486880' }
  },
  {
    name: 'pack-white-flash', label: 'White Flash Pack', description: 'Full desktop pack from the white-flash Hermes skin.',
    colors: {
      background: '#000000', foreground: '#ffffff', card: '#080808', cardForeground: '#ffffff',
      muted: '#1a1a1a', mutedForeground: '#888888', popover: '#333333', popoverForeground: '#ffffff',
      primary: '#ffff00', primaryForeground: '#000000', secondary: '#333333', secondaryForeground: '#ffffff',
      accent: '#00ffff', accentForeground: '#000000', border: '#ffffff', input: '#080808', ring: '#00ffff',
      midground: '#ffff00', midgroundForeground: '#000000', composerRing: '#00ffff',
      destructive: '#ff0000', destructiveForeground: '#000000',
      sidebarBackground: '#000000', sidebarBorder: '#ffffff', userBubble: '#333333', userBubbleBorder: '#00ffff'
    },
    darkColors: null,
    terminal: {
      foreground: '#ffffff', cursor: '#00ffff', selectionBackground: '#333333', black: '#000000',
      red: '#ff0000', green: '#00ff00', yellow: '#ffff00', blue: '#00ffff', magenta: '#ffff00', cyan: '#ffffff', white: '#ffffff',
      brightBlack: '#888888', brightRed: '#ff0000', brightGreen: '#00ff00', brightYellow: '#ffff00',
      brightBlue: '#00ffff', brightMagenta: '#ffff00', brightCyan: '#ffffff', brightWhite: '#ffffff'
    },
    semantic: { ok: '#00ff00', warn: '#ffff00', error: '#ff0000', tool: '#00ffff' }
  },
  {
    name: 'pack-wildflower', label: 'Wildflower Pack', description: 'Full desktop pack from the wildflower Hermes skin.',
    colors: {
      background: '#faf6ee', foreground: '#3c3630', card: '#faf6ee', cardForeground: '#3c3630',
      muted: '#efeae3', mutedForeground: '#6f695f', popover: '#e8e0ce', popoverForeground: '#3c3630',
      primary: '#b04068', primaryForeground: '#faf6ee', secondary: '#e8e0ce', secondaryForeground: '#3c3630',
      accent: '#3c6a9c', accentForeground: '#faf6ee', border: '#dcd2c0', input: '#faf6ee', ring: '#3c6a9c',
      midground: '#b04068', midgroundForeground: '#faf6ee', composerRing: '#3c6a9c',
      destructive: '#b83c44', destructiveForeground: '#faf6ee',
      sidebarBackground: '#e6e2db', sidebarBorder: '#dcd2c0', userBubble: '#e8e0ce', userBubbleBorder: '#3c6a9c'
    },
    darkColors: null,
    terminal: {
      foreground: '#3c3630', cursor: '#3c6a9c', selectionBackground: '#e8e0ce', black: '#faf6ee',
      red: '#b83c44', green: '#4c7a34', yellow: '#a0781c', blue: '#3c6a9c', magenta: '#b04068', cyan: '#b04068', white: '#3c3630',
      brightBlack: '#a39a8c', brightRed: '#b83c44', brightGreen: '#4c7a34', brightYellow: '#a0781c',
      brightBlue: '#3c6a9c', brightMagenta: '#b04068', brightCyan: '#b04068', brightWhite: '#3c3630'
    },
    semantic: { ok: '#4c7a34', warn: '#a0781c', error: '#b83c44', tool: '#3c6a9c' }
  },
]

for (const theme of fullThemes) theme.darkColors = theme.colors

function applySemanticPalette() {
  const activeName = document.documentElement.dataset.hermesTheme || ''
  const root = document.documentElement
  const theme = fullThemes.find(candidate => candidate.name === activeName)
  if (!theme || !theme.semantic) {
    // Only repaint semantic channels while a real pack is active. Never leave a
    // stale pack palette bleeding into a plain skin or the default theme.
    if (root.dataset.hermesPacksOwned === '1') {
      for (const key of ['--ui-cyan','--ui-blue','--ui-green','--ui-yellow','--ui-orange','--ui-red','--ui-purple','--ui-warm','--ui-selection-background']) {
        root.style.removeProperty(key)
      }
      delete root.dataset.hermesPacksOwned
    }
    return
  }
  root.style.setProperty('--ui-cyan', theme.semantic.tool)
  root.style.setProperty('--ui-blue', theme.semantic.tool)
  root.style.setProperty('--ui-green', theme.semantic.ok)
  root.style.setProperty('--ui-yellow', theme.semantic.warn)
  root.style.setProperty('--ui-orange', theme.semantic.warn)
  root.style.setProperty('--ui-red', theme.semantic.error)
  root.style.setProperty('--ui-purple', theme.colors.primary)
  root.style.setProperty('--ui-warm', theme.semantic.warn)
  root.style.setProperty('--ui-selection-background', `color-mix(in srgb, ${theme.semantic.tool} 38%, transparent)`)
  root.dataset.hermesPacksOwned = '1'
}

function watchActivePack() {
  // Migrate: if the app is stuck on a plain skin that has a pack, swap to the pack
  // once, then let the normal picker take over from here.
  const activeName = document.documentElement.dataset.hermesTheme || ''
  const matchingPack = fullThemes.find(candidate => candidate.name === `pack-${activeName}`)
  if (matchingPack && window.localStorage.getItem('hermes-desktop-theme-v2') !== matchingPack.name) {
    window.localStorage.setItem('hermes-desktop-theme-v2', matchingPack.name)
    window.location.reload()
    return
  }
  applySemanticPalette()
  const observer = new MutationObserver(applySemanticPalette)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-hermes-theme', 'class'] })
}

const packs = fullThemes.map(theme => ({
  name: theme.name.slice(5).split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
  theme: theme.name,
  mood: theme.description.replace('Full desktop pack from the ', '').replace(' Hermes skin.', ''),
  colors: [theme.colors.background, theme.colors.primary, theme.colors.accent]
}))

const USER_THEMES_KEY = 'hermes-desktop-user-themes-v1'
const ACTIVE_THEME_KEY = 'hermes-desktop-theme-v2'

function readUserThemes() {
  try { return JSON.parse(window.localStorage.getItem(USER_THEMES_KEY) || '{}') } catch { return {} }
}

function installPackThemes() {
  // Register as USER themes (not contributed THEMES_AREA): user themes live in
  // localStorage and are resolved by the app's boot-time paint BEFORE plugins
  // load, so selecting a pack survives a reload. Contributed themes resolve too
  // late and normalizeSkin() silently falls back to the default theme.
  const stored = readUserThemes()
  let changed = false
  for (const theme of fullThemes) {
    if (JSON.stringify(stored[theme.name]) !== JSON.stringify(theme)) {
      stored[theme.name] = theme
      changed = true
    }
  }
  if (changed) {
    try { window.localStorage.setItem(USER_THEMES_KEY, JSON.stringify(stored)) } catch {}
  }
}

function applyPack(pack) {
  // One picker. Install themes into the user-themes store, point the active
  // theme at the pack, reload. Boot-time paint resolves it on the first frame.
  installPackThemes()
  window.localStorage.setItem(ACTIVE_THEME_KEY, pack.theme)
  window.location.reload()
}

function PackTile({ pack }) {
  return jsxs('button', {
    type: 'button',
    onClick: () => applyPack(pack),
    className: 'rounded-xl border p-3 text-left transition hover:-translate-y-0.5 hover:shadow-lg',
    style: { borderColor: pack.colors[2], background: pack.colors[0], color: '#f7f7f7' },
    children: [
      jsx('div', { className: 'mb-3 flex h-12 overflow-hidden rounded-lg', children: pack.colors.map(color => jsx('span', { className: 'h-full flex-1', style: { backgroundColor: color } }, color)) }),
      jsx('span', { className: 'block truncate text-sm font-semibold', children: pack.name }),
      jsx('span', { className: 'mt-1 block truncate text-xs opacity-75', children: pack.mood })
    ]
  })
}

function PackPage() {
  return jsxs('main', {
    className: 'h-full overflow-auto p-6',
    children: [
      jsx('div', { className: 'text-xs font-medium uppercase tracking-[0.22em] text-(--ui-accent)', children: 'Hermes Desktop Packs' }),
      jsx('h1', { className: 'mt-2 text-2xl font-semibold tracking-tight', children: 'Full palette packs' }),
      jsx('p', { className: 'mt-2 max-w-2xl text-sm text-(--ui-text-secondary)', children: 'Every pack maps the full palette from your Hermes Skins Pack into Hermes Desktop. Pick one here and the whole app repaints.' }),
      jsx('div', { className: 'mt-6 grid gap-3', style: { gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))' }, children: packs.map(pack => jsx(PackTile, { pack }, pack.theme)) })
    ]
  })
}

export default {
  id: ID,
  name: 'Hermes Desktop Packs',
  description: 'Full Hermes Desktop palette packs generated from BChop’s Hermes Skins Pack.',
  defaultEnabled: true,
  register(ctx) {
    installPackThemes()
    watchActivePack()
    ctx.registerMany([
      { id: 'page', area: ROUTES_AREA, data: { path: '/packs' }, title: 'Packs', render: () => jsx(PackPage, {}) },
      { id: 'nav', area: SIDEBAR_NAV_AREA, order: 57, data: { path: '/packs', label: 'Packs', codicon: 'package' } }
    ])
  }
}
