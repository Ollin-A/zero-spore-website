const sharp = require('sharp');
const pngToIco = require('png-to-ico').default;
const fs = require('fs');
const path = require('path');

const SOURCE = path.join(__dirname, '..', 'public', 'logo', 'isotipo-color.png');
const PUBLIC = path.join(__dirname, '..', 'public');
const TRANSPARENT = { r: 0, g: 0, b: 0, alpha: 0 };

async function generate() {
  const input = sharp(SOURCE);

  // 512x512
  await input.clone()
    .resize(512, 512, { fit: 'contain', background: TRANSPARENT })
    .png()
    .toFile(path.join(PUBLIC, 'android-chrome-512x512.png'));
  console.log('  android-chrome-512x512.png');

  // 192x192
  await input.clone()
    .resize(192, 192, { fit: 'contain', background: TRANSPARENT })
    .png()
    .toFile(path.join(PUBLIC, 'android-chrome-192x192.png'));
  console.log('  android-chrome-192x192.png');

  // 180x180 apple-touch-icon (with ~20% padding)
  await input.clone()
    .resize(144, 144, { fit: 'contain', background: TRANSPARENT })
    .extend({ top: 18, bottom: 18, left: 18, right: 18, background: TRANSPARENT })
    .png()
    .toFile(path.join(PUBLIC, 'apple-touch-icon.png'));
  console.log('  apple-touch-icon.png');

  // 48x48 (temp, for .ico)
  const favicon48Path = path.join(PUBLIC, 'favicon-48.png');
  await input.clone()
    .resize(48, 48, { fit: 'contain', background: TRANSPARENT })
    .png()
    .toFile(favicon48Path);
  console.log('  favicon-48.png (temp)');

  // 32x32
  await input.clone()
    .resize(32, 32, { fit: 'contain', background: TRANSPARENT })
    .png()
    .toFile(path.join(PUBLIC, 'favicon-32x32.png'));
  console.log('  favicon-32x32.png');

  // 16x16
  await input.clone()
    .resize(16, 16, { fit: 'contain', background: TRANSPARENT })
    .png()
    .toFile(path.join(PUBLIC, 'favicon-16x16.png'));
  console.log('  favicon-16x16.png');

  // Generate .ico from 16, 32, 48
  const icoBuf = await pngToIco([
    path.join(PUBLIC, 'favicon-16x16.png'),
    path.join(PUBLIC, 'favicon-32x32.png'),
    favicon48Path,
  ]);
  fs.writeFileSync(path.join(PUBLIC, 'favicon.ico'), icoBuf);
  console.log('  favicon.ico');

  // Clean up temp 48px file
  fs.unlinkSync(favicon48Path);
  console.log('\nDone! All favicons generated.');
}

generate().catch(err => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});
