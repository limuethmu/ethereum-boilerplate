/** 
 * Next.js Configuration
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // Enables strict mode which enhances React's error handling.
  reactStrictMode: true,

  // Enables SWC minification for faster build times.
  swcMinify: true,

  // Image optimization configuration.
  images: {
    // Domains from which images can be loaded.
    domains: ['raw.githubusercontent.com'],
    // Additional image optimization options can be added here.
  },

  // Add more configurations as needed.
};

module.exports = nextConfig;
