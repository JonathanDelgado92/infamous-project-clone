import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    qualities: [70, 75, 78, 80, 85, 90],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'p1-kling.klingai.com',
      },
      {
        protocol: 'https',
        hostname: '*.klingai.com',
      },
    ],
  },
};

export default nextConfig;
