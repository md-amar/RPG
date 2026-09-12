export function Shop() {
  return (
    <>
      <div className="flex flex-col w-full pb-space-xl">
{/* Top Welcome & Merchant Ambient Header */}
<section className="relative w-full rounded-xl bg-surface-container-low overflow-hidden shadow-2xl mb-space-lg">
{/* Atmospheric Underglow Gradients */}
<div className="absolute -right-16 -top-24 w-96 h-96 bg-primary-container/20 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute left-1/3 -bottom-24 w-80 h-80 bg-secondary-container/15 rounded-full blur-3xl pointer-events-none"></div>
<div className="relative z-10 p-space-lg md:p-space-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-lg">
<div className="flex items-center gap-space-lg">
<div className="relative w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden shrink-0 shadow-lg bg-surface-container-highest">
<img className="w-full h-full object-cover" data-alt="A rugged fantasy dwarf shopkeeper and arcane artificer with glowing runic goggles, brass clockwork gauntlets, and an apron adorned with purple mana vials inside an obsidian alchemy shop, digital illustration, cinematic lighting, purple and cyan ambient glow." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW_35Hb1d-hbMSHvuEAS9rS-16yeJWf5agtbzJ5XjpXDTIq1c1Ac9jj8kNSgM0HsoY8IzpQBj2y-aKJyOsXx-Krb7wU9gjcIdvdi1FpXUhC2J9N_nKw8EIwPAvImp_7gknWFwPmjurruHOYMlY8QDc0xmAEt114laPC9RUp3XaYDBw99dF9yu3isnlB4woCbrbT85QG5pYBzvg21KDnju8mtSmupo_hCaukmqWDd6YaeSm9bQ9EaxyZw"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent"></div>
<span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded-sm bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm uppercase">Artificer</span>
</div>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm uppercase text-secondary tracking-widest">Autonomous Bazaar Hub</span>
<span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping"></span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">The Arcane Emporium &amp; Armory</h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
            "Greetings, Champion Valerius. Master Artificer Gorran has stoked the runic forges. Transmute your task triumphs into tangible real-world trophies and mythic gear."
          </p>
</div>
</div>
{/* Quick Caravan Timer & Reroll */}
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md w-full lg:w-auto shrink-0">
<div className="p-space-md rounded-xl bg-surface-container/90 shadow-md flex flex-col justify-center min-w-[210px]">
<div className="flex items-center justify-between gap-space-sm mb-1">
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-secondary text-[16px]">schedule</span> Caravan Arrival
            </span>
<span className="font-label-sm text-label-sm text-tertiary">Fresh Stock</span>
</div>
<div className="font-headline-sm text-headline-sm text-on-surface font-mono tracking-wider" id="caravan-clock">
            04h 22m 18s
          </div>
</div>
<button className="group relative px-space-md py-space-md rounded-xl bg-surface-container-high hover:bg-surface-bright text-on-surface transition-all duration-200 flex flex-col justify-center items-center gap-0.5 shadow-md" id="reroll-btn" type="button">
<div className="flex items-center gap-1.5 text-primary">
<span className="material-symbols-outlined text-[18px] group-hover:rotate-180 transition-transform duration-500">sync</span>
<span className="font-label-md text-label-md uppercase tracking-wider">Reroll Wares</span>
</div>
<span className="font-label-sm text-label-sm text-tertiary flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">monetization_on</span> 50 Gold
          </span>
</button>
</div>
</div>
{/* Currency Ribbon & Quest Shortcut */}
<div className="relative z-10 px-space-lg md:px-space-xl py-space-sm bg-surface-container-lowest/80 backdrop-blur-md flex flex-wrap items-center justify-between gap-space-md">
<div className="flex flex-wrap items-center gap-space-md">
{/* Gold */}
<div className="flex items-center gap-space-xs px-space-md py-1.5 rounded-lg bg-surface-container-high shadow-sm">
<span className="material-symbols-outlined text-tertiary text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>monetization_on</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider leading-none">Imperial Gold</span>
<span className="font-label-lg text-label-lg text-tertiary" id="player-gold-display">1,850</span>
</div>
</div>
{/* Raid Tokens */}
<div className="flex items-center gap-space-xs px-space-md py-1.5 rounded-lg bg-surface-container-high shadow-sm">
<span className="material-symbols-outlined text-secondary text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>token</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider leading-none">Raid Emblems</span>
<span className="font-label-lg text-label-lg text-secondary">350</span>
</div>
</div>
{/* Mythic Shards */}
<div className="flex items-center gap-space-xs px-space-md py-1.5 rounded-lg bg-surface-container-high shadow-sm">
<span className="material-symbols-outlined text-primary text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>diamond</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider leading-none">Mythic Shards</span>
<span className="font-label-lg text-label-lg text-primary">3</span>
</div>
</div>
</div>
<div className="flex items-center gap-space-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant hidden sm:inline">Short on coinage?</span>
<a className="px-space-md py-1.5 rounded-lg bg-tertiary-container/30 hover:bg-tertiary-container/50 text-tertiary-fixed font-label-md text-label-md uppercase tracking-wider flex items-center gap-1.5 transition-all" href="#">
<span className="material-symbols-outlined text-[16px]">local_fire_department</span>
          Earn More Gold In Quests
        </a>
</div>
</div>
</section>
{/* Category Nav Switcher */}
<section className="w-full flex items-center gap-space-xs overflow-x-auto pb-2 mb-space-lg scrollbar-none">
<button className="tab-btn active px-space-md py-space-sm rounded-xl bg-primary-container text-on-primary-container font-label-lg text-label-lg uppercase tracking-wider whitespace-nowrap shadow-md transition-all flex items-center gap-2" type="button">
<span className="material-symbols-outlined text-[18px]">bolt</span>
      Featured Specials <span className="px-1.5 py-0.2 rounded-full bg-surface-container-lowest/40 font-label-sm text-label-sm">3</span>
</button>
<button className="tab-btn px-space-md py-space-sm rounded-xl bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-bright font-label-lg text-label-lg uppercase tracking-wider whitespace-nowrap transition-all flex items-center gap-2" type="button">
<span className="material-symbols-outlined text-[18px]">shield</span>
      Equipable Relics
    </button>
<button className="tab-btn px-space-md py-space-sm rounded-xl bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-bright font-label-lg text-label-lg uppercase tracking-wider whitespace-nowrap transition-all flex items-center gap-2" type="button">
<span className="material-symbols-outlined text-[18px]">science</span>
      Potions &amp; Buffs
    </button>
<button className="tab-btn px-space-md py-space-sm rounded-xl bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-bright font-label-lg text-label-lg uppercase tracking-wider whitespace-nowrap transition-all flex items-center gap-2" type="button">
<span className="material-symbols-outlined text-[18px]">card_giftcard</span>
      Real-Life Bounties
    </button>
<button className="tab-btn px-space-md py-space-sm rounded-xl bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-bright font-label-lg text-label-lg uppercase tracking-wider whitespace-nowrap transition-all flex items-center gap-2" type="button">
<span className="material-symbols-outlined text-[18px]">palette</span>
      Cosmetics &amp; Themes
    </button>
</section>
{/* Main Asymmetric Workspace Layout */}
<div className="w-full grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
{/* LEFT & CENTER: Showcase Grid (8 cols) */}
<div className="xl:col-span-8 flex flex-col gap-space-lg">
{/* Hero Flash Deal Showcase Card */}
<article className="relative w-full rounded-xl bg-surface-container overflow-hidden shadow-xl p-space-lg md:p-space-xl flex flex-col md:flex-row items-center justify-between gap-space-lg">
<div className="absolute -left-20 -top-20 w-64 h-64 bg-tertiary-container/20 rounded-full blur-3xl pointer-events-none"></div>
<div className="relative w-full md:w-5/12 h-64 rounded-xl overflow-hidden shadow-lg bg-surface-container-lowest shrink-0">
<img className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" data-alt="A legendary crystalline obsidian helmet with floating golden runic circles and pulsing electric cyan visor runes hovering on a pedestal in an arcane armory, dramatic game art, high fantasy cyberpunk aesthetic, detailed lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZMtNeZ3BcEK2hC2p9AJ5EZtg25RGAYYd0y8v2Ci3ka5s1QUF4x70ureoA1IvQPjj02Vfg1svpqOKrOAmrJAoaRIwkk91YeDGb7HzJmciBL5RQBt_V5ZXaa45YBCpuj45D2GZvLg51qKBQuP9gQe9TC-D3VrRYLjDK-e3r75wDwFxXBeSKlEd7R8COivu0pKhM2Dixb8oicDWWgaC-ZUX2HUK6qzY5bgctTPDl3vsXMOYK8RuhNtiblQ"/>
<div className="absolute top-2 left-2 flex items-center gap-1.5 px-2 py-1 rounded-md bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm uppercase font-bold tracking-wider">
<span className="material-symbols-outlined text-[14px]">flash_on</span> Flash Deal -30%
          </div>
<div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-sm bg-surface-container-lowest/80 font-label-sm text-label-sm text-secondary font-mono">
            Ends in 01h:45m:12s
          </div>
</div>
<div className="relative z-10 flex flex-col justify-between w-full md:w-7/12 h-full">
<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between">
<span className="px-2 py-0.5 rounded-sm bg-primary-container/20 text-primary font-label-sm text-label-sm uppercase tracking-widest">Legendary Artifact Helm</span>
<span className="font-label-sm text-label-sm text-tertiary-fixed flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">star</span> Tier V
              </span>
</div>
<h2 className="font-headline-md text-headline-md text-on-surface">Crown of Relentless Focus</h2>
<p className="font-body-md text-body-md text-on-surface-variant">
              Forged within the deep forge chambers. Harmonizes mental frequencies, permanently suppressing distraction impulses during Pomodoro skirmishes.
            </p>
</div>
{/* Modifiers */}
<div className="grid grid-cols-3 gap-2 my-space-md">
<div className="p-2 rounded-lg bg-surface-container-high flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Deep Work XP</span>
<span className="font-headline-sm text-headline-sm text-secondary">+20%</span>
</div>
<div className="p-2 rounded-lg bg-surface-container-high flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Mind Focus</span>
<span className="font-headline-sm text-headline-sm text-primary">+15 PTS</span>
</div>
<div className="p-2 rounded-lg bg-surface-container-high flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Interruption Drop</span>
<span className="font-headline-sm text-headline-sm text-tertiary">-40%</span>
</div>
</div>
{/* Action bar */}
<div className="flex items-center justify-between pt-space-xs">
<div className="flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg text-tertiary font-mono">850</span>
<span className="font-body-md text-body-md text-outline line-through font-mono">1,200 Gold</span>
</div>
<button className="px-space-lg py-space-sm rounded-xl bg-gradient-to-r from-primary-container to-inverse-primary text-on-primary font-label-lg text-label-lg uppercase tracking-wider hover:opacity-90 shadow-[0_0_20px_rgba(183,109,255,0.4)] transition-all flex items-center gap-2"  type="button">
<span className="material-symbols-outlined text-[18px]">shopping_bag</span>
              Claim Helm
            </button>
</div>
</div>
</article>
{/* Products Grid Header */}
<div className="flex items-center justify-between mt-space-xs">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[22px]">auto_awesome</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface uppercase tracking-wider">Available Requisitions</h3>
</div>
<div className="flex items-center gap-space-sm font-label-sm text-label-sm text-on-surface-variant">
<span>Sort by:</span>
<select className="bg-surface-container-high text-on-surface px-space-sm py-1 rounded-md outline-none text-label-sm">
<option>Rarity (High to Low)</option>
<option>Cost (Low to High)</option>
<option>Real-World Rewards First</option>
</select>
</div>
</div>
{/* Main Catalogue Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
{/* Real World Voucher 1 */}
<article className="p-space-md rounded-xl bg-surface-container flex flex-col justify-between hover:bg-surface-container-high transition-all shadow-md group">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="px-2 py-0.5 rounded-sm bg-tertiary-container/30 text-tertiary font-label-sm text-label-sm uppercase tracking-wider flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">sports_esports</span> Real-Life Bounty
              </span>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">Level 15+ Req</span>
</div>
<div className="relative h-40 w-full rounded-lg overflow-hidden mb-space-md bg-surface-container-lowest">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A cozy gaming battle station in a darkened room with ambient purple and cyan keyboard backlighting, dual curved monitors displaying an open-world fantasy game, cup of steaming tea on the desk, cinematic photorealistic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCj3SF33w12FdHU9e7TNl1n9xlTvnKo9oCLxEjUHXwtP1kVNtO4jsqY8mvFdCP4T9dKZALF7P0vCB4QFT4FfQ6guOClUvgU71uDHOanC1bLcf-jxbCayOg8ci9Z4maND6iN3xyOxQvmG7vlJ2dRIlkIqMA-i0KvBawRtOQeVoBXPFMwSZWA46vpKNQsnbPyJtaxGymVv91y-6mTFjcdvjl6eZqr9VCHcimj0Uw-C3agmr-_S5H7NzZQ4w"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent"></div>
<div className="absolute bottom-2 left-2 flex items-center gap-1 text-on-surface font-label-md text-label-md">
<span className="material-symbols-outlined text-tertiary text-[18px]">timer</span> 90-Minute Clean Pass
              </div>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-surface mb-1">Guilt-Free Steam Gaming Session</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
              Earn uninterrupted leisure without remorse. Automatically silences habit trackers and logs your daily self-reward protocol with complete mental peace.
            </p>
</div>
<div className="flex items-center justify-between pt-space-sm bg-surface-container-low/50 -mx-space-md -mb-space-md p-space-md rounded-b-xl">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-tertiary text-[18px]" style={{ fontVariationSettings: '"FILL" 1' }}>monetization_on</span>
<span className="font-headline-sm text-headline-sm text-tertiary font-mono">400</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Gold</span>
</div>
<button className="px-space-md py-1.5 rounded-lg bg-secondary-container text-on-secondary-container hover:opacity-90 font-label-md text-label-md uppercase tracking-wider transition-all flex items-center gap-1"  type="button">
<span className="material-symbols-outlined text-[16px]">redeem</span> Redeem
            </button>
</div>
</article>
{/* Real World Voucher 2 */}
<article className="p-space-md rounded-xl bg-surface-container flex flex-col justify-between hover:bg-surface-container-high transition-all shadow-md group">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="px-2 py-0.5 rounded-sm bg-tertiary-container/30 text-tertiary font-label-sm text-label-sm uppercase tracking-wider flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">local_cafe</span> Real-Life Bounty
              </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Instant Claim</span>
</div>
<div className="relative h-40 w-full rounded-lg overflow-hidden mb-space-md bg-surface-container-lowest">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Artisan third-wave espresso in a ceramic cup with perfect milk latte art alongside a golden flaky croissant on a dark slate cafe table, warm morning mood light, professional food photography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAST383_hjzwQekCG1nqyuODVPoxXOZ-_BG1qrnwdhsA4gM52DKxF4fcle6gFZxeWvevGs_AP8LBQPqzOfoJ79hCxtAo2oLX72xwItBBDvf3P9usuPKli_UC9-Y4pc5U8SzHTPgLibqVn2nC5DSCDn84ReDZjDs8GbsIHb_W7IPaxU1yVk35kTze8gJpfizM1YQ8kZd0NQJ04fYkxd3Iw5iLI0h5T-PFiAjoocHaVVD0k3jEKGuYu9prA"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent"></div>
<div className="absolute bottom-2 left-2 flex items-center gap-1 text-on-surface font-label-md text-label-md">
<span className="material-symbols-outlined text-secondary text-[18px]">bakery_dining</span> Morning Boost
              </div>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-surface mb-1">Artisan Espresso &amp; Pastry Ritual</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
              Treat your earthly vessel to an elite brew and fresh flaky pastry at your favorite local roastery. Funded solely by completed morning sprints.
            </p>
</div>
<div className="flex items-center justify-between pt-space-sm bg-surface-container-low/50 -mx-space-md -mb-space-md p-space-md rounded-b-xl">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-tertiary text-[18px]" style={{ fontVariationSettings: '"FILL" 1' }}>monetization_on</span>
<span className="font-headline-sm text-headline-sm text-tertiary font-mono">250</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Gold</span>
</div>
<button className="px-space-md py-1.5 rounded-lg bg-secondary-container text-on-secondary-container hover:opacity-90 font-label-md text-label-md uppercase tracking-wider transition-all flex items-center gap-1"  type="button">
<span className="material-symbols-outlined text-[16px]">redeem</span> Redeem
            </button>
</div>
</article>
{/* Real World Voucher 3 */}
<article className="p-space-md rounded-xl bg-surface-container flex flex-col justify-between hover:bg-surface-container-high transition-all shadow-md group">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="px-2 py-0.5 rounded-sm bg-tertiary-container/30 text-tertiary font-label-sm text-label-sm uppercase tracking-wider flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">auto_stories</span> Real-Life Bounty
              </span>
<span className="font-label-sm text-label-sm text-primary">Lore Tome</span>
</div>
<div className="relative h-40 w-full rounded-lg overflow-hidden mb-space-md bg-surface-container-lowest">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A hardcover science fiction novel and thick leather technical engineering book resting on a dark walnut wooden desk with glowing purple bookmark ribbon and glasses beside them, cinematic lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7dpxvLew9l294AjURRIvSSoDI20Gbsu3sBiJPucAhDI_gD4gC6CGl-WiR9qQSaUcIBNh86QtrC6ngNtzX1dCOzQCkr__6UjmUvIB0lRYZ7_RDtNjwfmJg0SbFfuFI5nG2PhkLA27r1Ijc4VhXmN6KtIcFa2GjLp6Z-NSmF12Zy2xTNDVBpqbi2th7ffqh_VdraKC2_1ZR7WG8Kt6_XjAmQgJApjZxojyHLfSqXK5M4GVk2ILfnlW_3A"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent"></div>
<div className="absolute bottom-2 left-2 flex items-center gap-1 text-on-surface font-label-md text-label-md">
<span className="material-symbols-outlined text-tertiary text-[18px]">menu_book</span> Physical or Kindle
              </div>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-surface mb-1">Acquire New Technical / Sci-Fi Novel</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
              Permit yourself to buy that book on your wishlist without buyer remorse. Expands both personal intellectual stat blocks and physical bookshelf prestige.
            </p>
</div>
<div className="flex items-center justify-between pt-space-sm bg-surface-container-low/50 -mx-space-md -mb-space-md p-space-md rounded-b-xl">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-tertiary text-[18px]" style={{ fontVariationSettings: '"FILL" 1' }}>monetization_on</span>
<span className="font-headline-sm text-headline-sm text-tertiary font-mono">750</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Gold</span>
</div>
<button className="px-space-md py-1.5 rounded-lg bg-secondary-container text-on-secondary-container hover:opacity-90 font-label-md text-label-md uppercase tracking-wider transition-all flex items-center gap-1"  type="button">
<span className="material-symbols-outlined text-[16px]">redeem</span> Redeem
            </button>
</div>
</article>
{/* Consumable 4 */}
<article className="p-space-md rounded-xl bg-surface-container flex flex-col justify-between hover:bg-surface-container-high transition-all shadow-md group">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="px-2 py-0.5 rounded-sm bg-primary-container/30 text-primary font-label-sm text-label-sm uppercase tracking-wider flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">science</span> Consumable Draught
              </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Stack of 5 max</span>
</div>
<div className="relative h-40 w-full rounded-lg overflow-hidden mb-space-md bg-surface-container-lowest">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="An ornate alchemical glass vial filled with swirling bioluminescent purple and blue nebula potion, emitting soft magical particle vapor on an obsidian pedestal, digital 3D fantasy render." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2STcqZteF-CQBOxjYt3IJ0RACF5BgjJJjkJyHTM8gtjj4AMS7yvXjjPJ-KedrDoPtzZFk3MwROh_QxKZzmUfLr7SAzqbzaIhUnxLPOQSBfJFYzWrYVx4zx1usmOWFZPMZJSzVrq9lZCi9oY08IFOIFWufitg6L7QKSfalrmtQjCzVCUEpDKYJncGOm_lkYhrDw5DvLBtz_98d5MFxVfngT0UROlUBPSyJxJCGd2IPp7lP-PFFcuy-7g"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent"></div>
<div className="absolute bottom-2 left-2 flex items-center gap-1 text-primary font-label-md text-label-md">
<span className="material-symbols-outlined text-[18px]">timer_10</span> 2h Duration
              </div>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-surface mb-1">Elixir of Midnight Flow</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
              Drastically amplifies cognitive endurance. Yields 2x XP multipliers on all coding, deep writing, and project milestone tasks completed within 2 hours of consumption.
            </p>
</div>
<div className="flex items-center justify-between pt-space-sm bg-surface-container-low/50 -mx-space-md -mb-space-md p-space-md rounded-b-xl">
<div className="flex items-center gap-2">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-tertiary text-[18px]" style={{ fontVariationSettings: '"FILL" 1' }}>monetization_on</span>
<span className="font-headline-sm text-headline-sm text-tertiary font-mono">120</span>
</div>
{/* Qty selector */}
<div className="flex items-center bg-surface-container-lowest rounded px-1 text-label-sm">
<button className="px-1 text-on-surface-variant hover:text-on-surface"  type="button">-</button>
<span className="px-1.5 text-on-surface font-mono" id="potion-qty">1</span>
<button className="px-1 text-on-surface-variant hover:text-on-surface"  type="button">+</button>
</div>
</div>
<button className="px-space-md py-1.5 rounded-lg bg-surface-bright hover:bg-primary-container hover:text-on-primary-container text-on-surface font-label-md text-label-md uppercase tracking-wider transition-all flex items-center gap-1"  type="button">
<span className="material-symbols-outlined text-[16px]">add_shopping_cart</span> Add
            </button>
</div>
</article>
{/* Epic Equipment 5 */}
<article className="p-space-md rounded-xl bg-surface-container flex flex-col justify-between hover:bg-surface-container-high transition-all shadow-md group">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="px-2 py-0.5 rounded-sm bg-secondary-container/30 text-secondary font-label-sm text-label-sm uppercase tracking-wider flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">shield</span> Epic Off-Hand
              </span>
<span className="font-label-sm text-label-sm text-secondary">+12 Vitality</span>
</div>
<div className="relative h-40 w-full rounded-lg overflow-hidden mb-space-md bg-surface-container-lowest">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="An ornate kite shield sculpted from iridescent cyan metal and dark carbon weave with glowing digital protection glyphs floating over its face, fantasy cyberpunk aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5XlQHzOtIYQrm15R5kTKSLa7Za3R9YkW9SgpyPPb5fd57Dp_aH_tc7bcIEJBJ9LYjz0M7sozxhs9VxeqtqX6FzaIpAC0-ULptDO_eylILlId6Vd5jJ_alJj0jgf-m2caMIqetY77ldnJRW4nnaaSmYyOSuiaghMkTrTgioMskm5HSRvRmtQVjvE6ODJAFVDzXv0XJd3Du5m0JzyYG6DOn9upmukdfXa0rxQjG4Fu3sFLdi_BvkGCfdg"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent"></div>
<div className="absolute bottom-2 left-2 flex items-center gap-1 text-secondary font-label-md text-label-md">
<span className="material-symbols-outlined text-[18px]">do_not_disturb_on</span> DND Aegis Mode
              </div>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-surface mb-1">Aegis of the Digital Monk</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
              Equipable barrier relic. When slotted, LifeQuest automatically syncs with your OS to mute notifications and tab switch alerts during designated boss quest hours.
            </p>
</div>
<div className="flex items-center justify-between pt-space-sm bg-surface-container-low/50 -mx-space-md -mb-space-md p-space-md rounded-b-xl">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-tertiary text-[18px]" style={{ fontVariationSettings: '"FILL" 1' }}>monetization_on</span>
<span className="font-headline-sm text-headline-sm text-tertiary font-mono">950</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Gold</span>
</div>
<button className="px-space-md py-1.5 rounded-lg bg-surface-bright hover:bg-primary-container hover:text-on-primary-container text-on-surface font-label-md text-label-md uppercase tracking-wider transition-all flex items-center gap-1"  type="button">
<span className="material-symbols-outlined text-[16px]">add_shopping_cart</span> Add
            </button>
</div>
</article>
{/* Arcane Scroll 6 */}
<article className="p-space-md rounded-xl bg-surface-container flex flex-col justify-between hover:bg-surface-container-high transition-all shadow-md group">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="px-2 py-0.5 rounded-sm bg-tertiary-container/30 text-tertiary font-label-sm text-label-sm uppercase tracking-wider flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">history_edu</span> Arcane Scroll
              </span>
<span className="font-label-sm text-label-sm text-tertiary-fixed">Streak Insurance</span>
</div>
<div className="relative h-40 w-full rounded-lg overflow-hidden mb-space-md bg-surface-container-lowest">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="An ancient mystical parchment scroll with glowing orange runic seals wrapped with golden thread and floating over an obsidian desk, glowing embers in the air, fantasy video game item concept art." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYt74-CTOpMilFFm9bEFay0tYOiNtENKn31P684eglOUqD3ixY2qwI5eYRK-YZBZRn_t6iuHIR6dSmf86NKIdtV-6KO3MZ0GlI0QlsWSITj13KgIFjUaYbL3BRsgEzHVe2GjpiCErlL0cm4NZwhyORA-QvWuDRVRBlDG5hmm0oQz4THFCziFYQaSS8Vkn9hdfw8WCX6ku1phnJahLX5uY6XmjqRX6qTSeQ2aZxGf7kww4PDufUs7I8ig"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent"></div>
<div className="absolute bottom-2 left-2 flex items-center gap-1 text-tertiary font-label-md text-label-md">
<span className="material-symbols-outlined text-[18px]">ac_unit</span> 24h Freeze Ward
              </div>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-surface mb-1">Scroll of Procrastination Ward</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
              Unexpected life crisis or travel delay? Unfurl this parchment to freeze your continuous streak for 24 hours without resetting your combo multiplier.
            </p>
</div>
<div className="flex items-center justify-between pt-space-sm bg-surface-container-low/50 -mx-space-md -mb-space-md p-space-md rounded-b-xl">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-tertiary text-[18px]" style={{ fontVariationSettings: '"FILL" 1' }}>monetization_on</span>
<span className="font-headline-sm text-headline-sm text-tertiary font-mono">180</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Gold</span>
</div>
<button className="px-space-md py-1.5 rounded-lg bg-surface-bright hover:bg-primary-container hover:text-on-primary-container text-on-surface font-label-md text-label-md uppercase tracking-wider transition-all flex items-center gap-1"  type="button">
<span className="material-symbols-outlined text-[16px]">add_shopping_cart</span> Add
            </button>
</div>
</article>
</div>
{/* Banner Strip: Cosmetic Theme Pack (Item 7) */}
<article className="p-space-lg rounded-xl bg-gradient-to-r from-surface-container-high via-surface-container to-surface-container-high shadow-lg flex flex-col sm:flex-row items-center justify-between gap-space-lg">
<div className="flex items-center gap-space-md">
<div className="w-16 h-16 rounded-xl bg-surface-container-lowest flex items-center justify-center shrink-0 text-primary shadow-inner">
<span className="material-symbols-outlined text-[32px]">dark_mode</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface">Cyber-Rune Obsidian Theme</span>
<span className="px-2 py-0.5 rounded-sm bg-primary-container/20 text-primary font-label-sm text-label-sm uppercase">UI Cosmetic</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Complete app overhaul featuring hyper-deep abyssal slate cards, animated runic borders, and custom sound effects for quest completions.
            </p>
</div>
</div>
<div className="flex items-center gap-space-md shrink-0 w-full sm:w-auto justify-end">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-tertiary text-[18px]">monetization_on</span>
<span className="font-headline-sm text-headline-sm text-tertiary font-mono">500</span>
</div>
<button className="px-space-md py-2 rounded-lg bg-surface-container-highest hover:bg-surface-bright text-on-surface font-label-md text-label-md uppercase tracking-wider transition-all"  type="button">
            Live Preview
          </button>
<button className="px-space-md py-2 rounded-lg bg-primary-container text-on-primary-container hover:opacity-90 font-label-md text-label-md uppercase tracking-wider transition-all"  type="button">
            Unlock Skin
          </button>
</div>
</article>
</div>
{/* RIGHT SIDEBAR: Merchant Cart, Pawn Counter & VIP Tier (4 cols) */}
<div className="xl:col-span-4 flex flex-col gap-space-lg">
{/* Merchant Satchel & Checkout Drawer */}
<section className="p-space-lg rounded-xl bg-surface-container-low shadow-xl flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">shopping_cart</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface uppercase tracking-wider">Merchant Satchel</h3>
</div>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-mono" id="cart-count-badge">
            1 Item
          </span>
</div>
{/* Cart Items List */}
<div className="flex flex-col gap-space-xs max-h-64 overflow-y-auto pr-1" id="cart-items-container">
{/* Default Preloaded Item */}
<div className="cart-row flex items-center justify-between p-space-sm rounded-lg bg-surface-container hover:bg-surface-container-high transition-all" data-name="Guilt-Free Steam Gaming (90m)" data-price="400">
<div className="flex items-center gap-space-sm min-w-0">
<span className="material-symbols-outlined text-secondary text-[20px] shrink-0">sports_esports</span>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface truncate">Guilt-Free Steam Gaming</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Real Voucher</span>
</div>
</div>
<div className="flex items-center gap-space-sm shrink-0">
<span className="font-label-md text-label-md text-tertiary font-mono">400 G</span>
<button className="text-on-surface-variant hover:text-error transition-colors"  type="button">
<span className="material-symbols-outlined text-[18px]">delete</span>
</button>
</div>
</div>
</div>
{/* Price Tally and Calculations */}
<div className="p-space-md rounded-xl bg-surface-container flex flex-col gap-2 shadow-inner">
<div className="flex justify-between items-center font-body-sm text-body-sm text-on-surface-variant">
<span>Transaction Subtotal</span>
<span className="font-mono text-on-surface" id="cart-subtotal">400 Gold</span>
</div>
<div className="flex justify-between items-center font-body-sm text-body-sm text-on-surface-variant">
<span>VIP Discount (Tier 4)</span>
<span className="font-mono text-secondary">-0 Gold (Unlock at Revered)</span>
</div>
<div className="flex justify-between items-center font-body-sm text-body-sm text-on-surface-variant">
<span>Remaining Balance After</span>
<span className="font-mono text-tertiary font-bold" id="cart-remainder">1,450 Gold</span>
</div>
<div className="w-full h-px bg-surface-container-highest my-1"></div>
<button className="w-full py-space-sm rounded-xl bg-primary hover:bg-primary-fixed-dim text-on-primary font-label-lg text-label-lg uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-primary/30" id="checkout-btn"  type="button">
<span className="material-symbols-outlined text-[20px]">verified</span>
            Seal Transaction
          </button>
</div>
</section>
{/* Pawn & Sell Spoils Counter */}
<section className="p-space-lg rounded-xl bg-surface-container-low shadow-xl flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary text-[20px]">swap_horiz</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface uppercase tracking-wider">Pawn &amp; Salvage</h3>
</div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">Salvage Forge</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          Pawn surplus inventory, duplicate quest trophies, or low-tier equipment directly to Gorran's forge for instant imperial bullion.
        </p>
<div className="flex flex-col gap-space-xs">
{/* Pawnable Item 1 */}
<div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-outline text-[20px]">draft</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Common Habit Sigil (x3)</span>
<span className="font-label-sm text-label-sm text-outline">Tier I Common Junk</span>
</div>
</div>
<button className="px-space-sm py-1 rounded-md bg-surface-container-high hover:bg-surface-bright text-tertiary font-label-sm text-label-sm uppercase font-mono flex items-center gap-1 transition-all"  type="button">
              +75 G <span className="material-symbols-outlined text-[14px]">sell</span>
</button>
</div>
{/* Pawnable Item 2 */}
<div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-secondary text-[20px]">broken_image</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Cracked Mana Core</span>
<span className="font-label-sm text-label-sm text-secondary">Tier II Rare Salvage</span>
</div>
</div>
<button className="px-space-sm py-1 rounded-md bg-surface-container-high hover:bg-surface-bright text-tertiary font-label-sm text-label-sm uppercase font-mono flex items-center gap-1 transition-all"  type="button">
              +140 G <span className="material-symbols-outlined text-[14px]">sell</span>
</button>
</div>
{/* Pawnable Item 3 */}
<div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[20px]">swords</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Rusty Procrastination Blade</span>
<span className="font-label-sm text-label-sm text-primary">Deprecated Weapon</span>
</div>
</div>
<button className="px-space-sm py-1 rounded-md bg-surface-container-high hover:bg-surface-bright text-tertiary font-label-sm text-label-sm uppercase font-mono flex items-center gap-1 transition-all"  type="button">
              +210 G <span className="material-symbols-outlined text-[14px]">sell</span>
</button>
</div>
</div>
</section>
{/* Merchant Reputation VIP Tier Card */}
<section className="p-space-lg rounded-xl bg-surface-container-low shadow-xl flex flex-col gap-space-md relative overflow-hidden">
<div className="absolute -right-8 -bottom-8 w-40 h-40 bg-tertiary/10 rounded-full blur-2xl pointer-events-none"></div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>military_tech</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface uppercase tracking-wider">Merchant Standing</h3>
</div>
<span className="px-2 py-0.5 rounded-sm bg-tertiary-container/30 text-tertiary font-label-sm text-label-sm font-bold uppercase">Rank 4</span>
</div>
<div className="flex items-center gap-space-md">
<div className="w-14 h-14 rounded-full bg-surface-container-highest flex items-center justify-center border border-tertiary/30 shrink-0">
{/* Circular Progress SVG */}
<svg className="w-12 h-12 -rotate-90" viewBox="0 0 36 36">
<path className="text-surface-container-lowest" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
<path className="text-tertiary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="65, 100" strokeLinecap="round" strokeWidth="3"></path>
</svg>
<span className="absolute font-label-sm text-label-sm text-tertiary font-bold font-mono">65%</span>
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface">Honored Patron</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Next: Revered Standing (Level 5)</span>
</div>
</div>
<div className="w-full bg-surface-container-lowest h-2 rounded-full overflow-hidden">
<div className="bg-gradient-to-r from-tertiary-container to-tertiary h-full w-[65%] rounded-full"></div>
</div>
<div className="p-space-sm rounded-lg bg-surface-container text-on-surface-variant flex flex-col gap-1 text-label-sm">
<div className="flex items-center gap-1.5 text-on-surface">
<span className="material-symbols-outlined text-tertiary text-[16px]">lock</span>
<span className="font-semibold uppercase tracking-wider">Unlocks at Revered:</span>
</div>
<p className="font-body-sm text-body-sm">
            - Permanent 10% Gold Discount on All Wares<br/>
            - Access to "Black Market" Deep Focus Shrouds
          </p>
</div>
</section>
</div>
</div>
{/* Micro Notification Toast Container */}
<div className="fixed bottom-6 right-6 z-50 transform translate-y-20 opacity-0 pointer-events-none transition-all duration-300 px-space-md py-space-sm rounded-xl bg-surface-container-highest border border-primary/40 text-on-surface shadow-2xl flex items-center gap-2" id="shop-toast">
<span className="material-symbols-outlined text-secondary text-[20px]" id="toast-icon">check_circle</span>
<span className="font-label-md text-label-md" id="toast-msg">Item added to Merchant Satchel</span>
</div>
</div>

    </>
  );
}
