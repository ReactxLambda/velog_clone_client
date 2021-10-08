import React, { Fragment, useEffect, useState } from 'react';
import HeaderButton from './HeaderButton';
import IconButton from './IconButton';
import UploadImageButton from './UploadImageButton';
import './Style/ButtonContainer.scss';
import ButtonSeperator from './ButtonSeperator';
import LinkModal from './LinkInputModal';
type ButtonContainerType = {
  codeMirror: any;
  codeMirrorFocus: boolean;
};

const ButtonContainer: React.FC<ButtonContainerType> = ({ codeMirror, codeMirrorFocus }) => {
  const [lineWidth, setLineWidth] = useState(0);
  const [lineHeight, setLineHeight] = useState(0);
  const [line, setLine] = useState(0);
  const [ch, setCh] = useState(0);
  const [linkModalVisible, setLinkModalVisible] = useState(false);
  const [link, setLink] = useState('');

  const makeBold = () => {
    const selectionString: string = codeMirror.getSelection();
    codeMirror.replaceSelection(`**${selectionString}**`);
    codeMirror.focus();
  };
  const makeItalic = () => {
    const selectionString: string = codeMirror.getSelection();
    codeMirror.replaceSelection(`*${selectionString}*`);
    codeMirror.focus();
  };
  const makeLine = () => {
    const selectionString: string = codeMirror.getSelection();
    codeMirror.replaceSelection(`~~${selectionString}~~`);
    codeMirror.focus();
  };
  const makeParagraph = () => {
    const selectionString: string = codeMirror.getSelection();
    codeMirror.replaceSelection(`> ${selectionString}`);
    codeMirror.focus();
  };
  const makeHead = (headNumber: number) => {
    const selectionString: string = codeMirror.getSelection();
    codeMirror.replaceSelection(`${'#'.repeat(headNumber)} ${selectionString}`);
    codeMirror.focus();
  };
  const makeCode = () => {
    const selectionString: string = codeMirror.getSelection();
    codeMirror.replaceSelection(`\`\`\`\n${selectionString === '' ? '코드를 입력해주세요' : selectionString}\n\`\`\``);
    codeMirror.setSelection({ line: line + 1, ch: 0 }, { line: line + 1, ch: 10 });
    codeMirror.focus();
  };

  const showLinkModal = () => {
    const cursor = codeMirror.getCursor();
    const cursorLocation = codeMirror.cursorCoords({ line: cursor.line, ch: cursor.ch });
    setLine(cursor.line);
    setCh(cursor.ch);
    setLineWidth(cursorLocation.left);
    setLineHeight(cursorLocation.top);
    setLinkModalVisible(true);
  };
  const toMarkdown = () => {
    codeMirror.replaceSelection(`[링크텍스트](${link.replaceAll('\n', '')})`);
    codeMirror.setSelection({ line: line, ch: ch + 1 }, { line: line, ch: ch + 6 });
    setLinkModalVisible(false);
    setLink('');
  };
  const setLinkStr = (event: any) => {
    setLink(event.target.value);
  };

  const range = (start: number, end: number): number[] => {
    const arr = [];
    const length = end - start;
    for (let i = 0; i <= length; i++) {
      arr[i] = start;
      start++;
    }
    return arr;
  };
  useEffect(() => {
    console.log('focus 변경 감지');
    setLinkModalVisible(false);
  }, [codeMirrorFocus]);
  return (
    <div className={'button_container'} id="__button__container__id">
      {range(1, 4).map((index) => {
        return <HeaderButton number={String(index)} onClick={() => makeHead(index)} key={index} />;
      })}
      <ButtonSeperator />
      <IconButton icon={'FormatBold'} onClick={makeBold} />
      <IconButton icon={'FormatItalic'} onClick={makeItalic} />
      <IconButton icon={'FormatStrikethrough'} onClick={makeLine} />
      <ButtonSeperator />
      <IconButton icon={'FormatQuote'} onClick={makeParagraph} />
      <IconButton icon={'Link'} onClick={showLinkModal} />
      <UploadImageButton />
      <IconButton icon={'Code'} onClick={makeCode} />
      <LinkModal
        visible={linkModalVisible}
        lineHeight={lineHeight}
        lineWidth={lineWidth}
        setLink={setLinkStr}
        link={link}
        toMarkdown={toMarkdown}
        codeMirror={codeMirror}
      />
    </div>
  );
};

export default ButtonContainer;
