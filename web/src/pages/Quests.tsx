export function Quests() {
  return (
    <>
      <div className="flex flex-col w-full pb-space-xl text-on-surface select-none">
{/* View Navigation Header */}
<header className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md pt-space-md mb-space-lg">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-space-xs">
<span className="px-space-xs py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-widest">Active Chapter • Act IV</span>
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Realm Sync: Real-time</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight flex items-center gap-space-sm">
        Quest Log &amp; Epic Raids
        <span className="material-symbols-outlined text-primary text-[28px]">token</span>
</h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
        Conquer real-life disciplines, banish mental demons, and forge legendary habits through quantified heroic progression.
      </p>
</div>
{/* Primary CTAs & Meta Counters */}
<div className="flex items-center gap-space-sm flex-wrap">
<div className="hidden sm:flex items-center gap-space-xs bg-surface-container-low px-space-md py-space-xs rounded-xl shadow-inner">
<span className="material-symbols-outlined text-tertiary text-[20px]">military_tech</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant leading-none">Global Rank</span>
<span className="font-label-md text-label-md text-tertiary leading-tight">Vanguard #14</span>
</div>
</div>
<button className="group relative px-space-md py-space-sm rounded-xl bg-gradient-to-r from-primary-container to-inverse-primary text-on-primary font-label-lg text-label-lg uppercase tracking-wider flex items-center gap-space-xs shadow-lg hover:shadow-primary/30 hover:brightness-110 transition-all duration-200" id="open-forge-modal" type="button">
<span className="material-symbols-outlined text-[18px] group-hover:rotate-90 transition-transform">add_moderator</span>
<span>+ Forge Custom Quest</span>
</button>
</div>
</header>
{/* View Switcher Tabs */}
<div className="flex items-center gap-space-xs border-b border-transparent bg-surface-container-lowest/60 p-1.5 rounded-xl mb-space-xl overflow-x-auto">
<button className="px-space-md py-space-xs rounded-lg bg-primary-container text-on-primary-container font-label-lg text-label-lg uppercase tracking-wide shadow-sm flex items-center gap-space-xs whitespace-nowrap" type="button">
<span className="material-symbols-outlined text-[16px]">menu_book</span>
      Active Quests (5)
    </button>
<button className="px-space-md py-space-xs rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-lg text-label-lg uppercase tracking-wide transition-all flex items-center gap-space-xs whitespace-nowrap" type="button">
<span className="material-symbols-outlined text-[16px] text-error">swords</span>
      Guild Boss Raids
      <span className="px-1.5 py-0.2 rounded-full bg-error-container text-on-error font-label-sm text-label-sm">1 Live</span>
</button>
<button className="px-space-md py-space-xs rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-lg text-label-lg uppercase tracking-wide transition-all flex items-center gap-space-xs whitespace-nowrap" type="button">
<span className="material-symbols-outlined text-[16px]">task_alt</span>
      Completed Log (42)
    </button>
<button className="px-space-md py-space-xs rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-lg text-label-lg uppercase tracking-wide transition-all flex items-center gap-space-xs whitespace-nowrap" type="button">
<span className="material-symbols-outlined text-[16px]">history_edu</span>
      Raid Archives
    </button>
</div>
{/* LIVE GUILD RAID BOSS ARENA BANNER */}
<section className="relative rounded-2xl bg-surface-container-lowest overflow-hidden shadow-2xl mb-space-xl">
{/* Ambient glowing backdrop aura */}
<div className="absolute -top-32 -right-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
<div className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-secondary/10 blur-3xl pointer-events-none"></div>
<div className="grid grid-cols-1 xl:grid-cols-12 relative z-10">
{/* Left Visual & Boss Overview */}
<div className="xl:col-span-7 relative min-h-[380px] lg:min-h-[460px] flex flex-col justify-between p-space-lg bg-surface-container-low/40">
{/* Boss Concept Art Container */}
<div className="absolute inset-0 z-0 overflow-hidden">
<img alt="The Chimera of Procrastination Boss Battle" className="w-full h-full object-cover object-center opacity-85 hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBA4qHa36EV71tEAxYFUm4mlrYJQivY3ubBGpHSQRpQDBc2FL_9qlLwgZ-W7kLr7hQ0i0EXcBmOTZinBm12slU3bZdXFaD7nVQMEP6TIrQW3C1esBLLxkGa1iCWIU7rRROVg_n0kr9GsJezOlhbNMn7-MEGqqojgqHJCHu_1knP5ShXvfpmrzj_gtK2IWhssITUjBSnOxj-TfeNxAsDzznW6kXRwOdAd9J5lEaCaDc"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/60 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest/80 via-transparent to-surface-container-lowest"></div>
</div>
{/* Top Badges Overlay */}
<div className="relative z-10 flex items-center justify-between gap-space-sm flex-wrap">
<div className="flex items-center gap-space-xs">
<span className="px-space-xs py-1 rounded-md bg-error-container/90 text-on-error font-label-sm text-label-sm uppercase tracking-widest flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] animate-pulse">local_fire_department</span>
              Live World Raid
            </span>
<span className="px-space-xs py-1 rounded-md bg-surface-container-highest/80 backdrop-blur-md text-primary font-label-sm text-label-sm uppercase tracking-wider">
              Mythic Guild Boss • Lvl 50
            </span>
</div>
<div className="flex items-center gap-space-xs bg-surface-container-lowest/80 backdrop-blur-md px-space-sm py-1 rounded-lg">
<span className="material-symbols-outlined text-tertiary text-[16px]">schedule</span>
<span className="font-label-sm text-label-sm text-on-surface">38h 14m remaining until reset</span>
</div>
</div>
{/* Boss Identity & Threat Bio */}
<div className="relative z-10 mt-auto pt-space-xl">
<div className="flex items-center gap-space-xs mb-1">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">Ancient Phantasm of Torment</span>
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
<span className="font-label-sm text-label-sm text-tertiary-fixed">Deep Work Disruptor</span>
</div>
<h2 className="font-display-hero text-headline-lg lg:text-display-hero uppercase tracking-tighter text-on-surface leading-none drop-shadow-md">
            The Chimera of Procrastination
          </h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xl mt-2 line-clamp-2">
            A manifestation of doom-scrolling, task-deferral, and creative paralysis. It feeds on unwritten prose and broken commits.
          </p>
{/* Mechanics Card Inside Banner */}
<div className="mt-space-md p-space-sm rounded-xl bg-surface-container-high/80 backdrop-blur-md flex items-start gap-space-sm">
<span className="material-symbols-outlined text-secondary text-[22px] shrink-0 mt-0.5">bolt</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-secondary uppercase tracking-wide">Guild Mechanics Activated</span>
<span className="font-body-sm text-body-sm text-on-surface">Every 25 minutes of unbroken <span className="text-primary font-bold">Deep Work Sprint</span> inflicts 500 Physical &amp; Arcane DMG directly to its ethereal heart.</span>
</div>
</div>
</div>
</div>
{/* Right Guild Status, HP Gauge & Contributor Matrix */}
<div className="xl:col-span-5 p-space-lg flex flex-col justify-between bg-surface-container gap-space-lg">
{/* Health Bar Section */}
<div className="flex flex-col gap-space-xs">
<div className="flex items-end justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Colossal Essence Gauge</span>
<span className="font-headline-md text-headline-md text-error tracking-tight font-bold">42,800 <span className="text-on-surface-variant text-body-md font-normal">/ 60,000 HP</span></span>
</div>
<div className="text-right">
<span className="font-label-lg text-label-lg text-secondary">71.3% Remnant</span>
</div>
</div>
{/* Segmented Ruby/Purple Health Gauge */}
<div className="relative w-full h-4 rounded-full bg-surface-container-lowest overflow-hidden p-0.5 shadow-inner">
<div className="h-full rounded-full bg-gradient-to-r from-error via-primary-container to-secondary w-[71.3%] transition-all duration-1000 relative">
<div className="absolute inset-0 bg-white/10 animate-pulse"></div>
</div>
</div>
<div className="flex justify-between font-label-sm text-label-sm text-outline">
<span>Aggro Barrier: 100%</span>
<span>Enrage Stage: Phase II</span>
</div>
</div>
{/* Guild Vanguard Leaderboard */}
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface uppercase tracking-wider flex items-center gap-space-xs">
<span className="material-symbols-outlined text-tertiary text-[18px]">leaderboard</span>
              Top Raid Striker Cadre
            </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">7 Heroes Engaged</span>
</div>
<div className="flex flex-col gap-1.5">
{/* Rank 1 */}
<div className="flex items-center justify-between p-space-xs px-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors">
<div className="flex items-center gap-space-sm">
<span className="font-label-md text-label-md text-tertiary w-4 font-bold">#1</span>
<div className="w-7 h-7 rounded-full bg-tertiary-container/30 flex items-center justify-center text-tertiary font-label-sm">LS</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface leading-none">Lyra Storm</span>
<span className="font-label-sm text-label-sm text-secondary leading-none">Chronos Archmage</span>
</div>
</div>
<span className="font-label-md text-label-md text-tertiary font-mono">11,200 DMG</span>
</div>
{/* Rank 2 (Current User) */}
<div className="flex items-center justify-between p-space-xs px-space-sm rounded-lg bg-primary-container/20 hover:bg-primary-container/30 transition-colors">
<div className="flex items-center gap-space-sm">
<span className="font-label-md text-label-md text-primary w-4 font-bold">#2</span>
<div className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm">VS</div>
<div className="flex flex-col">
<div className="flex items-center gap-1">
<span className="font-label-md text-label-md text-on-surface leading-none font-bold">Valerius Stone</span>
<span className="px-1 py-0.2 rounded bg-primary/20 text-primary font-label-sm text-[9px] uppercase">You</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant leading-none">Grand Architect</span>
</div>
</div>
<span className="font-label-md text-label-md text-primary font-mono font-bold">8,400 DMG</span>
</div>
{/* Rank 3 */}
<div className="flex items-center justify-between p-space-xs px-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors">
<div className="flex items-center gap-space-sm">
<span className="font-label-md text-label-md text-outline w-4 font-bold">#3</span>
<div className="w-7 h-7 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface font-label-sm">KV</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface leading-none">Kaelen Vance</span>
<span className="font-label-sm text-label-sm text-on-surface-variant leading-none">Blade of Discipline</span>
</div>
</div>
<span className="font-label-md text-label-md text-on-surface-variant font-mono">6,100 DMG</span>
</div>
</div>
</div>
{/* Guaranteed Raid Spoils Showcase */}
<div className="p-space-sm rounded-xl bg-surface-container-lowest/80 flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-tertiary-container/30 flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined text-[24px]">workspace_premium</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Bounty Victory Cache</span>
<span className="font-label-md text-label-md text-tertiary-fixed">Phoenix Feather • +500 Gold • Slayer Title</span>
</div>
</div>
<button className="font-label-sm text-label-sm uppercase tracking-widest text-secondary hover:text-secondary-fixed hover:underline whitespace-nowrap" type="button">
            Loot Info
          </button>
</div>
{/* Arena Primary Actions */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs">
<button className="w-full py-space-sm px-space-md rounded-xl bg-gradient-to-r from-primary-container to-inverse-primary text-on-primary font-label-lg text-label-lg uppercase tracking-wider shadow-lg hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-space-xs" id="deep-work-sprint-btn" type="button">
<span className="material-symbols-outlined text-[18px]">timer</span>
<span>Cast Focused Sprint</span>
</button>
<button className="w-full py-space-sm px-space-md rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-secondary font-label-lg text-label-lg uppercase tracking-wider transition-all flex items-center justify-center gap-space-xs" type="button">
<span className="material-symbols-outlined text-[18px]">group_add</span>
<span>Rally Party</span>
</button>
</div>
</div>
</div>
</section>
{/* QUEST BOARD DIRECTORY */}
<section className="flex flex-col gap-space-md">
{/* Filter, Discipline & Sorter Ribbon */}
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-sm bg-surface-container-low p-space-sm rounded-xl">
{/* Discipline Filters */}
<div className="flex items-center gap-1 overflow-x-auto">
<button className="px-space-sm py-1 rounded-lg bg-surface-container-highest text-on-surface font-label-md text-label-md whitespace-nowrap" type="button">All Disciplines</button>
<button className="px-space-sm py-1 rounded-lg text-on-surface-variant hover:bg-surface-container font-label-md text-label-md whitespace-nowrap flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-[15px] text-primary">psychology</span>
          Intelligence
        </button>
<button className="px-space-sm py-1 rounded-lg text-on-surface-variant hover:bg-surface-container font-label-md text-label-md whitespace-nowrap flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-[15px] text-error">favorite</span>
          Vitality
        </button>
<button className="px-space-sm py-1 rounded-lg text-on-surface-variant hover:bg-surface-container font-label-md text-label-md whitespace-nowrap flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-[15px] text-secondary">visibility</span>
          Focus
        </button>
<button className="px-space-sm py-1 rounded-lg text-on-surface-variant hover:bg-surface-container font-label-md text-label-md whitespace-nowrap flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-[15px] text-tertiary">crown</span>
          Charisma
        </button>
</div>
{/* Secondary Filters & Search Sort */}
<div className="flex items-center gap-space-xs flex-wrap">
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-2.5 text-outline text-[18px]">search</span>
<input className="pl-8 pr-3 py-1 bg-surface-container-lowest text-on-surface placeholder:text-outline rounded-lg font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary w-40 sm:w-48" placeholder="Search bounties..." type="text"/>
</div>
<select className="px-space-sm py-1 bg-surface-container-lowest text-on-surface rounded-lg font-label-md text-label-md focus:outline-none">
<option>Sort: Urgency / Time</option>
<option>Sort: Reward Value</option>
<option>Sort: Highest Tier</option>
</select>
</div>
</div>
{/* QUEST CARDS GRID */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-space-md">
{/* QUEST 1: Intelligence / Coding (Heroic) */}
<article className="relative flex flex-col justify-between p-space-md rounded-2xl bg-surface-container hover:bg-surface-container-high transition-all duration-300 shadow-md group">
<div className="flex flex-col gap-space-xs">
{/* Card Header & Metadata */}
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="px-2 py-0.5 rounded-md bg-primary-container/20 text-primary font-label-sm text-label-sm uppercase tracking-wide flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">psychology</span>
                Intelligence
              </span>
<span className="px-2 py-0.5 rounded-md bg-surface-container-highest text-tertiary font-label-sm text-label-sm font-bold">
                ★★★ Heroic
              </span>
</div>
<div className="flex items-center gap-1 text-secondary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px]">alarm</span>
<span>6h 30m</span>
</div>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mt-1 group-hover:text-primary transition-colors">
            Refactor Legacy Distributed Cache
          </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Purge synchronous bottlenecks in the redis cluster cluster and migrate fallback logic to prevent thread starvation.
          </p>
{/* Milestone / Step Tracker */}
<div className="mt-space-xs p-space-xs bg-surface-container-low rounded-xl">
<div className="flex justify-between items-center mb-1 text-on-surface font-label-sm text-label-sm">
<span>Objective Milestones</span>
<span className="text-primary font-mono">Step 2 of 3</span>
</div>
<div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden">
<div className="bg-primary h-full w-2/3 rounded-full"></div>
</div>
</div>
{/* Reward Bounty Pills */}
<div className="flex items-center gap-space-xs pt-1 flex-wrap">
<span className="px-2 py-0.5 rounded bg-surface-container-lowest text-secondary font-label-sm text-label-sm font-mono">+350 XP</span>
<span className="px-2 py-0.5 rounded bg-surface-container-lowest text-tertiary font-label-sm text-label-sm font-mono">+140 Gold</span>
<span className="px-2 py-0.5 rounded bg-surface-container-lowest text-primary font-label-sm text-label-sm font-mono">+4 INT</span>
</div>
</div>
{/* Card Footer Action */}
<div className="mt-space-md pt-space-xs border-t border-transparent flex items-center justify-between">
<div className="flex items-center gap-1 text-outline font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[15px] text-secondary">memory</span>
<span>Task ID #802</span>
</div>
<button className="px-space-md py-1.5 rounded-xl bg-primary-container text-on-primary-container font-label-md text-label-md uppercase tracking-wider hover:brightness-110 shadow-sm transition-all flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-[16px]">upload_file</span>
            Submit Proof
          </button>
</div>
</article>
{/* QUEST 2: Vitality / Fitness (Adept - Completed Bounty) */}
<article className="relative flex flex-col justify-between p-space-md rounded-2xl bg-surface-container hover:bg-surface-container-high transition-all duration-300 shadow-md group">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="px-2 py-0.5 rounded-md bg-error-container/20 text-error font-label-sm text-label-sm uppercase tracking-wide flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">directions_run</span>
                Vitality
              </span>
<span className="px-2 py-0.5 rounded-md bg-surface-container-highest text-secondary font-label-sm text-label-sm font-bold">
                ★★ Adept
              </span>
</div>
<span className="px-2 py-0.5 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm font-bold uppercase tracking-wider flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">done</span> Done
            </span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mt-1 group-hover:text-secondary transition-colors">
            Defeat the Morning Sloth: 5km Trail Run
          </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Achieved average pace under 5:30/km across woodland elevation trails. Aerobic threshold barrier shattered.
          </p>
{/* Completed State Notification Box */}
<div className="mt-space-xs p-space-xs bg-surface-container-lowest rounded-xl flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[20px]">verified</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface">Verified via Health Sync Orb</span>
<span className="font-label-sm text-label-sm text-outline">Pace: 5:18/km • Cadence: 174 SPM</span>
</div>
</div>
{/* Reward Bounty Pills */}
<div className="flex items-center gap-space-xs pt-1 flex-wrap">
<span className="px-2 py-0.5 rounded bg-surface-container-lowest text-secondary font-label-sm text-label-sm font-mono">+220 XP</span>
<span className="px-2 py-0.5 rounded bg-surface-container-lowest text-tertiary font-label-sm text-label-sm font-mono">+90 Gold</span>
<span className="px-2 py-0.5 rounded bg-surface-container-lowest text-error font-label-sm text-label-sm font-mono">+3 VIT</span>
</div>
</div>
{/* Card Footer Action */}
<div className="mt-space-md pt-space-xs flex items-center justify-between">
<span className="font-label-sm text-label-sm text-tertiary flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">celebration</span> Ready to claim
          </span>
<button className="px-space-md py-1.5 rounded-xl bg-tertiary text-on-tertiary font-label-md text-label-md uppercase tracking-wider hover:brightness-110 shadow-md hover:shadow-tertiary/20 transition-all flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-[16px]">card_giftcard</span>
            Claim Bounty
          </button>
</div>
</article>
{/* QUEST 3: Focus / Deep Work (Heroic) */}
<article className="relative flex flex-col justify-between p-space-md rounded-2xl bg-surface-container hover:bg-surface-container-high transition-all duration-300 shadow-md group">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="px-2 py-0.5 rounded-md bg-secondary/20 text-secondary font-label-sm text-label-sm uppercase tracking-wide flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">visibility</span>
                Focus
              </span>
<span className="px-2 py-0.5 rounded-md bg-surface-container-highest text-tertiary font-label-sm text-label-sm font-bold">
                ★★★ Heroic
              </span>
</div>
<span className="px-2 py-0.5 rounded-full bg-tertiary-container/30 text-tertiary font-label-sm text-label-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">local_fire_department</span> 14d Streak
            </span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mt-1 group-hover:text-primary transition-colors">
            Conquer 4 Pomodoro Sprints
          </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Zero tab proliferation, social blackouts, and phone sealed in stasis vault during uninterrupted creation blocks.
          </p>
{/* 4 Block Ritual Tracker */}
<div className="mt-space-xs flex items-center gap-2">
<div className="flex-1 h-3 rounded-md bg-primary flex items-center justify-center text-[9px] font-bold text-on-primary">1</div>
<div className="flex-1 h-3 rounded-md bg-primary flex items-center justify-center text-[9px] font-bold text-on-primary">2</div>
<div className="flex-1 h-3 rounded-md bg-surface-container-lowest flex items-center justify-center text-[9px] font-bold text-outline">3</div>
<div className="flex-1 h-3 rounded-md bg-surface-container-lowest flex items-center justify-center text-[9px] font-bold text-outline">4</div>
</div>
{/* Reward Bounty Pills */}
<div className="flex items-center gap-space-xs pt-1 flex-wrap">
<span className="px-2 py-0.5 rounded bg-surface-container-lowest text-secondary font-label-sm text-label-sm font-mono">+280 XP</span>
<span className="px-2 py-0.5 rounded bg-surface-container-lowest text-tertiary font-label-sm text-label-sm font-mono">+110 Gold</span>
<span className="px-2 py-0.5 rounded bg-surface-container-lowest text-secondary font-label-sm text-label-sm font-mono">+4 FOCUS</span>
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between">
<span className="font-label-sm text-label-sm text-outline">Raid Boss DMG: +1,000</span>
<button className="px-space-md py-1.5 rounded-xl bg-surface-container-highest hover:bg-primary hover:text-on-primary text-on-surface font-label-md text-label-md uppercase tracking-wider transition-all flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-[16px]">play_arrow</span>
            Track Sprint #3
          </button>
</div>
</article>
{/* QUEST 4: Charisma / Leadership (Novice) */}
<article className="relative flex flex-col justify-between p-space-md rounded-2xl bg-surface-container hover:bg-surface-container-high transition-all duration-300 shadow-md group">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="px-2 py-0.5 rounded-md bg-tertiary-container/30 text-tertiary font-label-sm text-label-sm uppercase tracking-wide flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">record_voice_over</span>
                Charisma
              </span>
<span className="px-2 py-0.5 rounded-md bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm font-bold">
                ★ Novice
              </span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px]">event</span>
<span>Tomorrow 10:00</span>
</div>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mt-1 group-hover:text-tertiary transition-colors">
            Host Engineering Architecture Sync
          </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Lead the guild discussion on event-driven infrastructure, align 5 squads on domain borders, and summarize meeting notes.
          </p>
<div className="mt-space-xs p-space-xs bg-surface-container-low rounded-xl flex items-center justify-between">
<span className="font-label-sm text-label-sm text-outline">Preparation Checklist</span>
<span className="font-label-sm text-label-sm text-tertiary">3 / 4 Slides Ready</span>
</div>
<div className="flex items-center gap-space-xs pt-1 flex-wrap">
<span className="px-2 py-0.5 rounded bg-surface-container-lowest text-secondary font-label-sm text-label-sm font-mono">+120 XP</span>
<span className="px-2 py-0.5 rounded bg-surface-container-lowest text-tertiary font-label-sm text-label-sm font-mono">+50 Gold</span>
<span className="px-2 py-0.5 rounded bg-surface-container-lowest text-tertiary-fixed font-label-sm text-label-sm font-mono">+2 CHR</span>
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between">
<span className="font-label-sm text-label-sm text-outline">Guild Sync Active</span>
<button className="px-space-md py-1.5 rounded-xl bg-surface-container-highest hover:bg-surface-bright text-on-surface font-label-md text-label-md uppercase tracking-wider transition-all flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-[16px]">check</span>
            Complete
          </button>
</div>
</article>
{/* QUEST 5: Habit Ritual (Vitality Hydration) */}
<article className="relative flex flex-col justify-between p-space-md rounded-2xl bg-surface-container hover:bg-surface-container-high transition-all duration-300 shadow-md group">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="px-2 py-0.5 rounded-md bg-secondary/15 text-secondary font-label-sm text-label-sm uppercase tracking-wide flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">water_drop</span>
                Daily Ritual
              </span>
<span className="px-2 py-0.5 rounded-md bg-surface-container-highest text-secondary font-label-sm text-label-sm font-bold">
                Ongoing
              </span>
</div>
<span className="font-label-sm text-label-sm text-secondary font-mono">2.2 / 3.0 L</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mt-1 group-hover:text-secondary transition-colors">
            Hydration Ritual: Elixir of Life
          </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Infuse the vessel with electrolyte-rich spring water. Elevates mental stamina and detoxifies physiological nodes.
          </p>
{/* Fluid Glass Gauge */}
<div className="mt-space-xs flex flex-col gap-1">
<div className="w-full bg-surface-container-lowest h-2 rounded-full overflow-hidden">
<div className="bg-secondary h-full w-[73%] rounded-full transition-all duration-500"></div>
</div>
<div className="flex justify-between font-label-sm text-label-sm text-outline">
<span>Remaining: 800ml</span>
<span>Target: 3.0 Liters</span>
</div>
</div>
<div className="flex items-center gap-space-xs pt-1 flex-wrap">
<span className="px-2 py-0.5 rounded bg-surface-container-lowest text-secondary font-label-sm text-label-sm font-mono">+100 XP</span>
<span className="px-2 py-0.5 rounded bg-surface-container-lowest text-tertiary font-label-sm text-label-sm font-mono">+30 Gold</span>
<span className="px-2 py-0.5 rounded bg-surface-container-lowest text-error font-label-sm text-label-sm font-mono">+1 VIT</span>
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between gap-space-xs">
<span className="font-label-sm text-label-sm text-outline">Quick Vessel Fill:</span>
<div className="flex items-center gap-1">
<button className="px-2.5 py-1 rounded-lg bg-surface-container-highest hover:bg-secondary-container hover:text-on-secondary font-label-sm text-label-sm transition-all" type="button">+250ml</button>
<button className="px-2.5 py-1 rounded-lg bg-secondary text-on-secondary font-label-sm text-label-sm transition-all" type="button">+500ml</button>
</div>
</div>
</article>
{/* QUEST 6: Quick Add New Card Placeholder */}
<div className="cursor-pointer border-2 border-dashed border-outline-variant/40 hover:border-primary/60 rounded-2xl p-space-lg flex flex-col items-center justify-center text-center gap-space-sm bg-surface-container-lowest/40 hover:bg-surface-container-low transition-all duration-300 min-h-[260px] group" id="open-forge-card">
<div className="w-14 h-14 rounded-full bg-surface-container-high group-hover:bg-primary-container group-hover:text-on-primary-container text-primary flex items-center justify-center transition-colors">
<span className="material-symbols-outlined text-[28px]">add_circle</span>
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">Forge Another Bounty</span>
<span className="font-body-sm text-body-sm text-on-surface-variant max-w-xs mt-1">Transform work, wellness, or learning into an XP-awarding trial.</span>
</div>
</div>
</div>
</section>
{/* FORGE CUSTOM QUEST MODAL OVERLAY */}
<div className="fixed inset-0 z-50 flex items-center justify-center p-space-md bg-surface-container-lowest/80 backdrop-blur-md hidden transition-opacity duration-300" id="forge-modal">
{/* Click outside boundary wrapper */}
<div className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-2xl bg-surface-container-high shadow-2xl p-space-lg flex flex-col gap-space-md">
{/* Modal Header */}
<div className="flex items-start justify-between border-b border-surface-container-highest pb-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center">
<span className="material-symbols-outlined text-[24px]">swords</span>
</div>
<div className="flex flex-col">
<h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-1.5">
              Forge Custom Quest Bounty
            </h2>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">Alchemical Task Formulator • V2.4</span>
</div>
</div>
<button className="w-8 h-8 rounded-lg bg-surface-container hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface flex items-center justify-center transition-colors" id="close-forge-modal" type="button">
<span className="material-symbols-outlined text-[20px]">close</span>
</button>
</div>
{/* Form Content */}
<form className="flex flex-col gap-space-md" id="forge-quest-form">
{/* Quest Title Input */}
<div className="flex flex-col gap-1">
<label className="font-label-md text-label-md text-on-surface uppercase tracking-wide flex justify-between">
<span>Quest Bounty Title</span>
<span className="text-outline text-body-sm">e.g. Master Domain Event Schema</span>
</label>
<input className="w-full px-space-md py-space-sm bg-surface-container-lowest text-on-surface rounded-xl focus:ring-1 focus:ring-primary focus:outline-none font-body-md text-body-md shadow-inner placeholder:text-outline" id="quest-title-input" placeholder="Enter an epic objective..." type="text" value="Draft Microservices System Architecture RFC"/>
</div>
{/* Lore & Conditions Description */}
<div className="flex flex-col gap-1">
<label className="font-label-md text-label-md text-on-surface uppercase tracking-wide">
            Lore &amp; Victory Conditions
          </label>
<textarea className="w-full px-space-md py-space-sm bg-surface-container-lowest text-on-surface rounded-xl focus:ring-1 focus:ring-primary focus:outline-none font-body-md text-body-md shadow-inner placeholder:text-outline" placeholder="Specify steps, constraints, or non-negotiable success metrics..." rows={2}>Formulate architectural boundaries for asynchronous billing webhooks, guarantee idempotency keys, and document failure fallback cascades.</textarea>
</div>
{/* Discipline Selector */}
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface uppercase tracking-wide">
            Primary Discipline Core
          </label>
<div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
<button className="discipline-pill flex flex-col items-center justify-center p-2 rounded-xl bg-primary-container text-on-primary-container transition-all" type="button">
<span className="material-symbols-outlined text-[20px]">psychology</span>
<span className="font-label-sm text-label-sm mt-1">Intelligence</span>
</button>
<button className="discipline-pill flex flex-col items-center justify-center p-2 rounded-xl bg-surface-container-lowest text-on-surface-variant hover:text-on-surface transition-all" type="button">
<span className="material-symbols-outlined text-[20px]">fitness_center</span>
<span className="font-label-sm text-label-sm mt-1">Strength</span>
</button>
<button className="discipline-pill flex flex-col items-center justify-center p-2 rounded-xl bg-surface-container-lowest text-on-surface-variant hover:text-on-surface transition-all" type="button">
<span className="material-symbols-outlined text-[20px]">visibility</span>
<span className="font-label-sm text-label-sm mt-1">Focus</span>
</button>
<button className="discipline-pill flex flex-col items-center justify-center p-2 rounded-xl bg-surface-container-lowest text-on-surface-variant hover:text-on-surface transition-all" type="button">
<span className="material-symbols-outlined text-[20px]">favorite</span>
<span className="font-label-sm text-label-sm mt-1">Vitality</span>
</button>
<button className="discipline-pill flex flex-col items-center justify-center p-2 rounded-xl bg-surface-container-lowest text-on-surface-variant hover:text-on-surface transition-all col-span-2 sm:col-span-1" type="button">
<span className="material-symbols-outlined text-[20px]">crown</span>
<span className="font-label-sm text-label-sm mt-1">Charisma</span>
</button>
</div>
</div>
{/* Tier & Difficulty Selector Grid */}
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface uppercase tracking-wide">
            Quest Tier &amp; Challenge Scale
          </label>
<div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
{/* Novice */}
<label className="cursor-pointer p-space-xs rounded-xl bg-surface-container-lowest hover:bg-surface-container flex flex-col gap-0.5 text-center transition-all">
<input className="sr-only" name="quest_tier" type="radio" value="novice"/>
<span className="font-label-sm text-label-sm text-outline">★ Novice</span>
<span className="font-label-md text-label-md text-on-surface font-bold">50-100 XP</span>
<span className="font-label-sm text-label-sm text-tertiary">25 Gold</span>
</label>
{/* Adept */}
<label className="cursor-pointer p-space-xs rounded-xl bg-surface-container-lowest hover:bg-surface-container flex flex-col gap-0.5 text-center transition-all">
<input className="sr-only" name="quest_tier" type="radio" value="adept"/>
<span className="font-label-sm text-label-sm text-secondary">★★ Adept</span>
<span className="font-label-md text-label-md text-on-surface font-bold">150-250 XP</span>
<span className="font-label-sm text-label-sm text-tertiary">75 Gold</span>
</label>
{/* Heroic (Selected) */}
<label className="cursor-pointer p-space-xs rounded-xl bg-primary-container/25 text-primary flex flex-col gap-0.5 text-center transition-all">
<input defaultChecked className="sr-only" name="quest_tier" type="radio" value="heroic"/>
<span className="font-label-sm text-label-sm font-bold">★★★ Heroic</span>
<span className="font-label-md text-label-md font-bold text-on-surface">300-500 XP</span>
<span className="font-label-sm text-label-sm text-tertiary">150 Gold</span>
</label>
{/* Mythic */}
<label className="cursor-pointer p-space-xs rounded-xl bg-surface-container-lowest hover:bg-surface-container flex flex-col gap-0.5 text-center transition-all">
<input className="sr-only" name="quest_tier" type="radio" value="mythic"/>
<span className="font-label-sm text-label-sm text-tertiary-fixed font-bold">★★★★ Mythic</span>
<span className="font-label-md text-label-md text-on-surface font-bold">750+ XP</span>
<span className="font-label-sm text-label-sm text-tertiary">300 Gold</span>
</label>
</div>
</div>
{/* Quest Horizon & Due Date Split */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
<div className="flex flex-col gap-1">
<label className="font-label-md text-label-md text-on-surface uppercase tracking-wide">Horizon Type</label>
<div className="flex items-center gap-1 bg-surface-container-lowest p-1 rounded-xl">
<button className="flex-1 py-1 rounded-lg bg-surface-container-high text-on-surface font-label-sm text-label-sm uppercase" type="button">One-Time Trial</button>
<button className="flex-1 py-1 rounded-lg text-outline hover:text-on-surface font-label-sm text-label-sm uppercase" type="button">Daily Bounty</button>
<button className="flex-1 py-1 rounded-lg text-outline hover:text-on-surface font-label-sm text-label-sm uppercase" type="button">Guild Goal</button>
</div>
</div>
<div className="flex flex-col gap-1">
<label className="font-label-md text-label-md text-on-surface uppercase tracking-wide">Completion Deadline</label>
<div className="flex items-center bg-surface-container-lowest px-3 py-1.5 rounded-xl text-on-surface font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[18px] text-outline mr-2">calendar_month</span>
<input className="bg-transparent focus:outline-none w-full text-on-surface font-body-sm text-body-sm" type="text" value="Today, 23:59 (In 10 hours)"/>
</div>
</div>
</div>
{/* Dynamic Spoils & Rewards Preview Calculator Box */}
<div className="p-space-sm rounded-xl bg-surface-container-lowest flex items-center justify-between flex-wrap gap-space-sm">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-tertiary text-[22px]">toll</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Calculated Spoils on Triumph</span>
<div className="flex items-center gap-space-xs font-mono font-bold text-label-md">
<span className="text-secondary">+350 XP</span>
<span className="text-outline">•</span>
<span className="text-tertiary">+140 Gold</span>
<span className="text-outline">•</span>
<span className="text-primary">+3 Intelligence Buff</span>
</div>
</div>
</div>
<span className="px-2 py-1 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">Boss DMG Value: 700</span>
</div>
{/* Modal Actions */}
<div className="flex items-center justify-end gap-space-sm pt-space-xs border-t border-surface-container-highest">
<button className="px-space-md py-space-sm rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-lg text-label-lg uppercase tracking-wider transition-colors" id="cancel-forge-btn" type="button">
            Cancel
          </button>
<button className="px-space-lg py-space-sm rounded-xl bg-gradient-to-r from-primary-container to-inverse-primary text-on-primary font-label-lg text-label-lg uppercase tracking-wider shadow-lg hover:shadow-primary/40 hover:scale-[1.02] transition-all flex items-center gap-space-xs" id="submit-quest-btn" type="submit">
<span className="material-symbols-outlined text-[18px]">verified</span>
<span>Seal Scroll &amp; Embark</span>
</button>
</div>
</form>
</div>
</div>
</div>

    </>
  );
}
