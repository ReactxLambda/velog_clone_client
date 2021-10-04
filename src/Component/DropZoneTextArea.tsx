import React, { Fragment, useCallback, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
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
  const [codeMirror, setCodeMirror] : [any, (any : any)=> void] = useState();
  const makeBold = () =>{
    const selectionString : string = codeMirror.getSelection();
    codeMirror.replaceSelection(`**${selectionString}**`)
  }
  
  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  // DropZone set up end
  return (
    <Fragment>
        <CodeMirror
          options={{
            mode: 'markdown',
            styleActiveLine: true,
            line: true,
            lineWrapping: true,
          }}
          editorDidMount={(editor : any, value : string, cb : () => void )=>{

            setCodeMirror(editor)
          }}
          onChange={(editor : any , data : any, value : string) : void => {
            setContents(value);
          }}
          onCursor={(editor ,data : any)=>{
            // doc.getSelection() → string
            // doc.replaceSelection(replacement: string, ?collapse: string)
            // console.log(replaceCursor)
          }}
          
        />
    </Fragment>
  );
};

export default DropZoneTextArea;
