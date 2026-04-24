import { motion as Motion } from 'framer-motion'
import { AlertCircle, Lightbulb, TrendingUp, Info, CheckCircle2 } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import HoverVideoMedia from '../ui/HoverVideoMedia'
import { getIndustrialImage } from '../data/images'
import { getIndustrialVideo } from '../data/videos'

function CaseStudyCard({ title, problem, solution, result, extra, image }) {
  const imgSrc = image || getIndustrialImage(title)
  const videoSrc = getIndustrialVideo(title.length)
  return (
    <Motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="group overflow-hidden rounded-[24px] border border-white/25 bg-white/[0.12] backdrop-blur-[2px]"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <HoverVideoMedia
          posterSrc={imgSrc}
          videoSrc={videoSrc}
          alt={title}
          overlayClassName="bg-steam-navy/15 mix-blend-multiply group-hover:bg-steam-navy/0"
        />
      </div>
      <div className="p-7">
        <h3 className="font-display text-4xl uppercase leading-[0.95] text-white md:text-5xl">{title}</h3>
        <div className="mt-6 space-y-4 text-[14px] leading-relaxed text-white/95">
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-brand text-steam-orange"><AlertCircle size={16} /> Problem</p>
            <p className="mt-2">{problem}</p>
          </div>
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-brand text-steam-orange"><Lightbulb size={16} /> Solution</p>
            <p className="mt-2">{solution}</p>
          </div>
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-brand text-steam-orange"><TrendingUp size={16} /> Result</p>
            <p className="mt-2">{result}</p>
          </div>
          {extra ? (
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-brand text-steam-orange"><Info size={16} /> Notes</p>
              <p className="mt-2">{extra}</p>
            </div>
          ) : null}
        </div>
      </div>
    </Motion.div>
  )
}

