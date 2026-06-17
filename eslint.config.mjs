/*
File Name     : eslint.config.mjs
Version       : v0.1.1
Created       : 2026-06-17
Last Modified : 2026-06-17
Author        : Nouramon Alvestrasza
Organization  : Alvestrasza Corporation
Description   : ESLint flat configuration for the public A-Corp website.
*/

import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    ignores: [
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts'
    ]
  }
];

export default eslintConfig;