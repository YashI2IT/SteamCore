import { motion as Motion } from 'framer-motion'
import { FlaskConical, Pill, Utensils, Scissors, Building, Factory, Car, Plane, Train, Ship, Zap } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import HoverVideoMedia from '../ui/HoverVideoMedia'
import { getIndustrialImage } from '../data/images'
import { getIndustrialVideo } from '../data/videos'

const hashString = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) hash = str.charCodeAt(i) + ((hash << 5) - hash);
  return Math.abs(hash);
};

const industries = [
  {
    name: 'Chemical Industry',
    icon: FlaskConical,
    text: 'Utility reliability, steam balance, and energy optimization for continuous and batch operations.',
  },
  {
    name: 'Pharmaceutical Industry',
    icon: Pill,
    text: 'Clean utility performance, compliance-oriented checks, and stable steam/thermal support.',
  },
  {
    name: 'Food Processing Industry',
    icon: Utensils,
    text: 'Thermal energy efficiency, hygiene-sensitive utility practices, and dependable plant uptime.',
  },
  {
    name: 'Textile Industry',
    icon: Scissors,
    text: 'Steam distribution, condensate recovery, and energy cost control across processing lines.',
  },
  {
    name: 'Hospitality Industry',
    icon: Building,
    text: 'Boiler and thermal utility performance for comfort loads and operational cost management.',
  },
  {
    name: 'Manufacturing Industry',
    icon: Factory,
    text: 'Integrated utilities, maintenance strategy, and troubleshooting for production-critical systems.',
  },
  {
    name: 'Automotive Industry',
    icon: Car,
    text: 'NVH, vibration isolation, and acoustic engineering support where applicable to programs.',
  },
  {
    name: 'Aerospace Industry',
    icon: Plane,
    text: 'Specialized acoustic and vibration-related technical support aligned to project needs.',
  },
  {
    name: 'Railways',
    icon: Train,
    text: 'Noise, vibration, and reliability-oriented engineering support for relevant applications.',
  },
  {
    name: 'Marine Sector',
    icon: Ship,
    text: 'Acoustic and vibration solutions aligned to marine operating environments (as applicable).',
  },
  {
    name: 'Energy and Infrastructure Sector',
    icon: Zap,
    text: 'Utility performance, efficiency improvement, and technical support for critical infrastructure.',
  },
]

export default function Industries() {
  return (
    <main className="section-wrap space-y-10 pb-14 pt-6">
      <Reveal className="rounded-2xl bg-steam-panel p-6 md:p-10">
        <h1 className="text-4xl font-bold tracking-tight text-steam-navy md:text-[56px] md:leading-[1.05]">
          Industries We Serve
        </h1>
        <p className="mt-6 max-w-4xl text-[17px] leading-[1.45] text-steam-body">
          SteamCore Energy Engineering LLP provides engineering and utility support to a wide range
          of industries. Our services are useful for sectors where steam systems, utilities,
          reliability, and energy efficiency are important for smooth operations.
        </p>
        <p className="mt-4 max-w-4xl text-[16px] leading-[1.55] text-steam-body/95">
          Services are customized based on industry needs, plant constraints, and the specific
          performance outcomes you want to achieve.
        </p>
      </Reveal>

      <Reveal className="rounded-2xl bg-steam-navy p-6 text-white md:p-10">
        <div className="grid gap-4 md:grid-cols-2">
          {industries.map((i) => (
            <Motion.div
              key={i.name}
              whileHover={{ y: -6 }}
              className="card-dark group flex flex-col overflow-hidden"
            >
              <div className="relative h-40 w-full shrink-0 overflow-hidden">
                <HoverVideoMedia
                  posterSrc={getIndustrialImage(hashString(i.name))}
                  videoSrc={getIndustrialVideo(hashString(i.name))}
                  alt={i.name}
                  overlayClassName="bg-steam-navy/15 mix-blend-multiply group-hover:bg-steam-navy/0"
                />
              </div>
              <div className="p-7 flex-grow">
                <h2 className="flex items-center gap-3 text-2xl font-display uppercase leading-[0.95] text-white">
                  {i.icon && <i.icon size={28} className="text-steam-green shrink-0" />}
                  {i.name}
                </h2>
                <p className="mt-3 text-[14px] leading-relaxed text-white/75">{i.text}</p>
              </div>
            </Motion.div>
          ))}
        </div>
      </Reveal>

      <Reveal className="rounded-2xl bg-steam-panel p-6 md:p-10">
        <h2 className="text-2xl font-bold tracking-tight text-steam-navy md:text-[36px]">
          Why this page matters
        </h2>
        <p className="mt-6 max-w-4xl text-[16px] leading-[1.55] text-steam-body/95">
          It helps clients quickly see whether SteamCore’s engineering focus matches their sector
          and operational challenges—from process steam to utilities, reliability, and energy
          management.
        </p>
      </Reveal>
    </main>
  )
}
