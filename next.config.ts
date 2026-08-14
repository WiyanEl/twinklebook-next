import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.twinklebook.com',
        pathname: '/Media/File/**',
      },
    ],
  },
};

export default nextConfig;
