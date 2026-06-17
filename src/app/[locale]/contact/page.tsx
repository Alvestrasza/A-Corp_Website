/*
File Name     : page.tsx
Version       : v0.1.0
Created       : 2026-06-17
Last Modified : 2026-06-17
Author        : Nouramon Alvestrasza
Organization  : Alvestrasza Corporation
Description   : Locale-aware public contact page, including mail operations and postmaster information.
*/

import { getTranslations, setRequestLocale } from 'next-intl/server';
import { siteConfig, hasPostalAddress } from '@/lib/site-config';
import type { Metadata } from 'next';

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
          <p className="lead">
            {t('lead', {
              companyName: siteConfig.companyName,
              mailHost: siteConfig.mail.host
            })}
          </p>
        </div>
      </section>

      <section className="section section-compact">
        <div className="container split">
          <div className="card glass-card">
            <h2>{t('company.title')}</h2>
            <div className="info-list">
              <div className="info-row">
                <span className="info-label">{t('company.organization')}</span>
                <span className="info-value">{siteConfig.companyName}</span>
              </div>
              <div className="info-row">
                <span className="info-label">{t('company.responsiblePerson')}</span>
                <span className="info-value">{siteConfig.responsiblePerson}</span>
              </div>
              <div className="info-row">
                <span className="info-label">{t('company.role')}</span>
                <span className="info-value">{siteConfig.responsibleRole}</span>
              </div>
              <div className="info-row">
                <span className="info-label">{t('company.website')}</span>
                <span className="info-value">
                  <a href={siteConfig.siteUrl}>{siteConfig.siteUrl}</a>
                  {hasPostalAddress() && (
                    <div className="info-row">
                      <span className="info-label">{t('company.address')}</span>
                      <span className="info-value">
                        {siteConfig.address.name && (
                          <>
                            {siteConfig.address.name}
                            <br />
                          </>
                        )}
                        {siteConfig.address.street} {siteConfig.address.houseNumber}
                        <br />
                        {siteConfig.address.postalCode} {siteConfig.address.city}
                        {siteConfig.address.state && (
                          <>
                            <br />
                            {siteConfig.address.state}
                          </>
                        )}
                        <br />
                        {siteConfig.address.country}
                      </span>
                    </div>
                  )}
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
                <span className="info-value">{siteConfig.mail.host}</span>
              </div>
              <div className="info-row">
                <span className="info-label">{t('mail.postmaster')}</span>
                <span className="info-value">
                  <a href={`mailto:${siteConfig.mail.postmaster}`}>{siteConfig.mail.postmaster}</a>
                </span>
              </div>
              <div className="info-row">
                <span className="info-label">{t('mail.abuse')}</span>
                <span className="info-value">
                  <a href={`mailto:${siteConfig.mail.abuse}`}>{siteConfig.mail.abuse}</a>
                </span>
              </div>
              <div className="info-row">
                <span className="info-label">{t('mail.hostmaster')}</span>
                <span className="info-value">
                  <a href={`mailto:${siteConfig.mail.hostmaster}`}>{siteConfig.mail.hostmaster}</a>
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
            <p>{t('statement.text2', { mailHost: siteConfig.mail.host })}</p>
            <p>{t('statement.text3')}</p>
          </div>
        </div>
      </section>
    </main>
  );
}