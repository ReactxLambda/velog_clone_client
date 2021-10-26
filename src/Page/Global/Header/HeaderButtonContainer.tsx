import { IconButton } from '@material-ui/core';
import { ArrowDropDown, Search } from '@material-ui/icons';
import React, { Fragment } from 'react';
import GoogleOAuthButton from '../../../Common/GoogleOAuthButton';
import { Link } from 'react-router-dom';
type HeaderButtonContainerType = {
  userImage: string;
  setUserName: (p1: string) => void;
  setUserImage: (p1: string) => void;
  userName: string;
};
export const HeaderButtonContainer: React.FC<HeaderButtonContainerType> = ({
  userImage,
  setUserName,
  setUserImage,
  userName,
}) => {
  const test: boolean = true;
  const handleNewPost = () => {};
  return (
    <div className={'velog_header_button_container'}>
      <IconButton>
        <Search />
      </IconButton>
      {userImage === '' ? (
        <div>
          <GoogleOAuthButton userName={userName} setUserName={setUserName} setUserImage={setUserImage} />
        </div>
      ) : (
        <Fragment>
          <Link to="/write">
            <button className="velog_header_button_container_new_post">새 글 작성</button>
          </Link>
          <div className="velog_header_button_container_user_menu">
            <img src={userImage} />
            <ArrowDropDown />
          </div>
        </Fragment>
      )}
    </div>
  );
};
