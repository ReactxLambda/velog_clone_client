import React, { Fragment, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/lib/codemirror.css';

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
  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  // DropZone set up end
  return (
    <Fragment>
      <div className="full_height">
        {/* <textarea className="markdown-textarea" value={contents} onChange={(e) => setContents(e.target.value)}>
          <input {...getInputProps()} />
        </textarea> */}

        <CodeMirror
          className="contents-editor"
          options={{
            mode: 'markdown',
          }}
          onChange={(editor, data, value) => {
            setContents(value);
          }}
        />
      </div>
    </Fragment>
  );
};

export default DropZoneTextArea;
