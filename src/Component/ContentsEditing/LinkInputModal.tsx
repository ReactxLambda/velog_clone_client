import React, { useEffect, useState } from 'react';
import './Style/LinkModal.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
type LinkType = {
  visible: boolean;
  lineHeight: number;
  lineWidth: number;
  link: string;
  setLink: (any: any) => void;
  toMarkdown: () => void;
  codeMirror: any;
};

const LinkModal: React.FC<LinkType> = ({ visible, lineHeight, link, setLink, toMarkdown, lineWidth, codeMirror }) => {
  const inputEnter = (event: any) => {
    if (event.keyCode == 13) {
      // 딜레이를 주기위해 Timeout을 걸어줌
      new Promise((resolve, reject) => {
        setTimeout(() => {
          codeMirror.focus();
        }, 300);
        resolve(1);
      }).then(() => {
        toMarkdown();
      });
    }
  };
  return (
    <div
      className="link_modal"
      style={{
        display: visible ? 'inline-block' : 'none',
        top: `${lineHeight + 5}px`,
        left: `${lineWidth}px`,
      }}
    >
      <label> 링크 등록 </label>
      <div
        style={{
          display: 'flex',
        }}
      >
        <TextField
          onChange={setLink}
          value={link}
          style={{ flex: 1, marginRight: '20px' }}
          placeholder={'링크를 입력해주세요'}
          onKeyDown={inputEnter}
        ></TextField>
        <Button style={{ flex: 0.3 }} variant="contained" endIcon={<SendIcon />} onClick={(e) => toMarkdown()}>
          Send
        </Button>
      </div>
    </div>
  );
};
export default LinkModal;
