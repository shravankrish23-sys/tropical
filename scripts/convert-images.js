import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const heroImages = ['hero-yoga.png', 'hero-corridor.png', 'hero-towels.png'];
const heroWidths = [480, 768, 1200];

const targetDirs = [
  path.join(rootDir, 'public'),
  path.join(rootDir, 'src', 'assets')
];

export async function convertImagesToWebP() {
  console.log('🖼️  Optimizing & Converting images to responsive WebP format...');
  
  for (const dir of targetDirs) {
    if (!fs.existsSync(dir)) continue;

    // Process Hero Images with responsive variants
    for (const imgName of heroImages) {
      const srcPath = path.join(dir, imgName);
      if (!fs.existsSync(srcPath)) continue;

      const baseName = imgName.replace(/\.png$/, '');

      // Generate standard fallback webp (800px)
      const defaultDest = path.join(dir, `${baseName}.webp`);
      await sharp(srcPath)
        .resize({ width: 800, withoutEnlargement: true })
        .webp({ quality: 78, effort: 6 })
        .toFile(defaultDest);

      // Generate responsive variants: 480px, 768px, 1200px
      for (const w of heroWidths) {
        const destPath = path.join(dir, `${baseName}-${w}.webp`);
        await sharp(srcPath)
          .resize({ width: w, withoutEnlargement: true })
          .webp({ quality: 78, effort: 6 })
          .toFile(destPath);
        
        const sizeKb = (fs.statSync(destPath).size / 1024).toFixed(0);
        console.log(`  ✓ ${path.relative(rootDir, destPath)} (${w}w): ${sizeKb}KB`);
      }
    }

    // Process Logo (standard + 320px responsive variant)
    const logoSrc = path.join(dir, 'logo.png');
    if (fs.existsSync(logoSrc)) {
      // 800px fallback logo.webp
      await sharp(logoSrc)
        .resize({ width: 800, withoutEnlargement: true })
        .webp({ quality: 85, effort: 6, nearLossless: true })
        .toFile(path.join(dir, 'logo.webp'));

      // 320px optimized logo.webp
      const logo320Webp = path.join(dir, 'logo-320.webp');
      await sharp(logoSrc)
        .resize({ width: 320, withoutEnlargement: true })
        .webp({ quality: 85, effort: 6, nearLossless: true })
        .toFile(logo320Webp);

      // 320px optimized logo.png
      const logo320Png = path.join(dir, 'logo-320.png');
      await sharp(logoSrc)
        .resize({ width: 320, withoutEnlargement: true })
        .png({ compressionLevel: 9 })
        .toFile(logo320Png);

      const webpKb = (fs.statSync(logo320Webp).size / 1024).toFixed(1);
      const pngKb = (fs.statSync(logo320Png).size / 1024).toFixed(1);
      console.log(`  ✓ ${path.relative(rootDir, logo320Webp)}: ${webpKb}KB`);
      console.log(`  ✓ ${path.relative(rootDir, logo320Png)}: ${pngKb}KB`);
    }
  }
}

// Run directly if called as a script
if (process.argv[1] === __filename) {
  convertImagesToWebP().then(() => {
    console.log('Image conversion complete.');
  });
}
