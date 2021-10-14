import { FormControl, MenuItem, Select } from '@material-ui/core';
import { Fragment, useState, useEffect } from 'react';
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import './Menus.scss';
import { RouteComponentProps } from 'react-router-dom';
import { AccessTime, GraphicEq, TrendingUp } from '@material-ui/icons';

type MenusProps = {
  type: 'trend' | 'new';
};

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

const Menus: React.FC<MenusProps> = ({ type }) => {
  const classes = useStyles();

  const [term, setTerm] = useState('week');

  const handleChangeSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTerm(event.target.value as string);
    // history.push(`/trending/${event.target.value}`);
  };
  return (
    <div className="menus">
      <div className="search">
        <div className="tabs">
          <div className="tab">
            <TrendingUp /> 트렌딩
          </div>
          <div className="tab">
            <AccessTime />
            최신
          </div>
        </div>
        <div className="term">
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
