import React, { useEffect, useState } from 'react';
import MarkdownViewer from '../../Component/MarkdownViewer';
import DropZoneTextArea from '../../Component/DropZoneTextArea';
import highlighting from '../../Common/highlighting';
import TextField from '@material-ui/core/TextField';
import './Style/ContentsEditing.scss';
import { classicNameResolver } from 'typescript';
const ContentsEditing: React.FC = () => {
  const [contents, setContents] = useState(''); // Text contents
  const [viewerContents, setViewerContents] = useState(''); // view contents
  const [header, setHeader] = useState(''); // set view header
  const hljs = require('highlight.js');

  const markdown = require('markdown-it')({
    highlight: function (str: string, lang: string) {
      return highlighting(str, lang, hljs, markdown);
    },
  });

  useEffect(() => {
    console.log(contents);
    setViewerContents(markdown.render(contents));
  }, [contents]);

  useEffect(() => {
    console.log(viewerContents);
    const markdown_viewer: HTMLElement = document.getElementById('markdown-viewer') as HTMLElement;
    markdown_viewer.innerHTML = viewerContents;
  }, [viewerContents]);

  useEffect(() => {
    console.log(header);
    const markdown_header: HTMLElement = document.getElementById('markdown-header') as HTMLElement;
    markdown_header.innerText = header;
  }, [header]);

  return (
    <div className="markdown-contents">
      <div className="contents-editor">
        <textarea className="header-editor" value={header} onChange={(e) => setHeader(e.target.value)} />
        <DropZoneTextArea contents={contents} setContents={setContents} />
      </div>
      <div className="contents-viewer">
        <MarkdownViewer />
      </div>
    </div>
  );
};

export default ContentsEditing;
