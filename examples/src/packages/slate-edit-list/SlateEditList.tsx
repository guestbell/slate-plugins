import * as React from 'react';
import { RenderNodeProps } from 'slate-react';

import PluginEditList from '@guestbell/slate-edit-list';

import INITIAL_VALUE from './value';
import { Value, Block } from 'slate';
import { Editor } from 'slate-react';
import DefaultButton from '../../components/reusables/DefaultButton';
import ListIcon from '@material-ui/icons/List';
import IndentDecreaseIcon from '@material-ui/icons/FormatIndentDecrease';
import IndentIncreaseIcon from '@material-ui/icons/FormatIndentIncrease';

const plugin = PluginEditList();
const plugins = [plugin];

function renderNode(props: RenderNodeProps) {
  const { node, attributes, children, editor } = props;
  const isCurrentItem = plugin.utils
    .getItemsAtRange(editor.value)
    .contains(node as Block);

  switch (node.type) {
    case 'ul_list':
      return <ul {...attributes}>{children}</ul>;
    case 'ol_list':
      return <ol {...attributes}>{children}</ol>;

    case 'list_item':
      return (
        <li
          className={isCurrentItem ? 'current-item' : ''}
          title={isCurrentItem ? 'Current Item' : ''}
          {...props.attributes}
        >
          {props.children}
        </li>
      );

    case 'paragraph':
      return <p {...attributes}>{children}</p>;
    case 'heading':
      return <h1 {...attributes}>{children}</h1>;
    default:
      return <p {...attributes}>{children}</p>;
  }
}

export interface ExampleProps {}

export interface ExampleState {
  value: Value;
}

class SlateEditList extends React.Component<ExampleProps, ExampleState> {
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
      wrapInList,
      unwrapList,
      increaseItemDepth,
      decreaseItemDepth,
    } = plugin.changes;
    const inList = plugin.utils.isSelectionInList(this.state.value);

    return (
      <div>
        <DefaultButton
          color={inList ? 'secondary' : 'primary'}
          onClick={() => this.call(inList ? unwrapList : wrapInList)}
        >
          <ListIcon />
        </DefaultButton>

        <DefaultButton
          disabled={!inList}
          onClick={() => this.call(decreaseItemDepth)}
        >
          <IndentDecreaseIcon />
        </DefaultButton>

        <DefaultButton
          disabled={!inList}
          onClick={() => this.call(increaseItemDepth)}
        >
          <IndentIncreaseIcon />
        </DefaultButton>
        <DefaultButton onClick={() => this.call(wrapInList)}>Wrap in list</DefaultButton>
        <DefaultButton onClick={() => this.call(unwrapList)}>Unwrap from list</DefaultButton>
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
          shouldNodeComponentUpdate={props =>
            // To update the highlighting of nodes inside the selection
            props.node.type === 'list_item'
          }
        />
      </div>
    );
  }
}

export default SlateEditList;
