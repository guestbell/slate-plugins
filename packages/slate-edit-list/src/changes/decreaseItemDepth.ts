import { Block, Editor, Inline } from 'slate';

import Options from '../options';
import { getItemDepth, getCurrentItem } from '../utils';

/**
 * Decreases the depth of the current item. The following items will
 * be moved as subList of the decreased item.
 *
 * No-op for root items.
 */
function decreaseItemDepth(opts: Options, editor: Editor): Editor {
  const { value } = editor;
  const { document } = value;

  // Cannot decrease item depth of root items
  const depth = getItemDepth(opts)(value);
  if (depth === 1) {
    return editor;
  }

  const currentItem = getCurrentItem(opts)(value);
  if (!currentItem) {
    return editor;
  }

  const currentList: Block | Inline = document.getParent(currentItem.key) as
    | Block
    | Inline;
  const parentItem: Inline = document.getParent(currentList.key) as Inline;
  const parentList: Block | Inline = document.getParent(parentItem.key) as
    | Block
    | Inline;
  // The items following the item will be moved to a subList of currentItem
  const followingItems = currentList.nodes
    .skipUntil(i => i === currentItem)
    .rest();

  // True if the currentItem and the followingItems make the whole
  // currentList, and hence the currentList will be emptied
  const willEmptyCurrentList =
    currentList.nodes.size === followingItems.size + 1;

  if (!followingItems.isEmpty()) {
    // Add them as subList of currentItem
    const subList = Block.create({
      object: 'block',
      type: currentList.type,
      data: currentList.data,
    });
    // Add the subList
    editor.withoutNormalizing(() => {
      editor.insertNodeByKey(currentItem.key, currentItem.nodes.size, subList);
    });

    editor.withoutNormalizing(() => {
      editor.moveNodeByKey(
        currentItem.key,
        parentList.key,
        parentList.nodes.indexOf(parentItem) + 1
      );
    });

    // Move the followingItems to the subList
    followingItems.forEach((item, index) => {
      editor.withoutNormalizing(() => {
        editor.moveNodeByKey(item.key, subList.key, subList.nodes.size + index);
      });
    });
  } else {
    editor.moveNodeByKey(
      currentItem.key,
      parentList.key,
      parentList.nodes.indexOf(parentItem) + 1
    );
  }

  // Remove the currentList completely if needed
  if (willEmptyCurrentList) {
    editor.removeNodeByKey(currentList.key);
  }

  return editor;
}

export default decreaseItemDepth;
