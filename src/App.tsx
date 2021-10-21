import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import ContentsEditing from './Page/ContentsEditing/ContentsEditing';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import HomePage from './Page/home/HomePage';
import ReadingListPage from './Page/readingList/ReadingListPage';
import TestPage from './Page/Test/Responsive';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ContentsViewerPage } from './Page/ContentsViewerPage/ContentsViewerPage';
import UserCreatePage from './Page/UserCreatePage/UserCreatePage';
import './index.css';
function App() {
  const markdownTextArea = true;
  const [textContents, setTextContents] = useState('');
  const markdownViewer = false;

  const [userName, setUserName] = useState('');
  const [userImage, setUserImage] = useState('');

  return (
    <div className="App">
      <BrowserRouter>
        {/* 
      <Route path="/@:username" component={VelogPage} />
      <Route path="/setting" component={SettingPage} /> 
      
     1. 포스트 상세보기
     2. 포스트 수정 / 등록---70%
     3. 내벨로그
     4. 설정

     1. 포스트 저장
     2. 활동기록 (카드) 
     3. 메인페이지 (카드)
      */}
        <Switch>
          <CssBaseline>
            <Route path="/" component={HomePage} exact />
            <Route
              path="/:mode(trending|recent|following)"
              component={() => (
                <HomePage
                  userName={userName}
                  setUserName={setUserName}
                  userImage={userImage}
                  setUserImage={setUserImage}
                />
              )}
            />
            <Route path="/write" component={ContentsEditing} exact />
            <Route
              path="/viewer"
              component={() => (
                <ContentsViewerPage
                  userName={userName}
                  setUserName={setUserName}
                  userImage={userImage}
                  setUserImage={setUserImage}
                />
              )}
            />
            {/* 임시 path*/}
            <Route path="/lists/:type(liked|read)" component={ReadingListPage} />
            <Route path="/test" component={TestPage} />
            <Route path="/register" component={UserCreatePage} />
          </CssBaseline>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
