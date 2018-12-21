import { bindAndScopeChange } from '@guestbell/slate-common/lib/utils/bindAndScopeChange';

import Options, { OptionsFormat } from './options';
import { schema, normalizeNode } from './validation';
import {
  wrapInList,
  unwrapList,
  splitListItem,
  increaseItemDepth,
  decreaseItemDepth
} from './changes';
import {
  getItemDepth,
  isList,
  isSelectionInList,
  getCurrentItem,
  getCurrentList,
  getItemsAtRange,
  getPreviousItem
} from './utils';
import { Editor } from 'slate';

/**
 * Returns the core of the plugin, limited to the validation and normalization
 * part of `@guestbell/slate-edit-list`, and utils.
 *
 * Import this directly: `import EditListCore from '@guestbell/slate-edit-list/lib/core'`
 * if you don't care about behavior/rendering.
 */
function core(
  // Options for the plugin
  opts: OptionsFormat = {}
) {
  const _opts = new Options(opts);
  return {
    schema: schema(_opts),
    normalizeNode: normalizeNode(_opts),
    // tslint:disable-next-line:no-console
    // normalizeNode: node => console.log('normalizeNode: ', node),

    utils: {
      getCurrentItem: getCurrentItem(_opts),
      getCurrentList: getCurrentList(_opts),
      getItemDepth: getItemDepth(_opts),
      getItemsAtRange: getItemsAtRange(_opts),
      getPreviousItem: getPreviousItem(_opts),
      isList: isList(_opts),
      isSelectionInList: isSelectionInList(_opts),
    },

    changes: {
      decreaseItemDepth: bindAndScopeChange(
        _opts,
        bindAndScopeChangeCondition,
        decreaseItemDepth
      ),
      increaseItemDepth: bindAndScopeChange(
        _opts,
        bindAndScopeChangeCondition,
        increaseItemDepth
      ),
      splitListItem: bindAndScopeChange(
        _opts,
        bindAndScopeChangeCondition,
        splitListItem
      ),
      unwrapList: bindAndScopeChange(
        _opts,
        bindAndScopeChangeCondition,
        unwrapList
      ),
      wrapInList: wrapInList(_opts),
    },
  };
}

const bindAndScopeChangeCondition = (opts: Options, editor: Editor) =>
  isSelectionInList(opts)(editor.value);

export default core;
