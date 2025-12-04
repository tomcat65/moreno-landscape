# Favicon Generation Script

This script generates favicons for all platforms (Android, iOS, Windows, etc.) from `logo1.png`.

## Setup

1. Install the required dependency:
```bash
npm install sharp --save-dev
```

## Usage

Run the script to generate all favicons:
```bash
npm run generate-favicons
```

Or directly:
```bash
node scripts/generate-favicons.js
```

## Generated Files

The script will generate the following favicon files in the `public/` directory:

### Standard Favicons
- `favicon.ico` - Standard favicon (32x32)
- `favicon-16x16.png` - Small favicon
- `favicon-32x32.png` - Standard favicon
- `favicon-96x96.png` - Large favicon

### Android Chrome Icons
- `android-chrome-192x192.png` - Android icon
- `android-chrome-512x512.png` - Android icon (high-res)

### Apple Touch Icons
- `apple-touch-icon.png` - Standard Apple icon (180x180)
- `apple-touch-icon-57x57.png` - iPhone (legacy)
- `apple-touch-icon-60x60.png` - iPhone
- `apple-touch-icon-72x72.png` - iPad (legacy)
- `apple-touch-icon-76x76.png` - iPad
- `apple-touch-icon-114x114.png` - iPhone Retina (legacy)
- `apple-touch-icon-120x120.png` - iPhone Retina
- `apple-touch-icon-144x144.png` - iPad Retina (legacy)
- `apple-touch-icon-152x152.png` - iPad Retina

### Microsoft Tiles
- `mstile-70x70.png` - Small tile
- `mstile-144x144.png` - Medium tile
- `mstile-150x150.png` - Standard tile
- `mstile-310x150.png` - Wide tile
- `mstile-310x310.png` - Large tile

## Configuration Files

The following configuration files are already set up:
- `public/manifest.json` - PWA manifest
- `public/browserconfig.xml` - Microsoft tile configuration
- `src/app/layout.tsx` - Contains all favicon metadata

## Notes

- All icons are generated with a white background to ensure visibility
- The logo is centered and scaled to fit within each icon size
- Icons are generated in PNG format for maximum compatibility

