import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import './Style/BottomBar.scss';

type BottomBarType = { contents: string; header: string; tags: string[] };
const BottomBar: React.FC<BottomBarType> = ({ contents, header, tags }) => {
  const exportContents = () => {
    const mergedContents = {
      contents: contents,
      header: header,
      tags: tags,
    };
    console.log(mergedContents);
  };
  return (
    <div className="__bottom__bar">
      <Button variant="outlined" className="button4" startIcon={<ArrowBackIcon />}>
        나가기
      </Button>

      <div className="bottom_solt">
        <button className="button2">임시 저장</button>
        <button className="button3" onClick={exportContents}>
          출간하기
        </button>
      </div>
    </div>
  );
};

export default BottomBar;
