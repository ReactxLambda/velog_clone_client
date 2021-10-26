import React, { useEffect, useState } from 'react';
import MarkdownViewer from '../../Component/ContentsEditing/MarkdownViewer';
import TextInputContainer from '../../Component/ContentsEditing/TextInputContainer';
import highlighting from '../../Common/highlighting';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import './Style/ContentsEditing.scss';
import { SnackbarProvider } from 'notistack';
import SavingComponent from '../../Component/ContentsEditing/SavingComponent/SavingComponent';

const ContentsEditing: React.FC = () => {
  const [contents, setContents] = useState(''); // Text contents
  const [viewerContents, setViewerContents] = useState('하하하하하하'); // view contents
  const [header, setHeader] = useState(''); // set view header
  const [tags, setTags]: [string[], (any: any) => void] = useState([]);
  const [isShowSavingComponent, setIsShowSavingComponent] = useState(false);
  const [isPubilc, setIsPublic] = useState(true);
  const [introduce, setIntroduce] = useState('');
  const [URL, setURL] = useState('');
  const [thumbnail, setThumbnail] = useState();
  const hljs = require('highlight.js');
  const userName = `Test`;
  const setThumbnailWrapper = (event: any) => {
    setThumbnail(event.target.files[0]);
  };
  const setIntroduceWrapper = (p1: string) => {
    if (introduce.length <= 150) setIntroduce(p1);
    else {
      setIntroduce(introduce.substring(0, 149));
    }
  };
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

  const exportContents = (): void => {
    const mergedContents = {
      contents: contents,
      header: header,
      tags: tags,
      isPubilc: isPubilc,
      introduce: introduce,
      URL: `/@${userName}/${URL}`,
      thumbnail: thumbnail,
    };
    console.log(mergedContents);
  };
  const snackbarKey: any = React.createRef();
  return (
    <SnackbarProvider maxSnack={1} ref={snackbarKey} preventDuplicate={true}>
      <div
        className="markdown-contents"
        id="__markdown__contents__id"
        style={{ display: isShowSavingComponent ? 'none' : '' }}
      >
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
            setIsShowSavingComponent={setIsShowSavingComponent}
          />
        </div>
        <div className="contents-viewer">
          <MarkdownViewer />
        </div>
      </div>
      <SavingComponent
        setIsShowSavingComponent={setIsShowSavingComponent}
        isShowSavingComponent={isShowSavingComponent}
        exportContents={exportContents}
        isPubilc={isPubilc}
        setIsPublic={setIsPublic}
        introduce={introduce}
        setIntroduce={setIntroduceWrapper}
        URL={URL}
        setURL={setURL}
        userName={userName}
        thumbnail={thumbnail}
        setThumbnail={setThumbnailWrapper}
      />
    </SnackbarProvider>
  );
};

export default ContentsEditing;
