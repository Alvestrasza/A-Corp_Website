/*
File Name     : page.tsx
Version       : v0.1.0
Created       : 2026-06-17
Last Modified : 2026-06-17
Author        : Nouramon Alvestrasza
Organization  : Alvestrasza Corporation
Description   : Locale-aware IT service focus page for the Alvestrasza Corporation website.
*/

import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'ItServicePage.metadata' });

  return {
    title: t('title'),
    description: t('description')
  };
}

export default async function ItServicePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'ItServicePage' });

  const serviceAreas = [
    t('areas.infrastructure'),
    t('areas.identity'),
    t('areas.mailDnsCertificates'),
    t('areas.hosting'),
    t('areas.documentation'),
    t('areas.education')
  ];

  return (
    <main>
      <section className="subpage-hero">
        <div className="container narrow">
          <div className="eyebrow">{t('eyebrow')}</div>
          <h1>{t('title')}</h1>
          <p className="lead">{t('lead')}</p>
        </div>
      </section>

      <section className="section section-compact">
        <div className="container">
          <div className="card-grid">
            {serviceAreas.map((area) => (
              <article className="card glass-card" key={area}>
                <h3>{area}</h3>
                <p>{t('cardText')}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}