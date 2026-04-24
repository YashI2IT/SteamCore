import { useEffect, useRef, useState } from 'react'
import { Menu, X, ChevronRight, Phone, Mail, MapPin } from 'lucide-react'

// Social icons not available in lucide-react v1 — using inline SVGs
const FacebookIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)
const TwitterIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M4 4l16 16M4 20 20 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M3 5h4l10 14h4L11 5H7z" fill="currentColor"/>
  </svg>
)
const InstagramIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
  </svg>
)
const LinkedinIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { AboutDesktopMega, AboutMobileSection } from './AboutNavMega.jsx'

function NavItem({ to, children, onNavigate }) {
  return (
    <NavLink
      to={to}
      end={to === '/'}
      onClick={onNavigate}
      className={({ isActive }) =>
        [
          'block px-3 py-2 text-[14px] tracking-[-0.01em] transition-colors',
          'font-medium text-steam-navy/80 hover:text-steam-navy',
          isActive ? 'text-steam-navy' : '',
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
      const isScrollingUp = currentY < lastScrollY.current
      const hasScrolledEnough = currentY > 80

      setIsAtTop(currentY < 10)
      // Show when scrolling down (or at top), hide when scrolling up
      setShowHeader(isScrollingUp || !hasScrolledEnough)
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
    <div className="min-h-screen bg-steam-cream text-steam-body overflow-x-hidden">
      <Motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ 
          y: showHeader ? 0 : -100,
          opacity: showHeader ? 1 : 0,
        }}
        transition={{ 
          y: { duration: showHeader ? 0.45 : 0.3, ease: [0.16, 1, 0.3, 1] },
          opacity: { duration: showHeader ? 0.45 : 0.25 },
        }}
        className="fixed left-0 right-0 top-0 z-50 w-full"
      >
        <div className="px-4 pt-4 sm:px-6 sm:pt-5 lg:px-8">
          <div className="flex h-[52px] w-full items-center justify-between rounded-[28px] border border-black/10 bg-white/75 px-4 shadow-[0_2px_20px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:h-[56px] sm:px-5">

          {/* Logo */}
          <Motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          >
            <NavLink to="/">
              <img src="/logo.png" alt="SteamCore logo" className="h-10 sm:h-11 w-auto" />
            </NavLink>
          </Motion.div>

          {/* Desktop nav */}
          <Motion.nav
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
            className="hidden items-center gap-x-6 xl:flex"
          >
            <NavItem to="/">Home</NavItem>
            <AboutDesktopMega />
            <NavItem to="/services">Services</NavItem>
            <NavItem to="/projects">Projects</NavItem>
            <NavItem to="/training">Training</NavItem>
          </Motion.nav>

          {/* CTA button */}
          <Motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
            className="hidden xl:block"
          >
            <NavLink
              to="/contact"
              className="rounded-full bg-steam-orange px-5 py-2 text-[13px] font-semibold text-white transition hover:bg-steam-orangeHover"
            >
              Contact us
            </NavLink>
          </Motion.div>

          {/* Mobile hamburger */}
          <Motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            type="button"
            className="xl:hidden transition-colors duration-300 text-[#0a0a0a]"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </Motion.button>
          </div>
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
            <div className="section-wrap flex h-[58px] items-center justify-between pt-3">
              <div className="flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt="SteamCore logo"
                  className="h-8 w-auto"
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
                      <ChevronRight size={18} strokeWidth={2.5} className="text-steam-navy/20" />
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col flex-grow pt-[52px] sm:pt-[60px] md:pt-[68px] overflow-x-hidden"
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
                  <Phone size={16} strokeWidth={2} />
                  +91 88508 47485
                </p>
                <p className="flex items-center gap-3">
                  <Phone size={16} strokeWidth={2} />
                  +91 99872 46751
                </p>
                <p className="flex items-center gap-3">
                  <Mail size={16} strokeWidth={2} />
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
                <FacebookIcon size={22} />
              </a>
              <a className="transition hover:text-white/70" href="#" aria-label="X">
                <TwitterIcon size={22} />
              </a>
              <a className="transition hover:text-white/70" href="#" aria-label="Instagram">
                <InstagramIcon size={22} />
              </a>
              <a className="transition hover:text-white/70" href="#" aria-label="LinkedIn">
                <LinkedinIcon size={22} />
              </a>
            </div>
            <div className="flex items-center gap-2 text-[14px] font-medium text-white/80">
              <MapPin size={14} strokeWidth={2} />
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

