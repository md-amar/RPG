export function Character() {
  return (
    <>
      <div className="flex flex-col w-full pb-space-xl">
{/* Sub-Header & Realm Actions */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pt-space-md mb-space-lg">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs">
<span className="inline-block w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_#4cd7f6]"></span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
          PLAYER CODEX • VALERIUS STONE • CLASS: ARCANE ARCHITECT • GUILD: VANGUARD [RANK #14]
        </span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
        Character Dossier &amp; Equipment
      </h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
        Quantified personal development, equipped discipline artifacts, core attribute matrices, and earned accolades.
      </p>
</div>
{/* Action Group */}
<div className="flex items-center gap-space-sm self-start md:self-auto shrink-0">
<button className="group relative px-space-md py-space-sm rounded-xl bg-surface-container-high/80 text-secondary hover:text-on-surface hover:bg-surface-container-highest transition-all duration-200 flex items-center gap-space-xs" type="button">
<span className="material-symbols-outlined text-[18px] transition-transform group-hover:rotate-180">sync_alt</span>
<span className="font-label-lg text-label-lg uppercase tracking-wider">Respec Attributes</span>
</button>
<button className="px-space-md py-space-sm rounded-xl bg-gradient-to-r from-primary-container to-primary text-on-primary font-label-lg text-label-lg uppercase tracking-wider shadow-[0_0_20px_rgba(183,109,255,0.4)] hover:brightness-110 active:scale-[0.98] transition-all flex items-center gap-space-xs" type="button">
<span className="material-symbols-outlined text-[18px]">share</span>
<span>Share Dossier</span>
</button>
</div>
</div>
{/* Top Character Progression & Power Rating Ribbon */}
<div className="relative w-full rounded-xl bg-surface-container-low/90 backdrop-blur-2xl p-space-lg shadow-xl mb-space-lg overflow-hidden">
{/* Subtle Background Glow */}
<div className="absolute -right-16 -top-16 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute -left-12 -bottom-12 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-space-lg">
{/* Left: Rank & Title Identity */}
<div className="flex items-center gap-space-md shrink-0">
<div className="relative w-16 h-16 rounded-xl bg-surface-container-highest flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
<span className="material-symbols-outlined text-tertiary text-[36px]" style={{ fontVariationSettings: '"FILL" 1' }}>shield_with_heart</span>
<div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-tertiary text-on-tertiary font-headline-sm text-[11px] flex items-center justify-center font-bold shadow-md">
            24
          </div>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="font-headline-md text-headline-md text-on-surface">Level 24 • Grand Architect</span>
<span className="material-symbols-outlined text-tertiary text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>workspace_premium</span>
</div>
<div className="flex items-center gap-space-sm mt-0.5">
<span className="px-space-xs py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm uppercase tracking-wider">
              Tier III Heroic Paragon
            </span>
<span className="text-outline text-body-sm">•</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Guild Vanguard [Rank #14 Global]</span>
</div>
</div>
</div>
{/* Center: XP Progress Gauge */}
<div className="flex-1 flex flex-col justify-center min-w-0 max-w-xl">
<div className="flex justify-between items-center mb-1.5">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Experience Gauge</span>
<span className="px-1.5 py-0.2 rounded bg-surface-container-high text-secondary font-label-sm text-[10px]">70%</span>
</div>
<span className="font-headline-sm text-headline-sm text-secondary">2,450 <span className="text-outline text-body-sm">/ 3,500 XP</span></span>
</div>
{/* Segmented Liquid Mana/XP Track */}
<div className="relative w-full h-3 rounded-full bg-surface-container-lowest p-0.5 overflow-hidden">
<div className="h-full rounded-full bg-gradient-to-r from-secondary-container via-secondary to-primary-container transition-all duration-700 shadow-[0_0_12px_rgba(76,215,246,0.5)]" style={{ width: '70%' }}></div>
</div>
<div className="flex justify-between items-center mt-1 text-on-surface-variant">
<span className="font-body-sm text-[11px]">Next Milestone: Level 25</span>
<span className="font-label-sm text-label-sm text-tertiary-fixed-dim">1,000 XP to Unlock Legendary Specialization</span>
</div>
</div>
{/* Right: Total Combat Power Metric */}
<div className="flex items-center gap-space-md shrink-0 bg-surface-container-high/60 px-space-md py-space-sm rounded-xl">
<div className="w-11 h-11 rounded-lg bg-surface-container-lowest flex items-center justify-center">
<span className="material-symbols-outlined text-secondary text-[24px]" style={{ fontVariationSettings: '"FILL" 1' }}>bolt</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Combat Power (CP)</span>
<span className="font-headline-lg text-headline-lg text-secondary tracking-tight">14,850 <span className="text-body-sm font-normal text-on-surface-variant">RATING</span></span>
</div>
</div>
</div>
{/* Quick Stats Grid Bar */}
<div className="mt-space-md pt-space-md grid grid-cols-2 sm:grid-cols-4 gap-space-sm bg-surface-container-lowest/50 p-space-sm rounded-xl">
<div className="flex items-center gap-space-xs px-space-sm py-1">
<span className="material-symbols-outlined text-primary text-[20px]">task_alt</span>
<div className="flex flex-col">
<span className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-wider">Quests Completed</span>
<span className="font-headline-sm text-headline-sm text-on-surface">142</span>
</div>
</div>
<div className="flex items-center gap-space-xs px-space-sm py-1">
<span className="material-symbols-outlined text-error text-[20px]">swords</span>
<div className="flex flex-col">
<span className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-wider">Raid Bosses Slain</span>
<span className="font-headline-sm text-headline-sm text-on-surface">18</span>
</div>
</div>
<div className="flex items-center gap-space-xs px-space-sm py-1">
<span className="material-symbols-outlined text-tertiary-container text-[20px]">local_fire_department</span>
<div className="flex flex-col">
<span className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-wider">Current Streak</span>
<span className="font-headline-sm text-headline-sm text-tertiary-fixed">14 Days</span>
</div>
</div>
<div className="flex items-center gap-space-xs px-space-sm py-1">
<span className="material-symbols-outlined text-tertiary text-[20px]">monetization_on</span>
<div className="flex flex-col">
<span className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-wider">Gold Banked</span>
<span className="font-headline-sm text-headline-sm text-tertiary">1,850 g</span>
</div>
</div>
</div>
</div>
{/* Main 3-Column RPG Layout */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
{/* Left Column: Core Attributes & Talents (4 Cols) */}
<div className="lg:col-span-4 flex flex-col gap-space-md">
{/* Stat Points Available Panel */}
<div className="rounded-xl bg-surface-container-low/90 backdrop-blur-xl p-space-md shadow-lg flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[20px]">tune</span>
<span className="font-headline-sm text-headline-sm uppercase tracking-wider text-on-surface">Attributes &amp; Matrices</span>
</div>
<div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-tertiary-container/30 text-tertiary-fixed animate-pulse">
<span className="material-symbols-outlined text-[14px]">add_circle</span>
<span className="font-label-sm text-label-sm">12 Pts Free</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          Allocate unspent discipline points gained from completed habits, daily sprints, and code reviews.
        </p>
{/* Attribute 1: Intelligence */}
<div className="group p-space-sm rounded-xl bg-surface-container-high/40 hover:bg-surface-container-high transition-all flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<div className="w-7 h-7 rounded-lg bg-primary/20 text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[18px]">psychology</span>
</div>
<div>
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface">Intelligence</span>
<span className="px-1.5 py-0.5 rounded bg-primary/10 text-primary font-label-sm text-[10px] font-bold">+4 this wk</span>
</div>
<span className="font-body-sm text-[11px] text-on-surface-variant">Algorithms, System Architecture, &amp; Deep Reading</span>
</div>
</div>
<div className="flex items-center gap-space-sm">
<span className="font-headline-md text-headline-md text-primary">48</span>
<button className="w-7 h-7 rounded-lg bg-primary-container text-on-primary hover:brightness-125 active:scale-95 flex items-center justify-center transition-all shadow-[0_0_8px_rgba(183,109,255,0.4)]" type="button">
<span className="material-symbols-outlined text-[18px]">add</span>
</button>
</div>
</div>
<div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden">
<div className="bg-primary h-full w-[75%] rounded-full shadow-[0_0_6px_#ddb7ff]"></div>
</div>
</div>
{/* Attribute 2: Strength */}
<div className="group p-space-sm rounded-xl bg-surface-container-high/40 hover:bg-surface-container-high transition-all flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<div className="w-7 h-7 rounded-lg bg-error/20 text-error flex items-center justify-center">
<span className="material-symbols-outlined text-[18px]">fitness_center</span>
</div>
<div>
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface">Strength</span>
<span className="px-1.5 py-0.5 rounded bg-secondary/10 text-secondary font-label-sm text-[10px] font-bold">+2 this wk</span>
</div>
<span className="font-body-sm text-[11px] text-on-surface-variant">Strength Training, Calisthenics, &amp; Trail Endurance</span>
</div>
</div>
<div className="flex items-center gap-space-sm">
<span className="font-headline-md text-headline-md text-on-surface">36</span>
<button className="w-7 h-7 rounded-lg bg-primary-container text-on-primary hover:brightness-125 active:scale-95 flex items-center justify-center transition-all shadow-[0_0_8px_rgba(183,109,255,0.4)]" type="button">
<span className="material-symbols-outlined text-[18px]">add</span>
</button>
</div>
</div>
<div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden">
<div className="bg-secondary h-full w-[60%] rounded-full shadow-[0_0_6px_#4cd7f6]"></div>
</div>
</div>
{/* Attribute 3: Focus */}
<div className="group p-space-sm rounded-xl bg-surface-container-high/40 hover:bg-surface-container-high transition-all flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<div className="w-7 h-7 rounded-lg bg-secondary/20 text-secondary flex items-center justify-center">
<span className="material-symbols-outlined text-[18px]">radar</span>
</div>
<div>
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface">Focus</span>
<span className="px-1.5 py-0.5 rounded bg-secondary/10 text-secondary font-label-sm text-[10px] font-bold">+6 this wk</span>
</div>
<span className="font-body-sm text-[11px] text-on-surface-variant">Deep Work Sprints &amp; Zero-Distraction Vaults</span>
</div>
</div>
<div className="flex items-center gap-space-sm">
<span className="font-headline-md text-headline-md text-secondary">52</span>
<button className="w-7 h-7 rounded-lg bg-primary-container text-on-primary hover:brightness-125 active:scale-95 flex items-center justify-center transition-all shadow-[0_0_8px_rgba(183,109,255,0.4)]" type="button">
<span className="material-symbols-outlined text-[18px]">add</span>
</button>
</div>
</div>
<div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden">
<div className="bg-secondary h-full w-[85%] rounded-full shadow-[0_0_6px_#4cd7f6]"></div>
</div>
</div>
{/* Attribute 4: Vitality */}
<div className="group p-space-sm rounded-xl bg-surface-container-high/40 hover:bg-surface-container-high transition-all flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<div className="w-7 h-7 rounded-lg bg-tertiary/20 text-tertiary flex items-center justify-center">
<span className="material-symbols-outlined text-[18px]">favorite</span>
</div>
<div>
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface">Vitality</span>
<span className="px-1.5 py-0.5 rounded bg-tertiary/10 text-tertiary font-label-sm text-[10px] font-bold">+3 this wk</span>
</div>
<span className="font-body-sm text-[11px] text-on-surface-variant">Sleep Quality, Circadian Rhythm, &amp; Hydration</span>
</div>
</div>
<div className="flex items-center gap-space-sm">
<span className="font-headline-md text-headline-md text-on-surface">41</span>
<button className="w-7 h-7 rounded-lg bg-primary-container text-on-primary hover:brightness-125 active:scale-95 flex items-center justify-center transition-all shadow-[0_0_8px_rgba(183,109,255,0.4)]" type="button">
<span className="material-symbols-outlined text-[18px]">add</span>
</button>
</div>
</div>
<div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden">
<div className="bg-tertiary h-full w-[68%] rounded-full shadow-[0_0_6px_#f9bd22]"></div>
</div>
</div>
{/* Attribute 5: Charisma */}
<div className="group p-space-sm rounded-xl bg-surface-container-high/40 hover:bg-surface-container-high transition-all flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<div className="w-7 h-7 rounded-lg bg-surface-variant text-on-surface flex items-center justify-center">
<span className="material-symbols-outlined text-[18px]">groups</span>
</div>
<div>
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface">Charisma</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-sm text-[10px] font-bold">+1 this wk</span>
</div>
<span className="font-body-sm text-[11px] text-on-surface-variant">Tech Talks, Guild Leadership, &amp; Negotiations</span>
</div>
</div>
<div className="flex items-center gap-space-sm">
<span className="font-headline-md text-headline-md text-on-surface">29</span>
<button className="w-7 h-7 rounded-lg bg-primary-container text-on-primary hover:brightness-125 active:scale-95 flex items-center justify-center transition-all shadow-[0_0_8px_rgba(183,109,255,0.4)]" type="button">
<span className="material-symbols-outlined text-[18px]">add</span>
</button>
</div>
</div>
<div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden">
<div className="bg-outline h-full w-[45%] rounded-full"></div>
</div>
</div>
</div>
{/* Secondary Combat & Productivity Multipliers */}
<div className="rounded-xl bg-surface-container-low/90 backdrop-blur-xl p-space-md shadow-lg flex flex-col gap-space-sm">
<span className="font-label-lg text-label-lg uppercase tracking-wider text-on-surface flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px]">auto_awesome</span>
          Passive Aura Multipliers
        </span>
<div className="grid grid-cols-1 gap-space-xs">
<div className="flex items-center justify-between px-space-sm py-2 rounded-lg bg-surface-container-lowest">
<span className="font-body-sm text-body-sm text-on-surface-variant">Critical Productivity Chance</span>
<span className="font-label-md text-label-md text-secondary">24.5%</span>
</div>
<div className="flex items-center justify-between px-space-sm py-2 rounded-lg bg-surface-container-lowest">
<span className="font-body-sm text-body-sm text-on-surface-variant">Stamina Recovery Rate</span>
<span className="font-label-md text-label-md text-tertiary-fixed">+18% / day</span>
</div>
<div className="flex items-center justify-between px-space-sm py-2 rounded-lg bg-surface-container-lowest">
<span className="font-body-sm text-body-sm text-on-surface-variant">XP Multiplier Resonance</span>
<span className="font-label-md text-label-md text-primary font-bold">+25% Active</span>
</div>
</div>
</div>
</div>
{/* Center Column: Character Hero Showcase & Loadout Equipment (5 Cols) */}
<div className="lg:col-span-5 flex flex-col gap-space-md">
{/* Visual Avatar Frame Card with Overlay Equipment Slots */}
<div className="relative rounded-xl bg-surface-container-low/90 backdrop-blur-xl p-space-md shadow-2xl overflow-hidden flex flex-col items-center">
{/* Runic Border Corners */}
<div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary/50"></div>
<div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary/50"></div>
<div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-secondary/50"></div>
<div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-secondary/50"></div>
{/* Header of the Loadout Screen */}
<div className="w-full flex items-center justify-between pb-space-sm mb-space-xs">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[18px]">security</span>
<span className="font-headline-sm text-headline-sm uppercase tracking-wider text-on-surface">Active Battle Regalia</span>
</div>
<span className="font-label-sm text-label-sm text-tertiary px-2 py-0.5 rounded-full bg-tertiary/10">6/6 Attuned</span>
</div>
{/* Character Visual Showcase with Flanking Gear Slots */}
<div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden bg-surface-container-lowest flex items-center justify-center shadow-inner">
<img alt="Valerius Stone Full Body Arcane Hero Portrait" className="w-full h-full object-cover object-center filter saturate-[1.1] contrast-[1.05]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYjjWSDhh4PA7dRxOwPCEx5r0achmnk-OIITPSal9Ay2eK6xlHFsMlaty6dv6oPBHeuf-f60JqOBtM9XVqIbgZb-HLYuwsCEt-vIwDoHeIrcTw57P5uaiZ4GnHPSDsqcYkxRi2qhRJVek0oBnp51jptC_Fd1SKH9gu6Nc9UEp0oHDze8k_aELGFZ7BeMvAy2RJIz_s79ZD3NKTUt-0KUJSGYGcQ50YzIhWKplD27Q"/>
{/* Subtle vignette gradient */}
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-surface-container-lowest/30 pointer-events-none"></div>
{/* Interactive Gear Nodes (Overlay Anchored) */}
{/* Head */}
<div className="absolute top-6 left-6 group cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-surface-container-lowest/90 backdrop-blur-md p-1 shadow-[0_0_14px_rgba(76,215,246,0.35)] flex items-center justify-center transition-transform group-hover:scale-110">
<span className="material-symbols-outlined text-secondary text-[24px]">hardware</span>
</div>
{/* Tooltip */}
<div className="absolute left-14 top-0 hidden group-hover:flex flex-col w-48 p-space-xs rounded-lg bg-surface-container-highest shadow-2xl z-30 pointer-events-none">
<span className="font-label-md text-label-md text-secondary font-bold">Helm of Hyperfocus</span>
<span className="font-body-sm text-[11px] text-on-surface">+12 Focus, -30% Distraction</span>
</div>
</div>
{/* Weapon (Main Hand) */}
<div className="absolute top-28 left-6 group cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-surface-container-lowest/90 backdrop-blur-md p-1 shadow-[0_0_14px_rgba(183,109,255,0.4)] flex items-center justify-center transition-transform group-hover:scale-110">
<span className="material-symbols-outlined text-primary text-[24px]">colorize</span>
</div>
<div className="absolute left-14 top-0 hidden group-hover:flex flex-col w-48 p-space-xs rounded-lg bg-surface-container-highest shadow-2xl z-30 pointer-events-none">
<span className="font-label-md text-label-md text-primary font-bold">Blade of Clean Code</span>
<span className="font-body-sm text-[11px] text-on-surface">+15 Intelligence, +500 Burst DMG</span>
</div>
</div>
{/* Ring Slot */}
<div className="absolute bottom-28 left-6 group cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-surface-container-lowest/90 backdrop-blur-md p-1 shadow-[0_0_14px_rgba(249,189,34,0.35)] flex items-center justify-center transition-transform group-hover:scale-110">
<span className="material-symbols-outlined text-tertiary text-[24px]">adjust</span>
</div>
<div className="absolute left-14 top-0 hidden group-hover:flex flex-col w-48 p-space-xs rounded-lg bg-surface-container-highest shadow-2xl z-30 pointer-events-none">
<span className="font-label-md text-label-md text-tertiary font-bold">Band of Early Riser</span>
<span className="font-body-sm text-[11px] text-on-surface">+8 Vitality, Morning Run Buff</span>
</div>
</div>
{/* Armor (Chest) */}
<div className="absolute top-6 right-6 group cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-surface-container-lowest/90 backdrop-blur-md p-1 shadow-[0_0_14px_rgba(76,215,246,0.35)] flex items-center justify-center transition-transform group-hover:scale-110">
<span className="material-symbols-outlined text-secondary text-[24px]">shield</span>
</div>
<div className="absolute right-14 top-0 hidden group-hover:flex flex-col w-48 p-space-xs rounded-lg bg-surface-container-highest shadow-2xl z-30 pointer-events-none text-right">
<span className="font-label-md text-label-md text-secondary font-bold">Aegis of Discipline</span>
<span className="font-body-sm text-[11px] text-on-surface">+14 Vitality, 14-Day Streak Ward</span>
</div>
</div>
{/* Relic (Off Hand) */}
<div className="absolute top-28 right-6 group cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-surface-container-lowest/90 backdrop-blur-md p-1 shadow-[0_0_14px_rgba(183,109,255,0.4)] flex items-center justify-center transition-transform group-hover:scale-110">
<span className="material-symbols-outlined text-primary text-[24px]">menu_book</span>
</div>
<div className="absolute right-14 top-0 hidden group-hover:flex flex-col w-48 p-space-xs rounded-lg bg-surface-container-highest shadow-2xl z-30 pointer-events-none text-right">
<span className="font-label-md text-label-md text-primary font-bold">Tome of System Design</span>
<span className="font-body-sm text-[11px] text-on-surface">+10 Intelligence, +8 Focus</span>
</div>
</div>
{/* Boots */}
<div className="absolute bottom-28 right-6 group cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-surface-container-lowest/90 backdrop-blur-md p-1 shadow-[0_0_14px_rgba(76,215,246,0.35)] flex items-center justify-center transition-transform group-hover:scale-110">
<span className="material-symbols-outlined text-secondary text-[24px]">snowshoeing</span>
</div>
<div className="absolute right-14 top-0 hidden group-hover:flex flex-col w-48 p-space-xs rounded-lg bg-surface-container-highest shadow-2xl z-30 pointer-events-none text-right">
<span className="font-label-md text-label-md text-secondary font-bold">Strides of Momentum</span>
<span className="font-body-sm text-[11px] text-on-surface">+6 Strength, +5 Focus</span>
</div>
</div>
{/* Bottom Floating Loadout Summary Chip */}
<div className="absolute bottom-3 inset-x-3 bg-surface-container-lowest/90 backdrop-blur-md px-space-sm py-2 rounded-xl flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-tertiary text-[18px]">verified</span>
<span className="font-label-sm text-[11px] text-on-surface uppercase">Full Set Attunement</span>
</div>
<span className="font-label-md text-label-md text-tertiary font-bold">+25 Intelligence • +25 Focus</span>
</div>
</div>
{/* Gear Stats Detailed Breakdown List */}
<div className="w-full mt-space-sm grid grid-cols-2 gap-space-xs">
<div className="p-space-xs px-2.5 rounded-lg bg-surface-container-high/60 flex items-center justify-between">
<span className="font-body-sm text-[11px] text-on-surface-variant">Weapon Damage</span>
<span className="font-headline-sm text-[13px] text-primary">740 - 920 DP</span>
</div>
<div className="p-space-xs px-2.5 rounded-lg bg-surface-container-high/60 flex items-center justify-between">
<span className="font-body-sm text-[11px] text-on-surface-variant">Defense Ward</span>
<span className="font-headline-sm text-[13px] text-secondary">680 ARMOR</span>
</div>
</div>
</div>
</div>
{/* Right Column: Accolades, Mastery Trees & Achievements (3 Cols) */}
<div className="lg:col-span-3 flex flex-col gap-space-md">
{/* Card 1: Earned Titles & Prestige */}
<div className="rounded-xl bg-surface-container-low/90 backdrop-blur-xl p-space-md shadow-lg flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-tertiary text-[20px]">military_tech</span>
<span className="font-headline-sm text-headline-sm uppercase tracking-wider text-on-surface">Titles &amp; Honors</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">4 Unlocked</span>
</div>
{/* Active Title */}
<div className="p-space-xs px-space-sm rounded-lg bg-tertiary/10 flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-tertiary text-[18px]">verified</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-tertiary-fixed font-bold">The Grand Architect</span>
<span className="font-body-sm text-[10px] text-tertiary">Active Character Title</span>
</div>
</div>
<span className="font-label-sm text-[10px] uppercase tracking-wider text-tertiary px-1.5 py-0.5 rounded bg-tertiary-container/40">Equipped</span>
</div>
{/* Available Titles List */}
<div className="flex flex-col gap-1 mt-1">
<div className="group flex items-center justify-between px-space-sm py-1.5 rounded-lg hover:bg-surface-container-high transition-all cursor-pointer">
<span className="font-body-sm text-body-sm text-on-surface group-hover:text-secondary">Dragon Slayer of Procrastination</span>
<span className="font-label-sm text-[10px] text-outline group-hover:text-on-surface">Equip</span>
</div>
<div className="group flex items-center justify-between px-space-sm py-1.5 rounded-lg hover:bg-surface-container-high transition-all cursor-pointer">
<span className="font-body-sm text-body-sm text-on-surface group-hover:text-secondary">Dawnbreaker (5 AM Club)</span>
<span className="font-label-sm text-[10px] text-outline group-hover:text-on-surface">Equip</span>
</div>
<div className="group flex items-center justify-between px-space-sm py-1.5 rounded-lg hover:bg-surface-container-high transition-all cursor-pointer">
<span className="font-body-sm text-body-sm text-on-surface group-hover:text-secondary">Polymath Vanguard</span>
<span className="font-label-sm text-[10px] text-outline group-hover:text-on-surface">Equip</span>
</div>
</div>
</div>
{/* Card 2: Achievement Relics & Badges */}
<div className="rounded-xl bg-surface-container-low/90 backdrop-blur-xl p-space-md shadow-lg flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[20px]">emoji_events</span>
<span className="font-headline-sm text-headline-sm uppercase tracking-wider text-on-surface">Relics &amp; Badges</span>
</div>
<span className="font-label-sm text-label-sm text-secondary font-bold">38 / 60</span>
</div>
{/* Filter Pill Tabs */}
<div className="flex items-center gap-1 bg-surface-container-lowest p-1 rounded-lg">
<button className="flex-1 py-1 rounded bg-surface-container-high text-on-surface font-label-sm text-[11px] text-center" type="button">All</button>
<button className="flex-1 py-1 rounded text-on-surface-variant hover:text-on-surface font-label-sm text-[11px] text-center" type="button">Mastery</button>
<button className="flex-1 py-1 rounded text-on-surface-variant hover:text-on-surface font-label-sm text-[11px] text-center" type="button">Feats</button>
</div>
{/* Badges Stack */}
<div className="flex flex-col gap-space-xs mt-1">
{/* Item 1 */}
<div className="p-space-xs rounded-lg bg-surface-container-high/40 hover:bg-surface-container-high flex items-start gap-space-xs transition-all">
<div className="w-8 h-8 rounded-lg bg-tertiary-container/30 text-tertiary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[18px]">terminal</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center justify-between gap-1">
<span className="font-label-md text-label-md text-on-surface truncate">Code Alchemist II</span>
<span className="font-label-sm text-[10px] text-tertiary shrink-0">+150 XP</span>
</div>
<span className="font-body-sm text-[11px] text-on-surface-variant leading-tight">Completed 50 coding quests with zero regressions</span>
</div>
</div>
{/* Item 2 */}
<div className="p-space-xs rounded-lg bg-surface-container-high/40 hover:bg-surface-container-high flex items-start gap-space-xs transition-all">
<div className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[18px]">swords</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center justify-between gap-1">
<span className="font-label-md text-label-md text-on-surface truncate">Slayer of the Chimera</span>
<span className="font-label-sm text-[10px] text-primary shrink-0">+500 XP</span>
</div>
<span className="font-body-sm text-[11px] text-on-surface-variant leading-tight">Landed the decisive strike on guild world boss</span>
</div>
</div>
{/* Item 3 */}
<div className="p-space-xs rounded-lg bg-surface-container-high/40 hover:bg-surface-container-high flex items-start gap-space-xs transition-all">
<div className="w-8 h-8 rounded-lg bg-tertiary/20 text-tertiary-fixed flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[18px]">local_fire_department</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center justify-between gap-1">
<span className="font-label-md text-label-md text-on-surface truncate">Unbroken Flame</span>
<span className="font-label-sm text-[10px] text-tertiary-fixed shrink-0">+200 XP</span>
</div>
<span className="font-body-sm text-[11px] text-on-surface-variant leading-tight">Sustained 14+ day streak of daily discipline</span>
</div>
</div>
{/* Item 4 */}
<div className="p-space-xs rounded-lg bg-surface-container-high/40 hover:bg-surface-container-high flex items-start gap-space-xs transition-all">
<div className="w-8 h-8 rounded-lg bg-secondary/20 text-secondary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[18px]">timelapse</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center justify-between gap-1">
<span className="font-label-md text-label-md text-on-surface truncate">Iron Will</span>
<span className="font-label-sm text-[10px] text-secondary shrink-0">+150 XP</span>
</div>
<span className="font-body-sm text-[11px] text-on-surface-variant leading-tight">Logged 10+ hours continuous deep focus blocks</span>
</div>
</div>
</div>
</div>
{/* Card 3: Guild Synergy & Resonance */}
<div className="rounded-xl bg-surface-container-low/90 backdrop-blur-xl p-space-md shadow-lg flex flex-col gap-space-xs">
<div className="flex items-center justify-between mb-1">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[18px]">shield_person</span>
<span className="font-label-lg text-label-lg uppercase tracking-wider text-on-surface">Guild Synergy</span>
</div>
<span className="font-label-sm text-label-sm text-secondary font-bold">Vanguard</span>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-lowest flex flex-col gap-1">
<div className="flex justify-between items-center text-on-surface">
<span className="font-label-sm text-label-sm text-primary font-bold">Party Perk: Synchronized Deep Work</span>
<span className="text-tertiary font-label-sm text-[10px]">+10% XP</span>
</div>
<p className="font-body-sm text-[11px] text-on-surface-variant">
            All 4 party members actively focusing simultaneously unlocks party aura bonus.
          </p>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
