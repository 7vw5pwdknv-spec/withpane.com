/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/regional-vp",
        destination: "/partner",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
