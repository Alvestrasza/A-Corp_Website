/*
File Name     : page.tsx
Version       : v0.1.0
Created       : 2026-06-17
Last Modified : 2026-06-17
Author        : Nouramon Alvestrasza
Organization  : Alvestrasza Corporation
Description   : Initial IT service focus page for the Alvestrasza Corporation website.
*/

import type { Metadata } from 'next';
import Link from 'next/link';
import { serviceAreas } from '@/lib/site';

export const metadata: Metadata = {
  title: 'IT Service',
  description: 'Initial IT service focus area for Alvestrasza Corporation.'
};

export default function ItServicePage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Service focus</div>
            <h1>IT Service</h1>
            <p className="lead">
              Alvestrasza Corporation is preparing a service portfolio for reliable infrastructure operations,
              secure identity integration, technical documentation and operational enablement.
            </p>
          </div>
          <div className="card-grid">
            {serviceAreas.map((area) => (
              <article className="card" key={area}>
                <h3>{area}</h3>
                <p>
                  Service details are being prepared and will be published as the operating model matures.
                </p>
              </article>
            ))}
          </div>
          <div className="actions">
            <Link className="button button-primary" href="/contact">Contact IT Service</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
