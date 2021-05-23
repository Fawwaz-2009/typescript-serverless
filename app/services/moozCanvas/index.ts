import { Edit } from "@/types";

import setupCanvas from './helpers/setupCanvas';
import  {fetchTemplate}  from './api/index';
import serializeEditables from './helpers/serializeEditables';
import drawEdits from './editsMaster/index';
import loadAndRegisterFonts from "./fontLoader";

export async function creatImageFromTemplate(templateId:string, edits: Edit[]) {

    const {templateUrl, editables} = await fetchTemplate(templateId)
    // TODO add fetching + loading the font (should be an array) (can't be at the driver level since all fonts has to be loaded before the canvas is created)
    const fonts = editables.map(editable=> editable.font);
    await loadAndRegisterFonts(fonts);

    const serializedEditables = serializeEditables(editables, edits)

    const canvas = await setupCanvas(templateUrl)

    drawEdits(canvas, serializedEditables)

    return canvas.toDataURL()

}
