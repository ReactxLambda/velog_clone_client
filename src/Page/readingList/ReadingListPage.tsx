import React, { useState, useEffect } from 'react';

import { RouteComponentProps, Route } from 'react-router-dom';
import { Header } from '../Global/Header/Header';

import LikedPostsPage from './LikedPostsPage';
import ReadingMenus from './ReadingMenus';
import ReadPostsPage from './ReadPostsPage';

type ReadingListPageProps = {} & RouteComponentProps<{
  type: string;
}>;
const ReadingListPage: React.FC<ReadingListPageProps> = ({ match, history }) => {
  const [type, setType] = useState(match.url === '/lists/read' ? true : false);
  return (
    <div>
      <Header></Header>
      <div className="homepage_container">
        <ReadingMenus type={type} history={history} />
        <div className="homepage_contents">
          <Route path={['/lists/liked']} component={LikedPostsPage} />
          <Route path={['/lists/read']} component={ReadPostsPage} />
        </div>
      </div>
    </div>
  );
};
export default ReadingListPage;
