//path modules

const path = require('path');


console.log(path.sep);
const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);
//normalized path

const base = path.basename(filePath);
console.log(base);

//get the absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);
