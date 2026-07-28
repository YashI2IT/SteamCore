import { NavLink, useLocation } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'

function PremiumIconFounder() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-steam-navy"
      aria-hidden
    >
      <circle cx="12" cy="8.25" r="3.25" stroke="currentColor" strokeWidth="1.25" />
      <path
        d="M6.25 20.25v-1.25c0-3.05 2.55-5.5 5.75-5.5s5.75 2.45 5.75 5.5v1.25"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        d="M12 14.25v2.5l1.35 1"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function PremiumIconWhyUs() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-steam-navy"
      aria-hidden
    >
      <path
        d="M12 2.75 5 5.5 5 11.75c0 4.1 3.05 7.8 7 9.5 3.95-1.7 7-5.4 7-9.5V5.5L12 2.75z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <path
        d="m9.25 12 1.75 1.75L15.5 9.25"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MegaLink({ to, icon, title, description, onNavigate }) {
  return (
    <NavLink
      to={to}
      onClick={() => onNavigate?.()}
      className={({ isActive }) =>
        [
          'group/item flex gap-4 rounded-xl p-4 outline-none transition-all duration-200',
          'hover:bg-steam-navy/[0.04] focus-visible:ring-2 focus-visible:ring-steam-navy/20',
          isActive ? 'bg-steam-navy/[0.06]' : '',
        ].join(' ')
      }
    >
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-steam-cream ring-1 ring-steam-navy/8 transition-all duration-200 group-hover/item:bg-steam-navy/10 group-hover/item:ring-steam-navy/15">
        {icon}
      </span>
      <span className="min-w-0 pt-0.5">
        <span className="block text-[14px] font-semibold tracking-[-0.01em] text-steam-navy group-hover/item:text-steam-navy">{title}</span>
        <span className="mt-1.5 block text-[12.5px] leading-[1.55] text-steam-body/80">{description}</span>
      </span>
    </NavLink>
  )
}

export function AboutDesktopMega({ onNavigate }) {
  const location = useLocation()
  const aboutActive =
    location.pathname === '/about' ||
    location.pathname === '/founder' ||
    location.pathname === '/why-choose-us'

  return (
    <div className="group/about relative">
      <NavLink
        to="/about"
        onClick={() => onNavigate?.()}
        className={({ isActive }) =>
          [
            'flex items-center gap-1 px-3 py-2 text-[14px] tracking-[0.01em] transition-colors',
            'font-medium text-[#1a1a1a] hover:text-black/50',
            isActive || aboutActive ? 'text-black' : '',
          ].join(' ')
        }
      >
        <span>About Us</span>
        <ChevronDown
          size={13}
          strokeWidth={2}
          className="text-black/50 transition-transform duration-200 group-hover/about:rotate-180"
          aria-hidden
        />
      </NavLink>

      <div
        className={[
          'pointer-events-none invisible absolute left-1/2 top-full z-[60] -mt-1 w-[min(calc(100vw-3rem),640px)] -translate-x-1/2 pt-4',
          'opacity-0 transition-all duration-250 ease-out',
          'group-hover/about:pointer-events-auto group-hover/about:visible group-hover/about:opacity-100 group-hover/about:translate-y-0',
          'group-focus-within/about:pointer-events-auto group-focus-within/about:visible group-focus-within/about:opacity-100',
        ].join(' ')}
        role="region"
        aria-label="About us sections"
      >
        {/* Arrow pointer */}
        <div className="ml-[calc(50%-6px)] h-3 w-3 rotate-45 border-l border-t border-steam-navy/10 bg-white" />
        
        <div className="-mt-1.5 rounded-2xl border border-steam-navy/8 bg-white shadow-[0_20px_60px_rgba(31,78,121,0.12),0_4px_16px_rgba(31,78,121,0.06)]">
          {/* Top section: 2-column grid */}
          <div className="grid gap-1 p-5 md:grid-cols-2 md:gap-2">
            {/* Column 1 */}
            <div>
              <p className="mb-1 px-4 pt-2 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-steam-green/80">
                Our Leadership
              </p>
              <MegaLink
                to="/founder"
                icon={<PremiumIconFounder />}
                title="Founder"
                description="Meet Ajit D Jawale — 24+ years across utilities and energy systems."
                onNavigate={onNavigate}
              />
            </div>
            {/* Column 2 */}
            <div>
              <p className="mb-1 px-4 pt-2 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-steam-green/80">
                Our Strengths
              </p>
              <MegaLink
                to="/why-choose-us"
                icon={<PremiumIconWhyUs />}
                title="Why Choose Us"
                description="BEE-certified insight, practical solutions, and compliance-aware engineering."
                onNavigate={onNavigate}
              />
            </div>
          </div>

          {/* Bottom CTA strip */}
          <div className="flex items-center justify-between rounded-b-2xl border-t border-steam-navy/6 bg-steam-cream/60 px-6 py-4">
            <span className="text-[12px] text-steam-body/60">Engineering consultancy since 2000</span>
            <NavLink
              to="/about"
              onClick={() => onNavigate?.()}
              className="flex items-center gap-1.5 text-[12.5px] font-semibold text-steam-navy transition hover:text-steam-navy/70"
            >
              View full About Us
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export function AboutMobileSection({ onNavigate }) {
  return (
    <div className="rounded-xl border border-steam-navy/5 bg-white p-5 shadow-[0_4px_12px_rgba(0,0,0,0.03)]">
      <NavLink
        to="/about"
        onClick={() => onNavigate?.()}
        className="flex items-center justify-between rounded-lg py-1 text-[17px] font-medium text-steam-navy"
      >
        <span>Company / About</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-steam-navy/20"><path d="M6 9l6 6 6-6"/></svg>
      </NavLink>
      <div className="mt-5 grid gap-3 border-t border-steam-navy/5 pt-5">
        <MegaLink
          to="/founder"
          icon={<PremiumIconFounder />}
          title="Founder"
          description="Leadership profile and expertise."
          onNavigate={onNavigate}
        />
        <MegaLink
          to="/why-choose-us"
          icon={<PremiumIconWhyUs />}
          title="Why Us"
          description="Technical advantages and value."
          onNavigate={onNavigate}
        />
      </div>
    </div>
  )
}
