import { Data, Value, Block, Editor } from 'slate';
import { List } from 'immutable';

import Options from '../options';
import { isList } from '../utils';

/**
 * Wrap the blocks in the current selection in a new list. Selected
 * lists are merged together.
 */
const wrapInList = (opts: Options) => (
  editor: Editor,
  type?: string,
  data?: Object | Data
): Editor => {
  const selectedBlocks = getHighestSelectedBlocks(editor.value);
  type = type || opts.types[0];

  // Wrap in container
  editor.withoutNormalizing(() => {
    editor.wrapBlock({
      type,
      data: Data.create(data),
    });
  });

  // Wrap in list items
  selectedBlocks.forEach(node => {
    if (isList(opts)(node)) {
      // Merge its items with the created list
      node.nodes.forEach(({ key }) => {
        editor.withoutNormalizing(() => {
          editor.unwrapNodeByKey(key);
        });
      });
    } else {
      editor.withoutNormalizing(() => {
        editor.wrapBlockByKey(node.key, opts.typeItem);
      });
    }
  });

  return editor.normalize();
};

/**
 * Returns the highest list of blocks that cover the current selection
 */
function getHighestSelectedBlocks(value: Value): List<Block> {
  const range = value.selection;
  const { document } = value;

  const startBlock = document.getClosestBlock(range.start.key);
  const endBlock = document.getClosestBlock(range.end.key);

  if (startBlock === endBlock) {
    return List([startBlock]);
  }
  const ancestor = document.getCommonAncestor(
    startBlock.key,
    endBlock.key
  ) as Block;
  const startPath = ancestor.getPath(startBlock.key);
  const endPath = ancestor.getPath(endBlock.key);

  return ancestor.nodes.slice(startPath[0], endPath[0] + 1) as List<Block>;
}

export default wrapInList;
