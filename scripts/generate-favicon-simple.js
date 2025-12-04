#!/usr/bin/env node

/**
 * Simple script to generate favicon.ico from logo1.png
 * This will be automatically used by Next.js when placed in src/app/
 * 
 * Requires: npm install sharp --save-dev
 * Usage: node scripts/generate-favicon-simple.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const logoPath = path.join(__dirname, '../public/images/logos/logo1.png');
const outputPath = path.join(__dirname, '../src/app/favicon.ico');
const outputPathPublic = path.join(__dirname, '../public/favicon.ico');

async function generateFavicon() {
  try {
    // Generate for app directory (Next.js will auto-detect this)
    await sharp(logoPath)
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 }, // White background
      })
      .png()
      .toFile(outputPath);
    console.log('✓ Generated src/app/favicon.ico (Next.js will auto-detect this)');

    // Also generate for public directory (fallback)
    await sharp(logoPath)
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 },
      })
      .png()
      .toFile(outputPathPublic);
    console.log('✓ Generated public/favicon.ico');

    console.log('\n✓ Favicon generated! Please:');
    console.log('1. Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)');
    console.log('2. Or restart your dev server');
  } catch (error) {
    console.error('✗ Error:', error.message);
    process.exit(1);
  }
}

// Check if sharp is installed
try {
  require.resolve('sharp');
  generateFavicon();
} catch (error) {
  console.error('Error: sharp is not installed.');
  console.error('Please install it first: npm install sharp --save-dev');
  process.exit(1);
}

