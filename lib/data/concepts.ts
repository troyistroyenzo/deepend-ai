import { Concept } from '../types';

export const concepts: Concept[] = [
  {
    id: 'flesh-os',
    name: 'Flesh Operating System',
    description:
      'Past-based decision-making system driven by fear and previous experience. The flesh determines possibility based on what has happened before.',
    frameworkId: 'framework-1',
    timestamps: [{ episodeId: 'ep-1', time: '00:12:00', context: 'Introduction of Flesh OS concept' }],
    biblicalRefs: ['rom-8-6', 'gal-5-17'],
  },
  {
    id: 'spirit-os',
    name: 'Spirit Operating System',
    description:
      "Future-based decision-making system driven by faith in God's promises. Promise determines possibility, not past experience.",
    frameworkId: 'framework-1',
    timestamps: [{ episodeId: 'ep-1', time: '00:28:00', context: 'Spirit OS introduction' }],
    biblicalRefs: ['rom-8-6', 'col-3-1'],
  },
  {
    id: 'two-fears',
    name: 'Two Universal Fears',
    description:
      'All of humanity is driven by two core fears: fear of physical death (scarcity, control) and fear of being alone (rejection, people-pleasing).',
    frameworkId: 'framework-1',
    timestamps: [{ episodeId: 'ep-1', time: '00:45:00', context: 'Two fears that rule humanity' }],
    biblicalRefs: ['matt-6-25', 'deut-31-6'],
  },
  {
    id: 'three-heavens',
    name: 'Three Heaven Layers',
    description:
      "Three realms of attention: First Heaven (material/circumstances), Second Heaven (spiritual warfare/lies vs truth), Third Heaven (God's throne/eternal truth).",
    frameworkId: 'framework-1',
    timestamps: [{ episodeId: 'ep-1', time: '01:05:00', context: 'Three heaven layers explained' }],
    biblicalRefs: ['1john-2-16', 'eph-6-12', 'col-3-1'],
  },
  {
    id: 'belief-stages',
    name: 'Belief System Replacement (3 Stages)',
    description:
      "Three stages of belief transformation: Cognition (head knowledge), Being (experiential), Identity (embodied truth). Most people's brains and bodies are in constant conflict.",
    frameworkId: 'framework-1',
    timestamps: [{ episodeId: 'ep-1', time: '01:22:00', context: 'Three stages of belief change' }],
    biblicalRefs: ['gal-2-20'],
  },
  {
    id: 'reframing-protocol',
    name: 'The Reframing Protocol',
    description:
      '3-step protocol: NAME IT (identify Flesh OS activation), REPLACE THE MIDDLE (insert scripture truth between circumstance and outcome), MEDITATE (let truth sit in your body until physiological shift).',
    frameworkId: 'framework-1',
    timestamps: [{ episodeId: 'ep-1', time: '01:40:00', context: 'Reframing protocol walkthrough' }],
    biblicalRefs: ['rom-8-6'],
  },
  {
    id: 'morning-reorientation',
    name: 'Morning Reorientation Practice',
    description:
      "We all wake up in the flesh. A daily 5-minute conscious choice to switch from default Flesh OS to Spirit OS shapes the entire day's decisions.",
    frameworkId: 'framework-1',
    timestamps: [{ episodeId: 'ep-1', time: '02:10:00', context: 'Morning practice introduction' }],
    biblicalRefs: ['rom-8-6'],
  },
  {
    id: 'trauma-blocker',
    name: 'Trauma Blocker (Unhealed Past)',
    description:
      "Past wounding creates \"protector parts\" that you mistake for personality. Triggered patterns hijack behavior and get justified as \"that's just who I am.\"",
    frameworkId: 'framework-2',
    timestamps: [{ episodeId: 'ep-2', time: '00:18:00', context: 'Trauma as inheritance blocker' }],
    biblicalRefs: ['matt-18-3', 'ps-139-13'],
  },
  {
    id: 'disobedience',
    name: 'Disobedience Blocker (Wrong Priority)',
    description:
      "Doing what you think is right instead of what God said — usually rooted in people-pleasing. God's blessing doesn't equal approval of your method.",
    frameworkId: 'framework-2',
    timestamps: [{ episodeId: 'ep-2', time: '00:48:00', context: 'Disobedience pattern with Saul' }],
    biblicalRefs: ['1sam-15'],
  },
  {
    id: 'disqualification',
    name: 'Disqualification Blocker (Worthiness Lie)',
    description:
      "Believing you're unworthy causes self-sabotage before God can \"expose\" you. The truth: none of God's chosen were worthy — they were simply chosen.",
    frameworkId: 'framework-2',
    timestamps: [{ episodeId: 'ep-2', time: '01:10:00', context: 'Disqualification cycle explained' }],
    biblicalRefs: ['heb-12-1'],
  },
  {
    id: 'protector-parts',
    name: 'Protector Parts (Internal Family Systems)',
    description:
      'Younger versions of you with protective jobs formed during childhood trauma. They activate when triggered, make decisions without your conscious adult self, then you justify it.',
    frameworkId: 'framework-2',
    timestamps: [{ episodeId: 'ep-2', time: '01:28:00', context: 'Protector parts detailed explanation' }],
    biblicalRefs: ['matt-18-3', 'ps-139-13'],
  },
  {
    id: 'inner-child-healing',
    name: 'Inner Child Healing Protocol',
    description:
      '6-step process: IDENTIFY the part, HONESTY with God, THANK the protector, RETIRE it, SUBSTITUTE with Jesus, REPEAT as wounds resurface.',
    frameworkId: 'framework-2',
    timestamps: [{ episodeId: 'ep-2', time: '01:45:00', context: 'Inner child healing protocol' }],
    biblicalRefs: ['matt-18-3', 'ps-139-13'],
  },
  {
    id: 'generational-patterns',
    name: 'Generational Patterns',
    description:
      'You become what you rebel against when you define yourself by the wound instead of by truth. Healing the wound is the only way out.',
    frameworkId: 'framework-2',
    timestamps: [{ episodeId: 'ep-2', time: '02:00:00', context: 'Generational patterns discussion' }],
    biblicalRefs: ['heb-12-1'],
  },
  {
    id: 'emotional-honesty',
    name: 'Emotional Honesty (First Step)',
    description:
      'Performing for God blocks healing. God wants raw honesty — anger, fear, confusion — not polished prayer. "If I can\'t be safe with God, who can I be safe with?"',
    frameworkId: 'framework-2',
    timestamps: [{ episodeId: 'ep-2', time: '00:08:00', context: 'Emotional honesty as prerequisite' }],
    biblicalRefs: ['ps-139-13'],
  },
  {
    id: 'combined-protocol',
    name: 'Combined Diagnosis Protocol',
    description:
      '5-step integration: NAME THE OS, IDENTIFY THE BLOCKER, REPLACE (immediate reframe), HEAL (root work), MEDITATE (body integration). Complete transformation using both frameworks.',
    frameworkId: 'framework-integration',
    timestamps: [],
    biblicalRefs: ['rom-8-6', 'heb-12-1'],
  },
];
