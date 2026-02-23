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
];
