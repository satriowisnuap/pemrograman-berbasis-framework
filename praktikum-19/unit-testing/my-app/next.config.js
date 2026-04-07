/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "brothersarms.co.za",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn11.bigcommerce.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.skatetilldeath.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
