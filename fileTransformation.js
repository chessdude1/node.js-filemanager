import { createReadStream, appendFile, createWriteStream } from 'fs'
import { createBrotliCompress, createBrotliDecompress } from 'zlib'
import { readFile } from 'fs/promises';
import { createHash } from 'crypto'

class FileTransformation {

  async hash(path) {
    try {
      const promise = await readFile(path, err => {
        if (err) console.log('No such file or directory')
      })
      let hash = createHash('sha256').update(promise).digest('hex');
      console.log(hash)
    } catch (e) {
      console.log('No such file or directory')
    }
  }

  compress(paths) {
    try {
      const readStream = createReadStream(paths[0]);

      appendFile(paths[1], '', (err) => {
        if (err) console.log(err)
      })

      const writeStream = createWriteStream(paths[1]);
      const brotliCompress = createBrotliCompress();

      readStream.pipe(brotliCompress).pipe(writeStream);
    } catch (e) {
      console.log(e)
    }

  }

  decompress(paths) {
    try {
      const brotliDecompress = createBrotliDecompress();

      appendFile(paths[1], '', (err) => {
        if (err) console.log(err)
      })

      const readStreamDecompress = createReadStream(paths[0]);
      const writeStreamDecompress = createWriteStream(paths[1]);
      readStreamDecompress.pipe(brotliDecompress).pipe(writeStreamDecompress);
    } catch (e) {
      console.log(e)
    }

  }



}

export const fileTransformation = new FileTransformation()