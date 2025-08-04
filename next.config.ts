import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/GoWild',
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'temple.yatradham.org',
      },
       {
        protocol: 'https',
        hostname: 'himalayatrekker.com',
      },
       {
        protocol: 'https',
        hostname: 'static.toiimg.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.theatlantic.com',
      },
      {
        protocol: 'https',
        hostname: 's7ap1.scene7.com',
      },
      {
        protocol: 'https',
        hostname: 'www.singhtour.com',
      },
      {
        protocol: 'https',
        hostname: 'c8.alamy.com',
      },
      {
        protocol: 'https',
        hostname: 'majesticjourney.in',
      },
      {
        protocol: 'https',
        hostname: 'dynamic-media-cdn.tripadvisor.com',
      },
      {
        protocol: 'https',
        hostname: 'www.chardham-pilgrimage-tour.com',
      },
       {
        protocol: 'https',
        hostname: 't.eucdn.in',
      },
       {
        protocol: 'https',
        hostname: 'assets.traveltriangle.com',
      },
       {
        protocol: 'https',
        hostname: 'www.shrineyatra.com',
      },
       {
        protocol: 'https',
        hostname: 'www.balajinerul.com',
      },
       {
        protocol: 'https',
        hostname: 'vl-prod-static.b-cdn.net',
      },
       {
        protocol: 'https',
        hostname: 'dwq3yv87q1b43.cloudfront.net',
      },
       {
        protocol: 'https',
        hostname: 'charmachan.com',
      },
      {
        protocol: 'https',
        hostname: 'www.hotelbhanupalace.com',
      },
       {
        protocol: 'https',
        hostname: 'sp-ao.shortpixel.ai',
      },
      {
        protocol: 'https',
        hostname: 'uttarakhandtriptrek.com',
      },
       {
        protocol: 'https',
        hostname: 'www.aljazeera.com',
      },
       {
        protocol: 'https',
        hostname: 'img.traveltriangle.com',
      },
      {
        protocol: 'https',
        hostname: 'www.chardhamtour.in',
      },
      {
        protocol: 'https',
        hostname: 'cf.bstatic.com',
      }
    ],
  },
};

export default nextConfig;
