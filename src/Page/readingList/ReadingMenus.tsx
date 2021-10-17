import { FormControl, MenuItem, Select } from '@material-ui/core';
import { Fragment, useState, useEffect } from 'react';
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import '../home/Menus.scss';
import { RouteComponentProps } from 'react-router-dom';
import { AccessTime, GraphicEq, TrendingUp } from '@material-ui/icons';
import client from '../../Common/apollo';
import { gql } from '@apollo/client';

type MenusProps = { type: boolean; history: any };
const ReadingMenus: React.FC<MenusProps> = ({ type, history }) => {
  // const Menus: React.FC = () => {

  const [active, setActive] = useState(type);

  const handleClickTab = () => {
    //liked
    if (active) {
      setActive(false);
      history.push('/lists/liked');
    } else {
      //read
      setActive(true);
      history.push('/lists/read');
    }
  };
  return (
    <div className="menus">
      <div className="search">
        <div className="tabs">
          <div className="tab" style={{ width: '9rem' }}>
            <a style={{ width: '9rem' }} className={!active ? 'active' : ''} onClick={handleClickTab}>
              좋아한 포스트
            </a>
          </div>
          <div style={{ width: '9rem' }} className="tab">
            <a style={{ width: '9rem' }} className={active ? 'active' : ''} onClick={handleClickTab}>
              최근 읽은 포스트
            </a>
          </div>
          <div
            style={active ? { transform: 'translateX(9rem)' } : { transform: 'translateX(0rem)' }}
            className="underline"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ReadingMenus;
