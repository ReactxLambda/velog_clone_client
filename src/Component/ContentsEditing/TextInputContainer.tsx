import React, { Fragment, useState } from 'react';
import { IUnControlledCodeMirror, UnControlled as CodeMirror, UnControlled } from 'react-codemirror2';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/addon/display/placeholder';
import 'codemirror/lib/codemirror.css';
import ButtonContainer from './ButtonContainer';
import BottomBar from './BottomBar';
import TagBar from './TagBar';
import Seperator from './Separator';

type TextInputContainerType = {
  setContents: (contents: string) => void;
  contents: string;
  header: string;
  tags: string[];
  setTags: (p1: string) => void;
};

const TextInputContainer: React.FC<TextInputContainerType> = ({ setContents, contents, header, tags, setTags }) => {
  // DropZone set up start
  const [codeMirror, setCodeMirror]: [any, (any: any) => void] = useState();
  const [isFocus, setIsFocus] = useState(false);

  // DropZone set up end
  return (
    <Fragment>
      <Seperator />
      <div
        style={{
          display: 'flex',
          width: '100%',
        }}
      ></div>
      <TagBar tags={tags} setTags={setTags} />
      <ButtonContainer codeMirror={codeMirror} codeMirrorFocus={isFocus} />

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
        onFocus={(editor: any, event: any) => {
          setIsFocus(true);
        }}
        onBlur={(editor: any, event: any) => {
          setIsFocus(false);
        }}
      />
      <BottomBar contents={contents} header={header} tags={tags} />
    </Fragment>
  );
};

export default TextInputContainer;
