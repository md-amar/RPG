export function Dashboard() {
  return (
    <>
      <div className="flex flex-col w-full pb-space-xl text-on-surface">
{/* TOP HERO STATUS BARREL */}
<section className="relative rounded-2xl bg-surface-container-low p-space-lg shadow-2xl overflow-hidden mb-space-lg">
{/* Atmospheric Rune Glow Orbs */}
<div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-primary-container/15 blur-3xl pointer-events-none"></div>
<div className="absolute right-1/3 -bottom-20 w-72 h-72 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-space-lg">
{/* Character Avatar & Title Info */}
<div className="flex items-center gap-space-md">
<div className="relative">
<div className="w-20 h-20 rounded-2xl overflow-hidden shadow-xl bg-surface-container-highest">
<img className="w-full h-full object-cover" data-alt="Cyber fantasy RPG hero portrait of an arcane battlemage scholar with subtle neon runes glowing along his cheekbones and high-tech obsidian armor bathed in ethereal violet and cyan light, cinematic digital art." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIR-HrEqBLEwAI9x2AYksmpRsbICLeH9yocq2glrkHnrdtoQTGZ5Z6XVIRaM2cAjCLrjEIOKuKGu7h1rvVRSjn7s_T1QyWTcAuBuuAH0lsBFf1b8EITDs4vADzv7Lp9ijK1ueBqDVnJcTKpjEE2hpGFfqntJTmaShNJ5yyNsFqek8-mtFvTU7BPU3l_Tjqyaw-XVH0_QTd0s3fyhFZ7uYKxDsQs1QhtRyiaasyLN4"/>
</div>
<div className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm shadow-md flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: '"FILL" 1' }}>auto_awesome</span>
<span>L.24</span>
</div>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs mb-0.5">
<span className="font-headline-md text-headline-md text-on-surface">Welcome Back, Valerius!</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-tertiary font-label-sm text-label-sm uppercase tracking-wider flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">shield</span> Vanguard Guild
            </span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">The realm of productivity calls. <span className="text-secondary font-semibold">3 active bounties</span> await your conquest today.</p>
</div>
</div>
{/* Level & Progression Bar Trough */}
<div className="flex flex-col w-full xl:w-[480px] bg-surface-container/70 backdrop-blur-md p-space-md rounded-xl shadow-inner">
<div className="flex items-center justify-between mb-space-xs">
<div className="flex items-center gap-space-xs">
<span className="font-label-lg text-label-lg text-primary uppercase tracking-wide">Level 24</span>
<span className="text-outline text-label-sm">•</span>
<span className="font-label-md text-label-md text-on-surface-variant">Arcane Architect</span>
</div>
<div className="flex items-center gap-1.5 font-label-md text-label-md text-secondary">
<span className="material-symbols-outlined text-[16px] text-tertiary">bolt</span>
<span>1,050 XP to Lvl 25</span>
</div>
</div>
{/* Custom Glowing XP Gauge */}
<div className="relative w-full h-3 bg-surface-container-lowest rounded-full overflow-hidden p-0.5">
<div className="h-full rounded-full bg-gradient-to-r from-secondary to-primary-container relative overflow-hidden transition-all duration-1000 shadow-[0_0_12px_rgba(76,215,246,0.5)]" style={{ width: '70%' }}>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-full animate-pulse"></div>
</div>
</div>
<div className="flex items-center justify-between mt-space-xs text-on-surface-variant font-label-sm text-label-sm">
<span>Current: 2,450 XP</span>
<span className="text-secondary font-semibold">70% Calibrated</span>
<span>Target: 3,500 XP</span>
</div>
</div>
{/* Quick Action Cast Rune */}
<div className="flex items-center gap-space-sm w-full xl:w-auto">
<button className="w-full xl:w-auto px-space-md py-space-sm rounded-xl bg-primary text-on-primary font-label-lg text-label-lg uppercase tracking-wider flex items-center justify-center gap-space-xs shadow-[0_0_16px_rgba(183,109,255,0.4)] hover:brightness-110 active:scale-95 transition-all" id="quickQuestBtn" type="button">
<span className="material-symbols-outlined text-[20px]">add_circle</span>
<span>+ Log Custom Quest</span>
</button>
</div>
</div>
</section>
{/* CHARACTER ATTRIBUTES MATRIX (5 RPG STAT PILLARS) */}
<section className="flex flex-col mb-space-xl">
<div className="flex items-center justify-between mb-space-md">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[22px]">tune</span>
<h2 className="font-headline-sm text-headline-sm uppercase tracking-wide text-on-surface">Core Attribute Matrices</h2>
</div>
<span className="px-space-sm py-1 rounded-full bg-surface-container-high text-tertiary font-label-sm text-label-sm tracking-wider uppercase flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">bolt</span> Tier Buff: +1.2x Multiplier Active
      </span>
