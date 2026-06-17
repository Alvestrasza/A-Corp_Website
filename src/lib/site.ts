/*
File Name     : site.ts
Version       : v0.1.1
Created       : 2026-06-17
Last Modified : 2026-06-17
Author        : Nouramon Alvestrasza
Organization  : Alvestrasza Corporation
Description   : Central public site metadata, navigation, service pillars and contact information.
*/
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://alvestrasza.com';

export const siteConfig = {
  company: 'Alvestrasza Corporation',
  tagline: 'IT services for secure infrastructure.',
  mission: 'Alvestrasza Corporation provides IT services for secure, maintainable and well-documented infrastructure.',
  domain: 'alvestrasza.com',
  url: siteUrl,
  mailHost: 'mail.alvestrasza.com',
  responsiblePerson: 'Nouramon Alvestrasza',
  role: 'Chief Executive Officer',
  postmaster: 'postmaster@alvestrasza.com',
  abuse: 'abuse@alvestrasza.com',
  hostmaster: 'hostmaster@alvestrasza.com',
  statusNote: 'The company is currently in the process of being formally established. A full postal business address will be published once finalized.'
};

export const navigationItems = [
  { label: 'Overview', href: '/' },
  { label: 'Solutions', href: '/it-service' },
  { label: 'Initiatives', href: '/#initiatives' },
  { label: 'Insights', href: '/#insights' },
  { label: 'Careers', href: '/#careers' },
  { label: 'Contact', href: '/contact' }
];

export const pillars = [
  {
    title: 'Diplomatic Solutions',
    description: 'Strengthening relationships through trusted engagement.',
    icon: '✧'
  },
  {
    title: 'Secure Systems',
    description: 'Engineering resilience in a complex world.',
    icon: '⬡'
  },
  {
    title: 'Strategic Intelligence',
    description: 'Insights that anticipate. Decisions that endure.',
    icon: '▥'
  },
  {
    title: 'Sovereign Technology',
    description: 'Independence by design. Security by default.',
    icon: '⌁'
  }
];

export const serviceAreas = [
  'Managed infrastructure operations',
  'Identity and access management',
  'Mail, DNS and certificate services',
  'Secure application hosting',
  'Documentation and operational runbooks',
  'Technical education and enablement'
];

export const sitePages = [
  '',
  '/contact',
  '/it-service'
];
