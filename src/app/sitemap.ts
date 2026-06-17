/*
File Name     : sitemap.ts
Version       : v0.1.0
Created       : 2026-06-17
Last Modified : 2026-06-17
Author        : Nouramon Alvestrasza
Organization  : Alvestrasza Corporation
Description   : Sitemap endpoint for the public A-Corp website.
*/

import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/contact', '/it-service'].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date('2026-06-17')
  }));
}
