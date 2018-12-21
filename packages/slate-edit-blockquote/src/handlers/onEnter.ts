import { Editor } from 'slate';

import Options from '../options';
import { getCurrentBlockquote } from '../utils';
import { unwrapBlockquote } from '../changes/';
import { NextType } from '@guestbell/slate-common/lib/types/next';

/**
 * User pressed Enter in an editor
 *
 * Enter on an empty block inside a blockquote exit the blockquote.
 */
function onEnter(
  event: React.KeyboardEvent,
  editor: Editor,
  opts: Options,
  next: NextType
): boolean {
  const { value } = editor;
  const { startBlock } = value;

  if (!getCurrentBlockquote(opts)(value)) {
    return next();
  }

  if (startBlock.text.length !== 0) {
    return next();
  }

  // Block is empty, we exit the blockquote
  event.preventDefault();
  unwrapBlockquote(opts, editor);
  return true;
}

export default onEnter;
