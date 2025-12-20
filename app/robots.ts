import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin/', // అడ్మిన్ పేజీ గూగుల్ లో రాకూడదు
    },
    sitemap: 'https://www.ibcspokenenglish.com/', // నీ డొమైన్ మార్చు
  };
}