</div>
{/* 5 Stats Responsive Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-md">
{/* 1. Intelligence */}
<div className="group relative rounded-xl bg-surface-container-low p-space-md hover:bg-surface-container transition-all duration-300 shadow-md flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-secondary shadow-sm group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: '"FILL" 1' }}>menu_book</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm">+4 this wk</span>
</div>
<div className="mt-space-md">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">Intelligence</span>
<div className="flex items-baseline gap-1 mt-0.5">
<span className="font-headline-md text-headline-md text-on-surface">48</span>
<span className="font-label-sm text-label-sm text-outline">PTS</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 truncate">Algorithms, System Architecture</p>
</div>
<div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden mt-space-sm">
<div className="bg-secondary h-full rounded-full" style={{ width: '82%' }}></div>
</div>
</div>
{/* 2. Strength */}
<div className="group relative rounded-xl bg-surface-container-low p-space-md hover:bg-surface-container transition-all duration-300 shadow-md flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-error shadow-sm group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: '"FILL" 1' }}>fitness_center</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-error/10 text-error font-label-sm text-label-sm">+2 this wk</span>
</div>
<div className="mt-space-md">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">Strength</span>
<div className="flex items-baseline gap-1 mt-0.5">
<span className="font-headline-md text-headline-md text-on-surface">36</span>
<span className="font-label-sm text-label-sm text-outline">PTS</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 truncate">Deadlifts, Kettlebells, Cardio</p>
</div>
<div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden mt-space-sm">
<div className="bg-error h-full rounded-full" style={{ width: '60%' }}></div>
</div>
</div>
{/* 3. Focus */}
<div className="group relative rounded-xl bg-surface-container-low p-space-md hover:bg-surface-container transition-all duration-300 shadow-md flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary shadow-sm group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: '"FILL" 1' }}>visibility</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm">+6 this wk</span>
</div>
<div className="mt-space-md">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">Focus</span>
<div className="flex items-baseline gap-1 mt-0.5">
<span className="font-headline-md text-headline-md text-on-surface">52</span>
<span className="font-label-sm text-label-sm text-outline">PTS</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 truncate">Deep Work Sprints, Monastic Mode</p>
</div>
<div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden mt-space-sm">
<div className="bg-primary h-full rounded-full" style={{ width: '90%' }}></div>
</div>
</div>
{/* 4. Vitality */}
<div className="group relative rounded-xl bg-surface-container-low p-space-md hover:bg-surface-container transition-all duration-300 shadow-md flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-secondary-fixed shadow-sm group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: '"FILL" 1' }}>vital_signs</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed/10 text-secondary-fixed font-label-sm text-label-sm">+3 this wk</span>
</div>
<div className="mt-space-md">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">Vitality</span>
<div className="flex items-baseline gap-1 mt-0.5">
<span className="font-headline-md text-headline-md text-on-surface">41</span>
<span className="font-label-sm text-label-sm text-outline">PTS</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 truncate">Sleep Rest, Hydration &amp; Diet</p>
</div>
<div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden mt-space-sm">
<div className="bg-secondary-fixed h-full rounded-full" style={{ width: '72%' }}></div>
</div>
</div>
{/* 5. Charisma */}
<div className="group relative rounded-xl bg-surface-container-low p-space-md hover:bg-surface-container transition-all duration-300 shadow-md flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-tertiary shadow-sm group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: '"FILL" 1' }}>military_tech</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-tertiary/10 text-tertiary font-label-sm text-label-sm">+1 this wk</span>
</div>
<div className="mt-space-md">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">Charisma</span>
<div className="flex items-baseline gap-1 mt-0.5">
<span className="font-headline-md text-headline-md text-on-surface">29</span>
<span className="font-label-sm text-label-sm text-outline">PTS</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 truncate">Demo Presentations, Team Sync</p>
</div>
<div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden mt-space-sm">
<div className="bg-tertiary h-full rounded-full" style={{ width: '45%' }}></div>
</div>
</div>
</div>
</section>
{/* MAIN 2-COLUMN SPLIT: ACTIVE BOUNTIES (LEFT 70%) & STREAK / BADGES (RIGHT 30%) */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
{/* LEFT PANEL: QUEST CODEX */}
<div className="lg:col-span-8 flex flex-col gap-space-lg">
{/* Quest Filter Bar */}
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[24px]">history_edu</span>
<h2 className="font-headline-sm text-headline-sm uppercase tracking-wide text-on-surface">Today's Active Bounties</h2>
</div>
{/* Category Tabs */}
<div className="flex items-center gap-1 bg-surface-container-low p-1 rounded-xl">
<button className="px-space-sm py-1 rounded-lg bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-wider">All (3)</button>
<button className="px-space-sm py-1 rounded-lg text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm uppercase tracking-wider">Habits</button>
<button className="px-space-sm py-1 rounded-lg text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm uppercase tracking-wider">Challenges</button>
<button className="px-space-sm py-1 rounded-lg text-tertiary hover:bg-surface-container-high font-label-sm text-label-sm uppercase tracking-wider flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">skull</span> Raid
          </button>
</div>
</div>
{/* Quest Cards Stack */}
<div className="flex flex-col gap-space-md">
{/* QUEST 1: Hard Challenge */}
<article className="relative rounded-2xl bg-surface-container-low p-space-lg hover:bg-surface-container transition-all duration-300 shadow-lg flex flex-col justify-between">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm pb-space-sm">
<div className="flex items-start gap-space-md">
<div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary shrink-0 shadow-sm">
<span className="material-symbols-outlined text-[26px]">terminal</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="px-2 py-0.5 rounded bg-surface-container-high text-secondary font-label-sm text-label-sm tracking-wider uppercase">Skill Mastery</span>
<span className="flex text-tertiary">
<span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
</span>
<span className="font-label-sm text-label-sm text-error uppercase font-semibold">Tier: Hard</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mt-1">Master Binary Search &amp; Tree Traversals</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Implement iterative and recursive DFS &amp; BFS with complexity analysis memoization.</p>
</div>
</div>
{/* Due Timer */}
<div className="flex md:flex-col items-center md:items-end justify-between text-right shrink-0">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Expiry</span>
<div className="flex items-center gap-1 text-tertiary font-label-md text-label-md font-semibold">
<span className="material-symbols-outlined text-[15px]">schedule</span>
<span>4h 15m left</span>
</div>
</div>
</div>
{/* Loot Spoils Bar & Actions */}
<div className="pt-space-md flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm mt-space-sm bg-surface-container-lowest/40 -mx-space-lg -mb-space-lg px-space-lg py-space-sm rounded-b-2xl">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-label-sm text-label-sm text-outline uppercase">Spoils:</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-container/20 text-secondary font-label-sm text-label-sm flex items-center gap-1 font-semibold">
<span className="material-symbols-outlined text-[14px]">auto_awesome</span> +250 XP
              </span>
<span className="px-2 py-0.5 rounded-full bg-tertiary-container/30 text-tertiary font-label-sm text-label-sm flex items-center gap-1 font-semibold">
<span className="material-symbols-outlined text-[14px]">monetization_on</span> +120 Gold
              </span>
<span className="px-2 py-0.5 rounded-full bg-primary-container/20 text-primary font-label-sm text-label-sm font-semibold">
                +2 Intelligence
              </span>
</div>
<button className="complete-btn px-space-md py-space-xs rounded-xl bg-primary-container text-on-primary-container font-label-lg text-label-lg uppercase tracking-wider flex items-center justify-center gap-space-xs shadow-md hover:brightness-110 active:scale-95 transition-all" type="button">
<span className="material-symbols-outlined text-[18px]">done_all</span>
<span>Complete Quest</span>
</button>
</div>
</article>
{/* QUEST 2: Turn-in Ready Workout */}
<article className="relative rounded-2xl bg-surface-container-low p-space-lg hover:bg-surface-container transition-all duration-300 shadow-lg flex flex-col justify-between">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm pb-space-sm">
<div className="flex items-start gap-space-md">
<div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-error shrink-0 shadow-sm">
<span className="material-symbols-outlined text-[26px]">swords</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="px-2 py-0.5 rounded bg-surface-container-high text-error font-label-sm text-label-sm tracking-wider uppercase">Vitality Quest</span>
<span className="flex text-tertiary">
<span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
</span>
<span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">Tier: Medium</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mt-1">30-Minute High Intensity Dungeon Workout</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Heavy kettlebell circuit, pull-up clusters, and 1,000m row ergometer sprint.</p>
</div>
</div>
{/* Status Indicator */}
<div className="flex md:flex-col items-center md:items-end justify-between text-right shrink-0">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Status</span>
<div className="flex items-center gap-1 text-tertiary font-label-md text-label-md font-bold">
<span className="material-symbols-outlined text-[15px] animate-bounce">check_circle</span>
<span>Ready to Turn In</span>
</div>
</div>
</div>
{/* Spoils Bar & Actions */}
<div className="pt-space-md flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm mt-space-sm bg-surface-container-lowest/40 -mx-space-lg -mb-space-lg px-space-lg py-space-sm rounded-b-2xl">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-label-sm text-label-sm text-outline uppercase">Spoils:</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-container/20 text-secondary font-label-sm text-label-sm flex items-center gap-1 font-semibold">
<span className="material-symbols-outlined text-[14px]">auto_awesome</span> +180 XP
              </span>
<span className="px-2 py-0.5 rounded-full bg-tertiary-container/30 text-tertiary font-label-sm text-label-sm flex items-center gap-1 font-semibold">
<span className="material-symbols-outlined text-[14px]">monetization_on</span> +85 Gold
              </span>
<span className="px-2 py-0.5 rounded-full bg-error-container/40 text-on-surface font-label-sm text-label-sm font-semibold">
                +2 Strength
              </span>
<span className="px-2 py-0.5 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm font-semibold">
                +1 Vitality
              </span>
</div>
<button className="claim-btn px-space-md py-space-xs rounded-xl bg-tertiary text-on-tertiary font-label-lg text-label-lg uppercase tracking-wider flex items-center justify-center gap-space-xs shadow-[0_0_12px_rgba(249,189,34,0.4)] hover:brightness-110 active:scale-95 transition-all" type="button">
<span className="material-symbols-outlined text-[18px]">featured_seasonal_and_gifts</span>
<span>Claim Bounty</span>
</button>
</div>
</article>
{/* QUEST 3: In Progress Daily Tome */}
<article className="relative rounded-2xl bg-surface-container-low p-space-lg hover:bg-surface-container transition-all duration-300 shadow-lg flex flex-col justify-between">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm pb-space-sm">
<div className="flex items-start gap-space-md">
<div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-secondary shrink-0 shadow-sm">
<span className="material-symbols-outlined text-[26px]">auto_stories</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="px-2 py-0.5 rounded bg-surface-container-high text-primary font-label-sm text-label-sm tracking-wider uppercase">Wisdom Ritual</span>
<span className="flex text-tertiary">
<span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
</span>
<span className="font-label-sm text-label-sm text-outline uppercase font-semibold">Tier: Easy</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mt-1">Read 20 Pages of System Architecture Tome</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Chapter 4: Event-driven distribution and Byzantine fault tolerance.</p>
</div>
</div>
<div className="flex flex-col md:items-end shrink-0">
<span className="font-label-sm text-label-sm text-on-surface-variant">Progress: 14 / 20 Pages</span>
<div className="w-32 bg-surface-container-lowest h-2 rounded-full overflow-hidden mt-1">
<div className="bg-secondary h-full rounded-full" style={{ width: '70%' }}></div>
</div>
</div>
</div>
{/* Spoils Bar & Actions */}
<div className="pt-space-md flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm mt-space-sm bg-surface-container-lowest/40 -mx-space-lg -mb-space-lg px-space-lg py-space-sm rounded-b-2xl">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-label-sm text-label-sm text-outline uppercase">Spoils:</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-container/20 text-secondary font-label-sm text-label-sm flex items-center gap-1 font-semibold">
<span className="material-symbols-outlined text-[14px]">auto_awesome</span> +90 XP
              </span>
<span className="px-2 py-0.5 rounded-full bg-tertiary-container/30 text-tertiary font-label-sm text-label-sm flex items-center gap-1 font-semibold">
<span className="material-symbols-outlined text-[14px]">monetization_on</span> +40 Gold
              </span>
<span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">
                +1 Focus
              </span>
</div>
<button className="complete-btn px-space-md py-space-xs rounded-xl bg-surface-container-high text-on-surface hover:bg-surface-container-highest font-label-lg text-label-lg uppercase tracking-wider flex items-center justify-center gap-space-xs transition-all" type="button">
<span className="material-symbols-outlined text-[18px]">check</span>
<span>Complete</span>
</button>
</div>
</article>
{/* DASHDED "ADD NEW BOUNTY" CARD */}
<button className="p-space-lg rounded-2xl bg-surface-container-low/40 hover:bg-surface-container-low hover:border-primary/40 border border-dashed border-outline-variant text-on-surface-variant hover:text-primary transition-all flex items-center justify-center gap-space-sm group" type="button">
<span className="material-symbols-outlined text-[24px] group-hover:scale-125 transition-transform">add_circle_outline</span>
<span className="font-headline-sm text-headline-sm uppercase tracking-wide">Forge a New Quest Bounty</span>
</button>
</div>
{/* BOSS RAID EVENT CALLOUT */}
<div className="rounded-2xl bg-gradient-to-r from-error-container/30 via-surface-container-low to-surface-container-low p-space-md flex items-center justify-between gap-space-md shadow-lg">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-xl bg-error/20 text-error flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[28px]">crisis_alert</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-error uppercase font-bold tracking-widest">Weekend Raid Boss</span>
<span className="text-outline text-label-sm">•</span>
<span className="font-label-sm text-label-sm text-tertiary">38h Remaining</span>
</div>
<span className="font-body-lg text-body-lg text-on-surface font-semibold">The Chimera of Procrastination</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Guild Health: 42,800 / 60,000 HP • Deal 1,500 dmg via Deep Work.</p>
</div>
</div>
<button className="px-space-md py-space-xs rounded-xl bg-error text-on-error font-label-lg text-label-lg uppercase tracking-wider shrink-0 hover:brightness-110 active:scale-95 transition-all" type="button">
          Engage Raid
        </button>
</div>
</div>
{/* RIGHT PANEL: STREAK HUD, ACTIVE COMBO & ACHIEVEMENTS */}
<div className="lg:col-span-4 flex flex-col gap-space-lg">
{/* 1. STREAK MATRIX WIDGET */}
<div className="rounded-2xl bg-surface-container-low p-space-lg shadow-xl relative overflow-hidden flex flex-col justify-between">
{/* Ambient Top Glow */}
<div className="absolute -top-12 -right-12 w-40 h-40 bg-tertiary/10 rounded-full blur-2xl pointer-events-none"></div>
<div>
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-outline">Active Discipline Aura</span>
<span className="px-2 py-0.5 rounded-full bg-tertiary/20 text-tertiary font-label-sm text-label-sm font-semibold">+25% XP Buff</span>
</div>
<div className="flex items-center gap-space-xs my-space-xs">
<span className="material-symbols-outlined text-tertiary text-[32px] animate-pulse">local_fire_department</span>
<div className="flex flex-col">
<h3 className="font-headline-md text-headline-md text-on-surface font-bold">14-Day Ignition</h3>
<span className="font-label-sm text-label-sm text-tertiary-fixed">Streak Unbroken</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant italic mt-space-xs">
            “A warrior’s discipline carves paths where dragons fear to tread.”
          </p>
{/* 7-Day Matrix Row */}
<div className="grid grid-cols-7 gap-1.5 mt-space-md">
{/* Mon */}
<div className="flex flex-col items-center gap-1">
<span className="font-label-sm text-label-sm text-outline">M</span>
<div className="w-8 h-8 rounded-lg bg-tertiary/20 text-tertiary flex items-center justify-center shadow-sm">
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: '"FILL" 1' }}>local_fire_department</span>
</div>
</div>
{/* Tue */}
<div className="flex flex-col items-center gap-1">
<span className="font-label-sm text-label-sm text-outline">T</span>
<div className="w-8 h-8 rounded-lg bg-tertiary/20 text-tertiary flex items-center justify-center shadow-sm">
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: '"FILL" 1' }}>local_fire_department</span>
</div>
</div>
{/* Wed */}
<div className="flex flex-col items-center gap-1">
<span className="font-label-sm text-label-sm text-outline">W</span>
<div className="w-8 h-8 rounded-lg bg-tertiary/20 text-tertiary flex items-center justify-center shadow-sm">
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: '"FILL" 1' }}>local_fire_department</span>
</div>
</div>
{/* Thu */}
<div className="flex flex-col items-center gap-1">
<span className="font-label-sm text-label-sm text-outline">T</span>
<div className="w-8 h-8 rounded-lg bg-tertiary/20 text-tertiary flex items-center justify-center shadow-sm">
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: '"FILL" 1' }}>local_fire_department</span>
</div>
</div>
{/* Fri */}
<div className="flex flex-col items-center gap-1">
<span className="font-label-sm text-label-sm text-outline">F</span>
<div className="w-8 h-8 rounded-lg bg-tertiary/20 text-tertiary flex items-center justify-center shadow-sm">
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: '"FILL" 1' }}>local_fire_department</span>
</div>
</div>
{/* Sat (Today) */}
<div className="flex flex-col items-center gap-1">
<span className="font-label-sm text-label-sm text-secondary font-bold">S</span>
<div className="w-8 h-8 rounded-lg bg-secondary text-on-secondary flex items-center justify-center shadow-[0_0_8px_rgba(76,215,246,0.5)]">
<span className="material-symbols-outlined text-[16px]">bolt</span>
</div>
</div>
{/* Sun */}
<div className="flex flex-col items-center gap-1">
<span className="font-label-sm text-label-sm text-outline">S</span>
<div className="w-8 h-8 rounded-lg bg-surface-container-highest text-outline flex items-center justify-center">
<span className="material-symbols-outlined text-[14px]">lock</span>
</div>
</div>
</div>
</div>
{/* Phoenix Form Meter */}
<div className="mt-space-md pt-space-md bg-surface-container-lowest/50 -mx-space-lg -mb-space-lg p-space-lg rounded-b-2xl">
<div className="flex items-center justify-between text-label-sm font-label-sm mb-1">
<span className="text-on-surface">Ascension to Phoenix Form</span>
<span className="text-tertiary">Day 14 / 21</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-gradient-to-r from-tertiary-container to-tertiary h-full rounded-full shadow-[0_0_8px_rgba(249,189,34,0.4)]" style={{ width: '66%' }}></div>
</div>
<span className="font-label-sm text-label-sm text-outline block mt-1">Reward: Mythic Phoenix Banner &amp; +500 Gold</span>
</div>
</div>
{/* 2. RECENT ACHIEVEMENTS & MILESTONES */}
<div className="rounded-2xl bg-surface-container-low p-space-lg shadow-xl flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-tertiary text-[20px]">military_tech</span>
<h3 className="font-headline-sm text-headline-sm uppercase tracking-wide text-on-surface">Recent Relics</h3>
</div>
<a className="font-label-sm text-label-sm text-secondary hover:underline uppercase" href="#">View All (38)</a>
</div>
{/* Badges List */}
<div className="flex flex-col gap-space-sm">
{/* Badge 1 */}
<div className="flex items-center gap-space-sm p-space-sm rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors">
<div className="w-10 h-10 rounded-xl bg-surface-container-highest text-secondary flex items-center justify-center shrink-0 shadow-sm">
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>diamond</span>
</div>
<div className="flex flex-col min-w-0 flex-1">
<div className="flex items-center justify-between">
<span className="font-body-md text-body-md font-semibold text-on-surface truncate">Code Alchemist II</span>
<span className="font-label-sm text-label-sm text-secondary">+150 XP</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant truncate">Completed 50 coding quests • 2h ago</span>
</div>
</div>
{/* Badge 2 */}
<div className="flex items-center gap-space-sm p-space-sm rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors">
<div className="w-10 h-10 rounded-xl bg-surface-container-highest text-tertiary flex items-center justify-center shrink-0 shadow-sm">
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>wb_sunny</span>
</div>
<div className="flex flex-col min-w-0 flex-1">
<div className="flex items-center justify-between">
<span className="font-body-md text-body-md font-semibold text-on-surface truncate">Dawn Crusader</span>
<span className="font-label-sm text-label-sm text-secondary">+150 XP</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant truncate">Morning workouts 7 days straight</span>
</div>
</div>
{/* Badge 3 */}
<div className="flex items-center gap-space-sm p-space-sm rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors">
<div className="w-10 h-10 rounded-xl bg-surface-container-highest text-primary flex items-center justify-center shrink-0 shadow-sm">
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>shield</span>
</div>
<div className="flex flex-col min-w-0 flex-1">
<div className="flex items-center justify-between">
<span className="font-body-md text-body-md font-semibold text-on-surface truncate">Iron Will</span>
<span className="font-label-sm text-label-sm text-secondary">+150 XP</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant truncate">10+ hours deep work this week</span>
</div>
</div>
{/* Badge 4 */}
<div className="flex items-center gap-space-sm p-space-sm rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors">
<div className="w-10 h-10 rounded-xl bg-surface-container-highest text-tertiary flex items-center justify-center shrink-0 shadow-sm">
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>savings</span>
</div>
<div className="flex flex-col min-w-0 flex-1">
<div className="flex items-center justify-between">
<span className="font-body-md text-body-md font-semibold text-on-surface truncate">Hoarder of Spoils</span>
<span className="font-label-sm text-label-sm text-secondary">+150 XP</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant truncate">Banked 1,000+ Gold coins</span>
</div>
</div>
</div>
</div>
</div>
</div>
{/* POPUP CELEBRATION NOTIFICATION TEMPLATE (Hidden by default, triggered via JS) */}
<div className="fixed bottom-6 right-6 px-space-md py-space-sm rounded-2xl bg-surface-container-highest text-on-surface shadow-2xl flex items-center gap-space-sm translate-y-24 opacity-0 transition-all duration-300 pointer-events-none z-50" id="questClaimToast">
<div className="w-10 h-10 rounded-xl bg-tertiary text-on-tertiary flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">workspace_premium</span>
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-tertiary uppercase">Bounty Claimed!</span>
<span className="font-body-sm text-body-sm text-on-surface-variant" id="toastMessage">+180 XP &amp; +85 Gold added to your inventory.</span>
</div>
</div>

</div>
    </>
  );
}
