import { Link } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'
import { staggerContainer, fadeUpVariant, scaleInVariant } from '../ui/motion'
import { getIndustrialImage } from '../data/images'

const hashString = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) hash = str.charCodeAt(i) + ((hash << 5) - hash);
  return Math.abs(hash);
};
export default function Home() {
  return (
    <main className="space-y-10 pb-14 overflow-x-hidden">
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <Motion.section
        variants={{
          initial: { opacity: 0, y: 40, scale: 0.96 },
          animate: { 
            opacity: 1, 
            y: 0, 
            scale: 1, 
            transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
          }
        }}
        initial="initial"
        animate="animate"
        className="relative w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6"
      >
        {/* Video Container */}
        <div className="fade-mask relative flex flex-col items-center justify-center min-h-[calc(100svh-100px)] sm:min-h-[calc(100svh-120px)] md:min-h-[calc(100vh-140px)] w-full overflow-hidden rounded-[24px] sm:rounded-[32px] md:rounded-[40px] bg-[#111]">
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
              className="mt-4 max-w-[1100px] font-display text-[40px] leading-[1.05] tracking-tight text-white sm:text-[56px] md:text-[72px] lg:text-[84px]"
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
            
            <Motion.div variants={fadeUpVariant} className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4 sm:px-0">
              <Link
                to="/services"
                className="flex h-[56px] w-full sm:w-auto px-8 items-center justify-center rounded-full bg-white text-[16px] font-semibold text-black shadow-lg hover:scale-105 active:scale-95 transition-all"
              >
                Our services
              </Link>
              <Link
                to="/contact"
                className="flex h-[56px] w-full sm:w-auto px-8 items-center justify-center rounded-full bg-black/40 backdrop-blur-md text-[16px] font-semibold text-white border border-white/10 hover:bg-black/60 hover:scale-105 active:scale-95 transition-all"
              >
                Contact us
              </Link>
            </Motion.div>
          </Motion.div>
        </div>
      </Motion.section>

      {/* ── Remaining page content (padded) ───────────────────────── */}
      <div className="section-wrap space-y-10">
      <Motion.section variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-50px" }} className="rounded-2xl bg-steam-panel p-6 md:p-10">
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

      <Motion.section variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-50px" }} className="rounded-2xl bg-steam-panel p-6 md:p-10">
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

      <Motion.section variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-50px" }} className="rounded-2xl bg-steam-panel p-6 md:p-10">
        <Motion.h3 variants={fadeUpVariant} className="font-display text-3xl uppercase tracking-wide text-steam-navy md:text-5xl">
          Our core services
        </Motion.h3>
        <Motion.p variants={fadeUpVariant} className="mt-4 max-w-4xl text-[15px] leading-relaxed text-steam-body">
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
            <Motion.div variants={fadeUpVariant} key={title} className="group overflow-hidden flex flex-col panel-elevated">
              <div className="relative h-40 w-full shrink-0 overflow-hidden">
                <img
                  src={getIndustrialImage(hashString(title))}
                  alt={title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-steam-navy/10 mix-blend-multiply transition-colors duration-500 group-hover:bg-steam-navy/0" />
              </div>
              <div className="p-7 flex-grow">
                <p className="text-lg font-semibold text-steam-navy">{title}</p>
                <p className="mt-3 text-sm text-steam-body">{desc}</p>
              </div>
            </Motion.div>
          ))}
        </Motion.div>

        <Motion.h3 variants={fadeUpVariant} className="mt-12 font-display text-2xl uppercase tracking-wide text-steam-navy md:text-4xl">
          Additional engineering focus
        </Motion.h3>
        <Motion.p variants={fadeUpVariant} className="mt-4 max-w-4xl text-[14px] leading-relaxed text-steam-body/90">
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
            <Motion.div variants={fadeUpVariant} key={title} className="group overflow-hidden flex flex-col panel-elevated">
              <div className="relative h-40 w-full shrink-0 overflow-hidden">
                <img
                  src={getIndustrialImage(hashString(title + "focus"))}
                  alt={title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-steam-navy/10 mix-blend-multiply transition-colors duration-500 group-hover:bg-steam-navy/0" />
              </div>
              <div className="p-7 flex-grow">
                <p className="text-lg font-semibold text-steam-navy">{title}</p>
                <p className="mt-3 text-sm text-steam-body">{desc}</p>
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
              className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-7 text-[16px] font-medium md:text-[17px]"
            >
              <span className="text-steam-flame" aria-hidden>
                •
              </span>
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
            <li>M.Tech in Energy (University Rank 1)</li>
            <li>BEE Certified Energy Auditor</li>
            <li>First Class Boiler Proficiency</li>
            <li>Board Member, BOE & Attendant Exams (Govt. of Maharashtra)</li>
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
            'Chemical',
            'Pharmaceutical',
            'Food Processing',
            'Textile',
            'Hospitality',
            'Manufacturing',
          ].map((name) => (
            <Motion.div
              variants={fadeUpVariant}
              key={name}
              className="rounded-2xl border border-steam-navy/10 bg-white px-5 py-4 text-[14px] font-semibold text-steam-navy shadow-sm"
            >
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
          <Link to="/contact" className="btn-cta text-base">
            Contact us today
          </Link>
          <Link
            to="/why-choose-us"
            className="inline-flex items-center justify-center rounded-full border border-white/30 bg-transparent px-9 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
          >
            Why choose us
          </Link>
        </Motion.div>
      </Motion.section>
      </div>
    </main>
  )
}
