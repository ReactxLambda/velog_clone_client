import React, { Fragment, useState } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/addon/display/placeholder';
import 'codemirror/lib/codemirror.css';
import ButtonContainer from './ButtonContainer';
import BottomBar from './BottomBar';
import TagBar from './TagBar';
import Seperator from './Separator';
import axios from 'axios';

type TextInputContainerType = {
  setContents: (contents: string) => void;
  contents: string;
  header: string;
  tags: string[];
  setTags: (p1: string) => void;
  snackbarKey: any;
  setIsShowSavingComponent: (p1: boolean) => void;
};

const TextInputContainer: React.FC<TextInputContainerType> = ({
  setContents,
  contents,
  header,
  tags,
  setTags,
  snackbarKey,
  setIsShowSavingComponent,
}) => {
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
        onDrop={async (editor, event) => {
          // Check if files were dropped
          const files = event.dataTransfer.files;
          if (files.length > 0) {
            event.preventDefault();
            event.stopPropagation();
            const file = files[0];
            const preSignedUrl = "https://velog-clone-images.s3.ap-northeast-2.amazonaws.com/aaa/b5296c17-7e86-402d-81b7-d26b048ba895/hipo.jpg?Content-Type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWVJEQLD3VHH2YBOP%2F20211101%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Date=20211101T031959Z&X-Amz-Expires=60&X-Amz-Signature=bbc229f77a8d9e45628fa15a48efe3de50e56cf881f27381cc20e6dc1db3b5a3&X-Amz-SignedHeaders=host%3Bx-amz-acl&x-amz-acl=public-read"
            const result = await axios({
              url: preSignedUrl,
              method: "PUT",
              data: file
            }).then((res) => {
              console.log(res)
            }).catch(e => {
              console.log(e)
            })
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
      <BottomBar
        contents={contents}
        header={header}
        tags={tags}
        snackbarKey={snackbarKey}
        setIsShowSavingComponent={setIsShowSavingComponent}
      />
    </Fragment>
  );
};

export default TextInputContainer;
