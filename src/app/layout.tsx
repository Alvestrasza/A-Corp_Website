/*
File Name     : layout.tsx
Version       : v0.1.2
Created       : 2026-06-17
Last Modified : 2026-06-17
Author        : Nouramon Alvestrasza
Organization  : Alvestrasza Corporation
Description   : Root application layout for global styles.
*/

import './globals.css';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}