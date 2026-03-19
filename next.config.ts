import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['192.168.43.70'],
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        hostname: 'lh3.googleusercontent.com',
        protocol: 'https'
      },
      {
        hostname: 'www.cadt.edu.kh',
        protocol: 'https'
      },
    ]
  }
};

export default nextConfig;
