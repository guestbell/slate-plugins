import { Block, Value } from 'slate';
import Options from '../options';

/**
 * Return the current blockquote, from current selection or from a node.
 */
const getCurrentBlockquote = (opts: Options) => (
  value: Value,
  block?: Block
): Block => {
  const { document } = value;

  if (!block) {
    if (!value.selection.start.key) {
      return null;
    }
    block = value.startBlock;
  }

  const parent = document.getParent(block.key);

  return parent && (parent as Block).type === opts.type
    ? (parent as Block)
    : null;
};

export default getCurrentBlockquote;
