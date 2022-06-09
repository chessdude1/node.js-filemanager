import fs from 'fs'
import zlib from 'zlib'
import path from 'path'


// const readStream = fs.createReadStream('D:\\Actual_projects\\nodejs-filmanager\\node.js-filemanager\\test.js');

// fs.appendFile('D:\\Actual_projects\\nodejs-filmanager\\node.js-filemanager\\test.txt', '', (err) => {
//   console.log(err)
// })

// const writeStream = fs.createWriteStream('D:\\Actual_projects\\nodejs-filmanager\\node.js-filemanager\\test.txt');


// const brotli = zlib.createBrotliCompress();

const brotliDecompress = zlib.createBrotliDecompress();

// readStream.pipe(brotli).pipe(writeStream);


fs.appendFile('D:\\Actual_projects\\nodejs-filmanager\\node.js-filemanager\\decompressed.txt', '', (err) => {
  console.log(err)
})

const writeStreamDecompress = fs.createWriteStream('D:\\Actual_projects\\nodejs-filmanager\\node.js-filemanager\\decompressed.txt');

const readStreamDecompress = fs.createReadStream('D:\\Actual_projects\\nodejs-filmanager\\node.js-filemanager\\test.txt');

readStreamDecompress.pipe(brotliDecompress).pipe(writeStreamDecompress);

