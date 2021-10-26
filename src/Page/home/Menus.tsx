import { FormControl, MenuItem, Select } from '@material-ui/core';
import { Fragment, useState, useEffect } from 'react';
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import './Menus.scss';
import { RouteComponentProps } from 'react-router-dom';
import { AccessTime, GraphicEq, TrendingUp } from '@material-ui/icons';
import client from '../../Common/apollo';
import { gql } from '@apollo/client';

type MenusProps = { type: boolean; history: any; term: string; setTerm: (p1: string) => void };

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }),
)(InputBase);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
      width: '100px',
    },
    tabs: {
      width: '500px',
      marginLeft: '180px',
    },
  }),
);

const Menus: React.FC<MenusProps> = ({ type, history, term, setTerm }) => {
  // const Menus: React.FC = () => {
  const classes = useStyles();
  console.log(`temr : ${term}`);
  const [active, setActive] = useState(type);

  const handleChangeSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTerm(event.target.value as string);
    // history.push(`/trending/${event.target.value}`);
  };

  const handleClickTab = () => {
    //trending
    if (active) {
      setActive(false);
      history.push('/');
    } else {
      //recent
      setActive(true);
      history.push('/recent');
    }
  };
  return (
    <div className="menus">
      <div className="search">
        <div className="tabs">
          <div className="tab">
            <a className={!active ? 'active' : ''} onClick={handleClickTab}>
              <TrendingUp /> 트렌딩
            </a>
          </div>
          <div className="tab">
            <a className={active ? 'active' : ''} onClick={handleClickTab}>
              <AccessTime />
              최신
            </a>
          </div>
          <div style={active ? { left: '50%' } : { left: '0%' }} className="underline"></div>
        </div>
        <div style={active ? { visibility: 'hidden' } : { visibility: 'visible' }} className="term">
          <FormControl className={classes.margin}>
            {/* <InputLabel id="demo-customized-select-label">Age</InputLabel> */}
            <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              value={term}
              onChange={handleChangeSelect}
              input={<BootstrapInput />}
            >
              <MenuItem value="day">오늘</MenuItem>
              <MenuItem value="week">이번 주</MenuItem>
              <MenuItem value="month">이번 달</MenuItem>
              <MenuItem value="year">올해</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default Menus;
