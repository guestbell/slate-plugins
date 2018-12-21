import * as React from 'react';
import { RenderNodeProps } from 'slate-react';

import PluginEditBlockquote from '@guestbell/slate-edit-blockquote';

import INITIAL_VALUE from './value';
import { Value } from 'slate';
import { Editor } from 'slate-react';
import DefaultButton from '../../components/reusables/DefaultButton';

const plugin = PluginEditBlockquote();
const plugins = [plugin];

function renderNode(props: RenderNodeProps) {
  const { node, children, attributes } = props;
  switch (node.type) {
      case 'blockquote':
          return <blockquote {...attributes}>{children}</blockquote>;
      case 'paragraph':
          return <p {...attributes}>{children}</p>;
      case 'heading':
          return <h1 {...attributes}>{children}</h1>;
      default:
          return null;
  }
}

export interface ExampleProps {}

export interface ExampleState {
  value: Value;
}

class SlateEditBlockquote extends React.Component<ExampleProps, ExampleState> {
  private editor: React.RefObject<Editor>;
  constructor(props: ExampleProps) {
    super(props);
    this.state = {
      value: (INITIAL_VALUE as unknown) as Value,
    };
    this.editor = React.createRef();
  }

  renderToolbar() {
    const {
      wrapInBlockquote,
      unwrapBlockquote,
    } = plugin.changes;
    const inBlockquote = plugin.utils.isSelectionInBlockquote(this.state.value);

    return (
      <div>
        <DefaultButton
          onClick={() => this.call(wrapInBlockquote)}
        >
          Blockquote
        </DefaultButton>
        <DefaultButton
          disabled={!inBlockquote}
          onClick={() => this.call(unwrapBlockquote)}
        >
          Unwrap
        </DefaultButton>
      </div>
    );
  }

  // tslint:disable-next-line:no-any
  call(command: any) {
    if (this.editor.current) {
      const editor = this.editor.current;
      // tslint:disable-next-line:no-any
      editor.command(command as any);
    }
  }

  onChange = (change: { value: Value }) => {
    const { value } = change;
    const json = value.toJSON();
    // tslint:disable-next-line:no-console
    console.log(json);
    this.setState({
      value,
    });
  }

  render() {
    return (
      <div>
        {this.renderToolbar()}
        <Editor
          className="slate-editor"
          ref={this.editor}
          placeholder="Enter some text..."
          plugins={plugins}
          value={this.state.value}
          onChange={this.onChange}
          renderNode={renderNode}
        />
      </div>
    );
  }
}

export default SlateEditBlockquote;
