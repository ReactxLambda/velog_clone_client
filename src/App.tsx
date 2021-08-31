import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import ContentsEditing from './Page/ContentsEditing/ContentsEditing';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import HomePage from './Page/home/HomePage';

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
      <Route path="/lists/:type(liked|read)" component={ReadingListPage} />
      <Route path="/:mode(trending|recent|following)" component={HomePage}/>
      */}
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/write" component={ContentsEditing} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
