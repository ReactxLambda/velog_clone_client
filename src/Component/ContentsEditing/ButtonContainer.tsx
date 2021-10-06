import React, { Fragment, useEffect, useState } from 'react';
import HeaderButton from './HeaderButton';
import IconButton from './IconButton';
import './Style/ButtonContainer.scss';
import LinkModal from './LinkInputModal';
type ButtonContainerType = {
  codeMirror: any;
};
function getTextLengthInPixel(txt: string, optFont: string | null | undefined): number {
  var myId = 'my_span_ruler';
  var ruler = document.getElementById(myId);
  if (!ruler) {
    ruler = document.createElement('span');
    ruler.id = myId; // 안보이게
    ruler.setAttribute(
      'style',
      'visibility:hidden; white-space:nowrap; position:absolute; left:-9999px; top: -9999px;',
    );
    document.body.appendChild(ruler);
  } // 폰트 스타일
  ruler.style.font = !optFont ? document.body.style.font : optFont;
  ruler.innerText = txt;
  return ruler.offsetWidth;
}

const ButtonContainer: React.FC<ButtonContainerType> = ({ codeMirror }) => {
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
    codeMirror.replaceSelection(`\`\`\`\n${selectionString}\n\`\`\``);
    codeMirror.focus();
  };

  useEffect(() => {
    console.log(`modal visible ${linkModalVisible}`);
  }, [linkModalVisible]);

  useEffect(() => {
    console.log(`link: ${link}`);
  }, [link]);

  const showLinkModal = () => {
    const cursor = codeMirror.getCursor();
    const cursorLocation = codeMirror.cursorCoords({ line: cursor.line, ch: cursor.ch });
    setLine(cursor.line);
    setCh(cursor.ch);
    setLineWidth(cursorLocation.left);
    setLineHeight(cursorLocation.top);
    setLinkModalVisible(!linkModalVisible);
  };
  const toMarkdown = () => {
    codeMirror.replaceSelection(`[링크텍스트](${link})`);
    setLinkModalVisible(false);
    console.log('ch: ' + ch);
    console.log('line: ' + line);
    codeMirror.setSelection({ line: line, ch: ch + 1 }, { line: line, ch: ch + 6 });
    codeMirror.focus();
  };
  const setLinkStr = (event: any) => {
    setLink(event.target.value);
  };
  return (
    <div className={'button_container'} id="__button__container__id">
      <HeaderButton number={'1'} onClick={() => makeHead(1)} />
      <HeaderButton number={'2'} onClick={() => makeHead(2)} />
      <HeaderButton number={'3'} onClick={() => makeHead(3)} />
      <HeaderButton number={'4'} onClick={() => makeHead(4)} />
      <IconButton icon={'FormatBold'} onClick={makeBold} />
      <IconButton icon={'FormatStrikethrough'} onClick={makeLine} />
      <IconButton icon={'FormatItalic'} onClick={makeItalic} />
      <IconButton icon={'FormatQuote'} onClick={makeParagraph} />
      <IconButton icon={'Code'} onClick={makeCode} />
      <IconButton icon={'Link'} onClick={showLinkModal} />
      <LinkModal
        visible={linkModalVisible}
        lineHeight={lineHeight}
        lineWidth={lineWidth}
        setLink={setLinkStr}
        toMarkdown={toMarkdown}
      ></LinkModal>
    </div>
  );
};

export default ButtonContainer;
