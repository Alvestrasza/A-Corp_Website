/*
File Name     : not-found.tsx
Version       : v0.1.0
Created       : 2026-06-17
Last Modified : 2026-06-17
Author        : Nouramon Alvestrasza
Organization  : Alvestrasza Corporation
Description   : Custom not-found page for invalid routes.
*/

import Link from 'next/link';

export default function NotFound() {
  return (
    <main>
      <section className="subpage-hero">
        <div className="container narrow">
          <div className="eyebrow">404</div>
          <h1>Signal not found.</h1>
          <p className="lead">
            The requested route does not exist or is no longer available.
          </p>
          <div className="actions centered-actions">
            <Link className="mission-button compact-button" href="/">
              Return home <span aria-hidden="true">›</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}