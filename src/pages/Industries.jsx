import { Reveal } from '../ui/Reveal'
import { getIndustrialImage } from '../data/images'

const hashString = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) hash = str.charCodeAt(i) + ((hash << 5) - hash);
  return Math.abs(hash);
};

const industries = [
  {
    name: 'Chemical Industry',
    text: 'Utility reliability, steam balance, and energy optimization for continuous and batch operations.',
  },
  {
    name: 'Pharmaceutical Industry',
    text: 'Clean utility performance, compliance-oriented checks, and stable steam/thermal support.',
  },
  {
    name: 'Food Processing Industry',
    text: 'Thermal energy efficiency, hygiene-sensitive utility practices, and dependable plant uptime.',
  },
  {
    name: 'Textile Industry',
    text: 'Steam distribution, condensate recovery, and energy cost control across processing lines.',
  },
  {
    name: 'Hospitality Industry',
    text: 'Boiler and thermal utility performance for comfort loads and operational cost management.',
  },
  {
    name: 'Manufacturing Industry',
    text: 'Integrated utilities, maintenance strategy, and troubleshooting for production-critical systems.',
  },
  {
    name: 'Automotive Industry',
    text: 'NVH, vibration isolation, and acoustic engineering support where applicable to programs.',
  },
  {
    name: 'Aerospace Industry',
    text: 'Specialized acoustic and vibration-related technical support aligned to project needs.',
  },
  {
    name: 'Railways',
    text: 'Noise, vibration, and reliability-oriented engineering support for relevant applications.',
  },
  {
    name: 'Marine Sector',
    text: 'Acoustic and vibration solutions aligned to marine operating environments (as applicable).',
  },
  {
    name: 'Energy and Infrastructure Sector',
    text: 'Utility performance, efficiency improvement, and technical support for critical infrastructure.',
  },
]

export default function Industries() {
  return (
    <main className="section-wrap space-y-10 pb-14">
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
            <div key={i.name} className="group overflow-hidden rounded-2xl flex flex-col border border-white/10 bg-white/10">
              <div className="relative h-40 w-full shrink-0 overflow-hidden">
                <img
                  src={getIndustrialImage(hashString(i.name))}
                  alt={i.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-steam-navy/15 mix-blend-multiply transition-colors duration-500 group-hover:bg-steam-navy/0" />
              </div>
              <div className="p-7 flex-grow">
                <h2 className="text-xl font-semibold text-white">{i.name}</h2>
                <p className="mt-3 text-[14px] leading-relaxed text-white/75">{i.text}</p>
              </div>
            </div>
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
