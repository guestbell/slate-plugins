import Options, { OptionsFormat } from './options';
import { onKeyDown } from './handlers';
import core from './core';

/**
 * A Slate plugin to handle keyboard events in lists.
 */

function EditBlockquote(opts: OptionsFormat = {}) {
  const _opts = new Options(opts);

  const corePlugin = core(opts);

  return {
    ...corePlugin,
    onKeyDown: onKeyDown(_opts),
  };
}

export type EditBlockquoteInterface = ReturnType<typeof EditBlockquote>;

export default EditBlockquote;
