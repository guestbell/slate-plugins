import Options, { OptionsFormat } from './options';
import { onEnter, onTab, onBackspace } from './handlers';
import core from './core';
import { Editor } from 'slate';

const KEY_ENTER = 'Enter';
const KEY_TAB = 'Tab';
const KEY_BACKSPACE = 'Backspace';

/**
 * A Slate plugin to handle keyboard events in lists.
 */
function EditList(
  // Options for the plugin
  opts: OptionsFormat = {}
) {
  const _opts = new Options(opts);
  const corePlugin = core(opts);

  return {
    ...corePlugin,

    onKeyDown: onKeyDown(_opts),
  };
}

export type EditListPluginInterface = ReturnType<typeof EditList>;

/**
 * User is pressing a key in the editor
 */
const onKeyDown = (opts: Options) => (
  event: Event,
  editor: Editor,
  // tslint:disable-next-line:no-any
  next: () => any
): void | undefined | Editor => {
  const _event = (event as unknown) as React.KeyboardEvent;
  switch (_event.key) {
    case KEY_ENTER:
      return onEnter(_event, editor, opts, next);
    case KEY_TAB:
      return onTab(_event, editor, opts, next);
    case KEY_BACKSPACE:
      return onBackspace(_event, editor, opts, next);
    default:
      return next();
  }
};

export default EditList;
