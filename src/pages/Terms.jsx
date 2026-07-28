import { Reveal } from '../ui/Reveal'

export default function Terms() {
  return (
    <main className="section-wrap pb-20 pt-10">
      <Reveal className="panel-elevated p-8 md:p-14">
        <h1 className="text-3xl font-bold tracking-tight text-steam-navy md:text-5xl">Terms of Service</h1>
        <p className="mt-4 text-steam-body/70 text-[15px]">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-steam-body">
          <section>
            <h2 className="text-xl font-bold text-steam-navy mb-3">1. Agreement to Terms</h2>
            <p>
              By accessing our website and utilizing our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-steam-navy mb-3">2. Intellectual Property Rights</h2>
            <p>
              Other than the content you own, under these Terms, SteamCore Energy Engineering LLP and/or its licensors own all the intellectual property rights and materials contained in this Website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-steam-navy mb-3">3. Restrictions</h2>
            <p>You are specifically restricted from all of the following:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Publishing any Website material in any other media</li>
              <li>Selling, sublicensing and/or otherwise commercializing any Website material</li>
              <li>Using this Website in any way that is or may be damaging to this Website</li>
              <li>Using this Website contrary to applicable laws and regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-steam-navy mb-3">4. Limitation of Liability</h2>
            <p>
              In no event shall SteamCore Energy Engineering LLP, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this Website.
            </p>
          </section>
        </div>
      </Reveal>
    </main>
  )
}
