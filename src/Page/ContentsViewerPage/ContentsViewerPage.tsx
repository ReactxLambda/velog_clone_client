import React, { useEffect } from 'react';
import './Style/ContentsViewerPage.scss';
import { MockDataType, ViewerMockData } from './MockData';
import '../../Component/ContentsEditing/Style/Tag.scss';
import '../ContentsEditing/Style/ContentsEditing.scss';
import highlighting from '../../Common/highlighting';
import { Button } from '@material-ui/core';
import { Header } from '../Global/Header/Header';
export const ContentsViewerPage: React.FC = () => {
  const hljs = require('highlight.js');
  const markdown = require('markdown-it')({
    highlight: function (str: string, lang: string) {
      return highlighting(str, lang, hljs, markdown);
    },
  });
  const contents = markdown.render(ViewerMockData.contents);
  useEffect(() => {
    const MarkdownViewerHTML: HTMLElement = document.getElementById('markdown-viewer') as HTMLElement;
    MarkdownViewerHTML.innerHTML = contents;
  });
  return (
    <div className={'ViewerPage'}>
      <Header />
      <div className={'ViewerPage_warpper'}>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/default.min.css"
        ></link>
        <div className="contents-viewer-header">
          <h1>{ViewerMockData.header}</h1>
        </div>
        <div className={'ViewerPage_warpper_editor_container'} style={{ marginBottom: '30px' }}>
          <div>
            <b>{ViewerMockData.editor}</b> · <span>{ViewerMockData.editDate}</span>
          </div>
          <div>
            <button className={'ViewerPage_warpper_editor_container_button'}>통계</button>
            <button className={'ViewerPage_warpper_editor_container_button'}>수정</button>
            <button className={'ViewerPage_warpper_editor_container_button'}>삭제</button>
          </div>
        </div>

        <div>
          {ViewerMockData.tags.map((tag, index) => (
            <div className="tag" key={index}>
              {tag}
            </div>
          ))}
        </div>
        <div id="markdown-viewer" className={'contents-viewer'}>
          {contents}
        </div>
        {/* <div className={'ViewerPage_warpper_editor_like_container'}>like container</div> */}
      </div>
    </div>
  );
};
