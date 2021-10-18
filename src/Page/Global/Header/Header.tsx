import { IconButton } from '@material-ui/core';
import { ArrowDropDown, Search, Telegram } from '@material-ui/icons';
import React from 'react';
import { HeaderButtonContainer } from './HeaderButtonContainer';
import './Style/Header.scss';
import UserNameLogContainer from './UserNameLogContainer';

type HeaderType = {
  userImage: string;
  userName: string;
  setUserName: (p1: string) => void;
  setUserImage: (p1: string) => void;
};
export const Header: React.FC<HeaderType> = ({ userImage, userName, setUserName, setUserImage }) => {
  return (
    <div className={'velog_header_wrapper'}>
      <div className={'velog_header'}>
        <UserNameLogContainer userName={userName} />
        <HeaderButtonContainer userImage={userImage} setUserName={setUserName} setUserImage={setUserImage} />
      </div>
    </div>
  );
};
