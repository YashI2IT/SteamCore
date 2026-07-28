import { Link } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'
import { GraduationCap, Users, BookOpen, Send } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import HoverVideoMedia from '../ui/HoverVideoMedia'
import { getIndustrialImage } from '../data/images'
import { getIndustrialVideo } from '../data/videos'

function TopicCard({ title, body }) {
  const imgSrc = getIndustrialImage(title);
  const videoSrc = getIndustrialVideo(0);
  return (
    <Motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="card-dark group flex h-full flex-col overflow-hidden"
    >
      <div className="relative h-48 w-full shrink-0 overflow-hidden">
        <HoverVideoMedia
          posterSrc={imgSrc}
          videoSrc={videoSrc}
          alt={title}
          overlayClassName="bg-steam-navy/15 mix-blend-multiply group-hover:bg-steam-navy/0"
        />
      </div>
      <div className="p-7 flex-grow">
        <h3 className="font-display text-4xl uppercase leading-[0.95] text-white">{title}</h3>
        <p className="mt-4 text-[14px] leading-relaxed text-white/80">{body}</p>
      </div>
    </Motion.div>
  )
}

export default function Training() {
  return (
    <main className="section-wrap space-y-10 pb-16 pt-6">
      <Reveal className="relative overflow-hidden rounded-[34px] border-2 border-steam-navy/90 bg-steam-purple p-6 text-white md:p-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.12),transparent_40%)]" />
        <div className="relative">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-brand text-steam-flame">
            <GraduationCap size={18} /> Training programs
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

      <Reveal className="rounded-[34px] border-2 border-steam-navy/90 bg-steam-navy p-6 text-white md:p-10">
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

      <Reveal className="rounded-[34px] border-2 border-steam-navy/85 bg-steam-panel p-6 md:p-10">
        <h2 className="text-3xl font-display uppercase tracking-tight text-steam-navy md:text-[54px] md:leading-[1]">
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
            <Motion.div key={t} whileHover={{ y: -4 }} className="panel-elevated px-5 py-4 text-[14px] font-semibold text-steam-navy flex items-center gap-2">
              <Users size={16} className="text-steam-green shrink-0" />
              {t}
            </Motion.div>
          ))}
        </div>
      </Reveal>

      <Reveal className="rounded-[34px] border-2 border-steam-navy/90 bg-steam-purple p-6 text-white md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h2 className="font-display text-2xl uppercase tracking-wide text-white md:text-[36px]">
            Ready to upgrade your team's skills?
          </h2>
          <p className="mt-4 text-[16px] text-white/80 max-w-2xl">
            Reach out today to discuss customized training programs for your plant operators and engineers.
          </p>
        </div>
        <Link
          to="/contact"
          className="btn-cta inline-flex shrink-0 items-center gap-2 rounded-full text-[15px] whitespace-nowrap"
        >
          <Send size={18} /> Contact for training
        </Link>
      </Reveal>
    </main>
  )
}
