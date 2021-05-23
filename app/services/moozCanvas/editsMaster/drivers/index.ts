import { DriverInstruction, PassToNativeCanvas, TextDriverConfig } from '@/types';
import { Canvas } from 'canvas';
import passToCtx from './passToCtx';

function textDriver(text: string, canvas: Canvas, driverInstruction: DriverInstruction) {
  const ctx = canvas.getContext('2d');

  passToCtx(ctx, driverInstruction.passToNativeCanvas);

  // const fillStyle = getFillStyle(driverInstruction.config.canvasFontStr.fillStyle)

  // calculate x, y coordinates
  const { x, y } = getXyCoords(canvas, driverInstruction.config);
  // horizintal text alignment (passToNativeCanvas take care of this)
  // text baseline (passToNativeCanvas take care of this)
  //  text direction (passToNativeCanvas take care of this)
  // vertical Text alignment
  const { fontWeight, fontStyle, fontVariant, fontSizePercentageOfHeight, fontFamily } = driverInstruction.config.canvasFontStr;
  const dynamicFontSize = `${fontSizePercentageOfHeight * ctx.canvas.height}px`;

  ctx.font = makeCanvasFontStr(fontWeight, fontStyle, fontVariant, dynamicFontSize, fontFamily);

  if (driverInstruction.config.withTextFill) {
      console.log("555 ", ctx.textAlign)
    ctx.fillText(text, x, y);
  }
  if (driverInstruction.config.withStrokeFill) {
    ctx.strokeText(text, x, y);
  }
}

export default {
  TEXT_DRIVER: textDriver,
  IMAGE_DRIVER: (currentValue: string, canvas: Canvas, driverInstruction: DriverInstruction) => {},
};

function getXyCoords(canvas: Canvas, config: TextDriverConfig) {
  const h = canvas.height;
  const w = canvas.width;
  const { xValuePercentage, yValuePercentage } = config;
  const x = (xValuePercentage / 100) * w;
  const y = (yValuePercentage / 100) * h;
  return { x, y };
}

function makeCanvasFontStr(fontWeight = 'normal', fontStyle = 'normal', fontVariant = 'normal', fontSize = '100px', fontFamily = 'Arial') {
    console.log(`${fontWeight} ${fontStyle} ${fontVariant} ${fontSize} '${fontFamily}'`);
  return `${fontWeight} ${fontStyle} ${fontVariant} ${fontSize} '${fontFamily}'`;
}
