/*
File Name     : next.config.ts
Version       : v0.1.1
Created       : 2026-06-17
Last Modified : 2026-06-17
Author        : Nouramon Alvestrasza
Organization  : Alvestrasza Corporation
Description   : Next.js configuration for the public A-Corp website with next-intl support.
*/

import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true
};

export default withNextIntl(nextConfig);