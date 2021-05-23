// @ts-nocheck
export default function passToCtx(ctx: CanvasRenderingContext2D, propsToPassToNativeCanvas: PassToNativeCanvas) {
  const keys = Object.keys(propsToPassToNativeCanvas);
  keys.forEach((key) => {
    console.log((key, ' : ', propsToPassToNativeCanvas[key]));
    if (propsToPassToNativeCanvas[key] !== undefined) {
      ctx[key] = propsToPassToNativeCanvas[key];
    }
  });
}
