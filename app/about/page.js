export const metadata = {
  title: 'About',
  description: 'Vegastra is a UK-based software studio building bespoke products for ambitious businesses.',
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 to-white">
        <div className="container-page py-20">
          <span className="inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">
            About us
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            We turn business problems into reliable software.
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-3xl">
            Vegastra is a UK-based software studio. We work with founders and operations teams to design and build bespoke digital products &mdash; software that fits your workflow rather than forcing you to fit theirs.
          </p>
        </div>
      </section>

      <section className="container-page py-20 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Our story</h2>
          <p className="mt-3 text-slate-600">
            Vegastra was founded with a simple idea: most businesses are held back by software that almost-but-not-quite fits. Off-the-shelf tools force compromises, and integrations sprawl out of control. We build products that fit, and we stick around to keep them working as the business grows.
          </p>
          <p className="mt-3 text-slate-600">
            Today we serve clients across the UK with custom platforms, SaaS products and operational tooling. Our flagship product, Timora, is one of those tools &mdash; built originally for a client and now offered as a SaaS to other teams with the same problem.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">How we work</h2>
          <ul className="mt-3 space-y-4">
            {[
              ['Discovery first', 'We start by understanding your operations, not your tech stack.'],
              ['Small senior teams', 'Every project is staffed with senior engineers and designers.'],
              ['Iterate in the open', 'Weekly demos, transparent backlogs, no surprises at delivery.'],
              ['Long-term support', 'We support the software we ship for as long as you need it.'],
            ].map(([t, b]) => (
              <li key={t}>
                <div className="font-semibold text-slate-900">{t}</div>
                <div className="text-sm text-slate-600 mt-1">{b}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-200">
        <div className="container-page py-16">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Values we work by</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              ['Pragmatic', 'We pick the simplest tool that solves the problem well.'],
              ['Honest', 'Clear communication, even when the news is uncomfortable.'],
              ['Durable', 'We build software that stays useful for years, not weeks.'],
            ].map(([t, b]) => (
              <div key={t} className="rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="font-semibold text-slate-900">{t}</h3>
                <p className="mt-2 text-sm text-slate-600">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
