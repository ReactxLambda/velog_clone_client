import { Fragment, useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import TrendingPostsPage from './TrendingPostsPage';
import RecentPostsPage from './RecentPostsPage';
import { useMediaQuery } from 'react-responsive';
import { FormControl, InputLabel, MenuItem, Select, Tab, Tabs } from '@material-ui/core';
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

// const home1 = {
//   width: '1728px',
//   marginLeft: 'auto',
//   marginRight: 'auto',
// };

// const home2 = {
//   width: '1376px',
//   marginLeft: 'auto',
//   marginRight: 'auto',
// };
// const home3 = {
//   width: '1024px',
//   marginLeft: 'auto',
//   marginRight: 'auto',
// };
// const home4 = {
//   width: 'calc(100% - 2rem)',
//   marginLeft: 'auto',
//   marginRight: 'auto',
// };

// const checked = () => {
//   if (useMediaQuery({ maxWidth: 1919 })) {
//     return {
//       width: '1376px',
//       marginLeft: 'auto',
//       marginRight: 'auto',
//     };
//   } else if (useMediaQuery({ maxWidth: 1440 })) {
//     return {
//       width: '1376px',
//       marginLeft: 'auto',
//       marginRight: 'auto',
//     };
//   } else if (useMediaQuery({ maxWidth: 1919 })) {
//     return {
//       width: '1376px',
//       marginLeft: 'auto',
//       marginRight: 'auto',
//     };
//   } else {
//     return {
//       width: '1376px',
//       marginLeft: 'auto',
//       marginRight: 'auto',
//     };
//   }
// };
// const home = {
//   width: '1376px',
//   marginLeft: 'auto',
//   marginRight: 'auto',
// };

//반응형 https://velog.io/@st2702/%EB%B0%98%EC%9D%91%ED%98%95-%EC%9B%B9-Media-Query
//https://velog.io/@pyo-sh/React-Responsive
// ${mediaQuery(1919)} {
//   width: '1376px'
// },
// ${mediaQuery(1440)} {
//   width: '1024px'
// },
// ${mediaQuery(1056)} {
//   width: calc(100% - 2rem)
// },
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

const HomePage: React.FC = ({ history, match }: any) => {
  const style = {
    marginTop: '150px',
  };
  useEffect(() => {
    console.log(`match.Url: ${match.url}`);
    if (match.url === '/recent') {
      setValueTab(1);
    }
    console.log(match.type);
    setTerm(match.type);
    console.log(term);
  }, []);
  const classes = useStyles();
  const [valueTab, setValueTab] = useState(0);
  const handleChangeTab = (event: React.ChangeEvent<{}>, newValue: number) => {
    console.log(newValue);
    if (newValue === 0) {
      //트렌딩
      history.push('/');
    } else if (newValue === 1) {
      //최신
      history.push('/recent');
    }
    setValueTab(newValue);
  };

  const [term, setTerm] = useState('week');

  const handleChangeSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTerm(event.target.value as string);
    history.push(`/trending/${event.target.value}`);
  };
  return (
    <div
      style={{
        overflowY: 'auto',
        height: '100%',
      }}
    >
      <h3>메인화면</h3>
      <Tabs
        value={valueTab}
        onChange={handleChangeTab}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        aria-label="icon label tabs example"
        className={classes.tabs}
      >
        <Tab label="트렌딩" />
        <Tab label="최신" />
        {match.url !== '/recent' && (
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
        )}
      </Tabs>

      <div
        style={{
          height: '600px',
        }}
      >
        <Route path={['/', '/trending', '/trending/:type(day|week|month|year)']} component={TrendingPostsPage} exact />
        <Route path={['/recent']} component={RecentPostsPage} />
      </div>
    </div>
  );
};
export default HomePage;
