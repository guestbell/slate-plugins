import { Editor } from 'slate';

import Options from '../options';
import { decreaseItemDepth, increaseItemDepth } from '../changes';
import { getCurrentItem } from '../utils';

/**
 * User pressed Tab in an editor.
 * Tab       -> Increase item depth if inside a list item
 * Shift+Tab -> Decrease item depth if inside a list item
 */
function onTab(
  event: React.KeyboardEvent,
  editor: Editor,
  opts: Options,
  // tslint:disable-next-line:no-any
  next: () => any
): void | undefined | Editor {
  const { value } = editor;
  const { isCollapsed } = value.selection;

  if (!isCollapsed || !getCurrentItem(opts)(value)) {
    return next();
  }

  // Shift+tab reduce depth
  if (event.shiftKey) {
    event.preventDefault();

    return decreaseItemDepth(opts, editor);
  }

  // Tab increases depth
  event.preventDefault();

  return increaseItemDepth(opts, editor);
}

export default onTab;
