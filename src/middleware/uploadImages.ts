import { Request, Response } from 'express';
import { Storage } from '@google-cloud/storage';
import { createReadStream } from 'fs';
import path from 'path';

const gc = new Storage({
  keyFilename: path.join(__dirname, "../backend-hotel-e2a49-338b4700bb30.json"),
  projectId: "backend-hotel-e2a49"
});

const hotelBucket = gc.bucket('backend-hotel-e2a49.appspot.com');

export async function uploadFilesToGPC(req: Request, res: Response) {
  try {
    const { filePath, fileName } = req.body
    const file = hotelBucket.file(fileName);
    const stream = createReadStream(filePath);

    await new Promise((res) => {
      stream
        .pipe(file.createWriteStream({
          resumable: false,
          gzip: true
        }))
        .on('finish', res)
    });

    return res.send('upload')
  } catch (error) {
    console.log(error);
  }
}
