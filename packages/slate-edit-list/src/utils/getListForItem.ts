import { Value, Block } from 'slate';

import Options from '../options';
import isList from './isList';

/**
 * Return the parent list block for an item block.
 */
const getListForItem = (opts: Options) => (
  value: Value,
  item: Block
): Block | null => {
  const { document } = value;
  const parent = document.getParent(item.key) as Block;
  return parent && isList(opts)(parent) ? parent : null;
};

export default getListForItem;
