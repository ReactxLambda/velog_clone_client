import { Fragment, useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import TrendingPostsPage from './TrendingPostsPage';
import RecentPostsPage from './RecentPostsPage';
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';

import { Header } from '../Global/Header/Header';
import Menus from './Menus';
import '../Global/Header/Style/Header.scss';

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
const HomePage: React.FC = ({ history, match }: any) => {
  const style = {
    marginTop: '150px',
  };
  const [type, setType] = useState(match.url === '/recent' ? true : false);
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
    <div>
      <Header></Header>
      <div className="homepage_container">
        <Menus type={type} term={term} setTerm={setTerm} history={history} />
        <div className="homepage_contents">
          <Route path={['/']} component={() => <TrendingPostsPage term={term} />} exact />
          <Route path={['/recent']} component={RecentPostsPage} />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
