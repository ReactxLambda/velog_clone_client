import { IconButton } from '@material-ui/core';
import { ArrowDropDown, Search } from '@material-ui/icons';
import React, { Fragment } from 'react';
import GoogleOAuthButton from '../../../Common/GoogleOAuthButton';

export const HeaderButtonContainer: React.FC = () => {
  const test: boolean = true;

  return (
    <div className={'velog_header_button_container'}>
      <IconButton>
        <Search />
      </IconButton>
      {test ? (
        <div>
          <GoogleOAuthButton />
        </div>
      ) : (
        <Fragment>
          <button className="velog_header_button_container_new_post">새 글 작성</button>
          <div className="velog_header_button_container_user_menu">
            <img src="https://lh3.googleusercontent.com/ogw/ADea4I6x1xtssUL9-KgfAtuXWSmRbMc1boM2gsoJzlA=s83-c-mo" />
            <ArrowDropDown />
          </div>
        </Fragment>
      )}
    </div>
  );
};
