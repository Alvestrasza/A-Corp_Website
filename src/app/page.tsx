/*
File Name     : page.tsx
Version       : v0.1.1
Created       : 2026-06-17
Last Modified : 2026-06-17
Author        : Nouramon Alvestrasza
Organization  : Alvestrasza Corporation
Description   : Cinematic public homepage for the Alvestrasza Corporation website.
*/

import Image from 'next/image';
import Link from 'next/link';
import { pillars, serviceAreas, siteConfig } from '@/lib/site';

export default function HomePage() {
  return (
    <main>
      <section className="hero-cinematic">
        <div className="hero-content">
          <Image src="/assets/alvestrasza-emblem-transparent.png" alt="Alvestrasza Corporation emblem" width={180} height={180} className="hero-emblem" priority />
          <h1>Diplomatic Precision.<br />Enduring Purpose.</h1>
          <span className="red-rule" aria-hidden="true" />
          <p>{siteConfig.mission}</p>
          <Link className="mission-button" href="/it-service">
            Explore our mission
            <span aria-hidden="true">›</span>
          </Link>
        </div>
      </section>

      <section className="pillars-section" aria-labelledby="pillars-title">
        <div className="container">
          <div className="center-section-head">
            <h2 id="pillars-title">Our Pillars</h2>
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
            <div className="eyebrow">Current focus</div>
            <h2>Secure IT services prepared with operational discipline.</h2>
            <p>
              The first public service focus is IT Service. Additional solution pages, legal details, and deeper
              technical descriptions will follow as the company structure is finalized.
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

      <section className="section section-compact" id="insights">
        <div className="container split">
          <div className="card glass-card">
            <div className="eyebrow">Insights</div>
            <h2>Documentation first.</h2>
            <p>
              Operational clarity is part of the design: configuration, responsibilities and verification paths
              are prepared as first-class service artifacts.
            </p>
          </div>
          <div className="card glass-card" id="careers">
            <div className="eyebrow">Careers</div>
            <h2>Future opportunities.</h2>
            <p>
              The organization is still being established. Public career information will be published after the
              legal and operational structure is finalized.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
