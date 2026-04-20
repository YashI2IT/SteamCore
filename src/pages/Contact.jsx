import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ChevronDown } from 'lucide-react'
import { Reveal } from '../ui/Reveal'

const MotionDiv    = motion.div
const MotionUl     = motion.ul
const MotionLi     = motion.li
const MotionLabel  = motion.label
const MotionInput  = motion.input
const MotionTextarea = motion.textarea
const MotionButton = motion.button
const MotionSpan   = motion.span

/* ─── Animated Field wrapper ───────────────────────────────────────── */
function Field({ label, required, children, delay = 0 }) {
  return (
    <MotionLabel
      className="grid gap-2"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay }}
    >
      <span className="text-sm font-medium text-steam-navy/80">
        {label}{required && <span className="ml-0.5 text-steam-orange">*</span>}
      </span>
      {children}
    </MotionLabel>
  )
}

/* ─── Animated Text Input ───────────────────────────────────────────── */
function TextInput({ placeholder, type = 'text' }) {
  const [focused, setFocused] = useState(false)
  return (
    <MotionInput
      type={type}
      placeholder={placeholder}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      className="h-12 w-full rounded-xl border border-steam-navy/15 px-4 text-steam-navy placeholder:text-steam-body/40 outline-none transition-all duration-200 focus:border-steam-green focus:ring-2 focus:ring-steam-green/20 bg-white"
      animate={{
        boxShadow: focused
          ? '0 0 0 3px rgba(46,125,50,0.12), 0 2px 12px rgba(31,78,121,0.06)'
          : '0 0 0 0px transparent',
      }}
      transition={{ duration: 0.2 }}
    />
  )
}

/* ─── Animated Textarea ─────────────────────────────────────────────── */
function TextAreaInput({ placeholder }) {
  const [focused, setFocused] = useState(false)
  return (
    <MotionTextarea
      placeholder={placeholder}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      className="min-h-[140px] w-full rounded-xl border border-steam-navy/15 p-4 text-steam-navy placeholder:text-steam-body/40 outline-none transition-all duration-200 focus:border-steam-green focus:ring-2 focus:ring-steam-green/20 bg-white resize-none"
      animate={{
        boxShadow: focused
          ? '0 0 0 3px rgba(46,125,50,0.12), 0 2px 12px rgba(31,78,121,0.06)'
          : '0 0 0 0px transparent',
      }}
      transition={{ duration: 0.2 }}
    />
  )
}

