import { Request, Response } from 'express';
import { Storage } from '@google-cloud/storage';
import path from 'path';
import errorHandler from '../../utils/errorHandler/errorHandler';
import { put } from './uploadImages.service';

const storage = new Storage({
  projectId: process.env.PROJECT_ID_GCP,
  keyFilename: path.join(__dirname, "../../backend-hotel-e2a49-338b4700bb30.json")
});

const bucket = storage.bucket('backend-hotel-e2a49.appspot.com')

export async function uploadFiles(req: Request, res: Response) {
  try {
    if (req.file) {
      const blob = bucket.file(req.file.originalname);
      const blobStream = blob.createWriteStream({
        resumable: false,
        public: true
      });

      blobStream.on("finish", async () => {
        await blob.makePublic()
        const imageUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
        const { id } = req.params
        await put(id, [imageUrl])

        res.end()
      });

      blobStream.end(req.file.buffer);
    } else {
      throw new Error("Error uploading image: No file provided");
    }
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}

