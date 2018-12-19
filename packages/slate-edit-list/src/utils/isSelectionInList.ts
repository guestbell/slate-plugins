import { Value } from 'slate';

import Options from '../options';
import getItemsAtRange from './getItemsAtRange';
import getListForItem from './getListForItem';

/**
 * True if selection is inside a list (and can be unwrapped)
 */
const isSelectionInList = (opts: Options) => (
  value: Value,
  type?: string
): boolean => {
  const items = getItemsAtRange(opts)(value);
  return (
    !items.isEmpty() &&
    // Check the type of the list if needed
    (!type || getListForItem(opts)(value, items.first()).get('type') === type)
  );
};

export default isSelectionInList;
