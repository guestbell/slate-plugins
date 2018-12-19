import { Editor, Block } from 'slate';

import Options from '../options';
import { getItemsAtRange } from '../utils';

/**
 * Unwrap items at range from their list.
 */
function unwrapList(opts: Options, editor: Editor): Editor {
  const items = getItemsAtRange(opts)(editor.value);

  if (items.isEmpty()) {
    return editor;
  }

  // Unwrap the items from their list
  items.forEach(item => {
    editor.withoutNormalizing(() => {
      editor.unwrapNodeByKey(item.key);
    });
  });

  // Parent of the list of the items
  const firstItem = items.first();
  const parent = editor.value.document.getParent(firstItem.key) as Block;

  let index = parent.nodes.findIndex(node => node.key === firstItem.key);

  // Unwrap the items' children
  items.forEach(item => {
    item.nodes.forEach(node => {
      editor.withoutNormalizing(() => {
        editor.moveNodeByKey(node.key, parent.key, index);
      });
      index += 1;
    });
  });

  // Finally, remove the now empty items
  items.forEach(item => {
    editor.withoutNormalizing(() => {
      editor.removeNodeByKey(item.key);
    });
  });
  return editor;
}

export default unwrapList;
