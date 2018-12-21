import { Editor } from 'slate';
/**
 * Bind a change to given options, and scope it to act only inside a list
 */
// tslint:disable-next-line:no-any
export const bindAndScopeChange = <U extends any[], OptionsT extends {}>(
  opts: OptionsT,
  condition: (opts: OptionsT, editor: Editor) => boolean,
  fn: (_opts: OptionsT, _editor: Editor, ...args: U) => Editor
): (_editor: Editor, ...args: U) => Editor => {
  return (editor: Editor, ...args) => {
    if (!condition(opts, editor)) {
      return editor;
    }
    return fn(opts, editor, ...args);
  };
};