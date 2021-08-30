import { Route } from 'react-router-dom';
import TrendingPostsPage from './TrendingPostsPage';
const HomePage: React.FC = () => {
  return (
    <>
      <Route path={['/', '/trending']} component={TrendingPostsPage} exact />
      {/* <Route path={['/recent']} component={RecentPostsPage} /> */}
    </>
  );
};
export default HomePage;
