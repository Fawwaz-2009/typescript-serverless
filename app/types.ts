export interface Edit {
    name: string;
    value: string;
}



// ************* EDITABLES ***************
export interface Font {
  type: 'google' | 'custom' | 'default';
  family: string;
  fontFaceUrl: string;
}



export interface PassToNativeCanvas {
  [key: string]: any
}
// export interface PassToNativeCanvas {
//   globalAlpha?: number;
//   lineCap?: 'butt' | 'round' | 'square';
//   lineDashOffset?: number;
// }

export interface FillStyle {
  type: 'color' | 'gradient';
  value:
    | string
    | {
        gradientType: string;
        dimensions: {
          x0: number;
          y0: number;
          x1: number;
          y1: number;
          r1: number;
          startAngle: number;
        };
        colorStops: [{ offset: number; color: string }];
      };
}

export interface CanvasFontStr {
  fontWeight: 'normal' | 'bold' | 'bolder' | 'lighter' | string;
  fillStyle: FillStyle;
  fontVariant: 'normal' | 'small-caps';
  fontSizePercentageOfHeight: number;
  fontFamily: string;
  fontStyle: 'normal' | 'italic' | 'oblique';
}


export interface TextDriverConfig {
  xValuePercentage: number;
  yValuePercentage: number;
  maxWidthPercentageOfWidth: number;
  verticalAlignment: string;
  canvasFontStr: CanvasFontStr;
  withTextFill: boolean;
  withStrokeFill: boolean;
}

// export enum Routine {
//   TEXT_Fill = 'TEXT_Fill',
//   STROKE_Fill = 'STROKE_Fill',
// }


export interface DriverInstruction {
  // routines: Routine[];
  config: TextDriverConfig;
  passToNativeCanvas: PassToNativeCanvas;
}

export interface DrawingInstruction {
  driver: 'TEXT_DRIVER' | 'IMAGE_DRIVER';
  driverInstructions: DriverInstruction[];
}


export interface Editable {
  name: string;
  displayName: string;
  defaultText: string;
  font: Font;
  drawingInstructions: DrawingInstruction;
}


export interface SerializeEditables extends Editable {
  currentValue: string;
}

export interface DefaultTemplate {
  templateUrl: string;
  demoUrl: string;
  editables: Editable[];
}


export interface DesignData {
  id: string;
  type: string;
  category: string;
  subCategory: string;
  defaultTemplate: DefaultTemplate;
}