import { Helmet } from 'react-helmet-async';

const SITE = 'https://clinikr.xyz';
const DEFAULT_TITLE = 'Clinikr — All-in-One Clinic Management App';
const DEFAULT_DESC = 'Manage patients, appointments, EMR, billing, POS, inventory and analytics — all in one beautiful app. Free forever.';
const OG_IMAGE = `${SITE}/og-image.svg`;

export default function SEO({ title, description, path = '/' }) {
  const pageTitle = title ? `${title} | Clinikr` : DEFAULT_TITLE;
  const pageDesc = description || DEFAULT_DESC;
  const url = `${SITE}${path}`;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDesc} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDesc} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Clinikr" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDesc} />
      <meta name="twitter:image" content={OG_IMAGE} />
    </Helmet>
  );
}
