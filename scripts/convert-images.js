import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const imageNames = [
  'logo.png',
  'hero-towels.png',
  'hero-yoga.png',
  'hero-corridor.png'
];

const targetDirs = [
  path.join(rootDir, 'public'),
  path.join(rootDir, 'src', 'assets')
];

export async function convertImagesToWebP() {
  console.log('🖼️  Converting images to WebP format...');
  
  for (const dir of targetDirs) {
    if (!fs.existsSync(dir)) continue;

    for (const imgName of imageNames) {
      const srcPath = path.join(dir, imgName);
      if (!fs.existsSync(srcPath)) continue;

      const webpName = imgName.replace(/\.png$/, '.webp');
      const destPath = path.join(dir, webpName);

      try {
        const isLogo = imgName.includes('logo');
        await sharp(srcPath)
          .webp({
            quality: isLogo ? 90 : 80,
            effort: 6,
            nearLossless: isLogo
          })
          .toFile(destPath);

        const srcSize = fs.statSync(srcPath).size;
        const destSize = fs.statSync(destPath).size;
        const reduction = (((srcSize - destSize) / srcSize) * 100).toFixed(1);

        console.log(`  ✓ ${path.relative(rootDir, destPath)}: ${(srcSize / 1024).toFixed(0)}KB -> ${(destSize / 1024).toFixed(0)}KB (-${reduction}%)`);
      } catch (err) {
        console.error(`  ✗ Failed to convert ${imgName}:`, err.message);
      }
    }
  }
}

// Run directly if called as a script
if (process.argv[1] === __filename) {
  convertImagesToWebP().then(() => {
    console.log('Image conversion complete.');
  });
}
