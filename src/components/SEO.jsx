import { useEffect } from 'react';

const SITE = 'https://clinikr.xyz';
const DEFAULT_TITLE = 'Clinikr — All-in-One Clinic Management App';
const DEFAULT_DESC = 'Manage patients, appointments, EMR, billing, POS, inventory and analytics — all in one beautiful app. Free forever.';
const OG_IMAGE = `${SITE}/og-image.png`;

function setMeta(attr, key, content) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export default function SEO({ title, description, path = '/' }) {
  const pageTitle = title ? `${title} | Clinikr` : DEFAULT_TITLE;
  const pageDesc = description || DEFAULT_DESC;
  const url = `${SITE}${path}`;

  useEffect(() => {
    document.title = pageTitle;
    setMeta('name', 'description', pageDesc);
    setCanonical(url);

    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:title', pageTitle);
    setMeta('property', 'og:description', pageDesc);
    setMeta('property', 'og:image', OG_IMAGE);
    setMeta('property', 'og:image:width', '1200');
    setMeta('property', 'og:image:height', '630');
    setMeta('property', 'og:site_name', 'Clinikr');

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:url', url);
    setMeta('name', 'twitter:title', pageTitle);
    setMeta('name', 'twitter:description', pageDesc);
    setMeta('name', 'twitter:image', OG_IMAGE);
  }, [pageTitle, pageDesc, url]);

  return null;
}
