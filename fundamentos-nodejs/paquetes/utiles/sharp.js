const sharp = require('sharp');

sharp('js.png')
    .resize(80)
    .grayscale()
    .toFile('resized.png');