/* ─── Premium Custom Select ─────────────────────────────────────────── */
function PremiumSelect({ options, placeholder = 'Select...' }) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState('')
  const ref = useRef(null)

  // Close on outside click
  useState(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const pick = (opt) => {
    setSelected(opt)
    setOpen(false)
  }

  return (
    <div ref={ref} className="relative">
      <MotionButton
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex h-12 w-full items-center justify-between rounded-xl border border-steam-navy/15 bg-white px-4 text-left outline-none transition-all duration-200 focus:border-steam-green focus:ring-2 focus:ring-steam-green/20 cursor-pointer"
        animate={{
          boxShadow: open
            ? '0 0 0 3px rgba(46,125,50,0.12), 0 2px 12px rgba(31,78,121,0.06)'
            : '0 0 0 0px transparent',
          borderColor: open ? 'rgb(46,125,50)' : 'rgba(31,78,121,0.15)',
        }}
        transition={{ duration: 0.2 }}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={selected ? 'text-steam-navy text-[14px]' : 'text-steam-body/40 text-[14px]'}>
          {selected || placeholder}
        </span>
        <MotionSpan
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <ChevronDown size={16} className="text-steam-navy/40" />
        </MotionSpan>
      </MotionButton>

      <AnimatePresence>
        {open && (
          <MotionUl
            role="listbox"
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 right-0 top-[calc(100%+6px)] z-50 overflow-hidden rounded-xl border border-steam-navy/10 bg-white shadow-[0_12px_40px_rgba(31,78,121,0.12)]"
          >
            {options.map((opt, i) => (
              <MotionLi
                key={opt}
                role="option"
                aria-selected={selected === opt}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.18, delay: i * 0.04 }}
                onMouseDown={(e) => { e.stopPropagation(); pick(opt) }}
                className={[
                  'cursor-pointer px-4 py-3 text-[14px] font-medium transition-colors select-none',
                  selected === opt
                    ? 'bg-steam-green/10 text-steam-green'
                    : 'text-steam-navy hover:bg-steam-navy/[0.04]',
                ].join(' ')}
              >
                {opt}
              </MotionLi>
            ))}
          </MotionUl>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ─── Page ───────────────────────────────────────────────────────────── */
export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <main className="section-wrap pb-14 pt-6">
      <Reveal className="panel-elevated p-6 shadow-brand md:rounded-3xl md:p-12">
        <div className="grid gap-10 md:grid-cols-[1fr_1.25fr]">
          {/* Left: info */}
          <div className="md:pr-10">
            <p className="text-xs font-semibold uppercase tracking-brand text-steam-green">Contact</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-steam-navy md:text-[56px] md:leading-[1.05]">
              Get consultation
            </h1>

            <div className="mt-8 space-y-4 text-[14px] text-steam-body">
              {[
                'Discuss boiler, steam, and utility performance',
                'Request an energy audit or optimization scope',
                'Explore reliability, maintenance, or project support',
              ].map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 place-items-center rounded-full bg-steam-orange text-white">
                    <Check size={16} strokeWidth={2.5} />
                  </span>
                  <span>{t}</span>
                </div>
              ))}
            </div>

            <div className="mt-14 max-w-xs text-sm text-steam-body/80">
              <p>Prefer email or phone? Use the details below—we respond to industrial inquiries promptly.</p>
            </div>
          </div>

          {/* Right: form */}
          <form
            className="rounded-2xl bg-white"
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <MotionDiv
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <MotionSpan
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
                    className="grid h-16 w-16 place-items-center rounded-full bg-steam-green/10"
                  >
                    <Check size={30} className="text-steam-green" strokeWidth={2.5} />
                  </MotionSpan>
                  <p className="mt-6 text-xl font-bold text-steam-navy">Inquiry sent!</p>
                  <p className="mt-2 text-sm text-steam-body/70">We'll get back to you within 24 hours.</p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-sm font-medium text-steam-navy/50 underline underline-offset-2 hover:text-steam-navy transition"
                  >
                    Send another
                  </button>
                </MotionDiv>
              ) : (
                <MotionDiv
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid gap-5"
                >
                  <Field label="Full name" required delay={0.05}>
                    <TextInput placeholder="Your name" />
                  </Field>

                  <Field label="Email" required delay={0.10}>
                    <TextInput type="email" placeholder="you@company.com" />
                  </Field>

                  <Field label="Company name" required delay={0.15}>
                    <TextInput placeholder="Your company name" />
                  </Field>

                  <Field label="Company size" required delay={0.20}>
                    <PremiumSelect
                      placeholder="Select..."
                      options={['1–10', '11–50', '51–200', '201–1000', '1000+']}
                    />
                  </Field>

                  <Field label="Phone number" delay={0.25}>
                    <TextInput placeholder="+91 XXXXX XXXXX" type="tel" />
                  </Field>

                  <Field label="How did you hear about us?" delay={0.30}>
                    <PremiumSelect
                      placeholder="Select..."
                      options={['Referral', 'LinkedIn', 'Search', 'Event', 'Other']}
                    />
                  </Field>

                  <Field label="How can we help?" delay={0.35}>
                    <TextAreaInput placeholder="Tell us what you're looking to improve or solve..." />
                  </Field>

                  <MotionButton
                    type="submit"
                    className="btn-cta mt-4 h-14 w-full text-[15px] cursor-pointer"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: 0.40 }}
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.985 }}
                  >
                    Send inquiry
                  </MotionButton>
                </MotionDiv>
              )}
            </AnimatePresence>
          </form>
        </div>
      </Reveal>

      <Reveal className="mt-10 rounded-2xl bg-steam-panel p-6 md:p-10">
        <p className="text-xs font-semibold uppercase tracking-brand text-steam-green">Office</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="panel-elevated p-7">
            <p className="text-sm font-semibold uppercase tracking-brand text-steam-green">Office address</p>
            <p className="mt-4 text-[15px] leading-[1.6] text-steam-body">
              SteamCore Energy Engineering LLP
              <br />
              F-103 Greenscape Royale, Plot 25, Sector 7
              <br />
              Raigad – 410209, Maharashtra, India
            </p>
          </div>
          <div className="panel-elevated p-7">
            <p className="text-sm font-semibold uppercase tracking-brand text-steam-green">Reach us</p>
            <div className="mt-4 space-y-3 text-[15px] text-steam-body">
              <p>+91 88508 47485</p>
              <p>+91 99872 46751</p>
              <p>steamcore.energy@outlook.com</p>
            </div>
          </div>
        </div>
      </Reveal>
    </main>
  )
}
