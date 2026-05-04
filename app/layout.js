import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: {
    default: 'Vegastra — Bespoke Software Development',
    template: '%s | Vegastra',
  },
  description:
    'Vegastra builds bespoke software for ambitious businesses. We design, develop and support tailored digital products that fit how you actually work.',
  metadataBase: new URL('https://vegastra.co.uk'),
  openGraph: {
    title: 'Vegastra — Bespoke Software Development',
    description: 'Tailored software, built for the way you actually work.',
    url: 'https://vegastra.co.uk',
    siteName: 'Vegastra',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
