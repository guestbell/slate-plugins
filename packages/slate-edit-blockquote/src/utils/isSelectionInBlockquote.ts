import { Value } from 'slate';
import Options from '../options';

import getCurrentBlockquote from './getCurrentBlockquote';

/**
 * Is the selection in a blockquote
 */
const isSelectionInBlockquote = (opts: Options) => (value: Value): boolean => {
  return Boolean(getCurrentBlockquote(opts)(value));
};

export default isSelectionInBlockquote;
