/*
File Name     : site.ts
Version       : v0.1.1
Created       : 2026-06-17
Last Modified : 2026-06-17
Author        : Nouramon Alvestrasza
Organization  : Alvestrasza Corporation
Description   : Central public site metadata, navigation, service pillars and contact information.
*/

export const siteConfig = {
  company: 'Alvestrasza Corporation',
  tagline: 'Diplomatic precision. Enduring purpose.',
  mission: 'Alvestrasza Corporation advances resilient cooperation through secure systems, strategic insight, and sovereign technology.',
  domain: 'alvestrasza.com',
  url: 'https://alvestrasza.com',
  mailHost: 'mail.alvestrasza.com',
  mailIPv4: '146.0.34.242',
  mailIPv6: '2001:4ba0:92c1:e9::2',
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
