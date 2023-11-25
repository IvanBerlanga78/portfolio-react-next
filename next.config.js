/** @type {import('next').NextConfig} */
const nextConfig = {}

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = '/'

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

module.exports = {
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    assetPrefix: assetPrefix,
    basePath: basePath,
    images: {
        unoptimized: true
    },
    trailingSlash: true,

    output: 'export'
  }
 
