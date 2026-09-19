import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

async function generateFavicons() {
  const logoPath = path.join(projectRoot, 'public/logo.png');
  const publicDir = path.join(projectRoot, 'public');

  if (!fs.existsSync(logoPath)) {
    throw new Error(`Logo file not found at ${logoPath}`);
  }

  console.log('Extracting palm-tree and wave emblem from logo.png...');

  // 1. Extract the isolated white emblem from left side of logo (exact bounding box: 478, 223, 1053, 1161)
  const emblemBuffer = await sharp(logoPath)
    .extract({ left: 478, top: 223, width: 1053, height: 1161 })
    .toBuffer();

  // 2. Generate Master 512x512 Canvas with Refined Deep Tropical Green Background (#141c15)
  // Scale emblem to 390x390 to provide optimal padding and crispness at all sizes
  const scaledEmblem = await sharp(emblemBuffer)
    .resize(390, 390, { fit: 'inside' })
    .toBuffer();

  const master512 = await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: { r: 20, g: 28, b: 21, alpha: 1 } // #141c15 (Refined Tropical Spa Deep Green)
    }
  })
  .composite([{
    input: scaledEmblem,
    gravity: 'center'
  }])
  .png()
  .toBuffer();

  // 3. Generate public/favicon.png (192x192)
  console.log('Generating public/favicon.png (192x192)...');
  await sharp(master512)
    .resize(192, 192)
    .png()
    .toFile(path.join(publicDir, 'favicon.png'));

  // 4. Generate public/apple-touch-icon.png (180x180)
  console.log('Generating public/apple-touch-icon.png (180x180)...');
  await sharp(master512)
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));

  // 5. Generate Multi-Size public/favicon.ico (16x16, 32x32, 48x48)
  console.log('Generating public/favicon.ico (16x16, 32x32, 48x48)...');
  const png16 = await sharp(master512).resize(16, 16).png().toBuffer();
  const png32 = await sharp(master512).resize(32, 32).png().toBuffer();
  const png48 = await sharp(master512).resize(48, 48).png().toBuffer();

  const icoBuffer = createIco([
    { width: 16, height: 16, buffer: png16 },
    { width: 32, height: 32, buffer: png32 },
    { width: 48, height: 48, buffer: png48 }
  ]);

  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);

  console.log('✅ All favicon files created successfully in public/ !');
}

function createIco(images) {
  const count = images.length;
  const headerSize = 6;
  const entrySize = 16;
  let offset = headerSize + (entrySize * count);

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // Reserved (0)
  header.writeUInt16LE(1, 2); // Image type: 1 = ICO
  header.writeUInt16LE(count, 4); // Number of images

  const entries = [];
  for (const img of images) {
    const entry = Buffer.alloc(entrySize);
    entry.writeUInt8(img.width === 256 ? 0 : img.width, 0); // Width
    entry.writeUInt8(img.height === 256 ? 0 : img.height, 1); // Height
    entry.writeUInt8(0, 2); // Color palette (0 for no palette)
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(img.buffer.length, 8); // Size of image data
    entry.writeUInt32LE(offset, 12); // Offset of image data

    entries.push(entry);
    offset += img.buffer.length;
  }

  return Buffer.concat([header, ...entries, ...images.map(img => img.buffer)]);
}

generateFavicons().catch(err => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});
