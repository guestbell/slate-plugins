import { Value, Block } from 'slate';

import Options from '../options';
import getCurrentItem from './getCurrentItem';
import getListForItem from './getListForItem';

/**
 * Return the parent list block, from current selection or from a node (paragraph in a list item).
 */
const getCurrentList = (opts: Options) => (
  value: Value,
  block?: Block
): Block | null => {
  const item = getCurrentItem(opts)(value, block);

  if (!item) {
    return null;
  }

  return getListForItem(opts)(value, item);
};

export default getCurrentList;
