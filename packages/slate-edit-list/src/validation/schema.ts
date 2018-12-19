import { Editor, Inline, Block } from 'slate';

import Options from '../options';

/**
 * Create a schema definition with rules to normalize lists
 */
function schema(opts: Options): Object {
  const constructedSchema = {
    blocks: {
      [opts.typeItem]: {
        parent: opts.types.map(t => ({ type: t })),
        nodes: [{ match: { object: 'block' } }],

        normalize: normalize({
          parent_type_invalid: (editor, context) => {
            editor.withoutNormalizing(() => {
              editor.unwrapNodeByKey(context.node.key);
            });
          },
          child_object_invalid: (editor, context) => {
            wrapChildrenInDefaultBlock(opts, editor, context.node);
          },
        }),
      } as {
        parent?: { type: string }[];
        nodes: {
          match: { object?: string; type?: string };
        }[];
        // tslint:disable-next-line:no-any
        normalize: { [key: string]: (editor: Editor, context: any) => any };
      },
    },
  };

  // validate all list types, ensure they only have list item children
  opts.types.forEach(type => {
    constructedSchema.blocks[type] = {
      nodes: [{ match: { type: opts.typeItem } }],
      normalize: normalize({
        child_type_invalid: (editor, context) => {
          editor.withoutNormalizing(() => {
            editor.wrapBlockByKey(context.child.key, opts.typeItem);
          });
        },
      }),
    };
  });

  return constructedSchema;
}

/*
 * Allows to define a normalize function through a keyed collection of functions
 */
function normalize(reasons: {
  // tslint:disable-next-line:no-any
  [key: string]: (editor: Editor, error: any) => any;
  // tslint:disable-next-line:no-any
}): any {
  // tslint:disable-next-line:no-any
  return (editor: Editor, error: any) => {
    const reasonFn = reasons[error.code];
    if (reasonFn) {
      reasonFn(editor, error);
    }
  };
}

/**
 * Wraps all child of a node in the default block type.
 * Returns a change, for chaining purposes
 */
function wrapChildrenInDefaultBlock(
  opts: Options,
  editor: Editor,
  node: Block | Inline
): Editor {
  editor.withoutNormalizing(() => {
    editor.wrapBlockByKey(node.nodes.first().key, opts.typeDefault);
  });

  const wrapper = (editor.value.document.getDescendant(node.key) as
    | Block
    | Inline).nodes.first();

  // Add in the remaining items
  node.nodes.rest().forEach((child, index) => {
    editor.withoutNormalizing(() => {
      editor.moveNodeByKey(child.key, wrapper.key, index + 1);
    });
  });

  return editor;
}

export default schema;
