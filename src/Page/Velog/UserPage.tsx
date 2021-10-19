import { useState } from 'react';
import { Header } from '../Global/Header/Header';
import './UserPage.scss';
const UserPage: React.FC = ({ match }: any) => {
  return (
    <div>
      <Header></Header>
      <div className="velogWrapper">
        <div className="velogProfile">
          <div className="profile">
            <a href="">
              <img src="/images/gitlab.png"></img>
            </a>
            <div className="info">
              <div className="name">
                <a href="">사용자명</a>
              </div>
              <div className="description"></div>
            </div>
          </div>
          <div className="underline"></div>
        </div>
        <div className="velogTabs"></div>
        <div></div>
      </div>
    </div>
  );
};

export default UserPage;
