import { Link } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'
import { Reveal } from '../ui/Reveal'
import { getIndustrialImage } from '../data/images'

const hashString = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) hash = str.charCodeAt(i) + ((hash << 5) - hash);
  return Math.abs(hash);
};

function TopicCard({ title, body }) {
  const imgSrc = getIndustrialImage(hashString(title));
  return (
    <div className="group overflow-hidden flex flex-col rounded-2xl border border-white/10 bg-white/10">
      <div className="relative h-48 w-full shrink-0 overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-steam-navy/15 mix-blend-multiply transition-colors duration-500 group-hover:bg-steam-navy/0" />
      </div>
      <div className="p-7 flex-grow">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-4 text-[14px] leading-relaxed text-white/80">{body}</p>
      </div>
    </div>
  )
}

export default function Training() {
  return (
    <main className="section-wrap space-y-10 pb-14">
      <Reveal className="relative overflow-hidden rounded-2xl bg-steam-navy p-6 text-white md:p-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.12),transparent_40%)]" />
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-brand text-steam-flame">
            Training programs
          </p>
          <h1 className="mt-4 font-display text-4xl uppercase tracking-wide text-white md:text-[56px] md:leading-[1.05]">
            Training
          </h1>
          <p className="mt-6 max-w-4xl text-[17px] leading-[1.45] text-white/80">
            SteamCore Energy Engineering LLP provides training programs designed to improve knowledge,
            skills, and practical understanding of industrial utility systems and boiler operations. Our
            training sessions are focused on real plant requirements and technical improvement.
          </p>
        </div>
      </Reveal>

      <Reveal className="rounded-2xl bg-steam-panel p-6 md:p-10">
        <h2 className="text-3xl font-bold tracking-tight text-steam-navy md:text-[44px] md:leading-[1.08]">
          Training introduction
        </h2>
        <p className="mt-6 max-w-4xl text-[16px] leading-[1.55] text-steam-body/95">
          We provide training programs for industrial teams, engineers, and operators. The focus is on
          practical knowledge, system awareness, and better handling of utility and boiler-related
          operations—so participants can apply learning directly in the plant environment.
        </p>
      </Reveal>

      <Reveal className="rounded-2xl bg-steam-navy p-6 text-white md:p-10">
        <div className="grid gap-4 lg:grid-cols-2">
          <TopicCard
            title="Boiler operation training"
            body="Training on boiler operation, safety checks, combustion basics, blowdown control, and preventive maintenance practices—helping plant staff operate boiler systems safely and efficiently."
          />
          <TopicCard
            title="Energy efficiency programs"
            body="Programs covering energy savings, waste heat recovery, fuel reduction, and utility optimization—showing how teams can reduce energy loss and improve plant performance."
          />
          <TopicCard
            title="Utility system awareness sessions"
            body="Sessions on steam systems, condensate systems, pressure issues, flow imbalance, and general utility understanding—so teams can handle day-to-day plant utility issues more confidently."
          />
          <TopicCard
            title="Troubleshooting and maintenance training"
            body="Training on root cause analysis, preventive maintenance, reliability improvement, and structured problem-solving methods—especially useful for technical teams in industrial plants."
          />
          <TopicCard
            title="Exam-oriented support"
            body="Exam-oriented training for BOE and Attendant-related preparation—useful for candidates preparing for boiler-related examinations."
          />
        </div>
      </Reveal>

      <Reveal className="rounded-2xl bg-steam-panel p-6 md:p-10">
        <h2 className="text-3xl font-bold tracking-tight text-steam-navy md:text-[44px] md:leading-[1.08]">
          Target audience
        </h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            'Plant engineers',
            'Operators',
            'Maintenance staff',
            'Utility teams',
            'Technical supervisors',
            'Students or exam candidates',
          ].map((t) => (
            <div key={t} className="panel-elevated px-5 py-4 text-[14px] font-semibold text-steam-navy">
              {t}
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="rounded-2xl bg-steam-navy p-6 text-white md:p-10">
        <h2 className="font-display text-2xl uppercase tracking-wide text-white md:text-[36px]">
          Quick topic list
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            'Boiler operation training',
            'Energy efficiency programs',
            'Utility system awareness sessions',
            'Exam-oriented training (BOE / Attendant)',
          ].map((t) => (
            <div key={t} className="rounded-2xl bg-white/10 p-7 text-[16px] text-white/85">
              {t}
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link
            to="/contact"
            className="btn-cta inline-flex text-[15px]"
          >
            Contact for training
          </Link>
        </div>
      </Reveal>
    </main>
  )
}
