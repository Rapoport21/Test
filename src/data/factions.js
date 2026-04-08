/**
 * Red Flag archetypes — each drives the palette swap on hover.
 */
const factions = [
  {
    id: 'finance-bro',
    name: 'Finance Bro',
    tagline: '"Let me explain crypto to you real quick."',
    accentColor: '#00ff88',
    bgColor: '#0a1a2f',
    image: import.meta.env.BASE_URL + 'images/finance-bro.png',
    warning: 'SURGEON GENERAL\'S WARNING: This man will explain NFTs at dinner.',
    dangerLevel: 'CRITICAL',
    stats: [
      { label: 'Ego', value: 5 },
      { label: 'Empathy', value: 1 },
      { label: 'Wealth Signaling', value: 5 },
      { label: 'Hair Product', value: 5 },
      { label: 'Moral Flexibility', value: 4 },
    ],
  },
  {
    id: 'drug-addict',
    name: 'Drug Addict',
    tagline: '"I can stop whenever I want. I just don\'t want to."',
    accentColor: '#9b59ff',
    bgColor: '#0d0a1a',
    image: import.meta.env.BASE_URL + 'images/drug-addict.png',
    warning: 'CAUTION: Will borrow your car and return it with no gas.',
    dangerLevel: 'EXTREME',
    stats: [
      { label: 'Reliability', value: 1 },
      { label: 'Bad Decisions', value: 5 },
      { label: 'Cash on Hand', value: 0 },
      { label: 'Excuses', value: 5 },
      { label: 'Vibe Decay', value: 5 },
    ],
  },
  {
    id: 'gym-bro',
    name: 'Gym Bro',
    tagline: '"Rest day? Never heard of her."',
    accentColor: '#ff4444',
    bgColor: '#1a0a0a',
    image: import.meta.env.BASE_URL + 'images/gym-bro.png',
    warning: 'WARNING: Every meal will be photographed and macro-tracked.',
    dangerLevel: 'SEVERE',
    stats: [
      { label: 'Strength', value: 5 },
      { label: 'Emotional Depth', value: 1 },
      { label: 'Protein Intake', value: 5 },
      { label: 'Self-Awareness', value: 2 },
      { label: 'Mirror Dependence', value: 5 },
    ],
  },
  {
    id: 'identity-crisis',
    name: 'Identity Crisis Millennial',
    tagline: '"I contain multitudes (and student debt)."',
    accentColor: '#ff69b4',
    bgColor: '#1a0a18',
    image: import.meta.env.BASE_URL + 'images/identity-crisis.png',
    warning: 'NOTICE: Personality subject to change without warning.',
    dangerLevel: 'UNSTABLE',
    stats: [
      { label: 'Stability', value: 2 },
      { label: 'Rebrands', value: 5 },
      { label: 'Follow-Through', value: 1 },
      { label: 'Therapy-Speak', value: 5 },
      { label: 'Personal Lore', value: 5 },
    ],
  },
]

export default factions
