import { IconButton } from '@material-ui/core';
import { ArrowDropDown, Search } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import React from 'react';

export const HeaderButtonContainer: React.FC = () => {
  const handleNewPost = () => {};
  return (
    <div className={'velog_header_button_container'}>
      <IconButton>
        <Search />
      </IconButton>
      <Link to="/write">
        <button className="velog_header_button_container_new_post">새 글 작성</button>
      </Link>
      <div className="velog_header_button_container_user_menu">
        <img src="https://lh3.googleusercontent.com/ogw/ADea4I6x1xtssUL9-KgfAtuXWSmRbMc1boM2gsoJzlA=s83-c-mo" />
        <ArrowDropDown />
      </div>
    </div>
  );
};
