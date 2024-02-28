import { Request, Response } from 'express';
import { Storage } from '@google-cloud/storage';
import path from 'path';
import errorHandler from '../utils/errorHandler';


let projectId = "backend-hotel-e2a49";
let keyFilename = path.join(__dirname, "../backend-hotel-e2a49-338b4700bb30.json")

const storage = new Storage({
  projectId,
  keyFilename,
});

const bucket = storage.bucket('backend-hotel-e2a49.appspot.com')

export async function uploadFiles(req: Request, res: Response) {
  try {
    if (req.file) {
      const blob = bucket.file(req.file.originalname);
      const blobStream = blob.createWriteStream();

      blobStream.on("finish", () => {
        res.status(200).send("succes")
      });

      blobStream.end(req.file.buffer);
    } else throw "error upload image";
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}

