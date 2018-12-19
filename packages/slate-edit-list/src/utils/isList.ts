import { Inline, Block } from 'slate';

import Options from '../options';

/**
 * True if the node is a list container
 */
const isList = (opts: Options) => (node: Block | Inline): boolean => {
  return opts.types.includes(node.type);
};

export default isList;
