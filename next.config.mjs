/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",

  // Optional but often helps on static hosts:
  trailingSlash: true,
};

export default nextConfig;
