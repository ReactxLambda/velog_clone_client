import { useState } from 'react';
import './UserPostsTab.scss';
import { Search } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { gql } from '@apollo/client';
import client from '../../Common/apollo';
import QueryString from 'qs';
const contentsData = [
  { title: '제목1', description: '설명1', tags: ['태그1', '태그2', '태그3'], date: '20211006', comments: 5 },
  { title: '제목2', description: '설명2', tags: ['태그2', '태그3'], date: '20211008', comments: 3 },
  { title: '제목3', description: '설명3', tags: ['태그1'], date: '20211006', comments: 1 },
];
const tagsContent = [
  {
    name: '태그명1',
  },
  {
    name: '태그명2',
  },
  {
    name: '태그명3',
  },
  {
    name: '태그명4',
  },
  {
    name: '태그명5',
  },
  {
    name: '태그명6',
  },
  {
    name: '태그명7',
  },
  {
    name: '태그명8',
  },
  {
    name: '태그명9',
  },
];
const UserPostsTab: React.FC = ({ match, location }: any) => {
  const { username, tab } = match.params;
  let [searchWord, setSearchWord] = useState('');
  let [tagActive, setTagActive] = useState('all');
  let [tags, setTags] = useState(tagsContent);
  let [contents, setContents] = useState(contentsData);
  let [tag, setTag] = useState('');
  console.log(tags);

  const handlerTagClick = (type: string) => {
    setTagActive(type);
    const queryData = QueryString.parse(location.search, { ignoreQueryPrefix: true });
    console.log(queryData);
    console.log(queryData.tag);
    setTag(queryData.tag as string);
    console.log(`tag : ${tag}`);
    /**content 가져오기
     */
    // client
    //   .query({
    //     query: gql`
    //         쿼리 넣을 꺼야
    //   `,
    //   })
    //   .then((response) => {
    //     console.log('response.data.content.length  :', response.data.content.length);
    //     if (response.data.content.length === 0) {
    //     } else if (response.data.content.length != 0) {
    //       setContents(response.data.content);
    //     }
    //   });
  };
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
                <li className={tagActive === 'all' ? 'pcTagActive' : 'pcTag'}>
                  <Link to={`/@${username}`} onClick={() => handlerTagClick('all')}>
                    전체보기
                  </Link>
                  <span>({1})</span>
                </li>
                {tags.length > 0 &&
                  tags.map((tag, index) => {
                    console.log(tag.name);
                    <li className={tagActive === tag.name ? 'pcTagActive' : 'pcTag'}>
                      <Link to={`/@${username}?tag=${tag.name}`} onClick={() => handlerTagClick(tag.name)}>
                        {tag.name}
                      </Link>
                      <span>({1})</span>
                    </li>;
                  })}
              </ul>
            </div>
          </div>
          <div className="mbTags">
            <Link
              to={`/@${username}`}
              onClick={() => setTagActive('all')}
              className={tagActive === 'all' ? 'mbTagActive' : 'mbTag'}
            >
              전체보기<span>({1})</span>
            </Link>
            {tags.map((tag, index) => {
              <Link to={`/@${username}?tag=${tag.name}`} className={tagActive === tag.name ? 'mbTagActive' : 'mbTag'}>
                {tag.name}
                <span>({tag.name}갯수)</span>
              </Link>;
            })}
          </div>
        </div>
      </div>
      <div className="velogContentWrapper">
        <div className="velogContents">
          {/**한개의 데이터*/}
          {contents.length > 0 &&
            contents.map((content, index) => {
              <div className="content">
                <Link to={`/@${username}/${content.title}`}>
                  <h2>{content.title}</h2>
                </Link>
                <p>{content.description}</p>
                {content.tags.map((value) => {
                  // content d안에 tags배열들 가져오기
                  <div className="tagsWrapper">
                    <Link to={`/tags/${value}`} className="velogTag">
                      {value}
                    </Link>
                  </div>;
                })}
                <div className="subInfo">
                  <span>{content.date}</span>
                  <div className="separator">·</div>
                  <span>{content.comments}개의 댓글</span>
                </div>
              </div>;
            })}
        </div>
      </div>
    </div>
  );
};
export default UserPostsTab;
