import React, { Fragment, useState } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/lib/codemirror.css';
import ButtonContainer from './ButtonContainer';

type DropZoneTextAreaType = {
  setContents: (contents: string) => void;
  contents: string;
};

const DropZoneTextArea: React.FC<DropZoneTextAreaType> = ({ setContents, contents }) => {
  // DropZone set up start
  const [codeMirror, setCodeMirror]: [any, (any: any) => void] = useState();

  // DropZone set up end
  return (
    <Fragment>
      <div
        style={{
          display: 'flex',
          width: '100%',
        }}
      ></div>
      <ButtonContainer codeMirror={codeMirror} />
      <CodeMirror
        options={{
          mode: 'markdown',
          styleActiveLine: true,
          line: true,
          lineWrapping: true,
          dragDrop: true,
          allowDropFileTypes: ['png'],
        }}
        editorDidMount={(editor: any, value: string, cb: () => void) => {
          setCodeMirror(editor);
          editor.setValue('여기에 입력하세요..');
        }}
        onChange={(editor: any, data: any, value: string): void => {
          setContents(value);
        }}
        onDrop={(editor, event) => {
          // Check if files were dropped
          const files = event.dataTransfer.files;
          if (files.length > 0) {
            event.preventDefault();
            event.stopPropagation();
            const file = files[0];
            console.log(file);
            return false;
          }
        }}
      />
    </Fragment>
  );
};

export default DropZoneTextArea;
