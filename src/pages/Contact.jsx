import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ChevronDown, Send, MapPin, Phone, Mail } from 'lucide-react'
import { Reveal } from '../ui/Reveal'

const MotionDiv      = motion.div
const MotionUl       = motion.ul
const MotionLi       = motion.li
const MotionLabel    = motion.label
const MotionInput    = motion.input
const MotionTextarea = motion.textarea
const MotionButton   = motion.button
const MotionSpan     = motion.span

const WEB3FORMS_KEY = 'a9bf3831-a32b-405c-9a33-da5eaf902b54'

/* ─── Field wrapper ─────────────────────────────────────────────────── */
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

/* ─── Text Input ────────────────────────────────────────────────────── */
function TextInput({ name, placeholder, type = 'text', value, onChange, required }) {
  const [focused, setFocused] = useState(false)
  return (
    <MotionInput
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
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

/* ─── Textarea ──────────────────────────────────────────────────────── */
function TextAreaInput({ name, placeholder, value, onChange }) {
  const [focused, setFocused] = useState(false)
  return (
    <MotionTextarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
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

/* ─── Custom Select ─────────────────────────────────────────────────── */
function PremiumSelect({ name, options, placeholder = 'Select...', value, onChange }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const pick = (opt) => {
    onChange({ target: { name, value: opt } })
    setOpen(false)
  }

  return (
    <div ref={ref} className="relative">
      {/* hidden input so the value is included in FormData */}
      <input type="hidden" name={name} value={value} />
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
        <span className={value ? 'text-steam-navy text-[14px]' : 'text-steam-body/40 text-[14px]'}>
          {value || placeholder}
        </span>
        <MotionSpan animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
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
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 top-[calc(100%+6px)] z-50 overflow-hidden rounded-xl border border-steam-navy/10 bg-white shadow-[0_12px_40px_rgba(31,78,121,0.12)]"
          >
            {options.map((opt, i) => (
              <MotionLi
                key={opt}
                role="option"
                aria-selected={value === opt}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.18, delay: i * 0.04 }}
                onPointerDown={(e) => { e.preventDefault(); pick(opt) }}
                className={[
                  'cursor-pointer px-4 py-3 text-[14px] font-medium transition-colors select-none',
                  value === opt
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
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [fields, setFields] = useState({
    name: '',
    email: '',
    company: '',
    company_size: '',
    phone: '',
    source: '',
    message: '',
  })

  const set = (e) => setFields((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          from_name: 'SteamCore Website',
          subject: `New Inquiry — ${fields.name} (${fields.company})`,
          'Full Name': fields.name,
          'Email': fields.email,
          'Phone': fields.phone || '—',
          'Company': fields.company,
          'Company Size': fields.company_size || '—',
          'Source': fields.source || '—',
          'Message': fields.message,
          botcheck: '',
        }),
      })

      const data = await res.json()
      if (data.success) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please try again or email us directly.')
      }
    } catch {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

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
              <p>Prefer email or phone? Use the details below — we respond to industrial inquiries promptly.</p>
            </div>
          </div>

          {/* Right: form */}
          <form className="panel-elevated p-6 md:p-8" onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {submitted ? (
                <MotionDiv
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  {/* Icon */}
                  <MotionSpan
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 280, damping: 18, delay: 0.1 }}
                    className="grid h-20 w-20 place-items-center rounded-full bg-steam-green/10 ring-8 ring-steam-green/5"
                  >
                    <Check size={34} className="text-steam-green" strokeWidth={2.5} />
                  </MotionSpan>

                  {/* Heading */}
                  <MotionDiv
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.5 }}
                  >
                    <p className="mt-7 text-2xl font-bold tracking-tight text-steam-navy">Thank you for reaching out</p>
                    <p className="mt-2 text-[15px] text-steam-body/70 max-w-xs mx-auto leading-relaxed">
                      Your inquiry has been received. A member of our team will respond within <span className="font-semibold text-steam-navy">24 business hours</span>.
                    </p>
                  </MotionDiv>

                  {/* Divider */}
                  <MotionDiv
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-8 w-full max-w-xs border-t border-steam-navy/8"
                  />

                  {/* Contact details */}
                  <MotionDiv
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45, duration: 0.5 }}
                    className="mt-6 space-y-2 text-[13px] text-steam-body/60"
                  >
                    <p>Need immediate assistance?</p>
                    <p className="flex items-center justify-center gap-2 font-medium text-steam-navy/70">
                      <Phone size={14} className="text-steam-orange shrink-0" />
                      +91 88508 47485 &nbsp;|&nbsp; +91 99872 46751
                    </p>
                    <p className="flex items-center justify-center gap-2 font-medium text-steam-navy/70">
                      <Mail size={14} className="text-steam-orange shrink-0" />
                      steamcore.energy@outlook.com
                    </p>
                  </MotionDiv>

                  {/* Send another */}
                  <MotionDiv
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.55 }}
                    className="mt-8"
                  >
                    <button
                      type="button"
                      onClick={() => { setSubmitted(false); setFields({ name:'', email:'', company:'', company_size:'', phone:'', source:'', message:'' }) }}
                      className="rounded-full border border-steam-navy/15 px-6 py-2.5 text-[13px] font-medium text-steam-navy/60 transition hover:border-steam-navy/30 hover:text-steam-navy"
                    >
                      Submit another inquiry
                    </button>
                  </MotionDiv>
                </MotionDiv>
              ) : (
                <MotionDiv
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid gap-5"
                >
                  {/* honeypot */}
                  <input type="checkbox" name="botcheck" className="hidden" />

                  <Field label="Full name" required delay={0.05}>
                    <TextInput name="name" placeholder="Your name" value={fields.name} onChange={set} required />
                  </Field>

                  <Field label="Email" required delay={0.10}>
                    <TextInput name="email" type="email" placeholder="you@company.com" value={fields.email} onChange={set} required />
                  </Field>

                  <Field label="Company name" required delay={0.15}>
                    <TextInput name="company" placeholder="Your company name" value={fields.company} onChange={set} required />
                  </Field>

                  <Field label="Company size" delay={0.20}>
                    <PremiumSelect
                      name="company_size"
                      placeholder="Select..."
                      options={['1–10', '11–50', '51–200', '201–1000', '1000+']}
                      value={fields.company_size}
                      onChange={set}
                    />
                  </Field>

                  <Field label="Phone number" delay={0.25}>
                    <TextInput name="phone" placeholder="+91 XXXXX XXXXX" type="tel" value={fields.phone} onChange={set} />
                  </Field>

                  <Field label="How did you hear about us?" delay={0.30}>
                    <PremiumSelect
                      name="source"
                      placeholder="Select..."
                      options={['Referral', 'LinkedIn', 'Search', 'Event', 'Other']}
                      value={fields.source}
                      onChange={set}
                    />
                  </Field>

                  <Field label="How can we help?" required delay={0.35}>
                    <TextAreaInput
                      name="message"
                      placeholder="Tell us what you're looking to improve or solve..."
                      value={fields.message}
                      onChange={set}
                    />
                  </Field>

                  {error && (
                    <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>
                  )}

                  <MotionButton
                    type="submit"
                    disabled={loading}
                    className="btn-cta mt-4 h-14 w-full text-[15px] cursor-pointer disabled:opacity-60"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: 0.40 }}
                    whileHover={{ scale: loading ? 1 : 1.015 }}
                    whileTap={{ scale: loading ? 1 : 0.985 }}
                  >
                    <span className="flex flex-row gap-2 items-center justify-center">
                      {loading ? (
                        <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                        </svg>
                      ) : (
                        <Send size={18} />
                      )}
                      {loading ? 'Sending…' : 'Send inquiry'}
                    </span>
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
          <motion.div whileHover={{ y: -4 }} className="panel-elevated p-7">
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-brand text-steam-green"><MapPin size={16} /> Office address</p>
            <p className="mt-4 text-[15px] leading-[1.6] text-steam-body">
              SteamCore Energy Engineering LLP<br />
              F-103 Greenscape Royale, Plot 25, Sector 7<br />
              Raigad – 410209, Maharashtra, India
            </p>
          </motion.div>
          <motion.div whileHover={{ y: -4 }} className="panel-elevated p-7">
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-brand text-steam-green"><Phone size={16} /> Reach us</p>
            <div className="mt-4 space-y-3 text-[15px] text-steam-body">
              <p className="flex items-center gap-2"><Phone size={16} className="text-steam-navy/50" /> +91 88508 47485</p>
              <p className="flex items-center gap-2"><Phone size={16} className="text-steam-navy/50" /> +91 99872 46751</p>
              <p className="flex items-center gap-2"><Mail size={16} className="text-steam-navy/50" /> steamcore.energy@outlook.com</p>
            </div>
          </motion.div>
        </div>
      </Reveal>
    </main>
  )
}
