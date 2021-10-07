import React, { Fragment, useState } from 'react';
import { IUnControlledCodeMirror, UnControlled as CodeMirror, UnControlled } from 'react-codemirror2';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/addon/display/placeholder';
import 'codemirror/lib/codemirror.css';
import ButtonContainer from './ButtonContainer';
import BottomBar from './BottomBar';

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
          placeholder: '당신의 이야기를 적어보세요...',
        }}
        editorDidMount={(editor: any, value: string, cb: () => void) => {
          setCodeMirror(editor);
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
      <BottomBar></BottomBar>
    </Fragment>
  );
};

export default DropZoneTextArea;
