import { Block, Editor, Node } from 'slate';

import Options from '../options';
import { List } from 'immutable';

/**
 * Create a schema definition with rules to normalize blockquotes
 */
function schema(opts: Options): Object {
  return {
    blocks: {
      [opts.type]: {
        nodes: [
          {
            match: { type: opts.typeDefault },
          },
        ],
        // tslint:disable-next-line:no-any
        normalize(editor: Editor, error: any) {
          switch (error.code) {
            case 'child_type_invalid':
              return containBlocks(opts, editor, error);
            default:
              break;
          }
        },
      },
    },
  };
}

/**
 *  Ensures that blockquotes always contain blocks.
 */
function containBlocks(
  opts: Options,
  editor: Editor,
  // tslint:disable-next-line:no-any
  context: any
): Editor {
  const toWrap: List<Node> = context.node.nodes.filter(n => n.object !== 'block');

  if (toWrap.isEmpty()) {
    return undefined;
  }

  // Wrap text/inline nodes in default block
  const wrapper = Block.create({ type: opts.typeDefault });
  return editor.withoutNormalizing(() => {
    editor.insertNodeByKey(context.node.key, 0, wrapper);

    toWrap.forEach((child, index) => {
      // this was use to determine normalization (isLast === false => normalize: false)
      // const isLast = index === toWrap.size - 1;
      editor.moveNodeByKey(child.key, wrapper.key, index);
    });
  });
}

export default schema;
