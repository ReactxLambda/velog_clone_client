import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import UserPage from './UserPage';

const VelogPage: React.FC = ({ match }: any) => {
  // const { username } = match.params;
  // console.log(username);
  return (
    <div>
      <Switch>
        <Route path={['/@:username', '/@:username/:tab(series|about)']} exact component={UserPage} />
        {/* <Route path="/@:username/series" component={SeriesTab} /> */}
      </Switch>
    </div>
  );
};

export default VelogPage;
