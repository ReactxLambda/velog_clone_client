import { useState } from 'react';
import TagListPage from './TagsListPage';
import TagDetailPage from './TagDetailPage';
import { Route } from 'react-router-dom';
const TagsPage: React.FC = () => {
  return (
    <div>
      <Route path="/tags" exact component={TagListPage} />
      <Route path="/tags/:tag" component={TagDetailPage} />
    </div>
  );
};
export default TagsPage;
