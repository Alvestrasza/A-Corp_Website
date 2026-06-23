/*
File Name     : site-config.ts
Version       : v0.1.0
Created       : 2026-06-17
Last Modified : 2026-06-17
Author        : Nouramon Alvestrasza
Organization  : Alvestrasza Corporation
Description   : Server-side public site configuration loaded from environment variables.
*/

function readEnv(name: string, fallback = ''): string {
  return process.env[name]?.trim() || fallback;
}

function normalizeUrl(url: string): string {
  return url.replace(/\/+$/, '');
}

export const siteConfig = {
  siteUrl: normalizeUrl(readEnv('ACORP_SITE_URL', 'https://alvestrasza.com')),
  domain: readEnv('ACORP_DOMAIN', 'alvestrasza.com'),
  companyName: readEnv('ACORP_COMPANY_NAME', 'Alvestrasza Corporation'),

  responsiblePerson: readEnv('ACORP_RESPONSIBLE_PERSON', 'Nouramon Alvestrasza'),
  responsibleRole: readEnv('ACORP_RESPONSIBLE_ROLE', 'Chief Executive Officer'),

  mail: {
    host: readEnv('ACORP_MAIL_HOST', 'mail.alvestrasza.com'),
    postmaster: readEnv('ACORP_POSTMASTER_EMAIL', 'postmaster@alvestrasza.com'),
    abuse: readEnv('ACORP_ABUSE_EMAIL', 'abuse@alvestrasza.com'),
    hostmaster: readEnv('ACORP_HOSTMASTER_EMAIL', 'hostmaster@alvestrasza.com'),
    emergency: readEnv('ACORP_EMERGENCY_EMAIL','alvestrasza@proton.me')
  },

  address: {
    name: readEnv('ACORP_ADDRESS_NAME'),
    street: readEnv('ACORP_ADDRESS_STREET'),
    houseNumber: readEnv('ACORP_ADDRESS_HOUSE_NUMBER'),
    postalCode: readEnv('ACORP_ADDRESS_POSTAL_CODE'),
    city: readEnv('ACORP_ADDRESS_CITY'),
    state: readEnv('ACORP_ADDRESS_STATE'),
    country: readEnv('ACORP_ADDRESS_COUNTRY', 'Germany'),
    countryCode: readEnv('ACORP_ADDRESS_COUNTRY_CODE', 'DE')
  }
};

export function hasPostalAddress(): boolean {
  return Boolean(
    siteConfig.address.street &&
    siteConfig.address.postalCode &&
    siteConfig.address.city &&
    siteConfig.address.country
  );
}