import { Node, Block, Editor } from 'slate';

import { isList } from '../utils';
import Options from '../options';

// tslint:disable-next-line:no-any
type Normalizer = (editor: Editor) => any;

/**
 * Create a schema definition with rules to normalize lists
 */
function normalizeNode(opts: Options): (node: Node) => void | Normalizer {
  return node => joinAdjacentLists(opts, node);
}

/**
 * A rule that joins adjacent lists of the same type
 */
function joinAdjacentLists(opts: Options, node: Node): void | Normalizer {
  if (node.object !== 'document' && node.object !== 'block') {
    return undefined;
  }

  const invalids = (node as Block).nodes
    .map((child, i) => {
      if (!isList(opts)(child as Block)) {
        return null;
      }
      const next = node.nodes.get(i + 1) as Block;
      if (
        !next ||
        !isList(opts)(next) ||
        !opts.canMerge(child as Block, next)
      ) {
        return null;
      }

      return [child, next];
    })
    .filter(Boolean);

  if (invalids.isEmpty()) {
    return undefined;
  }

  /**
   * Join the list pairs
   */
  // We join in reverse order, so that multiple lists folds onto the first one
  return editor => {
    invalids.reverse().forEach(pair => {
      const [first, second] = pair as Block[];
      const updatedSecond = editor.value.document.getDescendant(
        second.key
      ) as Block;
      updatedSecond.nodes.forEach((secondNode, index) => {
        editor.withoutNormalizing(() => {
          editor.moveNodeByKey(
            secondNode.key,
            first.key,
            first.nodes.size + index
          );
        });
      });

      editor.withoutNormalizing(() => {
        editor.removeNodeByKey(second.key);
      });
    });
  };
}

export default normalizeNode;
