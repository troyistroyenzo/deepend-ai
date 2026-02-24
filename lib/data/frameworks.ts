import { Framework } from '../types';

export const frameworks: Framework[] = [
  {
    id: 'framework-1',
    name: 'Operating Systems',
    description:
      'Flesh OS vs Spirit OS — which system are you running? Two decision-making systems drive all human behavior.',
    color: 'spirit',
    icon: '🧠',
    episodeId: 'ep-1',
    conceptIds: [
      'flesh-os',
      'spirit-os',
      'two-fears',
      'three-heavens',
      'belief-stages',
      'reframing-protocol',
      'morning-reorientation',
    ],
  },
  {
    id: 'framework-2',
    name: 'Inheritance Blockers',
    description:
      'Three blockers prevent you from receiving what God has for you: trauma, disobedience, and disqualification.',
    color: 'trauma',
    icon: '🔓',
    episodeId: 'ep-2',
    conceptIds: [
      'trauma-blocker',
      'disobedience',
      'disqualification',
      'protector-parts',
      'inner-child-healing',
      'generational-patterns',
      'emotional-honesty',
    ],
  },
  {
    id: 'framework-integration',
    name: 'Integration Protocol',
    description:
      'Using both frameworks together for complete diagnosis and lasting transformation.',
    color: 'integration',
    icon: '⚡',
    episodeId: '',
    conceptIds: ['combined-protocol'],
  },
  {
    id: 'framework-3',
    name: 'Spirit of Python',
    description:
      'Identify, discern, and break the constricting spirit assigned to hunt the anointing of advancing believers.',
    color: 'healing',
    icon: '🐍',
    episodeId: 'ep-3',
    conceptIds: [
      'serpent-family',
      'python-definition',
      'python-operations',
      'python-feeds',
      'python-targets',
      'python-discernment',
      'python-breaking',
      'divination-deep-dive',
      'spiritual-authority',
    ],
  },
  {
    id: 'framework-4',
    name: 'Spiritual Counterfeits',
    description:
      'Kabbalah, New Age, and occult systems decoded — understanding the counterfeit to recognize and return to the real.',
    color: 'flesh',
    icon: '🔍',
    episodeId: 'ep-4',
    conceptIds: [
      'kabbalah-definition',
      'kosher-serpent',
      'twin-messiahs',
      'kabbalistic-framework',
      'kabbalah-new-age',
      'kabbalah-geopolitics',
      'occult-power',
      'christian-response-kabbalah',
      'heavenly-scrolls',
    ],
  },
];
