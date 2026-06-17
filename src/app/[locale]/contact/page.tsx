/*
File Name     : page.tsx
Version       : v0.1.0
Created       : 2026-06-17
Last Modified : 2026-06-17
Author        : Nouramon Alvestrasza
Organization  : Alvestrasza Corporation
Description   : Locale-aware public contact page, including mail operations and postmaster information.
*/

import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'ContactPage.metadata' });

  return {
    title: t('title'),
    description: t('description')
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'ContactPage' });

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
        <div className="container split">
          <div className="card glass-card">
            <h2>{t('company.title')}</h2>
            <div className="info-list">
              <div className="info-row">
                <span className="info-label">{t('company.organization')}</span>
                <span className="info-value">Alvestrasza Corporation</span>
              </div>
              <div className="info-row">
                <span className="info-label">{t('company.responsiblePerson')}</span>
                <span className="info-value">Nouramon Alvestrasza</span>
              </div>
              <div className="info-row">
                <span className="info-label">{t('company.role')}</span>
                <span className="info-value">Chief Executive Officer</span>
              </div>
              <div className="info-row">
                <span className="info-label">{t('company.website')}</span>
                <span className="info-value">
                  <a href="https://alvestrasza.com">https://alvestrasza.com</a>
                </span>
              </div>
            </div>
            <div className="notice">
              <p>{t('company.statusNote')}</p>
            </div>
          </div>

          <div className="card glass-card">
            <h2>{t('mail.title')}</h2>
            <div className="info-list">
              <div className="info-row">
                <span className="info-label">{t('mail.hostname')}</span>
                <span className="info-value">mail.alvestrasza.com</span>
              </div>
              <div className="info-row">
                <span className="info-label">{t('mail.postmaster')}</span>
                <span className="info-value">
                  <a href="mailto:postmaster@alvestrasza.com">postmaster@alvestrasza.com</a>
                </span>
              </div>
              <div className="info-row">
                <span className="info-label">{t('mail.abuse')}</span>
                <span className="info-value">
                  <a href="mailto:abuse@alvestrasza.com">abuse@alvestrasza.com</a>
                </span>
              </div>
              <div className="info-row">
                <span className="info-label">{t('mail.hostmaster')}</span>
                <span className="info-value">
                  <a href="mailto:hostmaster@alvestrasza.com">hostmaster@alvestrasza.com</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-compact">
        <div className="container">
          <div className="card statement-card">
            <div className="eyebrow">{t('statement.eyebrow')}</div>
            <h2>{t('statement.title')}</h2>
            <p>{t('statement.text1')}</p>
            <p>{t('statement.text2')}</p>
            <p>{t('statement.text3')}</p>
          </div>
        </div>
      </section>
    </main>
  );
}