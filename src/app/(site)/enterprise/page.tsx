import Link from "next/link";

export default function EnterprisePage() {
  return (
    <div className="min-h-screen pb-20">
      <section className="section pt-16 lg:pt-24 text-center">
        <div className="mx-auto max-w-4xl space-y-8">
          <p className="text-sm font-black uppercase tracking-[0.4em] text-sand/50">
            Platform
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tighter text-sand md:text-7xl">
            A shared platform for enduring companies
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-sand/70 md:text-xl">
            Holdry provides operational support, capital discipline, and governance infrastructure to help operating
            companies scale responsibly.
          </p>
        </div>
      </section>

      <section className="section py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Strategic Support",
              desc: "Executive partnership on growth planning, capital allocation, and risk management."
            },
            {
              title: "Shared Services",
              desc: "Finance, analytics, and procurement support tailored to each operating company."
            },
            {
              title: "Governance",
              desc: "Clear reporting frameworks that keep leadership teams aligned and empowered."
            }
          ].map((benefit) => (
            <div key={benefit.title} className="card border border-white/10 bg-midnight/40 p-8 space-y-4">
              <h3 className="text-lg font-bold text-sand">{benefit.title}</h3>
              <p className="text-sm text-sand/60 leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section py-10">
        <div className="mx-auto max-w-3xl rounded-[2.5rem] border border-white/10 bg-midnight/50 p-8 md:p-16 shadow-2xl">
          <div className="mb-10 text-center space-y-4">
            <h2 className="text-3xl font-black tracking-tight text-sand">Operating model</h2>
            <p className="text-sand/60">
              We build resilient infrastructure so portfolio leadership teams can focus on customers, teams, and execution.
            </p>
          </div>

          <div className="grid gap-6">
            {[
              "Dedicated operating partners and quarterly cadence",
              "Capital allocation discipline with long-term planning",
              "People-first leadership development",
              "Technology modernization where it creates leverage"
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 text-sand/70">
                <span className="mt-1 h-2 w-2 rounded-full bg-sand/60" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-8 text-center">
            <Link
              href="/partner"
              className="btn-primary flex w-full justify-center py-5 text-lg font-bold shadow-xl shadow-white/10"
            >
              Discuss the platform →
            </Link>
            <p className="mt-4 text-center text-xs text-sand/40 font-medium italic">
              Share your priorities and we will tailor our support to fit your needs.
            </p>
          </div>
        </div>
      </section>

      <section className="section py-16 text-center">
        <h3 className="text-xl font-bold text-sand mb-6">Ecosystem partners</h3>
        <div className="flex flex-wrap justify-center gap-8 opacity-40 grayscale">
          <span className="font-bold tracking-tighter text-2xl text-sand">FINANCE</span>
          <span className="font-bold tracking-tighter text-2xl text-sand">OPERATIONS</span>
          <span className="font-bold tracking-tighter text-2xl text-sand">ANALYTICS</span>
          <span className="font-bold tracking-tighter text-2xl text-sand">PEOPLE</span>
        </div>
      </section>
    </div>
  );
}
