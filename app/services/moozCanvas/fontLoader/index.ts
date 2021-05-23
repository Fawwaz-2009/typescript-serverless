import fetch from 'node-fetch';
import { createWriteStream } from 'fs';
import {join} from 'path'
import { registerFont } from 'canvas';
import { Font } from '@/types';

export default function loadAndRegisterFonts(fonts: Font[]) {
  const promises: Promise<any>[] = [];

  fonts.forEach(({ family, fontFaceUrl }) => {

      const fontFileName = `${family}.ttf`;
      const fontFilePath = join(__dirname, `/fonts/${fontFileName}`)

    //   TODO add check if fonts already downloaded

    const promise = fetch(fontFaceUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('failed to fetch font');
        }
        return new Promise((resolve, reject) => {
          const dest = createWriteStream(fontFilePath);
          response.body.pipe(dest);
          response.body.on('end', () => resolve('it worked'));
          dest.on('error', reject);
        });
      })
      .then(() => {
          console.log("REGISTERING FONT.....")
        registerFont(fontFilePath, { family })
          console.log('REGISTERED FONT.....');
      })
      .catch((error) => {
        console.log(error);
        throw new Error('failed to fetch font ' + family);
      });
    promises.push(promise);
  });

  return Promise.all(promises);
}
