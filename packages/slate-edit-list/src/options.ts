import { Inline, Block } from 'slate';
import { Record } from 'immutable';

export type OptionsFormat = {
  types?: string[];
  typeItem?: string;
  typeDefault?: string;
  canMerge?: (listA: Block | Inline, listB: Block | Inline) => boolean;
};

/**
 * The plugin options
 */
class Options extends Record({
  types: ['ul_list', 'ol_list'],
  typeItem: 'list_item',
  typeDefault: 'paragraph',
  canMerge: (a: Block | Inline, b: Block | Inline) => a.type === b.type,
}) {
  // The possibles types for list containers
  types: string[];
  // The type of list items
  typeItem: string;
  // The type of default block in items
  typeDefault: string;
  // You can control here the automatic merging of adjacent lists
  canMerge: (listA: Block | Inline, listB: Block | Inline) => boolean;
}

export default Options;
