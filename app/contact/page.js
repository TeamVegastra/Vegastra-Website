export const metadata = {
  title: 'Contact',
  description: 'Get in touch with Vegastra. UK-based bespoke software studio.',
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 to-white">
        <div className="container-page py-20">
          <span className="inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">
            Contact
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Let&apos;s build something useful.
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-3xl">
            Send us a quick note about your project and we&apos;ll be in touch within one working day.
          </p>
        </div>
      </section>

      <section className="container-page py-20 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Get in touch</h2>
          <p className="mt-3 text-slate-600">
            We work with clients across the UK and Europe, remotely and on-site.
          </p>
          <dl className="mt-8 space-y-4 text-sm">
            <div>
              <dt className="font-semibold text-slate-900">Email</dt>
              <dd className="mt-1 text-slate-600">
                <a href="mailto:team@vegastra.co.uk" className="text-brand-700 hover:underline">team@vegastra.co.uk</a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">Location</dt>
              <dd className="mt-1 text-slate-600">United Kingdom</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">Hours</dt>
              <dd className="mt-1 text-slate-600">Mon &ndash; Fri, 9:00 &ndash; 18:00 GMT</dd>
            </div>
          </dl>
        </div>

        <form
          className="rounded-xl border border-slate-200 bg-white p-6 md:p-8 space-y-4"
          action="mailto:team@vegastra.co.uk"
          method="post"
          encType="text/plain"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-slate-700">Name</label>
              <input
                name="name"
                type="text"
                required
                className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Email</label>
              <input
                name="email"
                type="email"
                required
                className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                placeholder="jane@company.com"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700">Company</label>
            <input
              name="company"
              type="text"
              className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
              placeholder="Acme Ltd"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700">How can we help?</label>
            <textarea
              name="message"
              rows={5}
              required
              className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
              placeholder="Tell us about your project..."
            />
          </div>
          <button type="submit" className="btn-primary w-full md:w-auto">Send message</button>
          <p className="text-xs text-slate-500">
            By sending this message you agree to our basic processing of your contact details for the purposes of replying. We don&apos;t use your data for anything else.
          </p>
        </form>
      </section>
    </>
  );
}
