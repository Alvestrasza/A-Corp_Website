/*
File Name     : page.tsx
Version       : v0.1.1
Created       : 2026-06-17
Last Modified : 2026-06-17
Author        : Nouramon Alvestrasza
Organization  : Alvestrasza Corporation
Description   : Public contact page, including mail operations and postmaster information.
*/

import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact information for Alvestrasza Corporation and mail operations.'
};

export default function ContactPage() {
  return (
    <main>
      <section className="subpage-hero">
        <div className="container narrow">
          <div className="eyebrow">Contact</div>
          <h1>Responsible contact information.</h1>
          <p className="lead">
            Public contact information for {siteConfig.company}, including the person responsible for e-mail
            operations under {siteConfig.mailHost}.
          </p>
        </div>
      </section>

      <section className="section section-compact">
        <div className="container split">
          <div className="card glass-card">
            <h2>Company</h2>
            <div className="info-list">
              <div className="info-row"><span className="info-label">Organization</span><span className="info-value">{siteConfig.company}</span></div>
              <div className="info-row"><span className="info-label">Responsible person</span><span className="info-value">{siteConfig.responsiblePerson}</span></div>
              <div className="info-row"><span className="info-label">Role</span><span className="info-value">{siteConfig.role}</span></div>
              <div className="info-row"><span className="info-label">Website</span><span className="info-value"><a href={siteConfig.url}>{siteConfig.url}</a></span></div>
            </div>
            <div className="notice">
              <p>{siteConfig.statusNote}</p>
            </div>
          </div>

          <div className="card glass-card">
            <h2>E-Mail Operations</h2>
            <div className="info-list">
              <div className="info-row"><span className="info-label">Mail hostname</span><span className="info-value">{siteConfig.mailHost}</span></div>
              <div className="info-row"><span className="info-label">Postmaster</span><span className="info-value"><a href={`mailto:${siteConfig.postmaster}`}>{siteConfig.postmaster}</a></span></div>
              <div className="info-row"><span className="info-label">Abuse contact</span><span className="info-value"><a href={`mailto:${siteConfig.abuse}`}>{siteConfig.abuse}</a></span></div>
              <div className="info-row"><span className="info-label">Hostmaster</span><span className="info-value"><a href={`mailto:${siteConfig.hostmaster}`}>{siteConfig.hostmaster}</a></span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-compact">
        <div className="container">
          <div className="card statement-card">
            <div className="eyebrow">Operational Statement</div>
            <h2>Legitimate business and transactional e-mail only.</h2>
            <p>
              The mail system is intended for legitimate business communication, transactional service e-mails,
              account verification, notifications and administrative communication. The system is not operated as
              an open relay and is maintained by Alvestrasza Corporation.
            </p>
            <p>
              The responsible mail hostname is published as <strong>{siteConfig.mailHost}</strong>. Mail routing,
              sender authorization and reverse DNS information are maintained through public DNS records.
            </p>
            <p>
              Newsletter or bulk mail will only be sent after explicit recipient opt-in. Purchased, harvested or
              third-party address lists are not used.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
