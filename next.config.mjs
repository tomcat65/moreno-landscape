/** @type {import('next').NextConfig} */
const nextConfig = {
  // Modern JavaScript - target modern browsers to reduce polyfills
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
    // SWC will output modern JavaScript based on browserslist
    // The polyfills are likely coming from dependencies, not our code
  },
  
  // Image optimization settings
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    // Enable image optimization
    dangerouslyAllowSVG: false,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Modern browser support - reduce legacy JavaScript
  // Configure SWC to output modern JavaScript (ES2020+)
  swcMinify: true,
  
  experimental: {
    // Use modern output format
    optimizePackageImports: ['lucide-react'],
  },
  
  // Output modern JavaScript - target modern browsers only
  // This reduces polyfills for Array.at, Array.flat, Object.fromEntries, etc.
  // Note: Next.js uses SWC for transpilation, webpack is mainly for bundling
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Target modern browsers (ES2020+) to reduce polyfills
      // This tells webpack to not transpile modern features that are supported in target browsers
      config.target = ['web', 'es2020'];
      
      // Aggressively exclude polyfills for ES2020+ features
      // These features are natively supported in our target browsers
      if (config.resolve) {
        config.resolve.alias = {
          ...config.resolve.alias,
          // Exclude core-js polyfills for ES2020+ features
          'core-js/modules/es.array.at': false,
          'core-js/modules/es.array.flat': false,
          'core-js/modules/es.array.flat-map': false,
          'core-js/modules/es.object.from-entries': false,
          'core-js/modules/es.object.has-own': false,
          'core-js/modules/es.string.trim-start': false,
          'core-js/modules/es.string.trim-end': false,
        };
      }
      
      // Configure webpack to not include polyfills for features that are natively supported
      if (config.optimization) {
        config.optimization.usedExports = true;
      }
    }
    return config;
  },

  // Optimize font loading
  optimizeFonts: true,

  // Optimize CSS loading - Next.js automatically optimizes CSS
  // CSS is automatically code-split and loaded on demand
  // For further optimization, consider using CSS modules or styled-components
  // which Next.js handles more efficiently than global CSS
};

export default nextConfig;
