import React, { Fragment } from 'react';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/addon/display/placeholder';
import 'codemirror/lib/codemirror.css';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import './Style/CodemirrorWrapper.scss';
type CodeMirrorWrapperType = {
  onChange: (p1: string) => void;
  placeholder: string;
  value: string;
};
export const CodeMirrorWrapper: React.FC<CodeMirrorWrapperType> = ({ value, onChange, placeholder }) => {
  return (
    <Fragment>
      <CodeMirror
        options={{
          value: value,
          mode: 'markdown',
          styleActiveLine: true,
          line: true,
          lineWrapping: true,
          dragDrop: true,
          allowDropFileTypes: ['png'],
          placeholder: placeholder,
        }}
        onChange={(editor: any, data: any, value: string): void => {
          onChange(value);
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
