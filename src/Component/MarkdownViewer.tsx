import React, { Fragment } from 'react';

const MarkdownViewer: React.FC = () => {
  return (
    <Fragment>
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/default.min.css"></link>
      <div>
        <h1 id="markdown-header"></h1>
      </div>
      <div id="markdown-viewer"></div>
    </Fragment>
  );
};
export default MarkdownViewer;
