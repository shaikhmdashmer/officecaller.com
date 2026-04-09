/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  output: 'standalone',
  trailingSlash: true,
  images: {
    loader: 'imgix',
    path: '/',
  }
}

module.exports = nextConfig
