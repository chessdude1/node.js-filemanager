import { createReadStream, appendFile, createWriteStream, existsSync } from 'fs'
import { createBrotliCompress, createBrotliDecompress } from 'zlib'
import { readFile } from 'fs/promises';
import { createHash } from 'crypto'


class FileTransformation {

  async hash(path) {
    try {
      const promise = await readFile(path, err => {
        if (err) console.log('Operation failed')
      })
      let hash = createHash('sha256').update(promise).digest('hex');
      console.log(hash)
    } catch {
      console.log('Operation failed')
    }
  }

  async compress(paths) {


    if (!existsSync(paths[0])) {
      console.log('Operation failed')
      return
    }

    const readStream = createReadStream(paths[0], err => {
      if (err) console.log('Operation failed')
      return
    });

    await appendFile(paths[1], '', (err) => {
      if (err) console.log('Operation failed')
      return
    })

    const writeStream = createWriteStream(paths[1], err => {
      if (err) console.log('Operation failed')
      return
    });

    const brotliCompress = createBrotliCompress();
    readStream.pipe(brotliCompress).pipe(writeStream);


  }

  async decompress(paths) {

    if (!existsSync(paths[0])) {
      console.log('Operation failed')
      return
    }

    try {
      const brotliDecompress = createBrotliDecompress();

      appendFile(paths[1], '', (err) => {
        if (err) console.log('Operation failed')
      })

      const readStreamDecompress = createReadStream(paths[0]);
      const writeStreamDecompress = createWriteStream(paths[1]);
      readStreamDecompress.pipe(brotliDecompress).pipe(writeStreamDecompress);
    } catch {
      console.log('Operation failed')
    }
  }

}

export const fileTransformation = new FileTransformation()