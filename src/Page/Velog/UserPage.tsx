import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from '../Global/Header/Header';
import './UserPage.scss';
import VelogHeader from './VelogHeader';
import AboutTab from './AboutTab';
import UserPostsTab from './UserPostsTab';

const UserPage: React.FC = ({ match }: any) => {
  const { username, tab } = match.params;
  console.log(`tab : ${tab}`);
  let [active, setActive] = useState(tab === undefined ? 'post' : tab);

  return (
    <div className="velogUserPageWrapper">
      <Header></Header>
      <div className="velogWrapper">
        <VelogHeader username={username} active={active} setActive={setActive} match={match} />
        <Route path="/@:username" exact component={UserPostsTab} />
        <Route path="/@:username/about" component={AboutTab} />
      </div>
    </div>
  );
};

export default UserPage;
