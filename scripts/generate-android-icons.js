#!/usr/bin/env node

/**
 * Generate Android Chrome icons for manifest.json
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const logoPath = path.join(__dirname, '../public/images/logos/logo1.png');
const publicDir = path.join(__dirname, '../public');

const androidIcons = [
  { size: 192, name: 'android-chrome-192x192.png' },
  { size: 512, name: 'android-chrome-512x512.png' },
  { size: 96, name: 'favicon-96x96.png' },
];

async function generateIcon(size, name) {
  const outputPath = path.join(publicDir, name);
  try {
    const fillPercentage = 0.9;
    const logoSize = Math.floor(size * fillPercentage);
    
    await sharp(logoPath)
      .resize(logoSize, logoSize, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 },
      })
      .extend({
        top: Math.floor((size - logoSize) / 2),
        bottom: Math.ceil((size - logoSize) / 2),
        left: Math.floor((size - logoSize) / 2),
        right: Math.ceil((size - logoSize) / 2),
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .png()
      .toFile(outputPath);
    console.log(`✓ Generated ${name} (${size}x${size})`);
  } catch (error) {
    console.error(`✗ Failed to generate ${name}:`, error.message);
  }
}

async function generateAll() {
  console.log('Generating Android Chrome icons...\n');
  for (const icon of androidIcons) {
    await generateIcon(icon.size, icon.name);
  }
  console.log('\n✓ All Android icons generated!');
}

generateAll();

