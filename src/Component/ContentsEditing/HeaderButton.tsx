import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import './Style/HeaderButton.scss';
type HeaderButtonType = {
  number: string;
  onClick: () => void | undefined;
};

const HeaderButton: React.FC<HeaderButtonType> = ({ number, onClick }) => {
  return (
    <Button onClick={onClick}>
      <div className={'header'}>
        H<span className={'number'}>{number}</span>
      </div>
    </Button>
  );
};

export default HeaderButton;
