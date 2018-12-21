import { Editor } from 'slate';

import Options from '../options';

import onEnter from './onEnter';
import onBackspace from './onBackspace';
import { NextType } from '@guestbell/slate-common/lib/types/next';

const KEY_ENTER = 'Enter';
const KEY_BACKSPACE = 'Backspace';

/**
 * User is pressing a key in the editor
 */
const onKeyDown = (opts: Options) => (
  event: Event,
  editor: Editor,
  next: NextType
): boolean => {
  const _event = (event as unknown) as React.KeyboardEvent;
  switch (_event.key) {
    case KEY_ENTER:
      return onEnter(_event, editor, opts, next);
    case KEY_BACKSPACE:
      return onBackspace(_event, editor, opts, next);
    default:
      return next();
  }
};

export default onKeyDown;
