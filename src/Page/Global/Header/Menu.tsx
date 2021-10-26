import { Button, Menu, MenuItem } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router';
import { ArrowDropDown } from '@material-ui/icons';
import IconButton from '../../../Component/ContentsEditing/IconButton';
import { Link } from 'react-router-dom';
import React from 'react';
import { removeUserStorage } from '../../../Common/UserLocalStorage';
export const MenuContainer: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const history = useHistory();
  const handleClose = (path: string) => {
    setAnchorEl(null);
    history.push(path);
  };

  return (
    <div>
      <IconButton icon={'ArrowDropDown'} onClick={handleClick}></IconButton>

      <Menu
        className="MenuContainer_inner"
        style={{ top: '40px' }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => handleClose('/')}>내 벨로그</MenuItem>
        <MenuItem onClick={() => handleClose('/')}>임시 글</MenuItem>
        <MenuItem onClick={() => handleClose('/')}>읽기 목록</MenuItem>
        <MenuItem onClick={() => handleClose('/setting')}>설정</MenuItem>
        <MenuItem onClick={() => handleClose('/')}>로그아웃</MenuItem>
      </Menu>
    </div>
  );
};
