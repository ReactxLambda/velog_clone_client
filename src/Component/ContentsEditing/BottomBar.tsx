import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import './Style/BottomBar.scss';
const BottomBar: React.FC = () => {
  return (
    <div className="__bottom__bar">
      <div className="bottom_solt">
        <Button variant="outlined" className="button4" startIcon={<ArrowBackIcon />}>
          나가기
        </Button>
      </div>
      <div className="bottom_solt"></div>

      <div className="bottom_solt">
        <button className="button2">임시 저장</button>
      </div>
      <div className="bottom_solt">
        <button className="button3">출간하기</button>
      </div>
    </div>
  );
};

export default BottomBar;
