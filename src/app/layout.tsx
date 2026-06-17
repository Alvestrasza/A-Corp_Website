/*
File Name     : layout.tsx
Version       : v0.1.1
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
import { navigationItems, siteConfig } from '@/lib/site';

const inter = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
const cinzel = Cinzel({ subsets: ['latin'], variable: '--font-headline', display: 'swap' });

export const metadata: Metadata = {
  title: {
    default: 'Alvestrasza Corporation',
    template: '%s | Alvestrasza Corporation'
  },
  description: 'Public company website for Alvestrasza Corporation, focused on secure systems, strategic insight and IT services.',
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: 'Alvestrasza Corporation',
    description: siteConfig.tagline,
    url: siteConfig.url,
    siteName: siteConfig.company,
    images: ['/assets/alvestrasza-emblem-transparent.png'],
    type: 'website'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable}`}>
      <body>
        <div className="site-shell">
          <header className="header">
            <div className="header-inner">
              <Link href="/" className="brand" aria-label="Alvestrasza Corporation home">
                <Image src="/assets/alvestrasza-emblem-transparent.png" alt="Alvestrasza Corporation logo" width={80} height={80} className="brand-logo" priority />
                <span className="brand-wordmark">
                  <span className="brand-title">Alvestrasza</span>
                  <span className="brand-subtitle">Corporation</span>
                </span>
              </Link>
              <nav className="nav" aria-label="Main navigation">
                {navigationItems.map((item) => (
                  <Link href={item.href} key={item.href}>{item.label}</Link>
                ))}
                <span className="nav-accent" aria-hidden="true" />
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
