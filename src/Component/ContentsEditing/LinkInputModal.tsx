import React from 'react';
import './Style/LinkModal.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
type LinkType = {
  link: string;
  visible: boolean;
  line: number;
  ch: number;
};
const LinkModal: React.FC<LinkType> = ({ link, visible, line, ch }) => {
  return (
    <div
      className="link_modal"
      style={{
        display: visible ? 'inline-block' : 'none',
        top: `${150 + 10 + line * 24}px`,
        left: `${25 + 10 + ch * 7}px`,
      }}
    >
      <label> 링크 등록 </label>
      <div
        style={{
          display: 'flex',
        }}
      >
        <TextField style={{ flex: 1, marginRight: '20px' }} placeholder={'링크를 입력해주세요'}></TextField>
        <Button style={{ flex: 0.3 }} variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </div>
    </div>
  );
};
export default LinkModal;
