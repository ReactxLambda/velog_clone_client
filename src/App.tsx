import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import ContentsEditing from './Page/ContentsEditing';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import HomePage from './Page/home/HomePage';
import ReadingListPage from './Page/readingList/ReadingListPage';

function App() {
  const markdownTextArea = true;
  const [textContents, setTextContents] = useState('');
  const markdownViewer = false;
  return (
    <div className="App">
      <BrowserRouter>
        {/* 
      <Route path="/@:username" component={VelogPage} />
      <Route path="/setting" component={SettingPage} /> 
      
     
      */}
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/:mode(trending|recent|following)" component={HomePage} />
          <Route path="/write" component={ContentsEditing} />
          <Route path="/lists/:type(liked|read)" component={ReadingListPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
