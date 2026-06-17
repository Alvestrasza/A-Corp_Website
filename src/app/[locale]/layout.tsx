/*
File Name     : layout.tsx
Version       : v0.1.0
Created       : 2026-06-17
Last Modified : 2026-06-17
Author        : Nouramon Alvestrasza
Organization  : Alvestrasza Corporation
Description   : Locale-aware application layout, metadata, fonts, header and footer.
*/

import { Cinzel, Inter } from 'next/font/google';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import MainNavigation from '@/components/MainNavigation';
import type { Metadata } from 'next';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
const cinzel = Cinzel({ subsets: ['latin'], variable: '--font-headline', display: 'swap' });

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: {
      default: t('title'),
      template: `%s | ${t('title')}`
    },
    description: t('description'),
    metadataBase: new URL('https://www.alvestrasza.com'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        de: '/de',
        en: '/en'
      }
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `https://alvestrasza.com/${locale}`,
      siteName: 'Alvestrasza Corporation',
      images: ['/assets/alvestrasza-emblem-transparent.png'],
      type: 'website',
      locale: locale === 'de' ? 'de_DE' : 'en_US'
    }
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'Layout' });

  return (
    <html lang={locale} className={`${inter.variable} ${cinzel.variable}`}>
      <body>
        <NextIntlClientProvider>
          <div className="site-shell">
            <header className="header">
              <div className="header-inner">
                <Link href="/" locale={locale} className="brand" aria-label={t('homeAriaLabel')}>
                  <Image
                    src="/assets/alvestrasza-emblem-transparent.png"
                    alt={t('logoAlt')}
                    width={80}
                    height={80}
                    className="brand-logo"
                    priority
                  />
                  <span className="brand-wordmark">
                    <span className="brand-title">Alvestrasza</span>
                    <span className="brand-subtitle">Corporation</span>
                  </span>
                </Link>

                <MainNavigation
                  locale={locale}
                  ariaLabel={t('mainNavigation')}
                  items={[
                    { label: t('nav.overview'), href: '/' },
                    { label: t('nav.itService'), href: '/it-service' },
                    { label: t('nav.focus'), href: '/#initiatives' },
                    { label: t('nav.documentation'), href: '/#insights' },
                    { label: t('nav.contact'), href: '/contact' }
                  ]}
                />

                <div className="language-switcher" aria-label={t('languageSwitch')}>
                  <Link
                    href="/"
                    locale="de"
                    aria-label="Deutsch"
                    aria-current={locale === 'de' ? 'page' : undefined}
                    className={locale === 'de' ? 'language-link active' : 'language-link'}
                  >
                    DE
                  </Link>
                  <span aria-hidden="true">/</span>
                  <Link
                    href="/"
                    locale="en"
                    aria-label="English"
                    aria-current={locale === 'en' ? 'page' : undefined}
                    className={locale === 'en' ? 'language-link active' : 'language-link'}
                  >
                    EN
                  </Link>
                </div>
              </div>
            </header>

            {children}

            <footer className="footer">
              <div className="container footer-inner">
                <span>© {new Date().getFullYear()} Alvestrasza Corporation</span>
                <span>
                  {t('postmaster')}: <a href="mailto:postmaster@alvestrasza.com">postmaster@alvestrasza.com</a>
                </span>
              </div>
            </footer>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}