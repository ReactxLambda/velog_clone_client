import { IconButton } from '@material-ui/core';
import { ArrowDropDown, Search, Telegram } from '@material-ui/icons';
import React from 'react';
import { HeaderButtonContainer } from './HeaderButtonContainer';
import './Style/Header.scss';
import UserNameLogContainer from './UserNameLogContainer';

export const Header: React.FC = () => {
  return (
    <div className={'velog_header_wrapper'}>
      <div className={'velog_header'}>
        <UserNameLogContainer />
        <HeaderButtonContainer />
      </div>
    </div>
  );
};
