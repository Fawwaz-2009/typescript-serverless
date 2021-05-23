// TODO this need to be more sophisticated to deal with cases where no change of value included and for values other than text

import { Editable, Edit, SerializeEditables } from '@/types';

function serializeEditables(editables: Editable[], edits: Edit[]): SerializeEditables[] {
  return editables.map((editableObj) => {
    const serializeEditable = { ...editableObj, currentValue: editableObj.defaultText };

    const editableName = editableObj.name;
    const loadedEditable = edits.find(({ name }) => name === editableName);

    if (loadedEditable !== undefined) {
      serializeEditable.currentValue = loadedEditable.value;
    }
    return serializeEditable;
  });
}

export default serializeEditables;
