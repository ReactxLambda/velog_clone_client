import { useState, useEffect, Fragment } from 'react';
import './UserPostsTab.scss';
import { Search } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { gql } from '@apollo/client';
import client from '../../Common/apollo';
import QueryString from 'qs';
import { useQuery, NetworkStatus } from '@apollo/react-hooks';
import { useInView } from 'react-intersection-observer';
const contentsData: any = [
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
  const [ref, inView] = useInView({
    threshold: 0.5, // 해당 부분이 50%이상 보일 때 0~1사이
  });

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

  const [count, setCount]: [number, (number: number) => void] = useState(8);
  const GET_POST = gql`
    query {
      posts_trend(take: 8) {
        id
        thumbnail
        title
        url
        user_id
        content
        created_at
        like_count
        comment_count
        user {
          id
        }
      }
    }
  `;

  //refetch시 loading 동작 x -> networkStatus / notifyOnNetworkStatusChange: true 사용
  const { loading, error, data, fetchMore, networkStatus } = useQuery(GET_POST, {
    // https://github.com/apollographql/apollo-client/issues/1617
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    console.log('loading useEffect 함수 안입니다. =================');
    console.log('inView', inView);

    console.log('data', data);
    console.log('loading', loading);
    console.log('loading networkStatus : ', networkStatus);

    if (!loading && data !== undefined) {
      setTags(tags.concat(data.posts_trend));
    }
    // else if (!loading && data === undefined) {
    //   setPosts([]);
    // }
  }, [loading]);

  // const fetchPosts = async () => {
  //   await fetchMore({ variables: { offset: 1 } });
  // };

  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    console.log(`inView: ${inView}`);
    console.log(loading);
    if (inView) {
      setCount(count + 4);
      console.log('inview , loading useEffect 함수 안입니다. =================');
      console.log('refetch 구역 ');
      console.log('networkStatus : ', networkStatus);
      console.log('count: ', count);
      // client
      //   .query({
      //     query: gql`
      //       query {
      //         posts_trend (
      //           take : 4,
      //           skip:${count}

      //         ){
      //           id
      //           thumbnail
      //           title
      //           url
      //           user_id
      //           content
      //           created_at
      //           like_count
      //           comment_count
      //           user {
      //             id
      //           }
      //         }
      //       }
      // `,
      //   })
      //   .then((response) => {
      //     console.log('count :', count);
      //     console.log('response.data.tags.length  :', response.data.tags.length);
      //     if (response.data.tags.length === 0) {
      //     } else if (response.data.tags.length != 0) {
      //       setTags(tags.concat(response.data.tags));
      //     }
      //   });

      // setPosts(posts.concat(data));
      console.log('함수 밖loading : ', loading);
      console.log('NetworkStatus : ', NetworkStatus.fetchMore);
      console.log('NetworkStatus : ', NetworkStatus.ready);
      console.log(data);
    }
  }, [inView]);

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
                    return (
                      <li className={tagActive === tag.name ? 'pcTagActive' : 'pcTag'}>
                        <Link to={`/@${username}?tag=${tag.name}`} onClick={() => handlerTagClick(tag.name)}>
                          {tag.name}
                        </Link>
                        <span>({1})</span>
                      </li>
                    );
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
              return (
                <Link
                  to={`/@${username}?tag=${tag.name}`}
                  className={tagActive === tag.name ? 'mbTagActive' : 'mbTag'}
                  onClick={() => handlerTagClick(tag.name)}
                >
                  {tag.name}
                  <span>({tag.name}갯수)</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="velogContentWrapper">
        {contents.length > 0 ? (
          <div className="velogContents">
            {/**한개의 데이터*/}
            {!loading &&
              contents.map((content: any, index: any) => {
                return (
                  <Fragment>
                    {tags.length - 1 == index ? (
                      <div className="content" ref={ref}>
                        <Link to={`/@${username}/${content.title}`}>
                          <h2>{content.title}</h2>
                        </Link>
                        <p>{content.description}</p>
                        <div className="tagsWrapper">
                          {content.tags.map((value: any) => {
                            // content d안에 tags배열들 가져오기
                            return (
                              <Link to={`/tags/${value}`} className="velogTag">
                                {value}
                              </Link>
                            );
                          })}
                        </div>
                        <div className="subInfo">
                          <span>{content.date}</span>
                          <div className="subInfoSeparator">·</div>
                          <span>{content.comments}개의 댓글</span>
                        </div>
                      </div>
                    ) : (
                      <div className="content">
                        <Link to={`/@${username}/${content.title}`}>
                          <h2>{content.title}</h2>
                        </Link>
                        <p>{content.description}</p>
                        <div className="tagsWrapper">
                          {content.tags.map((value: any) => {
                            // content d안에 tags배열들 가져오기
                            return (
                              <Link to={`/tags/${value}`} className="velogTag">
                                {value}
                              </Link>
                            );
                          })}
                        </div>
                        <div className="subInfo">
                          <span>{content.date}</span>
                          <div className="subInfoSeparator">·</div>
                          <span>{content.comments}개의 댓글</span>
                        </div>
                      </div>
                    )}
                  </Fragment>
                );
              })}
          </div>
        ) : (
          <div className="nonePosts">
            <img src="https://static.velog.io/static/media/undraw_blank_canvas_3rbb.35e81baf.svg" />
            <div className="noneMessage">포스트가 없습니다.</div>
          </div>
        )}
      </div>
    </div>
  );
};
export default UserPostsTab;
