/** @type {import('next').NextConfig} */
const nextConfig = {
  module: 'es5',
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(md|markdown)$/,
      type: 'asset/source',
    })

    return config
  },
}

module.exports = nextConfig
