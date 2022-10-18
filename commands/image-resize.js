const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const targets = [
  {
    source: path.resolve(__dirname, '../src/public/images/heros/hero-hd.jpg'),
    resize: [ 480, 720, 1350 ],
    destination: path.resolve(__dirname, '../src/public/images/heros'),
    filename: (size, ext) => `hero-w-${size}.${ext}`,
  }
];

async function main() {
  const tasks = targets.map(({ source, destination, resize, filename }) => {
    if (!fs.existsSync(destination)) {
      fs.mkdirSync(destination, { recursive: true });
    }

    const resize_tasks = resize.map(async (size) => {
      await sharp(source)
        .resize(size)
        .toFile(
          path.resolve(__dirname, `${destination}/${filename(size, 'jpg')}`)
        );

      await sharp(source)
        .resize(size)
        .toFile(
          path.resolve(__dirname, `${destination}/${filename(size, 'webp')}`)
        );
    })
  
    return Promise.all(resize_tasks);
  });

  await Promise.all(tasks);

  console.info(`Tasks Completed!`);
}

main();
