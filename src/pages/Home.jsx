import { Link } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'
import { ArrowRight, Send, CheckCircle2, Award, PhoneCall, Info, FlaskConical, Pill, Utensils, Scissors, Hotel, Factory } from 'lucide-react'
import { staggerContainer, fadeUpVariant, scaleInVariant } from '../ui/motion'
import { getIndustrialImage } from '../data/images'
import { getIndustrialVideo } from '../data/videos'
import HoverVideoMedia from '../ui/HoverVideoMedia'


export default function Home() {
  return (
    <main className="space-y-12 pb-16 overflow-x-hidden bg-steam-cream">
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <Motion.section
        variants={{
          initial: { opacity: 0.6, y: 12 },
          animate: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
          }
        }}
        initial="initial"
        animate="animate"
        style={{ willChange: 'opacity, transform' }}
        className="relative w-full px-4 pt-[52px] pb-4 sm:px-6 sm:py-7 lg:px-8"
      >
        {/* Video Container */}
        <div className="fade-mask relative flex min-h-[calc(100svh-100px)] w-full flex-col items-center justify-center overflow-hidden rounded-[32px] border-2 border-steam-navy/90 bg-[#111] sm:min-h-[calc(100svh-120px)] sm:rounded-[36px] md:min-h-[calc(100vh-140px)] md:rounded-[44px]">
          <Motion.video
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </Motion.video>

          {/* ── Overlay content (Unified design like Vectura) ───────────────────────────────── */}
          <Motion.div
            variants={{
              initial: {},
              animate: { transition: { staggerChildren: 0.15, delayChildren: 0.4 } }
            }}
            initial="initial"
            animate="animate"
            className="relative z-10 flex flex-col items-center justify-center px-4 text-center text-white"
          >
            <Motion.h1
              variants={fadeUpVariant}
              className="mt-4 max-w-[1100px] font-display text-[40px] uppercase leading-[1] tracking-tight text-white sm:text-[56px] md:text-[72px] lg:text-[84px]"
            >
              Engineering efficiency. Powering reliability.
            </Motion.h1>
            <Motion.p
              variants={fadeUpVariant}
              className="mt-6 max-w-[800px] text-[16px] font-medium leading-[1.5] text-white/90 sm:text-[18px] md:text-[20px]"
            >
              Expert solutions in boiler systems, steam utilities, maintenance engineering, energy
              optimization, troubleshooting, and plant reliability for process industries.
            </Motion.p>
            
            <Motion.div variants={fadeUpVariant} className="mt-10 flex w-full flex-col items-center gap-4 px-4 sm:w-auto sm:flex-row sm:px-0">
              <Link
                to="/services"
                className="flex h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-steam-orange px-8 text-[15px] font-bold uppercase tracking-wide text-white shadow-lg transition-all hover:scale-105 hover:bg-steam-orangeHover active:scale-95 sm:w-auto"
              >
                Our services
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="flex h-[52px] w-full items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-black/45 px-8 text-[15px] font-bold uppercase tracking-wide text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-black/60 active:scale-95 sm:w-auto"
              >
                Contact us
                <Send size={18} />
              </Link>
            </Motion.div>
          </Motion.div>
        </div>
      </Motion.section>

      {/* ── Remaining page content (padded) ───────────────────────── */}
      <div className="section-wrap space-y-10">
      <Motion.section variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-50px" }} className="rounded-[30px] border-2 border-steam-navy/85 bg-steam-panel p-6 md:p-10">
        <Motion.p variants={fadeUpVariant} className="text-xs font-semibold uppercase tracking-brand text-steam-green">Welcome</Motion.p>
        <Motion.h2 variants={fadeUpVariant} className="mt-4 text-2xl font-bold tracking-tight text-steam-navy md:text-[36px] md:leading-[1.12]">
          Welcome to SteamCore Energy Engineering LLP
        </Motion.h2>
        <Motion.p variants={fadeUpVariant} className="mt-6 max-w-5xl text-[16px] leading-[1.5] text-steam-body">
          SteamCore Energy Engineering LLP is a specialized engineering consultancy focused on
          boiler systems, utilities, and energy management for process industries. We provide
          practical and result-oriented solutions to improve efficiency, reliability, and compliance.
        </Motion.p>
      </Motion.section>

      <Motion.section variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-50px" }} className="rounded-[30px] border-2 border-steam-navy/85 bg-steam-panel p-6 md:p-10">
        <Motion.p variants={fadeUpVariant} className="text-xs font-semibold uppercase tracking-brand text-steam-green">About snapshot</Motion.p>
        <Motion.h2 variants={fadeUpVariant} className="mt-6 max-w-[1220px] text-3xl font-bold leading-[1.1] tracking-tight text-steam-navy md:text-[44px]">
          SteamCore Energy Engineering LLP is a specialized engineering consultancy focused on
          boiler systems, utility optimization, and energy efficiency for process industries.
        </Motion.h2>
        <Motion.p variants={fadeUpVariant} className="mt-6 max-w-5xl text-[16px] leading-[1.5] text-steam-body/95">
          We support industrial utility and process systems with services related to boiler
          operation, maintenance, troubleshooting, energy improvement, and technical support. Our
          approach is service-led, technically driven, and focused on long-term performance
          improvement.
        </Motion.p>
        <Motion.p variants={fadeUpVariant} className="mt-4 max-w-5xl text-[16px] leading-[1.5] text-steam-body/95">
          We help process industries improve reliability and reduce energy costs across steam,
          power, cooling, compressed air, and HVAC—through audits, optimization, troubleshooting,
          and project support. We work with industries where utility systems are important for smooth
          production and safe operation.
        </Motion.p>
      </Motion.section>

      <Motion.section variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-50px" }} className="rounded-[30px] border-2 border-steam-navy/85 bg-steam-purple p-6 text-white md:p-10">
        <Motion.h3 variants={fadeUpVariant} className="font-display text-3xl uppercase tracking-wide text-white md:text-5xl">
          Our core services
        </Motion.h3>
        <Motion.p variants={fadeUpVariant} className="mt-4 max-w-4xl text-[15px] leading-relaxed text-white/85">
          We offer Boiler &amp; Utility Consultancy, Energy Audit &amp; Optimization, Reliability
          &amp; Maintenance, and Project Engineering—designed to help industries improve system
          performance and reduce operating costs.
        </Motion.p>
        <Motion.div variants={staggerContainer} className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            [
              'Boiler & Utility Consultancy',
              'Performance evaluation, troubleshooting, root cause analysis, and efficiency improvement for industrial plants.',
            ],
            [
              'Energy Audit & Optimization',
              'Detailed audits, waste heat recovery, and practical recommendations to reduce fuel and power costs.',
            ],
            [
              'Reliability & Maintenance',
              'Preventive strategy, SOP development, mechanical integrity support, and structured reliability improvement.',
            ],
            [
              'Project Engineering',
              'Boiler and utility project execution support, equipment selection, commissioning, and performance testing.',
            ],
          ].map(([title, desc]) => (
            <Motion.div variants={fadeUpVariant} key={title} className="group flex flex-col overflow-hidden rounded-[30px] border-2 border-steam-navy/90 bg-steam-blackCard text-white">
              <div className="relative h-40 w-full shrink-0 overflow-hidden">
                <HoverVideoMedia
                  posterSrc={getIndustrialImage(title)}
                  videoSrc={getIndustrialVideo(0)}
                  alt={title}
                  overlayClassName="bg-black/25 mix-blend-multiply group-hover:bg-black/0"
                />
              </div>
              <div className="p-7 flex-grow">
                <p className="font-display text-3xl uppercase leading-[0.95] text-white">{title}</p>
                <p className="mt-3 text-sm text-white/80">{desc}</p>
              </div>
            </Motion.div>
          ))}
        </Motion.div>

        <Motion.h3 variants={fadeUpVariant} className="mt-12 font-display text-2xl uppercase tracking-wide text-white md:text-4xl">
          Additional engineering focus
        </Motion.h3>
        <Motion.p variants={fadeUpVariant} className="mt-4 max-w-4xl text-[14px] leading-relaxed text-white/80">
          Alongside the core offerings above, SteamCore also supports broader utility excellence and
          optimization programs.
        </Motion.p>
        <Motion.div variants={staggerContainer} className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            ['Boiler & Steam System Excellence', 'Audits, efficiency enhancement, retrofits, and emission compliance support.'],
            ['Energy Audit & Cost Reduction', 'BEE-aligned audits, waste heat recovery, fuel optimization, KPI tracking.'],
            ['Utility System Optimization', 'Steam, power, cooling, compressed air, HVAC optimization and debottlenecking.'],
            ['Reliability & Maintenance', 'RCM approach, RCA, preventive strategy, critical equipment reliability.'],
          ].map(([title, desc]) => (
            <Motion.div variants={fadeUpVariant} key={title} className="group flex flex-col overflow-hidden rounded-[30px] border-2 border-steam-navy/90 bg-steam-blackCard text-white">
              <div className="relative h-40 w-full shrink-0 overflow-hidden">
                <HoverVideoMedia
                  posterSrc={getIndustrialImage(title + "focus")}
                  videoSrc={getIndustrialVideo(0)}
                  alt={title}
                  overlayClassName="bg-black/25 mix-blend-multiply group-hover:bg-black/0"
                />
              </div>
              <div className="p-7 flex-grow">
                <p className="font-display text-3xl uppercase leading-[0.95] text-white">{title}</p>
                <p className="mt-3 text-sm text-white/80">{desc}</p>
              </div>
            </Motion.div>
          ))}
        </Motion.div>
      </Motion.section>

      <Motion.section variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-50px" }} className="rounded-2xl bg-steam-navy p-6 text-white md:p-10">
        <Motion.h3 variants={fadeUpVariant} className="max-w-4xl font-display text-3xl uppercase tracking-wide md:text-5xl md:leading-[1.05]">
          Why choose SteamCore?
        </Motion.h3>
        <Motion.p variants={fadeUpVariant} className="mt-6 max-w-4xl text-[16px] leading-[1.45] text-white/80">
          With strong industry experience, technical knowledge, and a practical approach, we deliver
          reliable engineering solutions for industrial plants. Our work is focused on quality,
          efficiency, and compliance.
        </Motion.p>
        <Motion.div variants={staggerContainer} className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            '24+ years industry experience',
            'BEE Certified Energy Auditor',
            'Proven energy savings projects',
            'Strong regulatory & compliance expertise',
          ].map((item) => (
            <Motion.div
              variants={fadeUpVariant}
              key={item}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-7 text-[16px] font-medium md:text-[17px]"
            >
              <CheckCircle2 size={24} className="text-steam-flame shrink-0" />
              <span>{item}</span>
            </Motion.div>
          ))}
        </Motion.div>
      </Motion.section>

      <Motion.section variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-50px" }} className="grid gap-6 rounded-2xl bg-steam-panel p-6 md:grid-cols-2 md:p-10">
        <Motion.div variants={fadeUpVariant} className="rounded-2xl bg-steam-navy p-8 text-white shadow-brand">
          <h3 className="font-display text-4xl uppercase tracking-wide md:text-[48px] md:leading-[1.05]">
            Led by Ajit D Jawale
          </h3>
          <p className="mt-5 text-[16px] leading-[1.4] text-white/85 md:text-[17px]">
            Ajit D Jawale is an experienced engineering professional with more than 24 years of
            experience in utilities and energy systems across chemical, paper, and sugar industries.
            His expertise strengthens the company’s ability to deliver practical and field-oriented
            solutions—led by a skilled and experienced professional.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/founder" className="btn-primary text-base">
              Founder profile
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-transparent px-9 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
            >
              About us
            </Link>
          </div>
        </Motion.div>
        <Motion.div variants={fadeUpVariant} className="panel-elevated p-8">
          <p className="text-sm font-semibold uppercase tracking-brand text-steam-green">Credentials</p>
          <ul className="mt-6 space-y-3 text-[15px] text-steam-navy/90 md:text-[16px]">
            <li className="flex gap-2 items-start"><Award size={20} className="text-steam-orange shrink-0 mt-0.5" /> M.Tech in Energy (University Rank 1)</li>
            <li className="flex gap-2 items-start"><Award size={20} className="text-steam-orange shrink-0 mt-0.5" /> BEE Certified Energy Auditor</li>
            <li className="flex gap-2 items-start"><Award size={20} className="text-steam-orange shrink-0 mt-0.5" /> First Class Boiler Proficiency</li>
            <li className="flex gap-2 items-start"><Award size={20} className="text-steam-orange shrink-0 mt-0.5" /> Board Member, BOE & Attendant Exams (Govt. of Maharashtra)</li>
          </ul>
        </Motion.div>
      </Motion.section>

      <Motion.section variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-50px" }} className="rounded-2xl bg-steam-panel p-6 md:p-10">
        <Motion.h3 variants={fadeUpVariant} className="font-display text-3xl uppercase tracking-wide text-steam-navy md:text-5xl">
          Industries we serve
        </Motion.h3>
        <Motion.p variants={fadeUpVariant} className="mt-4 max-w-4xl text-[15px] leading-relaxed text-steam-body">
          We support sectors where steam systems, utilities, reliability, and energy efficiency
          directly affect production continuity.
        </Motion.p>
        <Motion.div variants={staggerContainer} className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: 'Chemical', icon: FlaskConical },
            { name: 'Pharmaceutical', icon: Pill },
            { name: 'Food Processing', icon: Utensils },
            { name: 'Textile', icon: Scissors },
            { name: 'Hospitality', icon: Hotel },
            { name: 'Manufacturing', icon: Factory },
          ].map(({ name, icon: Icon }) => (
            <Motion.div
              variants={fadeUpVariant}
              key={name}
              className="flex items-center gap-3 rounded-2xl border border-steam-navy/10 bg-white px-5 py-4 text-[14px] font-semibold text-steam-navy shadow-sm"
            >
              <Icon size={20} className="text-steam-green shrink-0" />
              {name}
            </Motion.div>
          ))}
        </Motion.div>
        <Motion.p variants={fadeUpVariant} className="mt-6 text-[14px] text-steam-body/90">
          Looking for more sectors (including automotive, aerospace, railways, marine, and
          infrastructure)?{' '}
          <Link
            className="font-semibold text-steam-green underline decoration-steam-green/30 underline-offset-4 hover:text-steam-navy"
            to="/industries"
          >
            View the full industries page
          </Link>
          .
        </Motion.p>
      </Motion.section>

      <Motion.section variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-50px" }} className="rounded-2xl bg-steam-navy p-6 text-white md:p-10">
        <Motion.h3 variants={fadeUpVariant} className="font-display text-3xl uppercase tracking-wide md:text-5xl">Call to action</Motion.h3>
        <Motion.p variants={fadeUpVariant} className="mt-6 text-[17px] leading-[1.35] text-white/85 md:text-[18px]">
          If you want to improve boiler efficiency, reduce energy costs, or solve thermal and
          electrical utility issues, contact SteamCore for practical engineering support.
        </Motion.p>
        <Motion.div variants={fadeUpVariant} className="mt-10 flex flex-wrap gap-3">
          <Link to="/contact" className="btn-cta text-base flex items-center gap-2">
            <PhoneCall size={20} />
            Contact us today
          </Link>
          <Link
            to="/why-choose-us"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-transparent px-9 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
          >
            <Info size={20} />
            Why choose us
          </Link>
        </Motion.div>
      </Motion.section>
      </div>
    </main>
  )
}
