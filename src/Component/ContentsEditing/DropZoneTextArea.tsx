import React, { Fragment, useCallback, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/lib/codemirror.css';
import Button from '@material-ui/core/Button';
import HeaderButton from './HeaderButton';
import { FormatStrikethrough, FormatBold, Code, FormatQuote } from '@material-ui/icons';
import IconButton from './IconButton';

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
  const makeBold = () => {
    const selectionString: string = codeMirror.getSelection();
    codeMirror.replaceSelection(`**${selectionString}**`);
  };
  const makeItalic = () => {
    const selectionString: string = codeMirror.getSelection();
    codeMirror.replaceSelection(`*${selectionString}*`);
  };
  const makeLine = () => {
    const selectionString: string = codeMirror.getSelection();
    codeMirror.replaceSelection(`~~${selectionString}~~`);
  };
  const makeParagraph = () => {
    const selectionString: string = codeMirror.getSelection();
    codeMirror.replaceSelection(`> ${selectionString}`);
  };
  const makeHead = (headNumber: number) => {
    const selectionString: string = codeMirror.getSelection();
    codeMirror.replaceSelection(`${'#'.repeat(headNumber)} ${selectionString}`);
  };
  const makeCode = () => {
    const selectionString: string = codeMirror.getSelection();
    codeMirror.replaceSelection(`\`\`\`\n${selectionString}\n\`\`\``);
  };
  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  // DropZone set up end
  return (
    <Fragment>
      <div
        style={{
          display: 'flex',
          width: '100%',
        }}
      >
        <HeaderButton number={'1'} onClick={() => makeHead(1)} />
        <HeaderButton number={'2'} onClick={() => makeHead(2)} />
        <HeaderButton number={'3'} onClick={() => makeHead(3)} />
        <HeaderButton number={'4'} onClick={() => makeHead(4)} />
        <IconButton icon={'FormatBold'} onClick={makeBold} />
        <IconButton icon={'FormatStrikethrough'} onClick={makeLine} />
        <IconButton icon={'FormatItalic'} onClick={makeItalic} />
        <IconButton icon={'FormatQuote'} onClick={makeParagraph} />
        <IconButton icon={'Code'} onClick={makeCode} />
      </div>

      <CodeMirror
        options={{
          mode: 'markdown',
          styleActiveLine: true,
          line: true,
          lineWrapping: true,
        }}
        editorDidMount={(editor: any, value: string, cb: () => void) => {
          setCodeMirror(editor);
        }}
        onChange={(editor: any, data: any, value: string): void => {
          setContents(value);
        }}
        onCursor={(editor, data: any) => {
          // doc.getSelection() → string
          // doc.replaceSelection(replacement: string, ?collapse: string)
          // console.log(replaceCursor)
        }}
      />
    </Fragment>
  );
};

export default DropZoneTextArea;
