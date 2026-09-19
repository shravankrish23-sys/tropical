import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const imageConfigs = [
  { name: 'logo.png', maxWidth: 800, quality: 85, nearLossless: true },
  { name: 'hero-towels.png', maxWidth: 800, quality: 78, nearLossless: false },
  { name: 'hero-yoga.png', maxWidth: 800, quality: 78, nearLossless: false },
  { name: 'hero-corridor.png', maxWidth: 800, quality: 78, nearLossless: false }
];

const targetDirs = [
  path.join(rootDir, 'public'),
  path.join(rootDir, 'src', 'assets')
];

export async function convertImagesToWebP() {
  console.log('🖼️  Optimizing & Converting images to responsive WebP format...');
  
  for (const dir of targetDirs) {
    if (!fs.existsSync(dir)) continue;

    for (const cfg of imageConfigs) {
      const srcPath = path.join(dir, cfg.name);
      if (!fs.existsSync(srcPath)) continue;

      const webpName = cfg.name.replace(/\.png$/, '.webp');
      const destPath = path.join(dir, webpName);

      try {
        await sharp(srcPath)
          .resize({ width: cfg.maxWidth, withoutEnlargement: true })
          .webp({
            quality: cfg.quality,
            effort: 6,
            nearLossless: cfg.nearLossless
          })
          .toFile(destPath);

        const srcSize = fs.statSync(srcPath).size;
        const destSize = fs.statSync(destPath).size;
        const reduction = (((srcSize - destSize) / srcSize) * 100).toFixed(1);

        console.log(`  ✓ ${path.relative(rootDir, destPath)}: ${(srcSize / 1024).toFixed(0)}KB -> ${(destSize / 1024).toFixed(0)}KB (-${reduction}%)`);
      } catch (err) {
        console.error(`  ✗ Failed to convert ${cfg.name}:`, err.message);
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
