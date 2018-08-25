import * as fs from 'fs';

export const readFile = async (path: string | Buffer, options?: string | { encoding?: string, flag?: string }) => {
  return new Promise<string | Buffer>((resolve, reject) => {
    fs.readFile(path, options, (err, data) => {
      if(err) return reject(err);

      resolve(data);
    });
  });
}