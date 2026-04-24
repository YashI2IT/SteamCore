import { Link } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'
import { Check, Settings, CheckCircle2, PhoneCall } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import HoverVideoMedia from '../ui/HoverVideoMedia'

import { getIndustrialImage } from '../data/images'
import { getIndustrialVideo } from '../data/videos'

function ServiceCard({ title, items, image }) {
  const imgSrc = image || getIndustrialImage(title);
  const videoSrc = getIndustrialVideo(0);
  return (
    <Motion.div
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-steam-navy/25 bg-white shadow-[0_12px_32px_rgba(0,0,0,0.08)]"
    >
      <div className="relative h-44 w-full shrink-0 overflow-hidden">
        <HoverVideoMedia
          posterSrc={imgSrc}
          videoSrc={videoSrc}
          alt={title}
          overlayClassName="bg-black/25 mix-blend-multiply group-hover:bg-black/10"
        />
      </div>
      <div className="flex flex-grow flex-col p-6">
        <h3 className="text-[clamp(1.55rem,2.1vw,2.2rem)] font-display uppercase leading-[0.95] text-steam-navy">
          {title}
        </h3>
        <ul className="mt-5 space-y-2.5 text-[15px] leading-relaxed text-steam-body/95">
          {items.map((t, idx) => (
            <li key={t} className="flex items-start gap-2">
              <Check size={16} strokeWidth={2.5} className="mt-[0.25rem] shrink-0 text-steam-orange" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </Motion.div>
  )
}

export default function Services() {
  return (
    <main className="section-wrap space-y-10 pb-16 pt-6">
      <Reveal className="relative overflow-hidden rounded-[34px] border-2 border-steam-navy/85 bg-steam-panel p-6 md:p-10">
        <div className="pointer-events-none absolute -left-10 top-0 h-56 w-56 rounded-full bg-steam-purple/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-steam-orange/20 blur-3xl" />
        <h1 className="text-4xl font-display uppercase tracking-tight text-steam-navy md:text-[64px] md:leading-[1]">
          Services
        </h1>
        <p className="mt-6 max-w-4xl text-[17px] leading-[1.45] text-steam-body">
          SteamCore Energy Engineering LLP provides practical, result-oriented engineering support
          across boiler systems, utilities optimization, energy audits, reliability, and project
          execution for process industries.
        </p>
        <p className="mt-4 max-w-4xl text-[16px] leading-[1.55] text-steam-body/95">
          SteamCore Energy Engineering LLP offers specialized engineering services for industrial
          utilities, steam systems, boiler operations, and process plant support. Our services are
          designed to improve efficiency, reliability, safety, and compliance.
        </p>
      </Reveal>

      <Reveal className="rounded-[34px] border-2 border-steam-navy/90 bg-steam-purple p-6 text-white md:p-10">
        <h2 className="font-display text-3xl uppercase tracking-wide text-white md:text-[44px] md:leading-[1.08]">
          Primary services (website overview)
        </h2>
        <p className="mt-6 max-w-4xl text-[15px] leading-relaxed text-white/70">
          The blocks below summarize the main service categories in simple language. Detailed
          offerings and extended engineering scopes are retained in the sections further down this
          page.
        </p>
        <div className="mt-8 rounded-[26px] border border-white/25 bg-white/[0.08] p-4 md:p-5">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <ServiceCard
            title="Boiler operation & maintenance"
            items={[
              'End-to-end boiler O&M support for safe operation and efficient performance',
              'Combustion optimization, blowdown control, and safety checks',
              'Preventive maintenance planning aligned to plant risk and criticality',
            ]}
          />
          <ServiceCard
            title="Boiler & utility consultancy"
            items={[
              'Boiler performance evaluation and utility system efficiency improvement',
              'Troubleshooting and root cause analysis for recurring utility issues',
              'Structured recommendations with implementation support where required',
            ]}
          />
          <ServiceCard
            title="Energy audit & optimization"
            items={[
              'Detailed energy audits and identification of energy losses',
              'Waste heat recovery concepts and fuel/power cost reduction pathways',
              'Support to translate findings into practical plant actions',
            ]}
          />
          <ServiceCard
            title="Reliability & maintenance support"
            items={[
              'Preventive maintenance strategy and planning support',
              'SOP development and mechanical integrity support',
              'Programs aimed at reducing breakdowns and improving long-term reliability',
            ]}
          />
          <ServiceCard
            title="Industrial troubleshooting & root cause analysis"
            items={[
              'Steam pressure fluctuations and condensate losses',
              'Utility inefficiencies and system performance deviations',
              'Structured RCA methods to prevent repeat failures',
            ]}
          />
          <ServiceCard
            title="Project engineering"
            items={[
              'Boiler and utility project execution support',
              'Equipment selection, commissioning, and performance testing',
              'Coordination support from planning through completion',
            ]}
          />
          <ServiceCard
            title="Authorized service support (UNI KLINGER Ltd.)"
            items={[
              'Authorised after-sales service provider for UNI KLINGER Ltd.',
              'Steam traps, condensate systems, control valves, safety valves',
              'Level gauges and fluid control solutions',
            ]}
          />
          <ServiceCard
            title="Maintenance contracts & performance monitoring"
            items={[
              'AMC/ARC services with defined scope and accountability',
              'Periodic audits and performance tracking for utilities and boiler systems',
            ]}
          />
          <ServiceCard
            title="Training & capability development"
            items={[
              'Training for plant teams on utilities, maintenance, troubleshooting, boiler operation, and energy efficiency',
              'Exam-oriented support for BOE and Attendant preparation (as applicable)',
            ]}
          />
        </div>
        </div>
        <div className="mt-10">
          <Link
            to="/contact"
            className="btn-cta inline-flex items-center gap-2 text-[15px]"
          >
            <PhoneCall size={18} />
            Request a service / Contact us
          </Link>
        </div>
      </Reveal>

      <Reveal className="rounded-[34px] border-2 border-steam-navy/85 bg-steam-panel p-6 md:p-10">
        <p className="text-xs font-semibold uppercase tracking-brand text-steam-green">
          Core service offerings
        </p>
        <h2 className="mt-6 text-3xl font-bold tracking-tight text-steam-navy md:text-[44px] md:leading-[1.08]">
          End-to-end utility, boiler, and energy engineering support
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <ServiceCard
            title="1. Integrated Utility System Optimization"
            items={[
              'Steam, power, cooling, compressed air, and HVAC systems',
              'System balancing, capacity optimization, and debottlenecking',
              'Utility network efficiency (generation → distribution → end use)',
            ]}
          />
          <ServiceCard
            title="2. Boiler & Steam System Excellence"
            items={[
              'Boiler performance audits and efficiency enhancement',
              'Steam distribution optimization (trap survey, leak reduction, condensate recovery)',
              'Boiler retrofits, upgrades, and emission compliance support',
              'Boiler operation, maintenance practices, and troubleshooting',
            ]}
          />
          <ServiceCard
            title="3. Energy Audit & Cost Reduction Programs"
            items={[
              'Comprehensive energy audits (BEE-aligned)',
              'Waste heat recovery design and implementation',
              'Fuel optimization and utility cost reduction strategies',
              'Energy monitoring systems and KPI tracking',
            ]}
          />
          <ServiceCard
            title="4. Cogeneration & Captive Power Advisory"
            items={[
              'Gas turbine and steam turbine performance evaluation',
              'CHP (Combined Heat & Power) optimization',
              'Heat rate and energy balance improvement',
              'Feasibility studies for captive and hybrid power systems',
            ]}
          />
          <ServiceCard
            title="5. Reliability & Maintenance Engineering"
            items={[
              'Preventive and predictive maintenance strategy development',
              'Critical equipment identification and RCM approach',
              'Root Cause Analysis (RCA) and failure investigation',
              'Pumps and mechanical seals reliability improvement',
            ]}
          />
          <ServiceCard
            title="6. Chemical Cleaning & System Health Restoration"
            items={[
              'Boiler chemical cleaning planning and supervision',
              'Heat exchanger and condenser cleaning strategies',
              'Deposit analysis and performance restoration programs',
              'Water and steam cycle chemistry optimization',
            ]}
          />
          <ServiceCard
            title="7. Utility Equipment Performance Optimization"
            items={[
              'Air compressors and air dryers performance audit',
              'Chillers and HVAC system optimization',
              'Cooling tower efficiency and water management',
              'Pump system optimization and energy savings',
            ]}
          />
          <ServiceCard
            title="8. Engineering Design & Project Support"
            items={[
              'Utility system design review and validation',
              'P&ID and layout review',
              'Technical bid evaluation and vendor selection',
              'Project execution, commissioning, and performance testing',
            ]}
          />
          <ServiceCard
            title="9. Process Safety & Compliance (PSM)"
            items={[
              'PHA, PSSR, and MOC implementation support',
              'Mechanical integrity systems',
              'Permit-to-work and contractor safety systems',
              'Compliance with ISO and statutory requirements',
            ]}
          />
          <ServiceCard
            title="10. Training & Capability Development"
            items={[
              'Boiler operation and safety training',
              'Energy efficiency and utility optimization programs',
              'Maintenance and troubleshooting workshops',
              'Customized training for engineers and operators',
            ]}
          />
          <ServiceCard
            title="11. Sustainability & Decarbonization Advisory"
            items={[
              'Energy transition and fuel switch studies',
              'Integration of renewable energy with utilities',
              'Carbon footprint reduction strategies',
              'ESG-aligned utility improvement roadmap',
            ]}
          />
          <ServiceCard
            title="12. Troubleshooting & Crisis Support"
            items={[
              'Boiler trips, utility failures, and energy spikes',
              'Short-term stabilization and long-term solutions',
            ]}
          />
        </div>
      </Reveal>

      <Reveal className="rounded-2xl bg-steam-panel p-6 md:p-10">
        <p className="text-xs font-semibold uppercase tracking-brand text-steam-green">Our core service areas</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <ServiceCard
            title="Boiler Operation & Maintenance"
            items={[
              'End-to-end boiler O&M support for safe, efficient, compliant performance',
              'Combustion optimization and blowdown control',
              'Safety checks and preventive maintenance planning',
            ]}
          />
          <ServiceCard
            title="Authorised Service Support – UNI KLINGER Systems"
            items={[
              'Steam traps and condensate systems',
              'Control and safety valves',
              'Level gauges and boiler mountings',
              'Fluid control and sealing solutions',
            ]}
          />
          <ServiceCard
            title="Process Plant Maintenance & Reliability Support"
            items={[
              'Support for steam, condensate, and utility systems',
              'Audits, maintenance planning, and reliability improvement initiatives',
            ]}
          />
          <ServiceCard
            title="Industrial Troubleshooting & Root Cause Analysis"
            items={[
              'Steam pressure fluctuations',
              'Condensate losses',
              'Utility inefficiencies and system performance deviations',
            ]}
          />
          <ServiceCard
            title="Utility & Energy Efficiency Improvement"
            items={[
              'Identification and reduction of energy losses across steam/condensate/utilities',
              'Structured analysis for measurable improvements',
            ]}
          />
          <ServiceCard
            title="Shutdown Planning & Emergency Technical Support"
            items={[
              'Inspection planning and shutdown execution support',
              'Rapid troubleshooting assistance',
            ]}
          />
          <ServiceCard
            title="Maintenance Contracts & Performance Monitoring"
            items={[
              'Structured AMC/ARC services with defined scope',
              'Periodic audits and performance tracking',
            ]}
          />
          <ServiceCard
            title="Engineering Training & Capability Development"
            items={[
              'Training for plant teams on utilities, maintenance, and troubleshooting methods',
              'Capability building for engineers and operators',
            ]}
          />
        </div>
      </Reveal>

      <Reveal className="rounded-[34px] border-2 border-steam-navy/90 bg-steam-purple p-6 text-white md:p-10">
        <h2 className="font-display text-3xl uppercase tracking-wide md:text-[44px] md:leading-[1.08]">
          Extended engineering support (as required)
        </h2>
        <p className="mt-6 max-w-5xl text-[16px] leading-[1.55] text-white/75">
          As part of our system-level engineering capability, we also support specialized
          calculations and design inputs related to utility infrastructure, typically as part of
          projects, upgrades, or performance improvement assignments.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            'Boiler chimney performance evaluation (draft, sizing, flow)',
            'Chimney height assessment as per regulatory requirements',
            'Technical inputs for structural and foundation design (with civil consultants)',
          ].map((t) => (
            <Motion.div
              key={t}
              whileHover={{ y: -4 }}
              className="card-dark p-6 text-[15px] text-white/85 flex items-start gap-3"
            >
              <Settings size={20} className="shrink-0 text-steam-orange mt-0.5" />
              {t}
            </Motion.div>
          ))}
        </div>
      </Reveal>

      <Reveal className="rounded-[34px] border-2 border-steam-navy/90 bg-steam-navy p-6 text-white md:p-10">
        <h2 className="font-display text-3xl uppercase tracking-wide md:text-[44px] md:leading-[1.08]">
          Also included
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Motion.div whileHover={{ y: -4 }} className="card-dark p-7 text-[16px] text-white/85 flex items-center gap-3">
            <CheckCircle2 size={24} className="text-steam-green shrink-0" />
            Boiler inspection & certification support
          </Motion.div>
          <Motion.div whileHover={{ y: -4 }} className="card-dark p-7 text-[16px] text-white/85 flex items-center gap-3">
            <CheckCircle2 size={24} className="text-steam-green shrink-0" />
            Consultancy & troubleshooting support across utilities
          </Motion.div>
        </div>
      </Reveal>
    </main>
  )
}

