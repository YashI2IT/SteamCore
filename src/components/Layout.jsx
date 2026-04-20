import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { AboutDesktopMega, AboutMobileSection } from './AboutNavMega.jsx'

function NavItem({ to, children, onNavigate, theme = 'dark' }) {
  return (
    <NavLink
      to={to}
      end={to === '/'}
      onClick={onNavigate}
      className={({ isActive }) =>
        [
          'block px-3 py-2 text-[14px] tracking-[0.01em] transition-colors',
          'font-medium text-[#1a1a1a] hover:text-black/50',
          isActive ? 'text-black' : '',
        ].join(' ')
      }
    >
      {children}
    </NavLink>
  )
}

export default function Layout() {
  const [showHeader, setShowHeader] = useState(true)
  const [isAtTop, setIsAtTop] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)
  const lastScrollY = useRef(0)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY
      const isScrollingDown = currentY > lastScrollY.current
      const hasScrolledEnough = currentY > 80

      setIsAtTop(currentY < 10)
      setShowHeader(!(isScrollingDown && hasScrolledEnough))
      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Reset isAtTop on route change
  useEffect(() => {
    setIsAtTop(window.scrollY < 10)
  }, [location.pathname])

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [mobileOpen]);

  return (
    <div className="min-h-screen bg-steam-cream text-steam-body">
      <Motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={[
          'fixed left-0 right-0 top-0 z-50 w-full transition-all duration-500 ease-out',
          'bg-steam-cream border-b border-steam-navy/5',
          showHeader ? 'translate-y-0' : '-translate-y-full',
        ].join(' ')}
      >
        <div className="section-wrap flex h-[48px] sm:h-[56px] md:h-[64px] items-center justify-between">
          <NavLink to="/">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="SteamCore logo"
                className="h-12 sm:h-14 md:h-16 w-auto"
              />
            </div>
          </NavLink>
          <nav className="hidden items-center gap-x-6 xl:flex">
            <NavItem to="/">Home</NavItem>
            <AboutDesktopMega />
            <NavItem to="/services">Services</NavItem>
            <NavItem to="/projects">Projects</NavItem>
            <NavItem to="/training">Training</NavItem>
          </nav>
          <NavLink
            to="/contact"
            className="hidden rounded-full bg-steam-navy px-7 py-3 text-[14px] font-medium tracking-wide text-white transition hover:bg-steam-navy/90 xl:block"
          >
            Contact
          </NavLink>
          <button
            type="button"
            className={[
              'xl:hidden transition-colors duration-300',
              'text-[#0a0a0a]',
            ].join(' ')}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </Motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <Motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] flex flex-col bg-steam-cream"
          >
            {/* Header inside Menu */}
            <div className="section-wrap flex h-[48px] items-center justify-between sm:h-[56px]">
              <div className="flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt="SteamCore logo"
                  className="h-12 sm:h-14 w-auto"
                />
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="rounded-full p-2 text-steam-navy transition hover:bg-black/5"
              >
                <X size={28} />
              </button>
            </div>

            {/* Menu Items Container */}
            <div className="section-wrap mt-10 overflow-y-auto pb-20">
              <Motion.div
                variants={{
                  initial: { opacity: 0 },
                  animate: {
                    opacity: 1,
                    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
                  }
                }}
                initial="initial"
                animate="animate"
                className="grid gap-4"
              >
                {[
                  { to: '/', label: 'Home' },
                  { to: '/services', label: 'Services' },
                  { to: '/projects', label: 'Case Studies' },
                  { to: '/industries', label: 'Industries' },
                  { to: '/training', label: 'Training' },
                ].map((link) => (
                  <Motion.div
                    key={link.to}
                    variants={{
                      initial: { x: 30, opacity: 0 },
                      animate: { x: 0, opacity: 1 }
                    }}
                  >
                    <NavLink
                      to={link.to}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between rounded-xl border border-steam-navy/5 bg-white p-5 shadow-[0_4px_12px_rgba(0,0,0,0.03)] transition hover:border-steam-navy/10 active:scale-[0.98]"
                    >
                      <span className="text-[17px] font-medium text-steam-navy">{link.label}</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-steam-navy/20"><path d="M9 18l6-6-6-6"/></svg>
                    </NavLink>
                  </Motion.div>
                ))}

                <Motion.div
                  variants={{
                    initial: { x: 30, opacity: 0 },
                    animate: { x: 0, opacity: 1 }
                  }}
                >
                  <AboutMobileSection onNavigate={() => setMobileOpen(false)} />
                </Motion.div>

                <Motion.div
                  variants={{
                    initial: { y: 20, opacity: 0 },
                    animate: { y: 0, opacity: 1 }
                  }}
                  className="mt-6"
                >
                  <NavLink
                    to="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="block w-full rounded-full bg-steam-navy py-4 text-center text-base font-bold text-white shadow-xl active:scale-95 transition"
                  >
                    Contact Us
                  </NavLink>
                </Motion.div>
              </Motion.div>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <Motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15, transition: { duration: 0.15 } }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col flex-grow pt-[48px] sm:pt-[56px] md:pt-[64px]"
        >
          <Outlet />
        </Motion.div>
      </AnimatePresence>

      <footer className="mt-auto bg-steam-navy pt-20 pb-12 text-white overflow-hidden">
        <Motion.div 
          initial="initial" 
          whileInView="whileInView" 
          viewport={{ once: true, margin: "0px" }}
          variants={{
            initial: { opacity: 0 },
            whileInView: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="mx-auto max-w-[1400px] px-6 md:px-12"
        >
          <div className="grid gap-16 md:grid-cols-[1.5fr_1fr_1fr]">
            <Motion.div variants={{ initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}>
              <div className="flex items-center gap-3">
                <img src="/logo.png" alt="SteamCore" className="h-16 w-auto" />
              </div>
              <p className="mt-12 text-[22px] font-normal uppercase tracking-wide md:text-[26px]">
                Modern engineering starts here.
              </p>
              <div className="mt-10 space-y-4 text-[16px] text-white/90">
                <p className="flex items-center gap-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.59 3.4 2 2 0 0 1 3.57 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.84a16 16 0 0 0 6 6l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16.92z"/></svg>
                  +91 88508 47485
                </p>
                <p className="flex items-center gap-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.59 3.4 2 2 0 0 1 3.57 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.84a16 16 0 0 0 6 6l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16.92z"/></svg>
                  +91 99872 46751
                </p>
                <p className="flex items-center gap-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <a href="mailto:steamcore.energy@outlook.com" className="transition hover:text-white">steamcore.energy@outlook.com</a>
                </p>
              </div>
            </Motion.div>

            <Motion.div variants={{ initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}>
              <p className="text-[14px] font-medium text-white/50">Features</p>
              <ul className="mt-8 flex flex-col gap-5 text-[15px] font-medium text-white/80">
                <li><NavLink className="transition hover:text-white" to="/services">Boiler & Utility Consultancy</NavLink></li>
                <li><NavLink className="transition hover:text-white" to="/services">Energy Audit & Optimization</NavLink></li>
                <li><NavLink className="transition hover:text-white" to="/services">Reliability & Maintenance</NavLink></li>
                <li><NavLink className="transition hover:text-white" to="/services">Project Engineering</NavLink></li>
                <li><NavLink className="transition hover:text-white" to="/training">Training Programs</NavLink></li>
              </ul>
            </Motion.div>

            <Motion.div variants={{ initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}>
              <p className="text-[14px] font-medium text-white/50">Company</p>
              <ul className="mt-8 flex flex-col gap-5 text-[15px] font-medium text-white/80">
                <li><NavLink className="transition hover:text-white" to="/projects">Projects / Case studies</NavLink></li>
                <li><NavLink className="transition hover:text-white" to="/about">About us</NavLink></li>
                <li><NavLink className="transition hover:text-white" to="/training">Training</NavLink></li>
                <li><NavLink className="transition hover:text-white" to="/contact">Contact</NavLink></li>
              </ul>
            </Motion.div>
          </div>

          <Motion.div 
            variants={{ initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
            className="mt-[100px] flex flex-wrap items-center justify-between gap-6 border-b border-white/10 pb-8"
          >
            <div className="flex items-center gap-6 text-white">
              <a className="transition hover:text-white/70" href="#" aria-label="Facebook">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" /></svg>
              </a>
              <a className="transition hover:text-white/70" href="#" aria-label="X">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a className="transition hover:text-white/70" href="#" aria-label="Instagram">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a className="transition hover:text-white/70" href="#" aria-label="LinkedIn">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
              </a>
            </div>
            <div className="flex items-center gap-2 text-[14px] font-medium text-white/80">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              Mumbai, Maharashtra, IND
            </div>
          </Motion.div>

          <Motion.div 
            variants={{ initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
            className="mt-8 flex flex-wrap items-center justify-between gap-4 text-[14px] font-medium text-white/60"
          >
            <span>© {new Date().getFullYear()} SteamCore Energy Engineering LLP. All rights reserved</span>
            <div className="flex gap-6">
              <span>Terms</span>
              <span>Privacy</span>
              <span>Cookies</span>
            </div>
          </Motion.div>

          <Motion.div 
            variants={{ initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
            className="mt-12 space-y-6 text-[13px] leading-relaxed text-white/40 max-w-[1200px]"
          >
            <p>
              SteamCore Energy Engineering LLP is an engineering consultancy, not a financial institution, lender, or credit intermediary. The services provided by SteamCore are intended solely for business and industrial use and do not include payment processing, credit issuance, or custody of client funds. SteamCore's tools and services are designed to enhance visibility, automation, and decision-making across utility operations, and should not be interpreted as financial advice.
            </p>
            <p>
              Access to the SteamCore platform is subject to our Terms of Use and Privacy Policy. Recommendations are prepared based on data provided, site observations, and applicable standards. Actual performance, savings, and compliance outcomes depend on operating conditions, implementation quality, and plant constraints. SteamCore does not make any representations regarding compliance outcomes, financial performance, or legal guarantees resulting from use of the platform.
            </p>
            <p>
              Any references to savings or optimization opportunities are estimates and should be validated through detailed engineering and site trials. SteamCore is not responsible for losses due to data inaccuracies, missed maintenance actions, or operational deviations. Customers are responsible for ensuring the accuracy of their internal utility records and for maintaining compliance with applicable local, national, or international regulations. 
            </p>
          </Motion.div>
        </Motion.div>
      </footer>
    </div>
  )
}

