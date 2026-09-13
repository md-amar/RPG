import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    clsx(
      "flex items-center justify-between px-space-md py-space-sm rounded-xl transition-all font-headline-sm",
      isActive
        ? "bg-primary-container text-on-primary-container"
        : "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
    );

  return (
    <div className="bg-background font-body-md text-on-background min-h-screen">
      <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-lowest/90 backdrop-blur-2xl z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="flex flex-col">
          <div className="h-16 px-space-md flex items-center gap-space-sm bg-surface-container-lowest/40">
            <img
              alt="LifeQuest RPG Emblem"
              className="h-8 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida/AEtjO1U4szwJUvPohqAwaUP3_a6QEzeqXN7c5PRG82CqGOyZ1c7oMecWYy9s3GHw4X0-oBMB1rU5qGGRsK7nzHMxjfB6PQ6a0o-qkZW67KXxCkGRUgU7nA3PPPW2wO9R2DYJj6QjzT0c0-dDg6kCkyKfzxuhhp4mBqt2Fc_ZZ_MAUR-6VyivrQKss4kF5eboowCFWBUYivAKw-wEyBR9-nn677N6c8HiTId3U5VTZhCW_Uc"
            />
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm uppercase tracking-wider text-primary">
                LifeQuest
              </span>
              <span className="font-label-sm text-label-sm tracking-widest text-tertiary">
                PROD RPG • V2.4
              </span>
            </div>
          </div>
          <nav className="flex flex-col gap-space-xs px-space-sm py-space-md">
            <NavLink to="/" className={navLinkClass}>
              <div className="flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-secondary">swords</span>
                <span className="font-label-lg text-label-lg uppercase">Dashboard</span>
              </div>
            </NavLink>
            <NavLink to="/quests" className={navLinkClass}>
              <div className="flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-tertiary">history_edu</span>
                <span className="font-label-lg text-label-lg uppercase">Quests</span>
              </div>
              <span className="px-space-xs py-0.5 rounded-full bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm">
                5 Active
              </span>
            </NavLink>
            <NavLink to="/character" className={navLinkClass}>
              <div className="flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-primary">shield_with_heart</span>
                <span className="font-label-lg text-label-lg uppercase">Character</span>
              </div>
            </NavLink>
            <NavLink to="/shop" className={navLinkClass}>
              <div className="flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-tertiary-fixed-dim">storefront</span>
                <span className="font-label-lg text-label-lg uppercase">Shop</span>
              </div>
            </NavLink>
            <NavLink to="/progress" className={navLinkClass}>
              <div className="flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-secondary">account_tree</span>
                <span className="font-label-lg text-label-lg uppercase">Progress</span>
              </div>
            </NavLink>
          </nav>
        </div>
        <div className="p-space-sm m-space-sm rounded-xl bg-surface-container-high/60 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
          <div className="flex items-center gap-space-sm mb-space-xs">
            <span className="material-symbols-outlined text-tertiary animate-pulse">lock_open</span>
            <div className="flex flex-col">
              <span className="font-label-md text-label-md uppercase text-on-surface">Daily Bonus Roll</span>
              <span className="font-label-sm text-label-sm text-tertiary-fixed-dim">Claim in 02:45:10</span>
            </div>
          </div>
          <div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden">
            <div className="bg-tertiary h-full w-3/4 rounded-full"></div>
          </div>
        </div>
      </aside>

      <div className="pl-64">
        <header className="fixed top-0 left-64 right-0 h-16 bg-surface-container-lowest/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-space-lg">
          <div className="flex items-center gap-space-md">
            <div className="flex items-center gap-space-xs px-space-sm py-1 rounded-xl bg-surface-container-high/80">
              <span className="material-symbols-outlined text-primary text-[20px]">verified</span>
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary">LVL 24</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">Grand Architect</span>
              </div>
            </div>
            <div className="flex flex-col w-36 gap-0.5">
              <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
                <span>XP Gauge</span>
                <span className="text-secondary">2.4k / 3.5k</span>
              </div>
              <div className="w-full bg-surface-container-lowest h-2 rounded-full overflow-hidden">
                <div className="bg-secondary h-full w-[70%] rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-space-md">
            <div className="flex items-center gap-space-xs px-space-sm py-1 rounded-xl bg-surface-container-high/70">
              <span className="material-symbols-outlined text-tertiary text-[18px]">monetization_on</span>
              <span className="font-label-md text-label-md text-tertiary">1,850 Gold</span>
            </div>
            <div className="flex items-center gap-space-xs px-space-sm py-1 rounded-xl bg-surface-container-high/70">
              <span className="material-symbols-outlined text-tertiary-container text-[18px]">local_fire_department</span>
              <span className="font-label-md text-label-md text-tertiary-fixed">14 Day Streak</span>
            </div>
            <button
              className="relative p-space-xs rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all"
              type="button"
            >
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-secondary ring-2 ring-surface-container-lowest"></span>
            </button>
            <div className="flex items-center gap-space-sm pl-space-xs">
              <div className="flex flex-col items-end text-right">
                <span className="font-label-md text-label-md text-on-surface">Valerius Stone</span>
                <span className="font-label-sm text-label-sm text-secondary">Online • In Quest</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
              </div>
            </div>
          </div>
        </header>
        
        <main className="w-full pt-16 bg-background min-h-screen px-margin">
          {children}
        </main>
      </div>
    </div>
  );
}
