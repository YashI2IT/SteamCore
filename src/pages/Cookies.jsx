import { Reveal } from '../ui/Reveal'

export default function Cookies() {
  return (
    <main className="section-wrap pb-20 pt-10">
      <Reveal className="panel-elevated p-8 md:p-14">
        <h1 className="text-3xl font-bold tracking-tight text-steam-navy md:text-5xl">Cookie Policy</h1>
        <p className="mt-4 text-steam-body/70 text-[15px]">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-steam-body">
          <section>
            <h2 className="text-xl font-bold text-steam-navy mb-3">1. What are cookies?</h2>
            <p>
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-steam-navy mb-3">2. Why do we use cookies?</h2>
            <p>
              We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-steam-navy mb-3">3. How can I control cookies?</h2>
            <p>
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject.
            </p>
            <p className="mt-2">
              If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
            </p>
          </section>
        </div>
      </Reveal>
    </main>
  )
}
