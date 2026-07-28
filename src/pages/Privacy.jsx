import { Reveal } from '../ui/Reveal'

export default function Privacy() {
  return (
    <main className="section-wrap pb-20 pt-10">
      <Reveal className="panel-elevated p-8 md:p-14">
        <h1 className="text-3xl font-bold tracking-tight text-steam-navy md:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-steam-body/70 text-[15px]">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-steam-body">
          <section>
            <h2 className="text-xl font-bold text-steam-navy mb-3">1. Information We Collect</h2>
            <p>
              We collect information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website, or otherwise when you contact us.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-steam-navy mb-3">2. How We Use Your Information</h2>
            <p>We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-steam-navy mb-3">3. Will Your Information Be Shared?</h2>
            <p>
              We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-steam-navy mb-3">4. How Long Do We Keep Your Information?</h2>
            <p>
              We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law.
            </p>
          </section>
        </div>
      </Reveal>
    </main>
  )
}
