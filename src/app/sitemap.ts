/*
File Name     : sitemap.ts
Version       : v0.1.1
Created       : 2026-06-17
Last Modified : 2026-06-17
Author        : Nouramon Alvestrasza
Organization  : Alvestrasza Corporation
Description   : Localized sitemap endpoint for the public A-Corp website.
*/

import { routing } from '@/i18n/routing';
import { siteConfig } from '@/lib/site-config';
import type { MetadataRoute } from 'next';

const pages = ['', '/contact', '/it-service'];

export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.flatMap((locale) =>
    pages.map((path) => ({
      url: `${siteConfig.siteUrl}/${locale}${path}`,
      lastModified: new Date('2026-06-17'),
      alternates: {
        languages: {
          de: `${siteConfig.siteUrl}/de${path}`,
          en: `${siteConfig.siteUrl}/en${path}`
        }
      }
    }))
  );
}