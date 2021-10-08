import React, { useEffect, useState } from 'react';
import MarkdownViewer from '../../Component/ContentsEditing/MarkdownViewer';
import TextInputContainer from '../../Component/ContentsEditing/TextInputContainer';
import highlighting from '../../Common/highlighting';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import './Style/ContentsEditing.scss';
import { SnackbarProvider } from 'notistack';

const ContentsEditing: React.FC = () => {
  const [contents, setContents] = useState(''); // Text contents
  const [viewerContents, setViewerContents] = useState(''); // view contents
  const [header, setHeader] = useState(''); // set view header
  const [tags, setTags]: [string[], (any: any) => void] = useState([]);
  const hljs = require('highlight.js');

  const markdown = require('markdown-it')({
    highlight: function (str: string, lang: string) {
      return highlighting(str, lang, hljs, markdown);
    },
  });

  useEffect(() => {
    setViewerContents(markdown.render(contents));
  }, [contents]);

  useEffect(() => {
    const markdown_viewer: HTMLElement = document.getElementById('markdown-viewer') as HTMLElement;
    markdown_viewer.innerHTML = viewerContents;
  }, [viewerContents]);

  useEffect(() => {
    const markdown_header: HTMLElement = document.getElementById('markdown-header') as HTMLElement;
    markdown_header.innerText = header;
  }, [header]);
  const snackbarKey: any = React.createRef();
  return (
    <SnackbarProvider maxSnack={1} ref={snackbarKey} preventDuplicate={true}>
      <div className="markdown-contents" id="__markdown__contents__id">
        <div className="contents-editor">
          <TextareaAutosize
            id="__header__editor_id"
            className="header-editor"
            value={header}
            onChange={(e) => setHeader(e.target.value)}
            placeholder="제목을 입력하세요."
          />
          <TextInputContainer
            contents={contents}
            setContents={setContents}
            header={header}
            tags={tags}
            setTags={setTags}
            snackbarKey={snackbarKey}
          />
        </div>
        <div className="contents-viewer">
          <MarkdownViewer />
        </div>
      </div>
    </SnackbarProvider>
  );
};

export default ContentsEditing;
