import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import UserPage from './UserPage';
import AboutPage from './AboutPage';

const VelogPage: React.FC = ({ match }: any) => {
  const { username } = match.params;
  return (
    <div>
      <Switch>
        <Route path="/@:username" exact component={UserPage} />
        {/* <Route path="/@:username/series" component={SeriesTab} /> */}
        <Route path="/@:username/about" component={AboutPage} />
      </Switch>
    </div>
  );
};

export default VelogPage;
