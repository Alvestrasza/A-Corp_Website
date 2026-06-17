/*
File Name     : MainNavigation.tsx
Version       : v0.1.0
Created       : 2026-06-17
Last Modified : 2026-06-17
Author        : Nouramon Alvestrasza
Organization  : Alvestrasza Corporation
Description   : Locale-aware main navigation with active route highlighting.
*/

'use client';

import { useEffect, useState } from 'react';
import { Link, usePathname } from '@/i18n/navigation';

type MainNavigationItem = {
  label: string;
  href: string;
};

type MainNavigationProps = {
  locale: string;
  ariaLabel: string;
  items: MainNavigationItem[];
};

export default function MainNavigation({ locale, ariaLabel, items }: MainNavigationProps) {
  const pathname = usePathname();
  const [hash, setHash] = useState('');

  useEffect(() => {
    const updateHash = () => {
      setHash(window.location.hash);
    };

    updateHash();
    window.addEventListener('hashchange', updateHash);

    return () => {
      window.removeEventListener('hashchange', updateHash);
    };
  }, []);

  const activePath = `${pathname}${hash}`;

  return (
    <nav className="nav" aria-label={ariaLabel}>
      {items.map((item) => {
        const isActive = item.href.includes('#')
          ? activePath === item.href
          : pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            locale={locale}
            className={isActive ? 'nav-link active' : 'nav-link'}
            aria-current={isActive ? 'page' : undefined}
          >
            <span className="nav-link-label">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}