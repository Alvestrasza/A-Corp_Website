/*
File Name     : page.tsx
Version       : v0.1.2
Created       : 2026-06-17
Last Modified : 2026-06-17
Author        : Nouramon Alvestrasza
Organization  : Alvestrasza Corporation
Description   : Root redirect page for the default locale.
*/

import { redirect } from '@/i18n/navigation';

export default function RootPage() {
  redirect({ href: '/', locale: 'de' });
}