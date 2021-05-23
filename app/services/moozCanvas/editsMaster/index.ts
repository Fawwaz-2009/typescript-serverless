import { SerializeEditables } from "@/types";
import { Canvas } from "canvas"
import drivers from './drivers'

function drawEdits(canvas: Canvas, serializedEditables: SerializeEditables[]) {
  serializedEditables.forEach((serializedEdit) => {
    const currentValue = serializedEdit.currentValue;
    const driverName = serializedEdit.drawingInstructions.driver
    const driver = drivers[driverName]
    serializedEdit.drawingInstructions.driverInstructions.forEach((driverInstruction) => {
      driver(currentValue, canvas, driverInstruction);
    })
  });
}


export default drawEdits