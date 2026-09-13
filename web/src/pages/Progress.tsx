export function Progress() {
  return (
    <>
      <div className="flex flex-col w-full">
<div className="flex flex-col gap-space-lg pb-space-xl">
{/* Top Constellation Header Section */}
<section className="relative rounded-xl bg-surface-container-low/90 p-space-lg shadow-xl overflow-hidden backdrop-blur-xl">
<div className="absolute -right-16 -top-20 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute right-1/3 -bottom-24 w-72 h-72 bg-secondary/10 rounded-full blur-2xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-space-lg">
<div className="flex flex-col gap-space-xs max-w-2xl">
<div className="flex items-center gap-space-xs">
<span className="px-space-xs py-0.5 rounded-full bg-primary-container/20 text-primary font-label-sm uppercase tracking-widest">Astral Codex</span>
<span className="text-outline text-body-sm">•</span>
<span className="text-secondary font-label-sm uppercase tracking-wider">Tier IV Astral Matrix</span>
</div>
<h1 className="font-display-hero text-headline-lg lg:text-display-hero tracking-tight text-on-surface">Discipline Mastery &amp; Constellation Skill Trees</h1>
<p className="font-body-md text-on-surface-variant">Channel real-world habit mastery into legendary character specializations and passive perks.</p>
</div>
{/* Metric Widgets & CTAs */}
<div className="flex flex-wrap items-center gap-space-md">
{/* Skill Points Gem Pill */}
<div className="flex items-center gap-space-sm px-space-md py-space-sm rounded-xl bg-surface-container-high/90 shadow-md">
<div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-secondary-container/20">
<span className="material-symbols-outlined text-secondary text-[20px] animate-pulse">auto_awesome</span>
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-secondary">7 Points</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Unallocated</span>
</div>
</div>
{/* Overall Mastery Percentage Widget */}
<div className="flex items-center gap-space-sm px-space-md py-space-sm rounded-xl bg-surface-container-high/90 shadow-md">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-tertiary/20">
<span className="material-symbols-outlined text-tertiary text-[20px]">military_tech</span>
</div>
<div className="flex flex-col">
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface">48%</span>
<span className="font-label-sm text-label-sm text-tertiary-fixed">LVL 24</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Mastery Completion</span>
</div>
</div>
{/* Action Buttons */}
<div className="flex items-center gap-space-xs">
<button className="group flex items-center gap-space-xs px-space-md py-space-sm rounded-xl bg-surface-container-highest text-on-surface hover:bg-surface-bright transition-all shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px] text-tertiary group-hover:rotate-180 transition-transform duration-500">restart_alt</span>
<span className="font-label-lg uppercase">Reset (100 G)</span>
</button>
<button className="flex items-center gap-space-xs px-space-md py-space-sm rounded-xl bg-primary-container text-on-primary-container hover:brightness-110 transition-all shadow-md" type="button">
<span className="material-symbols-outlined text-[18px]">share_windows</span>
<span className="font-label-lg uppercase tracking-wider">Share Codex</span>
</button>
</div>
</div>
</div>
</section>
{/* Discipline Branch Selector Tabs */}
<nav aria-label="Discipline Trees" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-space-sm">
{/* Intelligence Tree (Active) */}
<button className="flex flex-col p-space-md rounded-xl bg-surface-container-high text-left shadow-lg transition-all relative overflow-hidden" type="button">
<div className="absolute inset-x-0 top-0 h-1 bg-primary-container"></div>
<div className="flex items-center justify-between mb-space-xs">
<span className="material-symbols-outlined text-primary text-[22px]">psychology</span>
<span className="px-space-xs py-0.5 rounded bg-primary-container/20 text-primary font-label-sm font-bold">18 / 30</span>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface truncate">Intelligence</span>
<span className="font-body-sm text-on-surface-variant truncate">Arcane Architect</span>
<div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden mt-space-sm">
<div className="bg-primary h-full w-[60%] rounded-full"></div>
</div>
</button>
{/* Strength Tree */}
<button className="flex flex-col p-space-md rounded-xl bg-surface-container text-left hover:bg-surface-container-high/60 transition-all opacity-85 hover:opacity-100" type="button">
<div className="flex items-center justify-between mb-space-xs">
<span className="material-symbols-outlined text-outline text-[22px]">fitness_center</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-sm">12 / 30</span>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface truncate">Strength</span>
<span className="font-body-sm text-on-surface-variant truncate">Iron Vanguard</span>
<div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden mt-space-sm">
<div className="bg-outline h-full w-[40%] rounded-full"></div>
</div>
</button>
{/* Focus Tree */}
<button className="flex flex-col p-space-md rounded-xl bg-surface-container text-left hover:bg-surface-container-high/60 transition-all opacity-85 hover:opacity-100" type="button">
<div className="flex items-center justify-between mb-space-xs">
<span className="material-symbols-outlined text-secondary text-[22px]">center_focus_strong</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container-highest text-secondary font-label-sm">22 / 30</span>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface truncate">Focus</span>
<span className="font-body-sm text-on-surface-variant truncate">Chrono-Monk</span>
<div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden mt-space-sm">
<div className="bg-secondary h-full w-[73%] rounded-full"></div>
</div>
</button>
{/* Vitality Tree */}
<button className="flex flex-col p-space-md rounded-xl bg-surface-container text-left hover:bg-surface-container-high/60 transition-all opacity-85 hover:opacity-100" type="button">
<div className="flex items-center justify-between mb-space-xs">
<span className="material-symbols-outlined text-tertiary text-[22px]">vital_signs</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-sm">15 / 30</span>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface truncate">Vitality</span>
<span className="font-body-sm text-on-surface-variant truncate">Phoenix Rebirth</span>
<div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden mt-space-sm">
<div className="bg-tertiary h-full w-[50%] rounded-full"></div>
</div>
</button>
{/* Charisma Tree */}
<button className="flex flex-col p-space-md rounded-xl bg-surface-container text-left hover:bg-surface-container-high/60 transition-all opacity-85 hover:opacity-100" type="button">
<div className="flex items-center justify-between mb-space-xs">
<span className="material-symbols-outlined text-outline text-[22px]">diversity_3</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-sm">8 / 30</span>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface truncate">Charisma</span>
<span className="font-body-sm text-on-surface-variant truncate">High Emissary</span>
<div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden mt-space-sm">
<div className="bg-outline h-full w-[26%] rounded-full"></div>
</div>
</button>
</nav>
{/* Main Workspace Split: Skill Tree Canvas (Left 8 Cols) & Inspector / Milestones (Right 4 Cols) */}
<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
{/* SKILL TREE GRAPH CANVAS (8 cols) */}
<div className="xl:col-span-8 flex flex-col rounded-xl bg-surface-container-lowest p-space-lg relative overflow-hidden shadow-2xl">
{/* Visual Backdrop Graphic: Starfields & Celestial Constellation Watermark */}
<div className="absolute inset-0 bg-radial from-surface-container-low/40 via-surface-container-lowest to-surface-container-lowest opacity-80 pointer-events-none"></div>
<div className="absolute -top-32 -left-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
{/* Canvas Header Bar */}
<div className="relative z-10 flex flex-wrap items-center justify-between pb-space-md gap-space-sm">
<div className="flex items-center gap-space-sm">
<span className="w-2.5 h-2.5 rounded-full bg-secondary animate-ping"></span>
<span className="font-headline-sm text-headline-sm text-on-surface">Intelligence Constellation Matrix</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container-high text-secondary font-label-sm uppercase">Active Specialization</span>
</div>
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-on-surface-variant">Zoom: 100%</span>
<button className="w-7 h-7 flex items-center justify-center rounded bg-surface-container-high text-on-surface hover:bg-surface-bright" type="button"><span className="material-symbols-outlined text-[16px]">fit_screen</span></button>
<button className="w-7 h-7 flex items-center justify-center rounded bg-surface-container-high text-on-surface hover:bg-surface-bright" type="button"><span className="material-symbols-outlined text-[16px]">help</span></button>
</div>
</div>
{/* Interactive Node Graph Area */}
<div className="relative z-10 w-full flex flex-col gap-space-xl py-space-md">
{/* SVG Branching Connectors Overlay (Relative positioning between tiers) */}
{/* TIER 1: NOVICE FOUNDATION */}
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">Tier 01</span>
<span className="text-outline-variant font-label-sm">/</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Novice Foundation (Unlocked)</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
{/* Node 1.1 */}
<div className="group cursor-pointer flex flex-col p-space-md rounded-xl bg-surface-container-high/90 hover:bg-surface-container-highest transition-all shadow-md relative">
<div className="flex items-center justify-between mb-space-xs">
<div className="w-10 h-10 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined">alarm_on</span>
</div>
<span className="px-space-xs py-0.5 rounded-full bg-secondary-container/20 text-secondary font-label-sm font-bold">5 / 5 MAX</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-secondary transition-colors">Deep Work Initiation</h2>
<p className="font-body-sm text-on-surface-variant mt-space-xs">+10% XP yield on 25+ min continuous focus rituals.</p>
<div className="flex items-center gap-space-xs mt-space-sm text-secondary font-label-sm">
<span className="material-symbols-outlined text-[16px]">verified</span>
<span>Branch Mastery Active</span>
</div>
</div>
{/* Node 1.2 */}
<div className="group cursor-pointer flex flex-col p-space-md rounded-xl bg-surface-container-high/90 hover:bg-surface-container-highest transition-all shadow-md relative">
<div className="flex items-center justify-between mb-space-xs">
<div className="w-10 h-10 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined">terminal</span>
</div>
<span className="px-space-xs py-0.5 rounded-full bg-secondary-container/20 text-secondary font-label-sm font-bold">3 / 3 MAX</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-secondary transition-colors">Algorithmic Intuition</h2>
<p className="font-body-sm text-on-surface-variant mt-space-xs">Software &amp; engineering quests yield +15 bonus Gold.</p>
<div className="flex items-center gap-space-xs mt-space-sm text-secondary font-label-sm">
<span className="material-symbols-outlined text-[16px]">verified</span>
<span>Branch Mastery Active</span>
</div>
</div>
{/* Node 1.3 */}
<div className="group cursor-pointer flex flex-col p-space-md rounded-xl bg-surface-container-high/90 hover:bg-surface-container-highest transition-all shadow-md relative">
<div className="flex items-center justify-between mb-space-xs">
<div className="w-10 h-10 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined">menu_book</span>
</div>
<span className="px-space-xs py-0.5 rounded-full bg-secondary-container/20 text-secondary font-label-sm font-bold">2 / 2 MAX</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-secondary transition-colors">Speed Synthesizer</h2>
<p className="font-body-sm text-on-surface-variant mt-space-xs">Documentation quests yield +5 instant Focus reserves.</p>
<div className="flex items-center gap-space-xs mt-space-sm text-secondary font-label-sm">
<span className="material-symbols-outlined text-[16px]">verified</span>
<span>Branch Mastery Active</span>
</div>
</div>
</div>
</div>
{/* Connecting Circuit Visualization (Inline SVG) */}
<div className="w-full flex justify-center -my-space-sm text-primary/40">
<svg className="w-full max-w-xl h-10" fill="none" preserveAspectRatio="none" viewBox="0 0 400 40">
<path d="M 70 0 L 70 20 L 200 20 L 200 40" stroke="currentColor" strokeDasharray="4 2" strokeWidth="2"></path>
<path d="M 200 0 L 200 40" stroke="currentColor" strokeWidth="2"></path>
<path d="M 330 0 L 330 20 L 200 20" stroke="currentColor" strokeDasharray="4 2" strokeWidth="2"></path>
<circle cx="200" cy="20" fill="#4cd7f6" r="3"></circle>
</svg>
</div>
{/* TIER 2: ADEPT SPECIALIZATION */}
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">Tier 02</span>
<span className="text-outline-variant font-label-sm">/</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Adept Specialization (Branching Paths)</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
{/* Node 2.1 (ACTIVE / SELECTED) */}
<div className="cursor-pointer flex flex-col p-space-md rounded-xl bg-surface-container-highest shadow-[0_0_24px_rgba(76,215,246,0.18)] relative transition-all ring-2 ring-secondary">
<div className="flex items-center justify-between mb-space-xs">
<div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined">bolt</span>
</div>
<span className="px-space-xs py-0.5 rounded-full bg-secondary text-on-secondary font-label-sm font-bold">3 / 5 RANK</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Flow State Resonance</h2>
<p className="font-body-sm text-on-surface-variant mt-space-xs">Unlocks 45-min unbroken sprint multiplier (+25% Raid Boss DMG).</p>
<div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden mt-space-sm">
<div className="bg-secondary h-full w-[60%] rounded-full"></div>
</div>
</div>
{/* Node 2.2 */}
<div className="cursor-pointer flex flex-col p-space-md rounded-xl bg-surface-container-high/90 hover:bg-surface-container-highest transition-all shadow-md relative">
<div className="flex items-center justify-between mb-space-xs">
<div className="w-10 h-10 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary">
<span className="material-symbols-outlined">architecture</span>
</div>
<span className="px-space-xs py-0.5 rounded-full bg-primary-container/30 text-primary font-label-sm font-bold">4 / 4 MAX</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">System Architect Vision</h2>
<p className="font-body-sm text-on-surface-variant mt-space-xs">Reduces complex quest estimation burnout; grants daily roll.</p>
<div className="flex items-center gap-space-xs mt-space-sm text-primary font-label-sm">
<span className="material-symbols-outlined text-[16px]">verified</span>
<span>Perk Active</span>
</div>
</div>
{/* Node 2.3 (LOCKED) */}
<div className="flex flex-col p-space-md rounded-xl bg-surface-container-lowest/60 transition-all opacity-60 relative">
<div className="flex items-center justify-between mb-space-xs">
<div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-outline">
<span className="material-symbols-outlined">lock</span>
</div>
<span className="px-space-xs py-0.5 rounded-full bg-surface-container text-outline font-label-sm">0 / 3 LOCKED</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-outline">Hyper-Focus Shield</h2>
<p className="font-body-sm text-outline-variant mt-space-xs">Requires Tier 1 prerequisite points investment.</p>
<div className="mt-space-sm font-label-sm text-error">Unlocks with 20 tree points</div>
</div>
</div>
</div>
{/* Connecting Circuit Visualization (Tier 2 to Tier 3) */}
<div className="w-full flex justify-center -my-space-sm text-primary/40">
<svg className="w-full max-w-xl h-10" fill="none" preserveAspectRatio="none" viewBox="0 0 400 40">
<path d="M 70 0 L 70 20 L 130 20 L 130 40" stroke="#4cd7f6" strokeWidth="2"></path>
<path d="M 200 0 L 200 40" stroke="currentColor" strokeDasharray="4 2" strokeWidth="2"></path>
<circle cx="130" cy="40" fill="#4cd7f6" r="3"></circle>
</svg>
</div>
{/* TIER 3: MASTER PARAGON */}
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-tertiary">Tier 03</span>
<span className="text-outline-variant font-label-sm">/</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Master Paragon</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
{/* Node 3.1 */}
<div className="cursor-pointer flex flex-col p-space-md rounded-xl bg-surface-container-high/90 hover:bg-surface-container-highest transition-all shadow-md relative">
<div className="flex items-center justify-between mb-space-xs">
<div className="w-10 h-10 rounded-lg bg-tertiary-container/20 flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined">rocket_launch</span>
</div>
<span className="px-space-xs py-0.5 rounded-full bg-tertiary-container text-on-tertiary-container font-label-sm font-bold">1 / 5 RANK</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Continuous Delivery Mastery</h2>
<p className="font-body-sm text-on-surface-variant mt-space-xs">Automated streak protection if 2+ tasks are completed before solar noon.</p>
<div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden mt-space-sm">
<div className="bg-tertiary h-full w-[20%] rounded-full"></div>
</div>
</div>
{/* Node 3.2 (LOCKED) */}
<div className="flex flex-col p-space-md rounded-xl bg-surface-container-lowest/60 transition-all opacity-60 relative">
<div className="flex items-center justify-between mb-space-xs">
<div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-outline">
<span className="material-symbols-outlined">lock</span>
</div>
<span className="px-space-xs py-0.5 rounded-full bg-surface-container text-outline font-label-sm">LOCKED</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-outline">Polymath Synthesis</h2>
<p className="font-body-sm text-outline-variant mt-space-xs">Requires character level 25. Cross-pollinates Strength XP into Focus stamina.</p>
<div className="mt-space-sm font-label-sm text-tertiary-fixed-dim">Unlocks at Level 25</div>
</div>
</div>
</div>
{/* TIER 4: APEX KEYSTONE */}
<div className="flex flex-col items-center mt-space-sm">
<div className="w-full flex justify-center mb-space-xs text-tertiary/40">
<svg className="w-20 h-8" fill="none" viewBox="0 0 80 32">
<path d="M 40 0 L 40 32" stroke="currentColor" strokeDasharray="2 2" strokeWidth="2"></path>
</svg>
</div>
<div className="w-full max-w-xl p-space-lg rounded-xl bg-surface-container-high/80 relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center gap-space-lg">
<div className="absolute -right-10 -bottom-10 w-36 h-36 bg-tertiary/10 rounded-full blur-xl pointer-events-none"></div>
<div className="relative flex-shrink-0 w-16 h-16 rounded-full bg-tertiary/20 flex items-center justify-center text-tertiary shadow-[0_0_24px_rgba(249,189,34,0.3)]">
<span className="material-symbols-outlined text-[32px] animate-pulse">hotel_class</span>
</div>
<div className="flex flex-col text-center md:text-left">
<div className="flex items-center justify-center md:justify-start gap-space-xs mb-1">
<span className="px-space-xs py-0.5 rounded-full bg-tertiary-container/30 text-tertiary font-label-sm font-bold uppercase tracking-wider">Mythic Keystone Perk</span>
<span className="text-outline font-label-sm">• Tier 04</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface">The Architect's Singularity</h3>
<p className="font-body-sm text-on-surface-variant mt-space-xs">100% Critical XP chance on all heroic system architecture tasks. Generates 1 Legendary Relic Token per completed 5-day cycle.</p>
<div className="mt-space-sm flex items-center justify-center md:justify-start gap-space-xs text-tertiary-fixed font-label-sm">
<span className="material-symbols-outlined text-[16px]">lock_clock</span>
<span>Prerequisite: Allocate 25 pts in Intelligence tree (Current: 18/25)</span>
</div>
</div>
</div>
</div>
</div>
</div>
{/* RIGHT PANEL: SKILL INSPECTOR & MILESTONE ROADMAP (4 cols) */}
<div className="xl:col-span-4 flex flex-col gap-space-lg">
{/* Skill Inspector Card (Selected Node Details) */}
<section className="flex flex-col p-space-lg rounded-xl bg-surface-container-low shadow-xl relative overflow-hidden backdrop-blur-md">
<div className="flex items-center justify-between border-b pb-space-sm border-surface-container-highest">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[20px]">manage_search</span>
<span className="font-label-lg uppercase tracking-wider text-secondary">Skill Inspector</span>
</div>
<span className="px-space-xs py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-sm">Node #2.1</span>
</div>
<div className="flex flex-col gap-space-md mt-space-md">
{/* Node Title & Art Slot */}
<div className="flex items-start gap-space-md">
<div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-surface-container-highest shadow-md">
<img className="w-full h-full object-cover" data-alt="Glowing arcane runic hourglass floating in a mystical cosmic void with cyan lightning threads and dark obsidian geometric crystals, dark fantasy video game aesthetic, highly detailed rendering" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBh43yGBQWw2_RDpf1Bt34ZUB-blmlOpKWr8A__ESRDU94fEwbJHn9HgXmnsWX13bXxQscOhGTPeLtjbwEAEqxfpRhhyuqMvYwqwft627FmMDtXZJh9ItgIuvpREiFjP8HbWB-gImHqJWQYwrPRkRUiCnC4-Mc_tMhoPsAFe1arSlSeSn21RTryOBjKZByHGhL02YF__nKb9SQID4x5QogpgT1yQY4KR51EK9KC3LSLMdnmMNttZQ0URw"/>
</div>
<div className="flex flex-col">
<h3 className="font-headline-md text-headline-md text-on-surface">Flow State Resonance</h3>
<span className="font-label-sm text-secondary">Rank 3 of 5 • Adept Node</span>
</div>
</div>
{/* Lore Excerpt */}
<div className="p-space-sm rounded-lg bg-surface-container-lowest/80 text-on-surface-variant font-body-sm italic">
              “When mental clarity converges with discipline, temporal friction ceases to exist. The Architect commands the cadence of thought.”
            </div>
{/* Current vs Next Rank Diff Box */}
<div className="flex flex-col gap-space-xs p-space-md rounded-xl bg-surface-container-high/60">
<div className="flex items-center justify-between text-body-sm">
<span className="text-on-surface-variant">Current Rank (3/5):</span>
<span className="text-on-surface font-semibold">+15% XP &amp; +150 Boss DMG</span>
</div>
<div className="flex items-center justify-between text-body-sm">
<span className="text-secondary">Next Rank (4/5):</span>
<span className="text-secondary font-bold">+20% XP &amp; +200 Boss DMG</span>
</div>
<div className="flex items-center justify-between text-body-sm pt-space-xs border-t border-surface-container-highest">
<span className="text-on-surface-variant">Upgrade Cost:</span>
<span className="text-tertiary font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">stars</span> 1 Skill Point
                </span>
</div>
</div>
{/* Action Upgrade Button */}
<button className="w-full flex items-center justify-center gap-space-xs py-space-sm px-space-md rounded-xl bg-gradient-to-r from-primary-container to-secondary-container text-on-primary font-label-lg uppercase tracking-wider hover:brightness-110 shadow-[0_0_16px_rgba(183,109,255,0.4)] transition-all" type="button">
<span className="material-symbols-outlined text-[20px]">upgrade</span>
<span>Upgrade Rank (1 Pt)</span>
</button>
</div>
</section>
{/* Stat Distribution Radar / Segmented Bars */}
<section className="flex flex-col p-space-lg rounded-xl bg-surface-container-low shadow-xl">
<div className="flex items-center justify-between mb-space-md">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[20px]">equalizer</span>
<span className="font-headline-sm text-headline-sm text-on-surface">Attribute Equilibrium</span>
</div>
<span className="font-label-sm text-on-surface-variant">73 Total Pts</span>
</div>
{/* Segmented Visualization Bars */}
<div className="flex flex-col gap-space-sm">
{/* Intelligence: 38% */}
<div className="flex flex-col gap-1">
<div className="flex justify-between font-label-sm">
<span className="text-primary font-semibold">Intelligence (Architect)</span>
<span className="text-on-surface">38% (28 Pts)</span>
</div>
<div className="w-full bg-surface-container-lowest h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full w-[38%] rounded-full"></div>
</div>
</div>
{/* Focus: 28% */}
<div className="flex flex-col gap-1">
<div className="flex justify-between font-label-sm">
<span className="text-secondary font-semibold">Focus (Chrono-Monk)</span>
<span className="text-on-surface">28% (20 Pts)</span>
</div>
<div className="w-full bg-surface-container-lowest h-2 rounded-full overflow-hidden">
<div className="bg-secondary h-full w-[28%] rounded-full"></div>
</div>
</div>
{/* Vitality: 16% */}
<div className="flex flex-col gap-1">
<div className="flex justify-between font-label-sm">
<span className="text-tertiary font-semibold">Vitality (Phoenix)</span>
<span className="text-on-surface">16% (12 Pts)</span>
</div>
<div className="w-full bg-surface-container-lowest h-2 rounded-full overflow-hidden">
<div className="bg-tertiary h-full w-[16%] rounded-full"></div>
</div>
</div>
{/* Strength: 12% */}
<div className="flex flex-col gap-1">
<div className="flex justify-between font-label-sm">
<span className="text-outline font-semibold">Strength (Vanguard)</span>
<span className="text-on-surface">12% (9 Pts)</span>
</div>
<div className="w-full bg-surface-container-lowest h-2 rounded-full overflow-hidden">
<div className="bg-outline h-full w-[12%] rounded-full"></div>
</div>
</div>
{/* Charisma: 6% */}
<div className="flex flex-col gap-1">
<div className="flex justify-between font-label-sm">
<span className="text-on-surface-variant font-semibold">Charisma (Emissary)</span>
<span className="text-on-surface">6% (4 Pts)</span>
</div>
<div className="w-full bg-surface-container-lowest h-2 rounded-full overflow-hidden">
<div className="bg-on-surface-variant h-full w-[6%] rounded-full"></div>
</div>
</div>
</div>
</section>
{/* Milestone Road to Level 25 Card */}
<section className="flex flex-col p-space-lg rounded-xl bg-surface-container-low shadow-xl relative overflow-hidden">
<div className="flex items-center justify-between mb-space-md">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-tertiary text-[20px]">emoji_events</span>
<span className="font-headline-sm text-headline-sm text-on-surface">Paragon Roadmap</span>
</div>
<span className="px-space-xs py-0.5 rounded-full bg-tertiary-container/20 text-tertiary font-label-sm">Next: LVL 25</span>
</div>
{/* XP Track Indicator */}
<div className="flex flex-col gap-1 mb-space-md">
<div className="flex justify-between font-label-sm text-on-surface-variant">
<span>Road to Tier V Paragon</span>
<span className="text-secondary font-semibold">2,450 / 3,500 XP (70%)</span>
</div>
<div className="w-full bg-surface-container-lowest h-2.5 rounded-full overflow-hidden">
<div className="bg-secondary h-full w-[70%] rounded-full"></div>
</div>
</div>
{/* Upcoming Unlocks List */}
<div className="flex flex-col gap-space-sm">
<div className="flex items-center gap-space-sm p-space-sm rounded-lg bg-surface-container-high/70">
<div className="w-8 h-8 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary flex-shrink-0">
<span className="material-symbols-outlined text-[18px]">badge</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-on-surface truncate">New Title: Astral Archon</span>
<span className="font-label-sm text-on-surface-variant">Unlocks at Level 25</span>
</div>
</div>
<div className="flex items-center gap-space-sm p-space-sm rounded-lg bg-surface-container-high/70">
<div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary flex-shrink-0">
<span className="material-symbols-outlined text-[18px]">shield</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-on-surface truncate">Gear: Obsidian Aegis Cloak</span>
<span className="font-label-sm text-on-surface-variant">+10% Focus Preservation</span>
</div>
</div>
<div className="flex items-center gap-space-sm p-space-sm rounded-lg bg-surface-container-high/70">
<div className="w-8 h-8 rounded-lg bg-tertiary/20 flex items-center justify-center text-tertiary flex-shrink-0">
<span className="material-symbols-outlined text-[18px]">token</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-on-surface truncate">3x Mythic Astral Dice</span>
<span className="font-label-sm text-on-surface-variant">Roll for passive epic relics</span>
</div>
</div>
</div>
</section>
</div>
</div>
</div>
</div>
    </>
  );
}
