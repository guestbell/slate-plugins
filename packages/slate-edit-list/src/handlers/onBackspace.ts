import { Editor } from 'slate';
import { NextType } from '@guestbell/slate-common/lib/types/next';

import Options from '../options';
import { unwrapList } from '../changes';
import { getCurrentItem } from '../utils';

/**
 * User pressed Delete in an editor
 */
function onBackspace(
  event: React.KeyboardEvent,
  editor: Editor,
  opts: Options,
  // tslint:disable-next-line:no-any
  next: NextType
): void | undefined | Editor {
  const { value } = editor;
  const { selection } = value;
  const startOffset = value.selection.start.offset;
  // Only unwrap...
  // ... with a collapsed selection
  if (selection.isExpanded) {
    return next();
  }

  // ... when at the beginning of nodes
  if (startOffset > 0) {
    return next();
  }
  // ... in a list
  const currentItem = getCurrentItem(opts)(value);
  if (!currentItem) {
    return next();
  }
  // ... more precisely at the beginning of the current item
  if (!selection.isCollapsed && selection.anchor.isAtEndOfNode(currentItem)) {
    return next();
  }

  event.preventDefault();
  return unwrapList(opts, editor);
}

export default onBackspace;
