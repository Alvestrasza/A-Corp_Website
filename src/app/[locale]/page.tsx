/*
File Name     : page.tsx
Version       : v0.1.0
Created       : 2026-06-17
Last Modified : 2026-06-17
Author        : Nouramon Alvestrasza
Organization  : Alvestrasza Corporation
Description   : Locale-aware public homepage for the Alvestrasza Corporation website.
*/

import Image from 'next/image';
import { getTranslations, setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'HomePage' });

  const pillars = [
    {
      title: t('pillars.itServices.title'),
      description: t('pillars.itServices.description'),
      icon: '⬡'
    },
    {
      title: t('pillars.academy.title'),
      description: t('pillars.academy.description'),
      icon: '✧'
    },
    {
      title: t('pillars.documentation.title'),
      description: t('pillars.documentation.description'),
      icon: '▥'
    },
    {
      title: t('pillars.operations.title'),
      description: t('pillars.operations.description'),
      icon: '⌁'
    }
  ];

  const serviceAreas = [
    t('serviceAreas.infrastructure'),
    t('serviceAreas.identity'),
    t('serviceAreas.mailDnsCertificates')
  ];

  return (
    <main>
      <section className="hero-cinematic">
        <div className="hero-content">
          <Image
            src="/assets/alvestrasza-emblem-transparent.png"
            alt={t('hero.emblemAlt')}
            width={180}
            height={180}
            className="hero-emblem"
            priority
          />
          <h1 className="hero-wordmark" aria-label="Alvestrasza Corporation">
            <span className="hero-wordmark-main">Alvestrasza</span>
            <span className="hero-wordmark-subtitle">Corporation</span>
          </h1>
          <p>{t('hero.mission')}</p>
        </div>
      </section>

      <section className="pillars-section" aria-labelledby="pillars-title">
        <div className="container">
          <div className="center-section-head">
            <h2 id="pillars-title">{t('pillarsTitle')}</h2>
            <span className="red-rule" aria-hidden="true" />
          </div>
          <div className="pillar-grid">
            {pillars.map((pillar) => (
              <article className="pillar-card" key={pillar.title}>
                <div className="pillar-icon" aria-hidden="true">{pillar.icon}</div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-compact" id="initiatives">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">{t('focus.eyebrow')}</div>
            <h2>{t('focus.title')}</h2>
            <p>{t('focus.text')}</p>
          </div>
          <div className="card-grid">
            {serviceAreas.map((area) => (
              <article className="card" key={area}>
                <h3>{area}</h3>
                <p>{t('focus.cardText')}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-compact" id="insights">
        <div className="container split">
          <div className="card glass-card">
            <div className="eyebrow">{t('documentation.eyebrow')}</div>
            <h2>{t('documentation.title')}</h2>
            <p>{t('documentation.text')}</p>
          </div>
          <div className="card glass-card">
            <div className="eyebrow">{t('academy.eyebrow')}</div>
            <h2>{t('academy.title')}</h2>
            <p>{t('academy.text')}</p>
          </div>
        </div>
      </section>
    </main>
  );
}