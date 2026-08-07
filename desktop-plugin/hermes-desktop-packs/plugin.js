import { ROUTES_AREA, SIDEBAR_NAV_AREA } from '@hermes/plugin-sdk'
import { jsx, jsxs } from 'react/jsx-runtime'

const ID = 'hermes-desktop-packs'

// Generated from BChop's Hermes Skins Pack. These are full DesktopTheme maps,
// not the basic backend skin conversion. Every mapped app surface comes from
// the original skin palette: background, panels, tools, borders, error state,
// selection, and status bar.
const fullThemes = [
  {
    name: 'pack-alabaster', label: 'Alabaster Pack', description: 'Full desktop pack from the alabaster Hermes skin.',
    colors: {
      background: '#fdfdfa', foreground: '#1a1a1a', card: '#fdfdfa', cardForeground: '#1a1a1a',
      muted: '#efefed', mutedForeground: '#6b6b6b', popover: '#e0e0d8', popoverForeground: '#1a1a1a',
      primary: '#3858b0', primaryForeground: '#fdfdfa', secondary: '#e0e0d8', secondaryForeground: '#1a1a1a',
      accent: '#3858b0', accentForeground: '#fdfdfa', border: '#909090', input: '#fdfdfa', ring: '#3858b0',
      midground: '#3858b0', midgroundForeground: '#fdfdfa', composerRing: '#3858b0',
      destructive: '#b03838', destructiveForeground: '#fdfdfa',
      sidebarBackground: '#f0f0e8', sidebarBorder: '#8a8a8a', userBubble: '#e0e0d8', userBubbleBorder: '#3858b0'
    },
    darkColors: null,
    terminal: {
      foreground: '#1a1a1a', cursor: '#3858b0', selectionBackground: '#e0e0d8', black: '#fdfdfa',
      red: '#b03838', green: '#388040', yellow: '#b08020', blue: '#3858b0', magenta: '#3858b0', cyan: '#1a1a1a', white: '#1a1a1a',
      brightBlack: '#b0b0b0', brightRed: '#b03838', brightGreen: '#388040', brightYellow: '#b08020',
      brightBlue: '#3858b0', brightMagenta: '#3858b0', brightCyan: '#1a1a1a', brightWhite: '#1a1a1a'
    },
    semantic: { ok: '#388040', warn: '#976e1c', error: '#b03838', tool: '#3858b0' }
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
    name: 'pack-arcane-tome', label: 'Arcane Tome Pack', description: 'Full desktop pack from the arcane-tome Hermes skin.',
    colors: {
      background: '#161022', foreground: '#c8c0e0', card: '#161022', cardForeground: '#c8c0e0',
      muted: '#282235', mutedForeground: '#9187a1', popover: '#221838', popoverForeground: '#c8c0e0',
      primary: '#c0a040', primaryForeground: '#161022', secondary: '#221838', secondaryForeground: '#c8c0e0',
      accent: '#70b8f0', accentForeground: '#161022', border: '#7a58a8', input: '#161022', ring: '#70b8f0',
      midground: '#c0a040', midgroundForeground: '#161022', composerRing: '#70b8f0',
      destructive: '#c55e6d', destructiveForeground: '#161022',
      sidebarBackground: '#0c0816', sidebarBorder: '#7a58a8', userBubble: '#221838', userBubbleBorder: '#70b8f0'
    },
    darkColors: null,
    terminal: {
      foreground: '#c8c0e0', cursor: '#70b8f0', selectionBackground: '#221838', black: '#161022',
      red: '#c05060', green: '#50c080', yellow: '#c0a040', blue: '#70b8f0', magenta: '#c0a040', cyan: '#70b8f0', white: '#c8c0e0',
      brightBlack: '#3a2858', brightRed: '#c05060', brightGreen: '#50c080', brightYellow: '#c0a040',
      brightBlue: '#70b8f0', brightMagenta: '#c0a040', brightCyan: '#70b8f0', brightWhite: '#c8c0e0'
    },
    semantic: { ok: '#50c080', warn: '#c0a040', error: '#c55e6d', tool: '#70b8f0' }
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
    semantic: { ok: '#307050', warn: '#895b1e', error: '#902820', tool: '#2858a0' }
  },
  {
    name: 'pack-bone-white', label: 'Bone White Pack', description: 'Full desktop pack from the bone-white Hermes skin.',
    colors: {
      background: '#1a1a1a', foreground: '#d8d8d8', card: '#1a1a1a', cardForeground: '#d8d8d8',
      muted: '#2d2d2d', mutedForeground: '#949494', popover: '#282828', popoverForeground: '#d8d8d8',
      primary: '#6a888f', primaryForeground: '#1a1a1a', secondary: '#282828', secondaryForeground: '#d8d8d8',
      accent: '#6a888f', accentForeground: '#1a1a1a', border: '#62676c', input: '#1a1a1a', ring: '#6a888f',
      midground: '#6a888f', midgroundForeground: '#1a1a1a', composerRing: '#6a888f',
      destructive: '#9a7b7b', destructiveForeground: '#1a1a1a',
      sidebarBackground: '#101010', sidebarBorder: '#62676c', userBubble: '#282828', userBubbleBorder: '#6a888f'
    },
    darkColors: null,
    terminal: {
      foreground: '#d8d8d8', cursor: '#6a888f', selectionBackground: '#282828', black: '#1a1a1a',
      red: '#987878', green: '#789880', yellow: '#989078', blue: '#608088', magenta: '#608088', cyan: '#c8d0d8', white: '#d8d8d8',
      brightBlack: '#383838', brightRed: '#987878', brightGreen: '#789880', brightYellow: '#989078',
      brightBlue: '#608088', brightMagenta: '#608088', brightCyan: '#c8d0d8', brightWhite: '#d8d8d8'
    },
    semantic: { ok: '#789880', warn: '#989078', error: '#9a7b7b', tool: '#6a888f' }
  },
  {
    name: 'pack-brutalist-concrete', label: 'Brutalist Concrete Pack', description: 'Full desktop pack from the brutalist-concrete Hermes skin.',
    colors: {
      background: '#202020', foreground: '#c0c0c0', card: '#202020', cardForeground: '#c0c0c0',
      muted: '#303030', mutedForeground: '#989898', popover: '#2a2a2a', popoverForeground: '#c0c0c0',
      primary: '#ff5500', primaryForeground: '#202020', secondary: '#2a2a2a', secondaryForeground: '#c0c0c0',
      accent: '#ff5500', accentForeground: '#202020', border: '#6a6a6a', input: '#202020', ring: '#ff5500',
      midground: '#ff5500', midgroundForeground: '#202020', composerRing: '#ff5500',
      destructive: '#e4594b', destructiveForeground: '#202020',
      sidebarBackground: '#141414', sidebarBorder: '#6a6a6a', userBubble: '#2a2a2a', userBubbleBorder: '#ff5500'
    },
    darkColors: null,
    terminal: {
      foreground: '#c0c0c0', cursor: '#ff5500', selectionBackground: '#2a2a2a', black: '#202020',
      red: '#e04030', green: '#60a060', yellow: '#ff8800', blue: '#ff5500', magenta: '#ff5500', cyan: '#a0a0a0', white: '#c0c0c0',
      brightBlack: '#383838', brightRed: '#e04030', brightGreen: '#60a060', brightYellow: '#ff8800',
      brightBlue: '#ff5500', brightMagenta: '#ff5500', brightCyan: '#a0a0a0', brightWhite: '#c0c0c0'
    },
    semantic: { ok: '#60a060', warn: '#ff8800', error: '#e4594b', tool: '#ff5500' }
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
    name: 'pack-commodore-64', label: 'Commodore 64 Pack', description: 'Full desktop pack from the commodore-64 Hermes skin.',
    colors: {
      background: '#202840', foreground: '#c8c8e8', card: '#202840', cardForeground: '#c8c8e8',
      muted: '#313851', mutedForeground: '#a79fb7', popover: '#283050', popoverForeground: '#c8c8e8',
      primary: '#9d81d6', primaryForeground: '#202840', secondary: '#283050', secondaryForeground: '#c8c8e8',
      accent: '#a088e0', accentForeground: '#202840', border: '#8068c0', input: '#202840', ring: '#a088e0',
      midground: '#9d81d6', midgroundForeground: '#202840', composerRing: '#a088e0',
      destructive: '#d67373', destructiveForeground: '#202840',
      sidebarBackground: '#141828', sidebarBorder: '#8068c0', userBubble: '#283050', userBubbleBorder: '#a088e0'
    },
    darkColors: null,
    terminal: {
      foreground: '#c8c8e8', cursor: '#a088e0', selectionBackground: '#283050', black: '#202840',
      red: '#d06060', green: '#70d070', yellow: '#d0c050', blue: '#a088e0', magenta: '#9070d0', cyan: '#a088e0', white: '#c8c8e8',
      brightBlack: '#483868', brightRed: '#d06060', brightGreen: '#70d070', brightYellow: '#d0c050',
      brightBlue: '#a088e0', brightMagenta: '#9070d0', brightCyan: '#a088e0', brightWhite: '#c8c8e8'
    },
    semantic: { ok: '#70d070', warn: '#d0c050', error: '#d67373', tool: '#a088e0' }
  },
  {
    name: 'pack-deep-ocean', label: 'Deep Ocean Pack', description: 'Full desktop pack from the deep-ocean Hermes skin.',
    colors: {
      background: '#0a1a20', foreground: '#c0e8e8', card: '#0a1a20', cardForeground: '#c0e8e8',
      muted: '#1c2f34', mutedForeground: '#7c97a0', popover: '#0a2838', popoverForeground: '#c0e8e8',
      primary: '#3098a8', primaryForeground: '#0a1a20', secondary: '#0a2838', secondaryForeground: '#c0e8e8',
      accent: '#50c8d0', accentForeground: '#0a1a20', border: '#276d84', input: '#0a1a20', ring: '#50c8d0',
      midground: '#3098a8', midgroundForeground: '#0a1a20', composerRing: '#50c8d0',
      destructive: '#d25968', destructiveForeground: '#0a1a20',
      sidebarBackground: '#061014', sidebarBorder: '#276d84', userBubble: '#0a2838', userBubbleBorder: '#50c8d0'
    },
    darkColors: null,
    terminal: {
      foreground: '#c0e8e8', cursor: '#50c8d0', selectionBackground: '#0a2838', black: '#0a1a20',
      red: '#d05060', green: '#50d0a0', yellow: '#d0a840', blue: '#50c8d0', magenta: '#3098a8', cyan: '#50c8d0', white: '#c0e8e8',
      brightBlack: '#1a4858', brightRed: '#d05060', brightGreen: '#50d0a0', brightYellow: '#d0a840',
      brightBlue: '#50c8d0', brightMagenta: '#3098a8', brightCyan: '#50c8d0', brightWhite: '#c0e8e8'
    },
    semantic: { ok: '#50d0a0', warn: '#d0a840', error: '#d25968', tool: '#50c8d0' }
  },
  {
    name: 'pack-deep-void', label: 'Deep Void Pack', description: 'Full desktop pack from the deep-void Hermes skin.',
    colors: {
      background: '#000000', foreground: '#b0a0c0', card: '#050508', cardForeground: '#b0a0c0',
      muted: '#121013', mutedForeground: '#7f798c', popover: '#1a102a', popoverForeground: '#b0a0c0',
      primary: '#7b6da8', primaryForeground: '#000000', secondary: '#1a102a', secondaryForeground: '#b0a0c0',
      accent: '#6373a2', accentForeground: '#000000', border: '#5f5771', input: '#050508', ring: '#6373a2',
      midground: '#7b6da8', midgroundForeground: '#000000', composerRing: '#6373a2',
      destructive: '#a46262', destructiveForeground: '#000000',
      sidebarBackground: '#000000', sidebarBorder: '#5f5771', userBubble: '#1a102a', userBubbleBorder: '#6373a2'
    },
    darkColors: null,
    terminal: {
      foreground: '#b0a0c0', cursor: '#6373a2', selectionBackground: '#1a102a', black: '#000000',
      red: '#904040', green: '#508050', yellow: '#908050', blue: '#6070a0', magenta: '#7060a0', cyan: '#9080c0', white: '#b0a0c0',
      brightBlack: '#2a2040', brightRed: '#904040', brightGreen: '#508050', brightYellow: '#908050',
      brightBlue: '#6070a0', brightMagenta: '#7060a0', brightCyan: '#9080c0', brightWhite: '#b0a0c0'
    },
    semantic: { ok: '#508050', warn: '#908050', error: '#a46262', tool: '#6373a2' }
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
      primary: '#d44f4f', primaryForeground: '#141010', secondary: '#281010', secondaryForeground: '#e0d0c0',
      accent: '#f0c840', accentForeground: '#141010', border: '#b83030', input: '#141010', ring: '#f0c840',
      midground: '#d44f4f', midgroundForeground: '#141010', composerRing: '#f0c840',
      destructive: '#e24141', destructiveForeground: '#141010',
      sidebarBackground: '#0a0808', sidebarBorder: '#b83030', userBubble: '#281010', userBubbleBorder: '#f0c840'
    },
    darkColors: null,
    terminal: {
      foreground: '#e0d0c0', cursor: '#f0c840', selectionBackground: '#281010', black: '#141010',
      red: '#e03030', green: '#50a050', yellow: '#f0c840', blue: '#f0c840', magenta: '#d04040', cyan: '#f0c840', white: '#e0d0c0',
      brightBlack: '#582828', brightRed: '#e03030', brightGreen: '#50a050', brightYellow: '#f0c840',
      brightBlue: '#f0c840', brightMagenta: '#d04040', brightCyan: '#f0c840', brightWhite: '#e0d0c0'
    },
    semantic: { ok: '#50a050', warn: '#f0c840', error: '#e24141', tool: '#f0c840' }
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
      accent: '#7890b8', accentForeground: '#18181a', border: '#6d5d8c', input: '#18181a', ring: '#7890b8',
      midground: '#9a88c0', midgroundForeground: '#18181a', composerRing: '#7890b8',
      destructive: '#b96a6a', destructiveForeground: '#18181a',
      sidebarBackground: '#101012', sidebarBorder: '#6d5d8c', userBubble: '#282838', userBubbleBorder: '#7890b8'
    },
    darkColors: null,
    terminal: {
      foreground: '#d0d0d8', cursor: '#7890b8', selectionBackground: '#282838', black: '#18181a',
      red: '#b86868', green: '#78a878', yellow: '#c8a870', blue: '#7890b8', magenta: '#9a88c0', cyan: '#c8b8e8', white: '#d0d0d8',
      brightBlack: '#3a3050', brightRed: '#b86868', brightGreen: '#78a878', brightYellow: '#c8a870',
      brightBlue: '#7890b8', brightMagenta: '#9a88c0', brightCyan: '#c8b8e8', brightWhite: '#d0d0d8'
    },
    semantic: { ok: '#78a878', warn: '#c8a870', error: '#b96a6a', tool: '#7890b8' }
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
    name: 'pack-forge-master', label: 'Forge Master Pack', description: 'Full desktop pack from the forge-master Hermes skin.',
    colors: {
      background: '#141210', foreground: '#d0c8b8', card: '#141210', cardForeground: '#d0c8b8',
      muted: '#272421', mutedForeground: '#978980', popover: '#281810', popoverForeground: '#d0c8b8',
      primary: '#6888a8', primaryForeground: '#141210', secondary: '#281810', secondaryForeground: '#d0c8b8',
      accent: '#6888a8', accentForeground: '#141210', border: '#c86030', input: '#141210', ring: '#6888a8',
      midground: '#6888a8', midgroundForeground: '#141210', composerRing: '#6888a8',
      destructive: '#d45143', destructiveForeground: '#141210',
      sidebarBackground: '#0a0808', sidebarBorder: '#c86030', userBubble: '#281810', userBubbleBorder: '#6888a8'
    },
    darkColors: null,
    terminal: {
      foreground: '#d0c8b8', cursor: '#6888a8', selectionBackground: '#281810', black: '#141210',
      red: '#d04030', green: '#60a860', yellow: '#f0a050', blue: '#6888a8', magenta: '#6888a8', cyan: '#f0a050', white: '#d0c8b8',
      brightBlack: '#483020', brightRed: '#d04030', brightGreen: '#60a860', brightYellow: '#f0a050',
      brightBlue: '#6888a8', brightMagenta: '#6888a8', brightCyan: '#f0a050', brightWhite: '#d0c8b8'
    },
    semantic: { ok: '#60a860', warn: '#f0a050', error: '#d45143', tool: '#6888a8' }
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
    name: 'pack-graphite', label: 'Graphite Pack', description: 'Full desktop pack from the graphite Hermes skin.',
    colors: {
      background: '#1e1e1e', foreground: '#c8c8c8', card: '#1e1e1e', cardForeground: '#c8c8c8',
      muted: '#2f2f2f', mutedForeground: '#979797', popover: '#2a2a2a', popoverForeground: '#c8c8c8',
      primary: '#6e8b8b', primaryForeground: '#1e1e1e', secondary: '#2a2a2a', secondaryForeground: '#c8c8c8',
      accent: '#738896', accentForeground: '#1e1e1e', border: '#696969', input: '#1e1e1e', ring: '#738896',
      midground: '#6e8b8b', midgroundForeground: '#1e1e1e', composerRing: '#738896',
      destructive: '#9f7e7e', destructiveForeground: '#1e1e1e',
      sidebarBackground: '#141414', sidebarBorder: '#696969', userBubble: '#2a2a2a', userBubbleBorder: '#738896'
    },
    darkColors: null,
    terminal: {
      foreground: '#c8c8c8', cursor: '#738896', selectionBackground: '#2a2a2a', black: '#1e1e1e',
      red: '#886060', green: '#608860', yellow: '#888060', blue: '#607888', magenta: '#608080', cyan: '#809090', white: '#c8c8c8',
      brightBlack: '#3a3a3a', brightRed: '#886060', brightGreen: '#608860', brightYellow: '#888060',
      brightBlue: '#607888', brightMagenta: '#608080', brightCyan: '#809090', brightWhite: '#c8c8c8'
    },
    semantic: { ok: '#6a8f6a', warn: '#8d8566', error: '#9f7e7e', tool: '#738896' }
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
    semantic: { ok: '#227744', warn: '#a26120', error: '#aa2222', tool: '#3366aa' }
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
    name: 'pack-linen-sage', label: 'Linen Sage Pack', description: 'Full desktop pack from the linen-sage Hermes skin.',
    colors: {
      background: '#f4f0e8', foreground: '#384830', card: '#f4f0e8', cardForeground: '#384830',
      muted: '#e9e6dd', mutedForeground: '#63685a', popover: '#d8d0c0', popoverForeground: '#384830',
      primary: '#637254', primaryForeground: '#f4f0e8', secondary: '#d8d0c0', secondaryForeground: '#384830',
      accent: '#587088', accentForeground: '#f4f0e8', border: '#808f71', input: '#f4f0e8', ring: '#587088',
      midground: '#637254', midgroundForeground: '#f4f0e8', composerRing: '#587088',
      destructive: '#905048', destructiveForeground: '#f4f0e8',
      sidebarBackground: '#e8e4d8', sidebarBorder: '#78866a', userBubble: '#d8d0c0', userBubbleBorder: '#587088'
    },
    darkColors: null,
    terminal: {
      foreground: '#384830', cursor: '#587088', selectionBackground: '#d8d0c0', black: '#f4f0e8',
      red: '#905048', green: '#588050', yellow: '#907048', blue: '#587088', magenta: '#687858', cyan: '#384830', white: '#384830',
      brightBlack: '#a8b098', brightRed: '#905048', brightGreen: '#588050', brightYellow: '#907048',
      brightBlue: '#587088', brightMagenta: '#687858', brightCyan: '#384830', brightWhite: '#384830'
    },
    semantic: { ok: '#52774a', warn: '#866843', error: '#905048', tool: '#587088' }
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
    name: 'pack-midnight-studio', label: 'Midnight Studio Pack', description: 'Full desktop pack from the midnight-studio Hermes skin.',
    colors: {
      background: '#1a1a2e', foreground: '#d8d0c8', card: '#1a1a2e', cardForeground: '#d8d0c8',
      muted: '#2d2c3d', mutedForeground: '#9893a6', popover: '#282840', popoverForeground: '#d8d0c8',
      primary: '#c8a050', primaryForeground: '#1a1a2e', secondary: '#282840', secondaryForeground: '#d8d0c8',
      accent: '#7088b0', accentForeground: '#1a1a2e', border: '#6a637f', input: '#1a1a2e', ring: '#7088b0',
      midground: '#c8a050', midgroundForeground: '#1a1a2e', composerRing: '#7088b0',
      destructive: '#bb6f68', destructiveForeground: '#1a1a2e',
      sidebarBackground: '#121224', sidebarBorder: '#6a637f', userBubble: '#282840', userBubbleBorder: '#7088b0'
    },
    darkColors: null,
    terminal: {
      foreground: '#d8d0c8', cursor: '#7088b0', selectionBackground: '#282840', black: '#1a1a2e',
      red: '#b05850', green: '#80a870', yellow: '#d8a040', blue: '#7088b0', magenta: '#c8a050', cyan: '#e8d080', white: '#d8d0c8',
      brightBlack: '#504868', brightRed: '#b05850', brightGreen: '#80a870', brightYellow: '#d8a040',
      brightBlue: '#7088b0', brightMagenta: '#c8a050', brightCyan: '#e8d080', brightWhite: '#d8d0c8'
    },
    semantic: { ok: '#80a870', warn: '#d8a040', error: '#bb6f68', tool: '#7088b0' }
  },
  {
    name: 'pack-moss-stone', label: 'Moss Stone Pack', description: 'Full desktop pack from the moss-stone Hermes skin.',
    colors: {
      background: '#1c2018', foreground: '#c8d0b8', card: '#1c2018', cardForeground: '#c8d0b8',
      muted: '#2d3228', mutedForeground: '#959a8f', popover: '#283020', popoverForeground: '#c8d0b8',
      primary: '#7c8c65', primaryForeground: '#1c2018', secondary: '#283020', secondaryForeground: '#c8d0b8',
      accent: '#7098a0', accentForeground: '#1c2018', border: '#6a7a5a', input: '#1c2018', ring: '#7098a0',
      midground: '#7c8c65', midgroundForeground: '#1c2018', composerRing: '#7098a0',
      destructive: '#ba7465', destructiveForeground: '#1c2018',
      sidebarBackground: '#121610', sidebarBorder: '#6a7a5a', userBubble: '#283020', userBubbleBorder: '#7098a0'
    },
    darkColors: null,
    terminal: {
      foreground: '#c8d0b8', cursor: '#7098a0', selectionBackground: '#283020', black: '#1c2018',
      red: '#b87060', green: '#80b870', yellow: '#c0a860', blue: '#7098a0', magenta: '#788860', cyan: '#90a878', white: '#c8d0b8',
      brightBlack: '#3a4430', brightRed: '#b87060', brightGreen: '#80b870', brightYellow: '#c0a860',
      brightBlue: '#7098a0', brightMagenta: '#788860', brightCyan: '#90a878', brightWhite: '#c8d0b8'
    },
    semantic: { ok: '#80b870', warn: '#c0a860', error: '#ba7465', tool: '#7098a0' }
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
      primary: '#7b7b92', primaryForeground: '#101012', secondary: '#202028', secondaryForeground: '#d8d8e0',
      accent: '#6090a0', accentForeground: '#101012', border: '#596077', input: '#101012', ring: '#6090a0',
      midground: '#7b7b92', midgroundForeground: '#101012', composerRing: '#6090a0',
      destructive: '#b6655e', destructiveForeground: '#101012',
      sidebarBackground: '#08080a', sidebarBorder: '#596077', userBubble: '#202028', userBubbleBorder: '#6090a0'
    },
    darkColors: null,
    terminal: {
      foreground: '#d8d8e0', cursor: '#6090a0', selectionBackground: '#202028', black: '#101012',
      red: '#b05850', green: '#60a070', yellow: '#c0a860', blue: '#6090a0', magenta: '#787890', cyan: '#d0d0d8', white: '#d8d8e0',
      brightBlack: '#383848', brightRed: '#b05850', brightGreen: '#60a070', brightYellow: '#c0a860',
      brightBlue: '#6090a0', brightMagenta: '#787890', brightCyan: '#d0d0d8', brightWhite: '#d8d8e0'
    },
    semantic: { ok: '#60a070', warn: '#c0a860', error: '#b6655e', tool: '#6090a0' }
  },
  {
    name: 'pack-obsidian', label: 'Obsidian Pack', description: 'Full desktop pack from the obsidian Hermes skin.',
    colors: {
      background: '#0f0f0f', foreground: '#d0d0d0', card: '#0f0f0f', cardForeground: '#d0d0d0',
      muted: '#222222', mutedForeground: '#898989', popover: '#222222', popoverForeground: '#d0d0d0',
      primary: '#7b7b7b', primaryForeground: '#0f0f0f', secondary: '#222222', secondaryForeground: '#d0d0d0',
      accent: '#6088c0', accentForeground: '#0f0f0f', border: '#5f5f5f', input: '#0f0f0f', ring: '#6088c0',
      midground: '#7b7b7b', midgroundForeground: '#0f0f0f', composerRing: '#6088c0',
      destructive: '#c45a5a', destructiveForeground: '#0f0f0f',
      sidebarBackground: '#080808', sidebarBorder: '#5f5f5f', userBubble: '#222222', userBubbleBorder: '#6088c0'
    },
    darkColors: null,
    terminal: {
      foreground: '#d0d0d0', cursor: '#6088c0', selectionBackground: '#222222', black: '#0f0f0f',
      red: '#c05050', green: '#6aaa64', yellow: '#c8a050', blue: '#6088c0', magenta: '#787878', cyan: '#a0a0a0', white: '#d0d0d0',
      brightBlack: '#444444', brightRed: '#c05050', brightGreen: '#6aaa64', brightYellow: '#c8a050',
      brightBlue: '#6088c0', brightMagenta: '#787878', brightCyan: '#a0a0a0', brightWhite: '#d0d0d0'
    },
    semantic: { ok: '#6aaa64', warn: '#c8a050', error: '#c45a5a', tool: '#6088c0' }
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
      primary: '#967e62', primaryForeground: '#1e1814', secondary: '#2a201a', secondaryForeground: '#d8d0c0',
      accent: '#80a868', accentForeground: '#1e1814', border: '#6b8a5a', input: '#1e1814', ring: '#80a868',
      midground: '#967e62', midgroundForeground: '#1e1814', composerRing: '#80a868',
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
    semantic: { ok: '#408040', warn: '#a56321', error: '#cc3333', tool: '#336688' }
  },
  {
    name: 'pack-sandstone', label: 'Sandstone Pack', description: 'Full desktop pack from the sandstone Hermes skin.',
    colors: {
      background: '#1e1a14', foreground: '#e8dcc8', card: '#1e1a14', cardForeground: '#e8dcc8',
      muted: '#322d26', mutedForeground: '#a19289', popover: '#2a2018', popoverForeground: '#e8dcc8',
      primary: '#c87840', primaryForeground: '#1e1a14', secondary: '#2a2018', secondaryForeground: '#e8dcc8',
      accent: '#80a0c0', accentForeground: '#1e1a14', border: '#b89060', input: '#1e1a14', ring: '#80a0c0',
      midground: '#c87840', midgroundForeground: '#1e1a14', composerRing: '#80a0c0',
      destructive: '#bb6f54', destructiveForeground: '#1e1a14',
      sidebarBackground: '#14100c', sidebarBorder: '#b89060', userBubble: '#2a2018', userBubbleBorder: '#80a0c0'
    },
    darkColors: null,
    terminal: {
      foreground: '#e8dcc8', cursor: '#80a0c0', selectionBackground: '#2a2018', black: '#1e1a14',
      red: '#b05838', green: '#80a860', yellow: '#d8a040', blue: '#80a0c0', magenta: '#c87840', cyan: '#d8b880', white: '#e8dcc8',
      brightBlack: '#5a4030', brightRed: '#b05838', brightGreen: '#80a860', brightYellow: '#d8a040',
      brightBlue: '#80a0c0', brightMagenta: '#c87840', brightCyan: '#d8b880', brightWhite: '#e8dcc8'
    },
    semantic: { ok: '#80a860', warn: '#d8a040', error: '#bb6f54', tool: '#80a0c0' }
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
    name: 'pack-shadow-thief', label: 'Shadow Thief Pack', description: 'Full desktop pack from the shadow-thief Hermes skin.',
    colors: {
      background: '#101014', foreground: '#b0b0c0', card: '#101014', cardForeground: '#b0b0c0',
      muted: '#202025', mutedForeground: '#888790', popover: '#201e2a', popoverForeground: '#b0b0c0',
      primary: '#50a8a8', primaryForeground: '#101014', secondary: '#201e2a', secondaryForeground: '#b0b0c0',
      accent: '#50a8a8', accentForeground: '#101014', border: '#655d78', input: '#101014', ring: '#50a8a8',
      midground: '#50a8a8', midgroundForeground: '#101014', composerRing: '#50a8a8',
      destructive: '#ad6876', destructiveForeground: '#101014',
      sidebarBackground: '#08080c', sidebarBorder: '#655d78', userBubble: '#201e2a', userBubbleBorder: '#50a8a8'
    },
    darkColors: null,
    terminal: {
      foreground: '#b0b0c0', cursor: '#50a8a8', selectionBackground: '#201e2a', black: '#101014',
      red: '#a05060', green: '#50a070', yellow: '#a09050', blue: '#50a8a8', magenta: '#50a8a8', cyan: '#8898b0', white: '#b0b0c0',
      brightBlack: '#2a2838', brightRed: '#a05060', brightGreen: '#50a070', brightYellow: '#a09050',
      brightBlue: '#50a8a8', brightMagenta: '#50a8a8', brightCyan: '#8898b0', brightWhite: '#b0b0c0'
    },
    semantic: { ok: '#50a070', warn: '#a09050', error: '#ad6876', tool: '#50a8a8' }
  },
  {
    name: 'pack-single-malt', label: 'Single Malt Pack', description: 'Full desktop pack from the single-malt Hermes skin.',
    colors: {
      background: '#1a1410', foreground: '#d0c0a0', card: '#1a1410', cardForeground: '#d0c0a0',
      muted: '#2c251e', mutedForeground: '#958b82', popover: '#2a1e10', popoverForeground: '#d0c0a0',
      primary: '#987a4d', primaryForeground: '#1a1410', secondary: '#2a1e10', secondaryForeground: '#d0c0a0',
      accent: '#80a090', accentForeground: '#1a1410', border: '#765f38', input: '#1a1410', ring: '#80a090',
      midground: '#987a4d', midgroundForeground: '#1a1410', composerRing: '#80a090',
      destructive: '#aa7155', destructiveForeground: '#1a1410',
      sidebarBackground: '#0e0a08', sidebarBorder: '#765f38', userBubble: '#2a1e10', userBubbleBorder: '#80a090'
    },
    darkColors: null,
    terminal: {
      foreground: '#d0c0a0', cursor: '#80a090', selectionBackground: '#2a1e10', black: '#1a1410',
      red: '#a06040', green: '#80a060', yellow: '#c09860', blue: '#80a090', magenta: '#907040', cyan: '#c09860', white: '#d0c0a0',
      brightBlack: '#3a2818', brightRed: '#a06040', brightGreen: '#80a060', brightYellow: '#c09860',
      brightBlue: '#80a090', brightMagenta: '#907040', brightCyan: '#c09860', brightWhite: '#d0c0a0'
    },
    semantic: { ok: '#80a060', warn: '#c09860', error: '#aa7155', tool: '#80a090' }
  },
  {
    name: 'pack-slate-mist', label: 'Slate Mist Pack', description: 'Full desktop pack from the slate-mist Hermes skin.',
    colors: {
      background: '#1c1e22', foreground: '#c0c4cc', card: '#1c1e22', cardForeground: '#c0c4cc',
      muted: '#2c2f33', mutedForeground: '#93979c', popover: '#282a30', popoverForeground: '#c0c4cc',
      primary: '#7c8697', primaryForeground: '#1c1e22', secondary: '#282a30', secondaryForeground: '#c0c4cc',
      accent: '#7c8697', accentForeground: '#1c1e22', border: '#646971', input: '#1c1e22', ring: '#7c8697',
      midground: '#7c8697', midgroundForeground: '#1c1e22', composerRing: '#7c8697',
      destructive: '#968181', destructiveForeground: '#1c1e22',
      sidebarBackground: '#121418', sidebarBorder: '#646971', userBubble: '#282a30', userBubbleBorder: '#7c8697'
    },
    darkColors: null,
    terminal: {
      foreground: '#c0c4cc', cursor: '#7c8697', selectionBackground: '#282a30', black: '#1c1e22',
      red: '#907a7a', green: '#7a907a', yellow: '#908a70', blue: '#687488', magenta: '#687488', cyan: '#a0a8b4', white: '#c0c4cc',
      brightBlack: '#343a44', brightRed: '#907a7a', brightGreen: '#7a907a', brightYellow: '#908a70',
      brightBlue: '#687488', brightMagenta: '#687488', brightCyan: '#a0a8b4', brightWhite: '#c0c4cc'
    },
    semantic: { ok: '#7a907a', warn: '#908a70', error: '#968181', tool: '#7c8697' }
  },
  {
    name: 'pack-solar-flare', label: 'Solar Flare Pack', description: 'Full desktop pack from the solar-flare Hermes skin.',
    colors: {
      background: '#002b36', foreground: '#eee8d5', card: '#002b36', cardForeground: '#eee8d5',
      muted: '#183e46', mutedForeground: '#97a5a9', popover: '#073642', popoverForeground: '#eee8d5',
      primary: '#d67147', primaryForeground: '#002b36', secondary: '#073642', secondaryForeground: '#eee8d5',
      accent: '#3794d6', accentForeground: '#002b36', border: '#b58900', input: '#002b36', ring: '#3794d6',
      midground: '#d67147', midgroundForeground: '#002b36', composerRing: '#3794d6',
      destructive: '#e56563', destructiveForeground: '#002b36',
      sidebarBackground: '#001b24', sidebarBorder: '#b58900', userBubble: '#073642', userBubbleBorder: '#3794d6'
    },
    darkColors: null,
    terminal: {
      foreground: '#eee8d5', cursor: '#3794d6', selectionBackground: '#073642', black: '#002b36',
      red: '#dc322f', green: '#859900', yellow: '#b58900', blue: '#268bd2', magenta: '#cb4b16', cyan: '#fdf6e3', white: '#eee8d5',
      brightBlack: '#586e75', brightRed: '#dc322f', brightGreen: '#859900', brightYellow: '#b58900',
      brightBlue: '#268bd2', brightMagenta: '#cb4b16', brightCyan: '#fdf6e3', brightWhite: '#eee8d5'
    },
    semantic: { ok: '#859900', warn: '#b58900', error: '#e56563', tool: '#3794d6' }
  },
  {
    name: 'pack-stained-glass', label: 'Stained Glass Pack', description: 'Full desktop pack from the stained-glass Hermes skin.',
    colors: {
      background: '#141420', foreground: '#d8d0c8', card: '#141420', cardForeground: '#d8d0c8',
      muted: '#282731', mutedForeground: '#8e8e97', popover: '#202038', popoverForeground: '#d8d0c8',
      primary: '#50a0d0', primaryForeground: '#141420', secondary: '#202038', secondaryForeground: '#d8d0c8',
      accent: '#50a0d0', accentForeground: '#141420', border: '#c0a050', input: '#141420', ring: '#50a0d0',
      midground: '#50a0d0', midgroundForeground: '#141420', composerRing: '#50a0d0',
      destructive: '#c66060', destructiveForeground: '#141420',
      sidebarBackground: '#0a0a14', sidebarBorder: '#c0a050', userBubble: '#202038', userBubbleBorder: '#50a0d0'
    },
    darkColors: null,
    terminal: {
      foreground: '#d8d0c8', cursor: '#50a0d0', selectionBackground: '#202038', black: '#141420',
      red: '#c05050', green: '#60b870', yellow: '#c0a050', blue: '#50a0d0', magenta: '#50a0d0', cyan: '#e07050', white: '#d8d0c8',
      brightBlack: '#383848', brightRed: '#c05050', brightGreen: '#60b870', brightYellow: '#c0a050',
      brightBlue: '#50a0d0', brightMagenta: '#50a0d0', brightCyan: '#e07050', brightWhite: '#d8d0c8'
    },
    semantic: { ok: '#60b870', warn: '#c0a050', error: '#c66060', tool: '#50a0d0' }
  },
  {
    name: 'pack-steel-thread', label: 'Steel Thread Pack', description: 'Full desktop pack from the steel-thread Hermes skin.',
    colors: {
      background: '#18181a', foreground: '#c0c0c8', card: '#18181a', cardForeground: '#c0c0c8',
      muted: '#29292b', mutedForeground: '#8f8f92', popover: '#262630', popoverForeground: '#c0c0c8',
      primary: '#808087', primaryForeground: '#18181a', secondary: '#262630', secondaryForeground: '#c0c0c8',
      accent: '#7088a0', accentForeground: '#18181a', border: '#65656a', input: '#18181a', ring: '#7088a0',
      midground: '#808087', midgroundForeground: '#18181a', composerRing: '#7088a0',
      destructive: '#a47676', destructiveForeground: '#18181a',
      sidebarBackground: '#0e0e10', sidebarBorder: '#65656a', userBubble: '#262630', userBubbleBorder: '#7088a0'
    },
    darkColors: null,
    terminal: {
      foreground: '#c0c0c8', cursor: '#7088a0', selectionBackground: '#262630', black: '#18181a',
      red: '#a07070', green: '#78a078', yellow: '#a09860', blue: '#7088a0', magenta: '#707078', cyan: '#a0a0a8', white: '#c0c0c8',
      brightBlack: '#343438', brightRed: '#a07070', brightGreen: '#78a078', brightYellow: '#a09860',
      brightBlue: '#7088a0', brightMagenta: '#707078', brightCyan: '#a0a0a8', brightWhite: '#c0c0c8'
    },
    semantic: { ok: '#78a078', warn: '#a09860', error: '#a47676', tool: '#7088a0' }
  },
  {
    name: 'pack-typewriter-cream', label: 'Typewriter Cream Pack', description: 'Full desktop pack from the typewriter-cream Hermes skin.',
    colors: {
      background: '#2a2418', foreground: '#e0d8c0', card: '#2a2418', cardForeground: '#e0d8c0',
      muted: '#3c3629', mutedForeground: '#a89f91', popover: '#382818', popoverForeground: '#e0d8c0',
      primary: '#a08860', primaryForeground: '#2a2418', secondary: '#382818', secondaryForeground: '#e0d8c0',
      accent: '#80a090', accentForeground: '#2a2418', border: '#8a7850', input: '#2a2418', ring: '#80a090',
      midground: '#a08860', midgroundForeground: '#2a2418', composerRing: '#80a090',
      destructive: '#c07966', destructiveForeground: '#2a2418',
      sidebarBackground: '#1a1810', sidebarBorder: '#8a7850', userBubble: '#382818', userBubbleBorder: '#80a090'
    },
    darkColors: null,
    terminal: {
      foreground: '#e0d8c0', cursor: '#80a090', selectionBackground: '#382818', black: '#2a2418',
      red: '#b05840', green: '#80a060', yellow: '#c0a050', blue: '#80a090', magenta: '#a08860', cyan: '#c8b890', white: '#e0d8c0',
      brightBlack: '#5a4a30', brightRed: '#b05840', brightGreen: '#80a060', brightYellow: '#c0a050',
      brightBlue: '#80a090', brightMagenta: '#a08860', brightCyan: '#c8b890', brightWhite: '#e0d8c0'
    },
    semantic: { ok: '#80a060', warn: '#c0a050', error: '#c07966', tool: '#80a090' }
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
      primary: '#8f8274', primaryForeground: '#1e1c18', secondary: '#2a2820', secondaryForeground: '#c8c0b8',
      accent: '#7098a0', accentForeground: '#1e1c18', border: '#6e6760', input: '#1e1c18', ring: '#7098a0',
      midground: '#8f8274', midgroundForeground: '#1e1c18', composerRing: '#7098a0',
      destructive: '#a17d6e', destructiveForeground: '#1e1c18',
      sidebarBackground: '#141210', sidebarBorder: '#6e6760', userBubble: '#2a2820', userBubbleBorder: '#7098a0'
    },
    darkColors: null,
    terminal: {
      foreground: '#c8c0b8', cursor: '#7098a0', selectionBackground: '#2a2820', black: '#1e1c18',
      red: '#987060', green: '#809868', yellow: '#988850', blue: '#7098a0', magenta: '#786858', cyan: '#b0a898', white: '#c8c0b8',
      brightBlack: '#3a3430', brightRed: '#987060', brightGreen: '#809868', brightYellow: '#988850',
      brightBlue: '#7098a0', brightMagenta: '#786858', brightCyan: '#b0a898', brightWhite: '#c8c0b8'
    },
    semantic: { ok: '#809868', warn: '#988850', error: '#a17d6e', tool: '#7098a0' }
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
]

for (const theme of fullThemes) {
  theme.darkColors = theme.colors
  // The core Desktop theme API only exposes two brand channels. Put the skin's
  // tool color on the visible accent channel, and keep its main accent on primary.
  theme.colors.midground = theme.colors.accent
  theme.darkColors = theme.colors
}

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
