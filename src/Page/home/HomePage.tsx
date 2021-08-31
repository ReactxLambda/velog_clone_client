import { useState } from 'react';
import { Route } from 'react-router-dom';
import TrendingPostsPage from './TrendingPostsPage';
import { useMediaQuery } from 'react-responsive';
import { Tab, Tabs } from '@material-ui/core';

const home1 = {
  width: '1728px',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const home2 = {
  width: '1376px',
  marginLeft: 'auto',
  marginRight: 'auto',
};
const home3 = {
  width: '1024px',
  marginLeft: 'auto',
  marginRight: 'auto',
};
const home4 = {
  width: 'calc(100% - 2rem)',
  marginLeft: 'auto',
  marginRight: 'auto',
};

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
const home = {
  width: '1376px',
  marginLeft: 'auto',
  marginRight: 'auto',
};
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

const HomePage: React.FC = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div style={home}>
      <h3>메인화면 - 트렌딩</h3>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        aria-label="icon label tabs example"
      >
        <Tab label="트렌딩" />
        <Tab label="최신" />
      </Tabs>
      <div
        style={{
          display: 'flex',
          marginTop: '2rem',
        }}
      >
        <Route path={['/', '/trending']} component={TrendingPostsPage} exact />
        {/* <Route path={['/recent']} component={RecentPostsPage} /> */}
      </div>
    </div>
  );
};
export default HomePage;
