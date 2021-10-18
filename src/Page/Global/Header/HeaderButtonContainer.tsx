import { IconButton } from '@material-ui/core';
import { ArrowDropDown, Search } from '@material-ui/icons';
import React, { Fragment } from 'react';
import GoogleOAuthButton from '../../../Common/GoogleOAuthButton';
// import { UserInfoStore } from '../../../Store/user';
type HeaderButtonContainerType = {
  userImage: string;
  setUserName: (p1: string) => void;
  setUserImage: (p1: string) => void;
};
export const HeaderButtonContainer: React.FC<HeaderButtonContainerType> = ({
  userImage,
  setUserName,
  setUserImage,
}) => {
  const test: boolean = true;
  // const userImage = UserInfoStore.getState().userImageLink;
  return (
    <div className={'velog_header_button_container'}>
      <IconButton>
        <Search />
      </IconButton>
      {userImage === '' ? (
        <div>
          <GoogleOAuthButton setUserName={setUserName} setUserImage={setUserImage} />
        </div>
      ) : (
        <Fragment>
          <button className="velog_header_button_container_new_post">새 글 작성</button>
          <div className="velog_header_button_container_user_menu">
            <img src={userImage} />
            <ArrowDropDown />
          </div>
        </Fragment>
      )}
    </div>
  );
};
