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

  // ── FRAMEWORK 3: SPIRIT OF PYTHON ────────────────────────────────────────

  {
    id: 'serpent-family',
    name: 'Three Primary Serpent-Class Spirits',
    description:
      'Three dominant spirits operating in the West: Leviathan (pride, separation, distortion), Legion (chaos, fragmentation, overwhelm), and Python (hunting the anointing, constriction, counterfeit prophecy). Not every spirit claiming these names is the entity — lower-ranking spirits adopt powerful names.',
    frameworkId: 'framework-3',
    timestamps: [{ episodeId: 'ep-3', time: '00:05:00', context: 'Context — The Serpent Family' }],
    biblicalRefs: ['acts-16-16'],
  },
  {
    id: 'python-definition',
    name: 'What Is the Spirit of Python?',
    description:
      "Python is the spirit specifically assigned to hunt the anointing of God's people. Its method is constriction — like a physical python wrapping around prey, slowly squeezing until the last breath is taken. Key sensation: trapped, can't breathe, no way forward, restricted in every direction simultaneously. Biblical root: Acts 16 — the slave girl with a \"spirit of divination\" (literal Greek: Pythona spirit).",
    frameworkId: 'framework-3',
    timestamps: [{ episodeId: 'ep-3', time: '00:18:00', context: 'What Is the Spirit of Python?' }],
    biblicalRefs: ['acts-16-16'],
  },
  {
    id: 'python-operations',
    name: 'How Python Operates',
    description:
      "Four mechanisms: (1) Constriction Strategy — attacks supply lines (relationships, finances, influence), not weak points. (2) Deception Multiplier — doesn't just deceive, replicates deception outward so entire networks think they're hearing from God. (3) Counterfeit Anointing — infiltrates trusted people, says right things with wrong spirit; cannot fake the fruit of the Spirit. (4) Up-Down Pattern — revival/momentum rises, gets choked, falls — the Python signature.",
    frameworkId: 'framework-3',
    timestamps: [{ episodeId: 'ep-3', time: '00:35:00', context: 'How Python Operates' }],
    biblicalRefs: ['acts-16-16'],
  },
  {
    id: 'python-feeds',
    name: 'What Python Feeds On',
    description:
      "Python's four food sources: (1) Fear — any agreement with the trapped narrative feeds it. (2) Slave vs. Son identity gap — people who are spiritually powerful but don't know who they are. (3) Divination — any attempt to access the future bypassing God (astrology, AI as oracle, psychedelics, energy healing). (4) Chronic second-guessing — Python corrupts the if-then logic engine until paralysis becomes the default.",
    frameworkId: 'framework-3',
    timestamps: [{ episodeId: 'ep-3', time: '01:00:00', context: 'What Python Feeds On' }],
    biblicalRefs: ['acts-16-16'],
  },
  {
    id: 'python-targets',
    name: 'Who Python Targets Most',
    description:
      "Three primary targets: (1) Prophets and Evangelists — prophets bring the heat, evangelists recruit; eliminate both and there's no seed capital for anything. (2) People in transition seasons — the gap between 'I know what I'm leaving' and 'I know what I'm entering' is prime hunting ground. (3) New believers coming out of New Age/divination — were cold and invisible before; now burning hot and immediately visible to Python.",
    frameworkId: 'framework-3',
    timestamps: [{ episodeId: 'ep-3', time: '01:18:00', context: 'Who Python Targets Most' }],
    biblicalRefs: ['acts-16-16'],
  },
  {
    id: 'python-discernment',
    name: 'How to Discern the Spirit of Python',
    description:
      "Four discernment tools: (1) Physical markers — feeling of losing oxygen, trapped with no exit, all escape routes cut simultaneously, rhythmic series of losses. (2) Spiritual annoyance — Paul was 'greatly annoyed' before he discerned it; annoyance at someone saying right things is data, not dysfunction. (3) Light as neutralizer — understanding removes darkness; naming the spirit is often enough for deliverance. (4) Fruit test over doctrinal test — Python confesses correct doctrine; use the fruit of the Spirit as the filter.",
    frameworkId: 'framework-3',
    timestamps: [{ episodeId: 'ep-3', time: '01:30:00', context: 'How to Discern Python' }],
    biblicalRefs: ['acts-16-16'],
  },
  {
    id: 'python-breaking',
    name: 'The 3-Step Response to Break Python',
    description:
      "Step 1: DISCERN WHERE THE COIL IS — ask the Holy Spirit where you feel trapped. Key question: What did God ask me to do that I'm still waiting on conditions for? That's probably where the coil is. Step 2: INTERRUPT IN THE SPIRIT — name it, command it: 'In the name of Jesus, I command you to leave.' Nothing in the natural resolves a spiritual constriction. Step 3: EXPAND AND MOVE — obedience and movement are the primary protection. A python can't hold something that's moving. Do what God said. Now.",
    frameworkId: 'framework-3',
    timestamps: [{ episodeId: 'ep-3', time: '01:45:00', context: 'How to Break Python' }],
    biblicalRefs: ['acts-16-16'],
  },
  {
    id: 'divination-deep-dive',
    name: 'Divination — Definition, Vectors & Entry Points',
    description:
      "Divination = any attempt to control or access knowledge about the future in a way that bypasses relationship with God. Modern vectors: astrology, fortune telling, past life regression, psychedelics as spiritual gateways, AI as spiritual counsel, energy healing, communicating with the dead. The core issue: divination offers knowledge without relationship — that's the counterfeit. The daughter analogy: 'I'll obey, but only if you tell me what's going to happen first.' God doesn't operate that way.",
    frameworkId: 'framework-3',
    timestamps: [{ episodeId: 'ep-3', time: '01:55:00', context: 'Divination Deep Dive' }],
    biblicalRefs: ['acts-16-16'],
  },
  {
    id: 'spiritual-authority',
    name: 'Spiritual Authority Guardrails',
    description:
      "Your jurisdiction is the earth. If it's on the earth, you have authority over it and should not tolerate it. If it's not on the earth, leave it alone unless God gives you that assignment. Education without authority is dangerous; authority without education is incomplete. You need both. Understanding is a massive beam of light — when you can name the spirit for what it is and see its mechanics, that understanding alone can be enough for deliverance to occur.",
    frameworkId: 'framework-3',
    timestamps: [{ episodeId: 'ep-3', time: '01:58:00', context: 'Spiritual Authority Guardrails' }],
    biblicalRefs: ['acts-16-16'],
  },

  // ── FRAMEWORK 4: SPIRITUAL COUNTERFEITS / KABBALAH ───────────────────────

  {
    id: 'kabbalah-definition',
    name: 'What Is Kabbalah?',
    description:
      "Kabbalah = 'received knowledge' — a system of Jewish mysticism centered on the Tree of Life (10 sephirot connected by 22 paths). The tree is not merely philosophy — it is a literal superstructure in the spirit world. Creation explanation: the Ein Sof (infinite God) emits vessels (sephirot), which were shattered. Human purpose (tikkun) is to repair these vessels. Key contrast with Christianity: in Kabbalah, man is the agent of his own salvation through mystical knowledge.",
    frameworkId: 'framework-4',
    timestamps: [{ episodeId: 'ep-4', time: '00:08:00', context: 'What Is Kabbalah?' }],
    biblicalRefs: ['prov-14-12'],
  },
  {
    id: 'kosher-serpent',
    name: 'The Kosher Serpent Doctrine',
    description:
      "Kabbalistic gematria: 'Messiah' and 'Nahash' (serpent) share the same numerical value in Hebrew. This is used to argue the serpent in Eden was a messianic figure, not an enemy. In Kabbalistic belief: the serpent came to Eden as a redemptive agent to help Adam repair the worlds. Samael corrupted what was meant to be messianic. Leviathan is recast not as a monster but as a victimized messianic entity awaiting restoration — the theological root of the New Age movement and transhumanism.",
    frameworkId: 'framework-4',
    timestamps: [{ episodeId: 'ep-4', time: '00:28:00', context: 'The Kosher Serpent Doctrine' }],
    biblicalRefs: ['isa-27-1', 'prov-14-12'],
  },
  {
    id: 'twin-messiahs',
    name: 'The Twin Messiahs',
    description:
      "Messiah Ben Yoseph (Metatron — 'the Little Yahweh'): driver of political Zionism, establishes Israel as global center. Messiah Ben David: the serpent messiah who initiates universal consciousness. The Three C's: Carnal consciousness (sexual awakening), Culinary consciousness (consumption of Leviathan's flesh), Cognitive/Christ consciousness (ascension into universal awareness). 'Christ consciousness' in New Age is a Kabbalistic reframe — Jesus is not God, just the highest rung.",
    frameworkId: 'framework-4',
    timestamps: [{ episodeId: 'ep-4', time: '00:48:00', context: 'The Twin Messiahs' }],
    biblicalRefs: ['acts-7-43', 'isa-27-1'],
  },
  {
    id: 'kabbalistic-framework',
    name: 'Kabbalistic Spiritual Framework',
    description:
      "Merkabah Mysticism: twin pyramids (Star of David) spun around the soul to astral project through sephirot worlds — the counterfeit ascension protocol. The Abyss (Da'at): crossing it requires buy-in from dark entities; reaching the Supernal Triad = becoming 'a living god on earth.' As an occult programming template: used by Illuminati, Jesuit Order, and others — installed through extreme ritual torture mapped to the sephirot on the human body, including on infants.",
    frameworkId: 'framework-4',
    timestamps: [{ episodeId: 'ep-4', time: '01:05:00', context: 'Kabbalistic Spiritual Framework' }],
    biblicalRefs: ['john-14-6'],
  },
  {
    id: 'kabbalah-new-age',
    name: 'Kabbalah and the New Age Movement',
    description:
      "New Age practitioners use Kabbalistic principles without the full Jewish mystical context. The power is real because the Tree of Life is a real spiritual superstructure. Key Kabbalistic influence: David Hawkins' frequency scales, Law of Attraction, crystal work, past-life regression. Famous occultists who were ardent Kabbalists: Blavatsky, Waite, Manly P. Hall, Albert Pike. Prediction: Kabbalah will likely become the de facto world religion within 10-15 years, pushed through New Age, Hebrew Roots, Christian mysticism, and transhumanism vectors.",
    frameworkId: 'framework-4',
    timestamps: [{ episodeId: 'ep-4', time: '01:22:00', context: 'Kabbalah and New Age' }],
    biblicalRefs: ['prov-14-12'],
  },
  {
    id: 'kabbalah-geopolitics',
    name: 'Kabbalah & Geopolitical Implications',
    description:
      "Metatron (Messiah Ben Yoseph) is the spiritual driver of political Zionism in Kabbalistic belief. The Zohar prophesied ~1840 as the year Leviathan would begin rising in his messianic role — coinciding with the Industrial Revolution, rise of secret societies, Blavatsky's Theosophy, and early Zionist thought. The merging of Kabbalistic mysteries with advancing technology = the transhumanist agenda in its spiritual root. The Mark of the Beast system, globalism, and transhumanism may all share a common spiritual root in Kabbalistic eschatology.",
    frameworkId: 'framework-4',
    timestamps: [{ episodeId: 'ep-4', time: '01:35:00', context: 'Political and Geopolitical Implications' }],
    biblicalRefs: ['acts-7-43'],
  },
  {
    id: 'occult-power',
    name: 'Occult Power — Real but Costly',
    description:
      "Honest answer: yes, Kabbalah produces real power and results — because the Tree of Life is a real spiritual superstructure. Dan has worked with people who could create storms and trigger seismic events through deep elemental magic anchored in Kabbalistic systems. 'Does cocaine work? Yes. That doesn't mean the side effects aren't destructive.' Every level of deeper initiation requires buy-in from darker entities. You can't cross the abyss without their permission. The deeper the initiation, the harder it is to close the doors opened.",
    frameworkId: 'framework-4',
    timestamps: [{ episodeId: 'ep-4', time: '01:48:00', context: 'Occult Power — Real but Costly' }],
    biblicalRefs: ['john-14-6'],
  },
  {
    id: 'christian-response-kabbalah',
    name: 'The Christian Response to Kabbalah',
    description:
      "The critical distinction: other religions view Jesus as a rung on the ladder (a high level). Christianity asserts Jesus is the ladder itself — he doesn't use the ascension system, he IS the system. 'I am the way, the truth, and the life. No one comes to the Father except through me.' (John 14:6) Engagement approach: meet people in their pain, not with theological condemnation. New Age accepts people the church rejects. Christians must stop dismissing supernatural experiences as imaginary — the experiences are often real, the interpretation is wrong.",
    frameworkId: 'framework-4',
    timestamps: [{ episodeId: 'ep-4', time: '01:55:00', context: 'The Christian Response' }],
    biblicalRefs: ['john-14-6'],
  },
  {
    id: 'heavenly-scrolls',
    name: 'Heavenly Scrolls & Divine Purpose',
    description:
      "Kabbalah offers a counterfeit version of divine purpose — power, manifestation, control. People who pursue it to the end hit a wall: five Porsches and still not satisfied. God wrote your scroll (Psalm 139, Jeremiah 1:5) before you were born. The enemy knows your destiny before you do — he goes after generational lines to create covenantal interference. The size of opposition you face often maps to the size of your calling. Seasons of hiddenness and suffering are not signs of failure — they are formation processes. 'Don't accept the judgment of the people around you and conflate it with God's opinion.'",
    frameworkId: 'framework-4',
    timestamps: [{ episodeId: 'ep-4', time: '02:00:00', context: 'Heavenly Scrolls & Divine Purpose' }],
    biblicalRefs: ['jer-1-5', 'ps-139-13'],
  },
];
