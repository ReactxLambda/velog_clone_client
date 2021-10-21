import { useState } from 'react';
import './UserPostsTab.scss';
import { Search } from '@material-ui/icons';
import { Link } from 'react-router-dom';
const UserPostsTab: React.FC = ({ match }: any) => {
  const { username, tab } = match.params;
  let [searchWord, setSearchWord] = useState('');
  let [tagActive, setTagActive] = useState('');
  let [tags, setTags] = useState([]);
  return (
    <div>
      <div className="searchWrapper">
        <div className="search">
          <Search />
          <input
            placeholder="검색어를 입력하세요"
            value={searchWord}
            onChange={({ target: { value } }) => setSearchWord(value)}
          />
        </div>
      </div>
      <div className="tagWrapper">
        <div className="pcTagWrapper1">
          <div className="pcTagWrapper2">
            <div className="pcTags">
              <div className="pcTagTitle">태그 목록</div>
              <ul>
                {/**active에 따라 style 적용 다름*/}
                <li className="pcTagActive">
                  <Link to={`/@${username}`}>전체보기</Link>
                  <span>({1})</span>
                </li>
                <li className="pcTag">
                  <Link to={`/@${username}`}>태그2</Link>
                  <span>({1})</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mbTags">
            <Link to="" className="mbTag">
              전체보기<span>({1})</span>
            </Link>
            <Link to="" className="mbTagActive">
              태그<span>({1})</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="velogContentWrapper">
        <div className="velogContents">
          {/**한개의 데이터*/}
          <div className="content">
            <Link to="">
              <h2>{'제목'}</h2>
            </Link>
            <p>안녕 제목 밑에 추가 정보?</p>
            <div className="tagsWrapper">
              <Link to="" className="velogTag">
                태그1
              </Link>
            </div>
            <div className="subInfo">
              <span>{22}분 전</span>
              <div className="separator">·</div>
              <span>{0}개의 댓글</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserPostsTab;
