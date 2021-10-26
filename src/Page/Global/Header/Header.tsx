import { IconButton } from '@material-ui/core';
import { ArrowDropDown, Search, Telegram } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { getUserStorage } from '../../../Common/UserLocalStorage';
import { UserType } from '../GlobalType/GlobalType';
import { HeaderButtonContainer } from './HeaderButtonContainer';
import './Style/Header.scss';
import UserNameLogContainer from './UserNameLogContainer';

export const Header: React.FC = ({}) => {
  const [userImage, setUserImage] = useState('');
  const [userName, setUserName] = useState('');
  useEffect(() => {
    const CURRENT_USER: UserType | null = getUserStorage();

    if (CURRENT_USER !== null) {
      setUserImage(CURRENT_USER.image);
      setUserName(CURRENT_USER.velog_name);
    }
  });

  // console.log(CURRENT_USER);
  return (
    <div className={'velog_header_wrapper'}>
      <div className={'velog_header'}>
        <UserNameLogContainer userName={userName} />
        <HeaderButtonContainer
          userName={userName}
          userImage={userImage}
          setUserName={setUserName}
          setUserImage={setUserImage}
        />
      </div>
    </div>
  );
};
