/**
 * Faction data — edit names, colors, and descriptions to match your Design Intent.
 * Each faction drives the palette swap on hover.
 */
const factions = [
  {
    id: 'ironclad',
    name: 'Ironclad',
    tagline: 'Forged in fire. Unbreakable.',
    accentColor: '#d4a843',
    bgColor: '#1a1a2e',
    image: null,
    emblem: `
      <path d="M50 10 L65 35 L90 40 L72 58 L76 85 L50 72 L24 85 L28 58 L10 40 L35 35 Z"
            stroke="currentColor" stroke-width="2" fill="none" style="color: #d4a843"/>
      <path d="M50 28 L56 42 L70 44 L60 54 L62 68 L50 61 L38 68 L40 54 L30 44 L44 42 Z"
            fill="currentColor" style="color: #d4a843"/>
    `,
  },
  {
    id: 'voidborn',
    name: 'Voidborn',
    tagline: 'From nothing, everything.',
    accentColor: '#7b2d8e',
    bgColor: '#0d0d1a',
    image: null,
    emblem: `
      <circle cx="50" cy="50" r="35" stroke="currentColor" stroke-width="2" fill="none" style="color: #7b2d8e"/>
      <circle cx="50" cy="50" r="20" stroke="currentColor" stroke-width="1.5" fill="none" style="color: #7b2d8e"/>
      <circle cx="50" cy="50" r="6" fill="currentColor" style="color: #7b2d8e"/>
      <line x1="50" y1="15" x2="50" y2="29" stroke="currentColor" stroke-width="1.5" style="color: #7b2d8e"/>
      <line x1="50" y1="71" x2="50" y2="85" stroke="currentColor" stroke-width="1.5" style="color: #7b2d8e"/>
      <line x1="15" y1="50" x2="29" y2="50" stroke="currentColor" stroke-width="1.5" style="color: #7b2d8e"/>
      <line x1="71" y1="50" x2="85" y2="50" stroke="currentColor" stroke-width="1.5" style="color: #7b2d8e"/>
    `,
  },
  {
    id: 'solari',
    name: 'Solari',
    tagline: 'Light burns brightest in the dark.',
    accentColor: '#e8651a',
    bgColor: '#1a120b',
    image: null,
    emblem: `
      <polygon points="50,12 58,38 86,38 63,55 72,82 50,66 28,82 37,55 14,38 42,38"
               stroke="currentColor" stroke-width="2" fill="none" style="color: #e8651a"/>
      <circle cx="50" cy="48" r="12" fill="currentColor" style="color: #e8651a"/>
    `,
  },
  {
    id: 'tidecaller',
    name: 'Tidecaller',
    tagline: 'The depths remember.',
    accentColor: '#2ec4b6',
    bgColor: '#0a1628',
    image: null,
    emblem: `
      <path d="M15 55 Q25 40, 35 55 Q45 70, 55 55 Q65 40, 75 55 Q85 70, 95 55"
            stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" style="color: #2ec4b6"/>
      <path d="M5 45 Q15 30, 25 45 Q35 60, 45 45 Q55 30, 65 45 Q75 60, 85 45"
            stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" opacity="0.5" style="color: #2ec4b6"/>
      <path d="M20 65 Q30 50, 40 65 Q50 80, 60 65 Q70 50, 80 65"
            stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" opacity="0.5" style="color: #2ec4b6"/>
    `,
  },
]

export default factions
