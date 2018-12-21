import { Editor } from 'slate';

import Options from '../options';
import { getCurrentBlockquote } from '../utils';
import { unwrapBlockquote } from '../changes';
import { NextType } from '@guestbell/slate-common/lib/types/next';

/**
 * User pressed Delete in an editor:
 * Unwrap the blockquote if at the start of the inner block.
 */
function onBackspace(
  event: React.KeyboardEvent,
  editor: Editor,
  opts: Options,
  next: NextType
): boolean {
  const { value } = editor;

  if (!getCurrentBlockquote(opts)(value) || !value.selection.isCollapsed) {
    return next();
  }

  if (value.selection.start.offset !== 0) {
    return next();
  }

  // Block is empty, we exit the blockquote
  event.preventDefault();
  unwrapBlockquote(opts, editor);
  return true;
}

export default onBackspace;
