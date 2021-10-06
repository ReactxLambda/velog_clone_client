import React, { Fragment, useEffect, useState } from 'react';
import HeaderButton from './HeaderButton';
import IconButton from './IconButton';
import './Style/ButtonContainer.scss';
import LinkModal from './LinkInputModal';
type ButtonContainerType = {
  codeMirror: any;
};

const ButtonContainer: React.FC<ButtonContainerType> = ({ codeMirror }) => {
  const makeBold = () => {
    const selectionString: string = codeMirror.getSelection();
    codeMirror.replaceSelection(`**${selectionString}**`);
  };
  const makeItalic = () => {
    const selectionString: string = codeMirror.getSelection();
    codeMirror.replaceSelection(`*${selectionString}*`);
  };
  const makeLine = () => {
    const selectionString: string = codeMirror.getSelection();
    codeMirror.replaceSelection(`~~${selectionString}~~`);
  };
  const makeParagraph = () => {
    const selectionString: string = codeMirror.getSelection();
    codeMirror.replaceSelection(`> ${selectionString}`);
  };
  const makeHead = (headNumber: number) => {
    const selectionString: string = codeMirror.getSelection();
    codeMirror.replaceSelection(`${'#'.repeat(headNumber)} ${selectionString}`);
  };
  const makeCode = () => {
    const selectionString: string = codeMirror.getSelection();
    codeMirror.replaceSelection(`\`\`\`\n${selectionString}\n\`\`\``);
  };
  const [linkModalVisible, setLinkModalVisible] = useState(false);
  const [link, setLink] = useState('');

  useEffect(() => {
    console.log(`modal visible ${linkModalVisible}`);
  }, [linkModalVisible]);
  useEffect(() => {
    console.log(`link: ${link}`);
  }, [link]);
  const [line, setLine] = useState(1);
  const [ch, setCh] = useState(1);

  const showLinkModal = () => {
    setLinkModalVisible(!linkModalVisible);
    const cursor = codeMirror.getCursor();
    setLine(cursor.line);
    setCh(cursor.ch);
  };
  return (
    <div className={'button_container'}>
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
      <LinkModal link={link} visible={linkModalVisible} line={line} ch={ch}></LinkModal>
    </div>
  );
};

export default ButtonContainer;
