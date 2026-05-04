import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50 to-white" />
        <div className="container-page py-24 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">
              Bespoke software development
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
              Software, built around the way you actually work.
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-2xl">
              Vegastra partners with ambitious businesses to design, build and run tailored digital products &mdash; from internal tools to customer-facing platforms.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">Start a project</Link>
              <Link href="/services" className="btn-secondary">See what we do</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-slate-200 bg-white">
        <div className="container-page py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            ['10+', 'Years of experience'],
            ['3+', 'Projects delivered'],
            ['UK', 'Based & supported'],
            ['ISO', 'Aligned processes'],
          ].map(([k, v]) => (
            <div key={v}>
              <div className="text-2xl font-bold text-slate-900">{k}</div>
              <div className="text-sm text-slate-500 mt-1">{v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What we do */}
      <section className="container-page py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">What we do</h2>
          <p className="mt-3 text-slate-600">
            We work with you end-to-end &mdash; discovery, design, engineering, deployment and long-term support.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Custom web platforms',
              body: 'Tailored web applications, dashboards and internal tools designed around your workflow.',
            },
            {
              title: 'SaaS product development',
              body: 'From MVP to scale &mdash; we help product teams ship reliable software customers love.',
            },
            {
              title: 'Integrations & automation',
              body: 'Connect the systems you already use and remove repetitive work with smart automation.',
            },
          ].map((c) => (
            <div key={c.title} className="rounded-xl border border-slate-200 p-6 bg-white hover:border-brand-300 transition-colors">
              <h3 className="text-lg font-semibold text-slate-900">{c.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured product */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="container-page py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">
              Our product
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
              Meet Timora &mdash; staff management, sorted.
            </h2>
            <p className="mt-3 text-slate-600">
              Timora is our flagship SaaS product. It gives growing teams a simple way to handle rotas, time tracking, leave and HR admin in one place.
            </p>
            <div className="mt-6">
              <a href="https://timora.co.uk" className="btn-primary">Visit timora.co.uk</a>
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="space-y-3">
              {['Rota planning', 'Time & attendance', 'Leave management', 'Reporting & exports'].map((t) => (
                <div key={t} className="flex items-center gap-3 text-sm text-slate-700">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-100 text-brand-700 text-xs font-bold">&#10003;</span>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-20 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Have a project in mind?</h2>
        <p className="mt-3 text-slate-600 max-w-xl mx-auto">
          Tell us about the problem you&apos;re trying to solve. We&apos;ll get back to you within one working day.
        </p>
        <div className="mt-6">
          <Link href="/contact" className="btn-primary">Get in touch</Link>
        </div>
      </section>
    </>
  );
}
