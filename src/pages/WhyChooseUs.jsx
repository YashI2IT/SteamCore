import { Reveal } from '../ui/Reveal'

export default function WhyChooseUs() {
  return (
    <main className="section-wrap space-y-10 pb-14">
      <Reveal className="rounded-2xl bg-steam-panel p-6 md:p-10">
        <h1 className="text-4xl font-bold tracking-tight text-steam-navy md:text-[56px] md:leading-[1.05]">
          Why Choose SteamCore Energy Engineering LLP?
        </h1>
        <p className="mt-6 max-w-4xl text-[17px] leading-[1.45] text-steam-body">
          SteamCore Energy Engineering LLP is a trusted engineering consultancy known for practical,
          reliable, and technically strong solutions. The company focuses on improving system
          reliability, reducing energy consumption, and supporting safe and compliant operations.
        </p>
      </Reveal>

      <Reveal className="rounded-2xl bg-steam-navy p-6 text-white md:p-10">
        <h2 className="font-display text-3xl uppercase tracking-wide text-white md:text-[44px] md:leading-[1.08]">
          Our strengths
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            'Strong industry experience',
            'Technical expertise in utility and process systems',
            'Custom solutions based on plant requirements',
            'Fast turnaround and practical field support',
            'Root-cause driven troubleshooting',
            'Focus on reliability, energy optimization, and compliance',
          ].map((t) => (
            <div key={t} className="rounded-2xl bg-white/10 p-6 text-[15px] text-white/85 md:text-[16px]">
              {t}
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="rounded-2xl bg-steam-panel p-6 md:p-10">
        <h2 className="text-2xl font-bold tracking-tight text-steam-navy md:text-[36px]">Customer value</h2>
        <p className="mt-6 max-w-4xl text-[16px] leading-[1.55] text-steam-body/95">
          Clients choose SteamCore when they need engineering judgement that translates into safer
          operations, clearer priorities, and improvements that can be implemented with plant teams —
          not generic reports that do not reflect real constraints.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            'Clear technical diagnosis and structured recommendations',
            'Support through implementation, commissioning, and performance checks',
            'Training and capability building for sustainable results',
          ].map((t) => (
            <div key={t} className="panel-elevated p-6 text-[14px] text-steam-body">
              {t}
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="rounded-2xl bg-steam-navy p-6 text-white md:p-10">
        <h2 className="font-display text-2xl uppercase tracking-wide md:text-[36px]">
          Why this page matters
        </h2>
        <p className="mt-6 max-w-4xl text-[16px] leading-[1.55] text-white/75">
          Industrial clients need confidence before engaging consultants on utilities and energy.
          This page summarizes the strengths, technical advantages, and trust signals that define
          how SteamCore works with plants.
        </p>
      </Reveal>
    </main>
  )
}
