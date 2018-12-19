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
 * part of `slate-edit-list`, and utils.
 *
 * Import this directly: `import EditListCore from 'slate-edit-table/lib/core'`
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
      decreaseItemDepth: bindAndScopeChange(_opts, decreaseItemDepth),
      increaseItemDepth: bindAndScopeChange(_opts, increaseItemDepth),
      splitListItem: bindAndScopeChange(_opts, splitListItem),
      unwrapList: bindAndScopeChange(_opts, unwrapList),
      wrapInList: wrapInList(_opts),
    },
  };
}

/**
 * Bind a change to given options, and scope it to act only inside a list
 */
// tslint:disable-next-line:no-any
function bindAndScopeChange<U extends any[]>(
  opts: Options,
  fn: (_opts: Options, _editor: Editor, ...args: U) => Editor
): (_editor: Editor, ...args: U) => Editor {
  return (change: Editor, ...args) => {
    const { value } = change;

    if (!isSelectionInList(opts)(value)) {
      return change;
    }
    return fn(opts, change, ...args);
  };
}

export default core;
