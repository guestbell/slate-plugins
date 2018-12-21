import { bindAndScopeChange } from '@guestbell/slate-common/lib/utils/bindAndScopeChange';
import { Editor } from 'slate';

import Options, { OptionsFormat } from './options';
import { isSelectionInBlockquote } from './utils';
import { wrapInBlockquote, unwrapBlockquote } from './changes';

import { schema } from './validation';

/**
 * The core of the plugin, which does not relies on `slate-react`, and includes
 * everything but behavior and rendering logic.
 */
function core(optsParam: OptionsFormat) {
  const opts = new Options(optsParam);

  return {
    schema: schema(opts),

    utils: {
      isSelectionInBlockquote: isSelectionInBlockquote(opts),
    },

    changes: {
      wrapInBlockquote: wrapInBlockquote(opts),
      unwrapBlockquote: bindAndScopeChange(
        opts,
        bindAndScopeChangeCondition,
        unwrapBlockquote
      ),
    },
  };
}

const bindAndScopeChangeCondition = (opts: Options, editor: Editor) =>
  isSelectionInBlockquote(opts)(editor.value);

export default core;
