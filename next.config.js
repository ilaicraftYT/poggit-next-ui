/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["poggit.pmmp.io", "raw.githubusercontent.com", "github.com"]
  },
}

module.exports = nextConfig
