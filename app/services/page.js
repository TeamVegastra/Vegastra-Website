import Link from 'next/link';

export const metadata = {
  title: 'Services',
  description: 'Bespoke software development services from Vegastra: custom platforms, SaaS products, integrations and support.',
};

const services = [
  {
    title: 'Custom web platforms',
    body: 'Tailored web applications, internal tools and operations dashboards designed around your real workflows. We replace spreadsheets, glue scripts and clunky off-the-shelf tools with something that actually fits.',
    items: ['Internal tools & admin dashboards', 'Customer portals', 'Operations & workflow software'],
  },
  {
    title: 'SaaS product development',
    body: 'From early MVP to scale-ready platform. We help product teams ship reliable, well-designed software customers love &mdash; and stay on as a long-term engineering partner if needed.',
    items: ['MVP development', 'Multi-tenant SaaS platforms', 'Billing, auth & onboarding flows'],
  },
  {
    title: 'Integrations & automation',
    body: 'Stop copying data between systems. We integrate the tools you already use and automate the repetitive admin work so your team can focus on the work only humans can do.',
    items: ['API integrations', 'Workflow automation', 'Data pipelines & syncs'],
  },
  {
    title: 'Maintenance & support',
    body: 'Software is never finished. We offer ongoing maintenance, performance monitoring and feature development for the products we ship &mdash; and for systems built by other teams.',
    items: ['Bug fixes & patching', 'Performance & uptime monitoring', 'Roadmap & feature delivery'],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 to-white">
        <div className="container-page py-20">
          <span className="inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">
            Services
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Software services, end to end.
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-3xl">
            Whether you need a dedicated product team, a one-off internal tool, or someone to take care of an existing system &mdash; we can help.
          </p>
        </div>
      </section>

      <section className="container-page py-20 space-y-10">
        {services.map((s) => (
          <div key={s.title} className="grid md:grid-cols-3 gap-8 border-b border-slate-200 pb-10 last:border-0">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">{s.title}</h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-slate-600">{s.body}</p>
              <ul className="mt-5 space-y-2">
                {s.items.map((i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-brand-100 text-brand-700 text-[11px] font-bold">&#10003;</span>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-slate-50 border-y border-slate-200">
        <div className="container-page py-16 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Not sure which fits?</h2>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">
            Tell us a bit about your project and we&apos;ll suggest the right approach &mdash; even if that means recommending you don&apos;t build anything at all.
          </p>
          <div className="mt-6">
            <Link href="/contact" className="btn-primary">Talk to us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
