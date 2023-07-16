import React from "react";

import Highlight from 'react-highlight'
import { MegadraftEditor, editorStateFromRaw, editorStateToJSON } from "megadraft";

import 'megadraft/dist/css/megadraft.css'

import highlightCode from "./Utils/highlightCode";

import INITIAL_CONTENT from "./initialContent";
const initialEditorState = editorStateFromRaw(INITIAL_CONTENT);

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.keyBindings = [
      {
        name: "save",
        isKeyBound: e => e.keyCode === 83 && e.ctrlKey,
        action: () => console.log("save")
      }
    ];
  }

  onAction(args) {
    console.log("onAction fired with args:", args);
  }

  render() {
    const { editorState, onChange } = this.props;

    return (
      <MegadraftEditor
        editorState={editorState}
        onChange={onChange}
        onAction={this.onAction}
        movableBlocks={true}
        keyBindings={this.keyBindings}
        resetStyleNewLine={true}
        maxSidebarButtons={null}
      />
    )
  }
}

class JSONPreview extends React.Component {
  render() {
    const { editorState } = this.props;

    return (
      <Highlight className='json'>
        {editorStateToJSON(editorState)}
      </Highlight>
    );
  }
}

class MyMegadraftEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: initialEditorState
    };
  }

  componentDidMount() {
    highlightCode();
  }

  setEditorState = editorState => {
    this.setState({ editorState });
  };

  render() {
    const { activeContent } = this.props;
    const { editorState } = this.state;

    // return activeContent ? (
    //   <Editor editorState={editorState} onChange={this.setEditorState} />
    // ) : (
    //   <JSONPreview editorState={editorState} />
    // );

    return (
      <Editor editorState={editorState} onChange={this.setEditorState} />
    );
  }
}

export default MyMegadraftEditor;