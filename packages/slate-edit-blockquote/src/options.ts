import { Record } from 'immutable';

const DEFAULTS = {
  type: 'blockquote',
  typeDefault: 'paragraph',
};

/**
 * The plugin options container
 */
class Options extends Record(DEFAULTS) {
  type: string;
  typeDefault: string;
}

export type OptionsFormat = {
  type?: string; // type for blockquotes
  typeDefault?: string; // type for default block in blockquote.
};

export default Options;
