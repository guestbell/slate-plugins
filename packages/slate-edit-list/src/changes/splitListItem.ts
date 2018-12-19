import { Editor } from 'slate';

import Options from '../options';
import { getCurrentItem } from '../utils';

/**
 * Split a list item at the start of the current range.
 */
function splitListItem(opts: Options, editor: Editor): Editor {
  const { value } = editor;
  const currentItem = getCurrentItem(opts)(value);
  if (!currentItem) {
    return editor;
  }

  // tslint:disable-next-line:no-any
  return (editor as any).splitDescendantsByKey(
    currentItem.key,
    value.selection.start.key,
    value.selection.start.offset
  );
}

export default splitListItem;
