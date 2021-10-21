import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './UserPage.scss';
type VelogHeader = { username: string; active: string; setActive: (p1: string) => void; match: any };

const VelogHeader: React.FC<VelogHeader> = ({ username, active, setActive, match }: any) => {
  const handleClickTab = (type: string) => {
    setActive(type);
  };

  const tabUnerline = (active: any) => {
    let style = {};
    if (active === 'post') style = { left: '0%' };
    else if (active === 'series') style = { left: '33.3333%' };
    // else if (active === 'about') style = { left: '66.6666%' };
    else if (active === 'about') style = { left: '50%' };
    return style;
  };
  return (
    <Fragment>
      <div className="velogProfile">
        <div className="profile">
          <a href="">
            <img src="/images/gitlab.png"></img>
          </a>
          <div className="info">
            <div className="name">
              <a href="">{username}</a>
            </div>
            <div className="description"></div>
          </div>
        </div>
        <div className="profileUnderline"></div>
      </div>

      <div className="velogTabs">
        <div className="velogTabsWrapper">
          <Link
            to={`/@${username}`}
            className={active === 'post' ? 'velogTabActive' : 'velogTab'}
            onClick={() => handleClickTab('post')}
          >
            글
          </Link>

          {/* <a
              className={active === 'series' ? 'velogTabActive' : 'velogTab'}
              href=""
              onClick={() => handleClickTab('series')}
            >
              시리즈
            </a> */}
          <Link
            className={active === 'about' ? 'velogTabActive' : 'velogTab'}
            to={`/@${username}/about`}
            onClick={() => handleClickTab('about')}
          >
            소개
          </Link>
          <div style={tabUnerline(active)} className="tabUnderline"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default VelogHeader;
