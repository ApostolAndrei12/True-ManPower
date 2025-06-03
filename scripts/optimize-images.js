const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const images = [
  {
    name: 'hero-1.jpg',
    width: 1920,
    height: 1080,
  },
  {
    name: 'hero-2.jpg',
    width: 1920,
    height: 1080,
  },
  {
    name: 'hero-3.jpg',
    width: 1920,
    height: 1080,
  },
  {
    name: 'logo.png',
    width: 200,
    height: 200,
  },
  {
    name: 'favicon.ico',
    width: 32,
    height: 32,
  }
];

async function optimizeImages() {
  const publicDir = path.join(process.cwd(), 'public');
  
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  for (const image of images) {
    const inputPath = path.join(publicDir, `original-${image.name}`);
    const outputPath = path.join(publicDir, image.name);

    if (fs.existsSync(inputPath)) {
      await sharp(inputPath)
        .resize(image.width, image.height, {
          fit: 'cover',
          position: 'center'
        })
        .toFile(outputPath);

      console.log(`Optimized: ${image.name}`);
    } else {
      console.log(`Missing original file: ${image.name}`);
    }
  }
}

optimizeImages().catch(console.error); 