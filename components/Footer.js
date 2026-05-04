import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-slate-50">
      <div className="container-page py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-brand-600 text-white font-bold">V</span>
            <span className="text-lg font-semibold tracking-tight text-slate-900">Vegastra</span>
          </div>
          <p className="mt-3 text-sm text-slate-600 max-w-md">
            Bespoke software development. We build tailored digital products that help businesses operate smarter.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><Link href="/about" className="hover:text-slate-900">About</Link></li>
            <li><Link href="/services" className="hover:text-slate-900">Services</Link></li>
            <li><Link href="/contact" className="hover:text-slate-900">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900">Products</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <a href="https://timora.co.uk" className="hover:text-slate-900">Timora &mdash; staff management SaaS</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="container-page py-6 text-xs text-slate-500 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <p>&copy; {new Date().getFullYear()} Vegastra Ltd. All rights reserved.</p>
          <p>Registered in the United Kingdom.</p>
        </div>
      </div>
    </footer>
  );
}