export default function Projects() {
  return (
    <main className="section-wrap space-y-10 pb-16 pt-6">
      <Reveal className="relative overflow-hidden rounded-[34px] border-2 border-steam-navy/85 bg-steam-panel p-6 md:p-10">
        <div className="pointer-events-none absolute -left-8 top-0 h-52 w-52 rounded-full bg-steam-purple/15 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-0 h-52 w-52 rounded-full bg-steam-orange/20 blur-3xl" />
        <h1 className="text-4xl font-display uppercase tracking-tight text-steam-navy md:text-[64px] md:leading-[1]">
          Projects / Case Studies
        </h1>
        <p className="mt-6 max-w-4xl text-[17px] leading-[1.45] text-steam-body">
          SteamCore Energy Engineering LLP has worked on several industrial engineering and utility
          improvement assignments. Our projects focus on boiler systems, energy efficiency,
          troubleshooting, reliability improvement, and technical support for process industries.
        </p>
        <p className="mt-4 max-w-4xl text-[16px] leading-[1.55] text-steam-body/95">
          The examples below illustrate typical problem statements, engineering approaches, and
          outcomes. Some items are representative case themes and can be updated with client-specific
          details when approvals are available.
        </p>
      </Reveal>

      <Reveal className="rounded-[34px] border-2 border-steam-navy/90 bg-steam-purple p-6 text-white md:p-10">
        <h2 className="font-display text-3xl uppercase tracking-wide text-white md:text-[44px] md:leading-[1.08]">
          Sample case studies
        </h2>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <CaseStudyCard
            title="Waste heat recovery implementation"
            problem="Significant thermal energy was being lost from flue gas and other reject streams, increasing fuel costs and reducing overall plant efficiency."
            solution="Structured heat integration assessment, feasibility screening, and implementation support for a waste heat recovery (WHR) concept aligned to operating limits and ROI targets."
            result="Improved energy efficiency, reduced energy loss, and better overall plant performance—with measurable savings potential depending on operating hours and implementation quality."
            extra="Company material references ~7% energy savings for a representative implementation; final outcomes should be validated through trials and monitoring."
          />
          <CaseStudyCard
            title="Boiler project execution (example: 16 TPH)"
            problem="A plant needed end-to-end technical support for boiler project execution, including vendor alignment, commissioning discipline, and performance validation."
            solution="Technical bid evaluation, vendor coordination, execution support, commissioning planning, and performance testing aligned to design and regulatory expectations."
            result="Successful commissioning and performance testing, demonstrating capability for complete technical project support from planning through handover."
            extra="This case highlights structured project engineering support—not just advisory reviews."
          />
          <CaseStudyCard
            title="Genset noise reduction"
            problem="High noise levels from generating sets were impacting nearby work areas and compliance expectations."
            solution="Acoustic assessment, mitigation options, and engineering support for noise control measures suited to site layout and maintenance access."
            result="Improved acoustic performance and better alignment with practical compliance targets (subject to measurement and local requirements)."
          />
          <CaseStudyCard
            title="Vehicle NVH optimization"
            problem="Noise and vibration characteristics needed improvement for product comfort and regulatory/market targets."
            solution="NVH-focused engineering support, test planning inputs, and solution direction for noise/vibration improvement pathways."
            result="Better NVH outcomes through structured problem framing and targeted countermeasures (program-dependent)."
          />
          <CaseStudyCard
            title="Tyre noise reduction"
            problem="Tyre/road noise needed reduction as part of product development or performance targets."
            solution="Noise engineering support aligned to measurement methods and design constraints for tyre-related noise improvement."
            result="Improved noise performance directionally, validated through the program’s test protocol."
          />
          <CaseStudyCard
            title="Industrial noise compliance"
            problem="Industrial noise levels created risk of non-compliance and workplace comfort issues."
            solution="Noise survey approach, source-path-receiver thinking, and mitigation recommendations for industrial environments."
            result="Better compliance posture and safer, more controlled acoustic conditions where implemented."
          />
          <CaseStudyCard
            title="Acoustic room / chamber"
            problem="A controlled acoustic environment was required for testing, quality, or operational needs."
            solution="Acoustic room/chamber concept support aligned to target criteria, construction interfaces, and measurement needs."
            result="Improved acoustic isolation and controlled test conditions suitable for the defined use case."
          />
          <CaseStudyCard
            title="Vibration isolation solutions"
            problem="Equipment vibration was affecting reliability, structures, or adjacent sensitive systems."
            solution="Isolation strategy, selection guidance, and implementation considerations for vibration control."
            result="Reduced vibration transmission and improved equipment/structural behavior where applied."
          />
        </div>
      </Reveal>

      <Reveal className="rounded-[34px] border-2 border-steam-navy/85 bg-steam-panel p-6 md:p-10">
        <h2 className="text-3xl font-display uppercase tracking-tight text-steam-navy md:text-[54px] md:leading-[1]">
          Results / achievements
        </h2>
        <p className="mt-6 max-w-4xl text-[16px] leading-[1.55] text-steam-body/95">
          Our work is focused on measurable improvements such as better efficiency, improved reliability,
          reduced operating costs, and stronger compliance—along with successful commissioning where
          projects are involved.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            'Improved energy efficiency',
            'Better system reliability',
            'Reduced fuel or energy loss',
            'Better compliance and safety',
            'Improved plant performance',
            'Energy savings through structured optimization and WHR',
          ].map((t) => (
            <Motion.div key={t} whileHover={{ y: -4 }} className="panel-elevated p-6 text-[15px] text-steam-navy/90 flex items-start gap-3">
              <CheckCircle2 size={24} className="text-steam-green shrink-0 mt-0.5" />
              {t}
            </Motion.div>
          ))}
        </div>
      </Reveal>

      <Reveal className="rounded-[34px] border-2 border-steam-navy/90 bg-steam-navy p-6 text-white md:p-10">
        <h2 className="font-display text-3xl uppercase tracking-wide md:text-[44px] md:leading-[1.08]">
          Industry relevance
        </h2>
        <p className="mt-6 max-w-4xl text-[16px] leading-[1.55] text-white/75">
          Utility and boiler improvements are common across process industries. Acoustic, NVH, and
          vibration projects are often relevant in broader industrial and mobility sectors.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {[
            'Chemical',
            'Pharmaceutical',
            'Food Processing',
            'Textile',
            'Hospitality',
            'Manufacturing',
            'Automotive',
            'Aerospace',
            'Railways',
            'Marine',
            'Energy and Infrastructure',
          ].map((t) => (
            <Motion.span
              key={t}
              whileHover={{ y: -2 }}
              className="rounded-full bg-white/10 px-4 py-2 text-[14px] font-medium text-white/85"
            >
              {t}
            </Motion.span>
          ))}
        </div>
      </Reveal>
    </main>
  )
}
