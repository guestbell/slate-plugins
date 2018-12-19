import { Block, Editor } from 'slate';

import Options from '../options';
import {
  getPreviousItem,
  getCurrentItem,
  getListForItem,
  isList
} from '../utils';

/**
 * Increase the depth of the current item by putting it in a sub-list
 * of previous item.
 * For first items in a list, does nothing.
 */
function increaseItemDepth(opts: Options, editor: Editor): Editor {
  const previousItem = getPreviousItem(opts)(editor.value);
  const currentItem = getCurrentItem(opts)(editor.value);

  if (!previousItem) {
    return editor;
  }

  if (!currentItem) {
    return editor;
  }

  // Move the item in the subList of previous item
  return moveAsSubItem(opts, editor, currentItem, previousItem.key);
}

/**
 * Move the given item to the subList at the end of destination item,
 * creating a subList if needed.
 */
function moveAsSubItem(
  opts: Options,
  editor: Editor,
  // The list item to add
  item: Block,
  // The key of the destination node
  destKey: string
): Editor {
  const destination = editor.value.document.getDescendant(destKey) as Block;
  const lastIndex = destination.nodes.size;
  const lastChild = destination.nodes.last() as Block;

  // The potential existing last child list
  const existingList = isList(opts)(lastChild) ? lastChild : null;

  if (existingList) {
    return editor.moveNodeByKey(
      item.key,
      existingList.key,
      existingList.nodes.size // as last item
    );
  }
  const currentList = getListForItem(opts)(editor.value, destination);
  if (!currentList) {
    throw new Error('Destination is not in a list');
  }

  const newSubList = Block.create({
    object: 'block',
    type: currentList.type,
    data: currentList.data,
  });

  newSubList.validate(editor);

  return editor.withoutNormalizing(() => {
    editor.insertNodeByKey(destKey, lastIndex, newSubList);
    editor.moveNodeByKey(item.key, newSubList.key, 0);
  });
}

export default increaseItemDepth;
