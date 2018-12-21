import { Editor } from 'slate';

import Options from '../options';

/**
 * Unwrap from blockquote.
 */
function unwrapBlockquote(opts: Options, editor: Editor): Editor {
    return editor.unwrapBlock(opts.type);
}

export default unwrapBlockquote;
