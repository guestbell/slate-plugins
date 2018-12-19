import { Value, Block } from 'slate';

import Options from '../options';
import getCurrentItem from './getCurrentItem';

/**
 * Return the previous item, from current selection or from a node.
 */
const getPreviousItem = (opts: Options) => (
  value: Value,
  block?: Block
): Block | null => {
  const { document, startBlock } = value;
  block = block || startBlock;

  const currentItem = getCurrentItem(opts)(value, block);
  if (!currentItem) {
    return null;
  }

  const previousSibling = document.getPreviousSibling(currentItem.key) as Block;

  if (!previousSibling) {
    return null;
  } else if (previousSibling.type === opts.typeItem) {
    return previousSibling;
  }
  return null;
};

export default getPreviousItem;
