import { Award, Handshake, Scale, Shield, Sparkles, Wrench } from 'lucide-react'
import { Reveal } from '../ui/Reveal'

const valueCards = [
  { title: 'Quality', icon: Award, text: 'Structured engineering, clear documentation, and disciplined delivery.' },
  { title: 'Reliability', icon: Wrench, text: 'Improvements designed for sustained performance—not short-lived fixes.' },
  { title: 'Safety', icon: Shield, text: 'Safe utility and boiler practices integrated into recommendations and support.' },
  { title: 'Compliance', icon: Scale, text: 'Awareness of applicable requirements and practical compliance pathways.' },
  { title: 'Technical excellence', icon: Sparkles, text: 'Deep technical judgement across utilities, steam, and energy systems.' },
  { title: 'Long-term customer support', icon: Handshake, text: 'Partner-style engagement with plant teams and leadership.' },
]

export default function About() {
  return (
    <main className="section-wrap space-y-10 pb-14">
      <Reveal className="rounded-2xl bg-steam-panel p-6 md:p-10">
        <h1 className="text-4xl font-bold tracking-tight text-steam-navy md:text-[56px] md:leading-[1.05]">
          About SteamCore Energy Engineering LLP
        </h1>
        <p className="mt-6 max-w-4xl text-[17px] leading-[1.45] text-steam-body">
          SteamCore Energy Engineering LLP is an engineering consultancy specializing in boiler
          systems, utilities, and energy management for process industries. We provide practical and
          result-oriented solutions to improve efficiency, reliability, and compliance.
        </p>
        <p className="mt-4 max-w-5xl text-[16px] leading-[1.55] text-steam-body/95">
          We provide engineering services for industrial utilities, steam systems, and process plant
          operations—helping industries improve reliability, reduce energy losses, and maintain safe
          and compliant operations.
        </p>
        <p className="mt-4 max-w-5xl text-[16px] leading-[1.55] text-steam-body/95">
          With deep expertise in operations, maintenance, and project execution, we deliver practical,
          result-oriented solutions to improve efficiency, reliability, and compliance.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="panel-elevated p-7">
            <p className="text-sm font-semibold uppercase tracking-brand text-steam-green">
              What we showcase
            </p>
            <ul className="mt-5 space-y-2 text-[15px] text-steam-body/95">
              <li>• Boiler services & steam system excellence</li>
              <li>• Energy audits & cost reduction programs</li>
              <li>• Consultancy, troubleshooting, and project support</li>
            </ul>
          </div>
          <div className="panel-elevated p-7">
            <p className="text-sm font-semibold uppercase tracking-brand text-steam-green">Target audience</p>
            <ul className="mt-5 space-y-2 text-[15px] text-steam-body/95">
              <li>• Process industries (chemical, pharma, manufacturing, paper, sugar)</li>
              <li>• Plant heads, utility managers, maintenance heads, and EHS leaders</li>
            </ul>
          </div>
        </div>
      </Reveal>

      <Reveal className="rounded-2xl bg-steam-navy p-6 text-white md:p-10">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-white/10 p-8">
            <p className="text-xs font-semibold uppercase tracking-brand text-steam-flame">Our mission</p>
            <p className="mt-4 text-[17px] leading-relaxed text-white/85">
              Our mission is to deliver reliable, efficient, and practical engineering solutions that
              help industries improve performance, reduce energy consumption, and maintain safe
              operations.
            </p>
            <p className="mt-5 text-[15px] leading-relaxed text-white/70">
              We also emphasize innovative solutions, acoustic excellence where relevant, and
              sustainable outcomes across related technical areas.
            </p>
          </div>
          <div className="rounded-2xl bg-white/10 p-8">
            <p className="text-xs font-semibold uppercase tracking-brand text-steam-flame">Our vision</p>
            <p className="mt-4 text-[17px] leading-relaxed text-white/85">
              Our vision is to become a trusted engineering partner known for technical excellence,
              sustainable solutions, and long-term value for industrial clients.
            </p>
            <p className="mt-5 text-[15px] leading-relaxed text-white/70">
              We aim to grow as a dependable consultancy and technical support provider for
              industrial systems—recognized for leadership in engineering quality and field support.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal className="rounded-2xl bg-steam-panel p-6 md:p-10">
        <p className="text-xs font-semibold uppercase tracking-brand text-steam-green">Who we are</p>
        <h2 className="mt-6 text-3xl font-bold tracking-tight text-steam-navy md:text-[44px] md:leading-[1.08]">
          SteamCore Energy Engineering LLP
        </h2>
        <p className="mt-6 max-w-5xl text-[16px] leading-[1.55] text-steam-body/95">
          SteamCore Energy Engineering LLP is a specialized engineering services firm supporting
          industrial utilities, steam systems, and integrated process plant operations.
        </p>
        <p className="mt-4 max-w-5xl text-[16px] leading-[1.55] text-steam-body/95">
          We work with chemical, pharmaceutical, food processing, textile, hospitality, and
          manufacturing industries where utility systems are critical to production continuity and
          operational stability.
        </p>
        <p className="mt-4 max-w-5xl text-[16px] leading-[1.55] text-steam-body/95">
          We are an Authorised After Sales Service Provider for UNI KLINGER Ltd., delivering
          professional service support for steam and fluid control systems.
        </p>
        <p className="mt-4 max-w-5xl text-[16px] leading-[1.55] text-steam-body/95">
          Our approach is service-led, technically driven, and accountability-focused — helping
          organizations improve system reliability, reduce energy consumption, and ensure safe and
          compliant operations.
        </p>
        <p className="mt-4 max-w-5xl text-[16px] leading-[1.55] text-steam-body/95">
          In addition to operational and maintenance expertise, we also support engineering
          evaluation and design validation of utility-related systems, including boiler auxiliaries
          such as chimneys, wherever required.
        </p>
      </Reveal>

      <Reveal className="rounded-2xl bg-steam-panel p-6 md:p-10">
        <h2 className="text-3xl font-bold tracking-tight text-steam-navy md:text-[44px] md:leading-[1.08]">
          Experience and strengths
        </h2>
        <p className="mt-6 max-w-5xl text-[16px] leading-[1.55] text-steam-body/95">
          We focus on structured engineering, root-cause analysis, reliability improvement, energy
          optimization, and support for plant teams. Our approach is service-led, technically driven,
          and accountability-focused.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            'Strong industry experience across utilities and process plants',
            'Deep technical knowledge in steam, boiler, and energy systems',
            'Practical problem-solving oriented to real operating constraints',
            'Focus on reliability, performance, and measurable improvement',
            'Support for operations, maintenance, and project execution',
          ].map((t) => (
            <div key={t} className="panel-elevated p-6 text-[15px] text-steam-navy/85">
              {t}
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="rounded-2xl bg-steam-navy p-6 text-white md:p-10">
        <h2 className="font-display text-3xl uppercase tracking-wide text-white md:text-[44px] md:leading-[1.08]">
          Company values
        </h2>
        <p className="mt-6 max-w-4xl text-[15px] leading-relaxed text-white/70">
          These values guide how we work with plant teams, vendors, and leadership—especially when
          trade-offs exist between schedule, cost, safety, and performance.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {valueCards.map(({ title, icon, text }) => {
            const Icon = icon
            return (
            <div key={title} className="rounded-2xl bg-white/10 p-7">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-steam-orange/20 ring-1 ring-steam-flame/30">
                  <Icon className="text-steam-flame" size={22} strokeWidth={1.75} />
                </span>
                <div>
                  <p className="text-lg font-semibold">{title}</p>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/75">{text}</p>
                </div>
              </div>
            </div>
            )
          })}
        </div>
      </Reveal>

      <Reveal className="rounded-2xl bg-steam-navy p-6 text-white md:p-10">
        <h2 className="font-display text-3xl uppercase tracking-wide text-white md:text-[44px] md:leading-[1.08]">
          What problems we solve
        </h2>
        <p className="mt-6 max-w-5xl text-[16px] leading-[1.55] text-white/75">
          Industrial energy and process systems often face:
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            'Utility instability affecting production',
            'High fuel and energy consumption',
            'Recurring equipment failures',
            'Pressure and flow imbalances',
            'Unplanned shutdowns',
            'Safety and compliance risks',
            'Increasing maintenance costs',
          ].map((t) => (
            <div key={t} className="rounded-2xl bg-white/10 p-6 text-[15px] text-white/85">
              {t}
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-5xl text-[16px] leading-[1.55] text-white/75">
          We address these through structured engineering, troubleshooting, and performance
          improvement services, ensuring sustainable and measurable results.
        </p>
      </Reveal>

      <Reveal className="rounded-2xl bg-steam-panel p-6 md:p-10">
        <h2 className="text-3xl font-bold tracking-tight text-steam-navy md:text-[44px] md:leading-[1.08]">
          How we work
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            ['On-Site Assessment', 'System evaluation'],
            ['Technical Diagnosis', 'Root-cause analysis'],
            ['Engineering Recommendations', 'Repair, redesign, or optimization'],
            ['Implementation Support', 'Coordination with plant teams'],
          ].map(([title, desc]) => (
            <div key={title} className="panel-elevated p-7">
              <p className="text-lg font-semibold text-steam-navy">{title}</p>
              <p className="mt-3 text-[15px] text-steam-body/90">{desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-5xl text-[16px] leading-[1.55] text-steam-body/95">
          We operate as a long-term technical partner, ensuring continuity from assessment to
          measurable improvement.
        </p>
      </Reveal>

      <Reveal className="rounded-2xl bg-steam-navy p-6 text-white md:p-10">
        <h2 className="font-display text-3xl uppercase tracking-wide text-white md:text-[44px] md:leading-[1.08]">
          Why SteamCore
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            'Strong foundation in industrial utility and process engineering',
            'System-level approach — not just component-level servicing',
            'Root-cause driven troubleshooting methodology',
            'Focus on reliability, energy optimization, and lifecycle cost reduction',
            'Practical, field-oriented engineering solutions',
          ].map((t) => (
            <div key={t} className="rounded-2xl bg-white/10 p-6 text-[15px] text-white/85">
              {t}
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="grid gap-6 rounded-2xl bg-steam-navy p-6 text-white md:grid-cols-[1.05fr_1fr] md:p-10">
        <div>
          <h2 className="font-display text-3xl uppercase tracking-wide text-white md:text-[44px]">
            About the founder
          </h2>
          <p className="mt-6 text-[17px] leading-[1.45] text-white/80">
            Ajit D Jawale is an experienced engineering professional with more than 24 years of
            experience in utilities and energy systems across chemical, paper, and sugar industries.
            His expertise strengthens the company’s ability to deliver practical and field-oriented
            solutions.
          </p>
          <p className="mt-6 text-[17px] leading-[1.45] text-white/80">
            He is also a Board Member for Boiler Operation Engineer and Attendant Examinations,
            Government of Maharashtra.
          </p>
          <p className="mt-6 text-[15px] leading-relaxed text-white/70">
            Credentials and professional background are highlighted to build credibility for clients
            evaluating long-term engineering support.
          </p>
        </div>
        <div className="grid gap-6">
          <div className="overflow-hidden rounded-2xl bg-white/10">
            <div className="grid aspect-[4/3] place-items-center bg-gradient-to-br from-white/10 to-white/5 p-8 text-center text-white/60">
              <div>
                <p className="text-sm uppercase tracking-[0.2em]">Founder photo</p>
                <p className="mt-3 text-[15px] leading-relaxed">
                  Add a professional portrait here when available.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-white/10 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">Qualifications</p>
            <ul className="mt-6 space-y-3 text-[16px] text-white/85">
              <li>M.Tech in Energy (University Rank 1)</li>
              <li>BEE Certified Energy Auditor</li>
              <li>First Class Boiler Proficiency</li>
            </ul>
          </div>
        </div>
      </Reveal>
    </main>
  )
}
