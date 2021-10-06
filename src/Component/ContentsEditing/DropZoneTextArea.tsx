import React, { Fragment, useCallback, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/lib/codemirror.css';
import Button from '@material-ui/core/Button';
import HeaderButton from './HeaderButton';
import IconButton from './IconButton';
import ButtonContainer from './ButtonContainer';

type DropZoneTextAreaType = {
  setContents: (contents: string) => void;
  contents: string;
};

const DropZoneTextArea: React.FC<DropZoneTextAreaType> = ({ setContents, contents }) => {
  // DropZone set up start
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file: File) => {
      const reader = new FileReader();
      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(reader);
      };
      reader.readAsArrayBuffer(file);
      console.log(file);
    });
  }, []);
  const [codeMirror, setCodeMirror]: [any, (any: any) => void] = useState();

  const { getRootProps, getInputProps } = useDropzone({ onDrop });
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