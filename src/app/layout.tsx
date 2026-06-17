/*
File Name     : layout.tsx
Version       : v0.1.0
Created       : 2026-06-17
Last Modified : 2026-06-17
Author        : Nouramon Alvestrasza
Organization  : Alvestrasza Corporation
Description   : Root application layout, metadata, fonts, header and footer.
*/

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Cinzel, Inter } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/lib/site';

const inter = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
const cinzel = Cinzel({ subsets: ['latin'], variable: '--font-headline', display: 'swap' });

export const metadata: Metadata = {
  title: {
    default: 'Alvestrasza Corporation',
    template: '%s | Alvestrasza Corporation'
  },
  description: 'Public company website for Alvestrasza Corporation, focused on IT services, secure operations and technical education.',
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: 'Alvestrasza Corporation',
    description: siteConfig.tagline,
    url: siteConfig.url,
    siteName: siteConfig.company,
    images: ['/assets/alvestrasza-logo.png'],
    type: 'website'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable}`}>
      <body style={{ fontFamily: 'var(--font-body), Inter, system-ui, sans-serif' }}>
        <div className="site-shell">
          <header className="header">
            <div className="container header-inner">
              <Link href="/" className="brand" aria-label="Alvestrasza Corporation home">
                <Image src="/assets/alvestrasza-logo.png" alt="Alvestrasza Corporation logo" width={92} height={92} className="brand-logo" priority />
                <span>
                  <span className="brand-title">Alvestrasza Corporation</span>
                  <span className="brand-subtitle">IT Services & Secure Operations</span>
                </span>
              </Link>
              <nav className="nav" aria-label="Main navigation">
                <Link href="/">Home</Link>
                <Link href="/it-service">IT Service</Link>
                <Link href="/contact">Contact</Link>
              </nav>
            </div>
          </header>
          {children}
          <footer className="footer">
            <div className="container footer-inner">
              <span>© {new Date().getFullYear()} {siteConfig.company}</span>
              <span>Postmaster: <a href={`mailto:${siteConfig.postmaster}`}>{siteConfig.postmaster}</a></span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
