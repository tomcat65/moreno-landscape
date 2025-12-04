#!/usr/bin/env node

/**
 * Generate icon.png for Next.js 13+ file-based metadata
 * Next.js automatically detects icon.png in the app directory
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const logoPath = path.join(__dirname, '../public/images/logos/logo1.png');
const outputPath = path.join(__dirname, '../src/app/icon.png');

async function generateIcon() {
  try {
    // Get logo metadata
    const metadata = await sharp(logoPath).metadata();
    const logoWidth = metadata.width;
    const logoHeight = metadata.height;
    
    // Extract center portion of logo (focus on main logo area, not text)
    // Assuming logo content is in center 60% of width and full height
    const cropWidth = Math.floor(logoWidth * 0.6);
    const cropLeft = Math.floor((logoWidth - cropWidth) / 2);
    
    const iconSize = 64; // Larger size for better quality when scaled
    
    // Extract center portion and resize to fill icon
    await sharp(logoPath)
      .extract({
        left: cropLeft,
        top: 0,
        width: cropWidth,
        height: logoHeight
      })
      .resize(iconSize, iconSize, {
        fit: 'cover', // Fill entire space
        position: 'center',
      })
      .png()
      .toFile(outputPath);
    
    console.log(`✓ Generated src/app/icon.png (${iconSize}x${iconSize}) - extracted center portion of logo`);
    console.log('  This focuses on the main logo element, removing side text/padding');
    console.log('\nNext steps:');
    console.log('1. Restart your dev server');
    console.log('2. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)');
    console.log('3. Clear browser cache if still not updating');
  } catch (error) {
    console.error('✗ Error:', error.message);
    process.exit(1);
  }
}

generateIcon();

