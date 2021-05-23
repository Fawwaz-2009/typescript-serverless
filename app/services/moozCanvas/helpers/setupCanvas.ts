import { createCanvas, loadImage } from 'canvas';

function setupCanvas(templateUrl:string) {
    return loadImage(templateUrl).then(image => {
        const canvas = createCanvas(image.width, image.height)
        const ctx = canvas.getContext('2d');

        ctx.drawImage(image, 0, 0)
        return canvas
    })
}

export default setupCanvas