/*
File Name     : routing.ts
Version       : v0.1.0
Created       : 2026-06-17
Last Modified : 2026-06-17
Author        : Nouramon Alvestrasza
Organization  : Alvestrasza Corporation
Description   : Locale routing configuration for the public A-Corp website.
*/

import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['de', 'en'],
  defaultLocale: 'en',
  localePrefix: 'always',
  localeDetection: false
});