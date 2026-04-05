/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
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
