import { Editor } from 'slate';

import Options from '../options';

/**
 * Wrap the block in a new blockquote.
 */
const wrapInBlockquote = (opts: Options) => (editor: Editor): Editor => {
  return editor.wrapBlock(opts.type);
};

export default wrapInBlockquote;
