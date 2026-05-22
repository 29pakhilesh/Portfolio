const SIMPLE = 'https://cdn.simpleicons.org'

/** Local logos — reliable on dark backgrounds */
const LOCAL_LOGOS = {
  'AWS Cloud Practitioner': '/icons/aws.png',
}

export const issuerIconMap = {
  Udemy: { slug: 'udemy', color: 'A435F0' },
  'Cisco Networking Academy': { slug: 'cisco' },
  OnWingspan: { slug: 'googlecloud', color: '4285F4' },
}

export function getCertLogoUrl(certName, issuer) {
  if (LOCAL_LOGOS[certName]) return LOCAL_LOGOS[certName]
  if (certName?.includes('AWS')) return LOCAL_LOGOS['AWS Cloud Practitioner']

  const config = issuerIconMap[issuer]
  if (!config) return null
  const path = config.color ? `${config.slug}/${config.color}` : config.slug
  return `${SIMPLE}/${path}`
}
