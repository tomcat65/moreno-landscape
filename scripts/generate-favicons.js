#!/usr/bin/env node

/**
 * Generate favicons from logo1.png for all platforms
 * Requires: npm install sharp --save-dev
 * Usage: node scripts/generate-favicons.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const logoPath = path.join(__dirname, '../public/images/logos/logo1.png');
const outputDir = path.join(__dirname, '../public');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Favicon sizes and configurations
const faviconSizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 96, name: 'favicon-96x96.png' },
  { size: 192, name: 'android-chrome-192x192.png' },
  { size: 512, name: 'android-chrome-512x512.png' },
];

// Apple touch icon sizes
const appleSizes = [
  { size: 57, name: 'apple-touch-icon-57x57.png' },
  { size: 60, name: 'apple-touch-icon-60x60.png' },
  { size: 72, name: 'apple-touch-icon-72x72.png' },
  { size: 76, name: 'apple-touch-icon-76x76.png' },
  { size: 114, name: 'apple-touch-icon-114x114.png' },
  { size: 120, name: 'apple-touch-icon-120x120.png' },
  { size: 144, name: 'apple-touch-icon-144x144.png' },
  { size: 152, name: 'apple-touch-icon-152x152.png' },
  { size: 180, name: 'apple-touch-icon.png' }, // Standard Apple touch icon
];

// Microsoft tile sizes
const msTileSizes = [
  { size: 70, name: 'mstile-70x70.png' },
  { size: 144, name: 'mstile-144x144.png' },
  { size: 150, name: 'mstile-150x150.png' },
  { size: 310, name: 'mstile-310x310.png' },
  { size: 310, name: 'mstile-310x150.png', width: 310, height: 150 }, // Wide tile
];

async function generateFavicon(size, name, options = {}) {
  const width = options.width || size;
  const height = options.height || size;
  const outputPath = path.join(outputDir, name);

  try {
    await sharp(logoPath)
      .resize(width, height, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 }, // White background
      })
      .png()
      .toFile(outputPath);
    console.log(`✓ Generated ${name} (${width}x${height})`);
  } catch (error) {
    console.error(`✗ Failed to generate ${name}:`, error.message);
  }
}

async function generateIco() {
  // Generate favicon.ico (multi-size ICO file)
  // Note: sharp doesn't support ICO format directly, so we'll use PNG
  // For true ICO, you'd need a tool like jimp or convert
  try {
    await sharp(logoPath)
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 },
      })
      .png()
      .toFile(path.join(outputDir, 'favicon.ico'));
    console.log('✓ Generated favicon.ico (32x32 PNG)');
  } catch (error) {
    console.error('✗ Failed to generate favicon.ico:', error.message);
  }
}

async function generateAll() {
  console.log('Generating favicons from logo1.png...\n');

  // Generate standard favicons
  console.log('Generating standard favicons...');
  for (const config of faviconSizes) {
    await generateFavicon(config.size, config.name);
  }

  // Generate Apple touch icons
  console.log('\nGenerating Apple touch icons...');
  for (const config of appleSizes) {
    await generateFavicon(config.size, config.name);
  }

  // Generate Microsoft tiles
  console.log('\nGenerating Microsoft tiles...');
  for (const config of msTileSizes) {
    await generateFavicon(config.size, config.name, {
      width: config.width || config.size,
      height: config.height || config.size,
    });
  }

  // Generate favicon.ico
  console.log('\nGenerating favicon.ico...');
  await generateIco();

  console.log('\n✓ All favicons generated successfully!');
  console.log('\nNext steps:');
  console.log('1. Update src/app/layout.tsx with favicon metadata');
  console.log('2. Create public/manifest.json for PWA support');
  console.log('3. Create public/browserconfig.xml for Microsoft tiles');
}

// Check if sharp is installed
try {
  require.resolve('sharp');
  generateAll().catch(console.error);
} catch (error) {
  console.error('Error: sharp is not installed.');
  console.error('Please install it first: npm install sharp --save-dev');
  process.exit(1);
}

