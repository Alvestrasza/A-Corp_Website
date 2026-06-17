/*
File Name     : sitemap.ts
Version       : v0.1.1
Created       : 2026-06-17
Last Modified : 2026-06-17
Author        : Nouramon Alvestrasza
Organization  : Alvestrasza Corporation
Description   : Localized sitemap endpoint for the public A-Corp website.
*/

import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://alvestrasza.com';

const pages = ['', '/contact', '/it-service'];

export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.flatMap((locale) =>
    pages.map((path) => ({
      url: `${siteUrl}/${locale}${path}`,
      lastModified: new Date('2026-06-17'),
      alternates: {
        languages: {
          de: `${siteUrl}/de${path}`,
          en: `${siteUrl}/en${path}`
        }
      }
    }))
  );
}