import { motion as Motion } from 'framer-motion'
import { Award, CheckCircle2 } from 'lucide-react'
import { Reveal } from '../ui/Reveal'

export default function Founder() {
  return (
    <main className="section-wrap space-y-10 pb-14 pt-6">
      <Reveal className="rounded-2xl bg-steam-panel p-6 md:p-10">
        <p className="text-xs font-semibold uppercase tracking-brand text-steam-green">
          Founder / Leadership
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-steam-navy md:text-[56px] md:leading-[1.05]">
          About the Founder
        </h1>
        <p className="mt-6 max-w-4xl text-[17px] leading-[1.45] text-steam-body">
          Ajit D Jawale is the founder of SteamCore Energy Engineering LLP. He is an experienced
          engineering professional with more than 24 years of experience in utilities and energy
          systems across chemical, paper, and sugar industries. His technical background and field
          experience help the company deliver practical and reliable engineering solutions.
        </p>
      </Reveal>

      <Reveal className="grid gap-6 rounded-2xl bg-steam-navy p-6 text-white md:grid-cols-[1fr_1.15fr] md:p-10">
        <Motion.div whileHover={{ y: -4 }} className="card-dark flex flex-col justify-center p-8">
          <p className="text-sm font-semibold uppercase tracking-brand text-steam-flame">Founder</p>
          <p className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">Ajit D Jawale</p>
          <p className="mt-3 text-[15px] text-white/70">Founder & Lead Consultant</p>
          <p className="mt-6 text-[15px] leading-relaxed text-white/80">
            He leads SteamCore’s technical direction, client engagements, and quality of delivery
            across boiler systems, utilities, energy optimization, and plant reliability assignments.
          </p>
        </Motion.div>
        <Motion.div whileHover={{ y: -4 }} className="card-dark p-8">
          <p className="text-sm font-semibold uppercase tracking-brand text-steam-flame">Qualifications</p>
          <ul className="mt-6 space-y-3 text-[15px] leading-relaxed text-white/85 md:text-[16px]">
            <li className="flex gap-2 items-start"><Award size={20} className="text-steam-orange shrink-0 mt-0.5" /> M.Tech in Energy (University Rank 1)</li>
            <li className="flex gap-2 items-start"><Award size={20} className="text-steam-orange shrink-0 mt-0.5" /> BEE Certified Energy Auditor</li>
            <li className="flex gap-2 items-start"><Award size={20} className="text-steam-orange shrink-0 mt-0.5" /> First Class Boiler Proficiency</li>
            <li className="flex gap-2 items-start"><Award size={20} className="text-steam-orange shrink-0 mt-0.5" /> Board Member, BOE & Attendant Exams (Government of Maharashtra)</li>
          </ul>
          <p className="mt-8 text-sm font-semibold uppercase tracking-brand text-steam-flame">
            Experience summary
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-white/80">
            Deep hands-on experience in industrial utilities and energy systems, with a strong
            orientation to field diagnosis, structured engineering, and sustainable performance
            improvement for process plants.
          </p>
        </Motion.div>
      </Reveal>

      <Reveal className="rounded-2xl bg-steam-panel p-6 md:p-10">
        <h2 className="text-3xl font-bold tracking-tight text-steam-navy md:text-[44px] md:leading-[1.08]">
          Professional strengths
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            'Strong industry experience across chemical, paper, and sugar sectors',
            'Technical expertise in steam, boiler, and utility systems',
            'Practical, root-cause oriented troubleshooting and commissioning support',
            'Energy optimization, audits, and measurable improvement programs',
            'Training and capability building for plant teams',
            'Regulatory awareness and compliance-oriented engineering support',
          ].map((t) => (
            <Motion.div key={t} whileHover={{ y: -4 }} className="panel-elevated p-6 text-[15px] text-steam-navy/90 flex items-start gap-3">
              <CheckCircle2 size={24} className="text-steam-green shrink-0 mt-0.5" />
              {t}
            </Motion.div>
          ))}
        </div>
      </Reveal>

      <Reveal className="rounded-2xl bg-steam-navy p-6 text-white md:p-10">
        <h2 className="font-display text-2xl uppercase tracking-wide md:text-[36px] md:leading-[1.12]">
          Why this page matters
        </h2>
        <p className="mt-6 max-w-4xl text-[16px] leading-[1.55] text-white/75">
          Leadership credibility is essential for industrial engineering partnerships. This
          profile highlights the experience, qualifications, and practical orientation behind
          SteamCore’s delivery model.
        </p>
      </Reveal>
    </main>
  )
}
