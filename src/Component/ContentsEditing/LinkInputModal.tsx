import React, { useEffect, useState } from 'react';
import './Style/LinkModal.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
type LinkType = {
  visible: boolean;
  lineHeight: number;
  lineWidth: number;
  setLink: (any: any) => void;
  toMarkdown: () => void;
};

const LinkModal: React.FC<LinkType> = ({ visible, lineHeight, setLink, toMarkdown, lineWidth }) => {
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
          style={{ flex: 1, marginRight: '20px' }}
          placeholder={'링크를 입력해주세요'}
        ></TextField>
        <Button style={{ flex: 0.3 }} variant="contained" endIcon={<SendIcon />} onClick={(e) => toMarkdown()}>
          Send
        </Button>
      </div>
    </div>
  );
};
export default LinkModal;
