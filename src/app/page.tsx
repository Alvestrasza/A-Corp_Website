/*
File Name     : page.tsx
Version       : v0.1.0
Created       : 2026-06-17
Last Modified : 2026-06-17
Author        : Nouramon Alvestrasza
Organization  : Alvestrasza Corporation
Description   : Public homepage for the Alvestrasza Corporation website.
*/

import Image from 'next/image';
import Link from 'next/link';
import { serviceAreas, siteConfig } from '@/lib/site';

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Public presence initializing</div>
            <h1>Secure IT services for resilient operations.</h1>
            <p className="lead">
              {siteConfig.company} is building a service platform for professional IT operations,
              secure infrastructure, documentation, identity services and technical education.
            </p>
            <div className="actions">
              <Link className="button button-primary" href="/it-service">Explore IT Service</Link>
              <Link className="button button-secondary" href="/contact">Contact Operations</Link>
            </div>
          </div>
          <div className="logo-panel" aria-hidden="true">
            <Image src="/assets/alvestrasza-logo.png" alt="" width={720} height={720} priority />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Current focus</div>
            <h2>Foundation first. Services next.</h2>
            <p>
              The public website is intentionally compact during the initial company setup phase. The first
              operational focus area is IT Service, with further service descriptions and legal details to follow.
            </p>
          </div>
          <div className="card-grid">
            {serviceAreas.slice(0, 3).map((area) => (
              <article className="card" key={area}>
                <h3>{area}</h3>
                <p>Designed for traceable, maintainable and security-conscious service delivery.</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
