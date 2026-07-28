import { useEffect, useRef, useState } from 'react'
import { Menu, X, ChevronRight, Phone, Mail, MapPin } from 'lucide-react'

// Social icons using standard brand SVG paths
const FacebookIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)
const TwitterIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)
const InstagramIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.822a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/>
  </svg>
)
const LinkedinIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { AboutDesktopMega, AboutMobileSection } from './AboutNavMega.jsx'
import ChatWidget from './chat/ChatWidget.jsx'

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
    let ticking = false

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const currentY = window.scrollY
        const delta = currentY - lastScrollY.current

        setIsAtTop(currentY < 10)

        // Only trigger on intentional scroll (delta > 6px) to avoid jitter
        if (Math.abs(delta) > 6) {
          if (currentY < 10) {
            setShowHeader(true)
          } else if (delta > 0) {
            // Scrolling up → hide
            setShowHeader(false)
          } else {
            // Scrolling down → show
            setShowHeader(true)
          }
          lastScrollY.current = currentY
        }

        ticking = false
      })
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
          y: showHeader ? 0 : -110,
          opacity: showHeader ? 1 : 0,
        }}
        transition={{ 
          type: 'spring',
          stiffness: 260,
          damping: 28,
          mass: 0.8,
          opacity: { duration: 0.25, ease: 'easeInOut' },
        }}
        className="fixed left-0 right-0 top-0 z-50 w-full"
      >
        <div className="px-4 pt-4 sm:px-6 sm:pt-5 lg:px-8">
          <div className="flex h-[62px] w-full items-center justify-between rounded-full border border-black/10 bg-white/75 px-4 shadow-[0_2px_20px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:h-[66px] sm:px-5">

          {/* Logo */}
          <Motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          >
            <NavLink to="/">
              <img src="/logo.png" alt="SteamCore logo" className="h-12 sm:h-14 w-auto scale-110 origin-left" />
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
          className="flex flex-col flex-grow pt-[72px] sm:pt-[82px] md:pt-[88px] overflow-x-hidden"
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
              <NavLink to="/terms" className="transition hover:text-white">Terms</NavLink>
              <NavLink to="/privacy" className="transition hover:text-white">Privacy</NavLink>
              <NavLink to="/cookies" className="transition hover:text-white">Cookies</NavLink>
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
      <ChatWidget />
    </div>
  )
}

