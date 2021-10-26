import { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../../Component/post/Wrapper';
import { Header } from '../Global/Header/Header';
import { useInView } from 'react-intersection-observer';
import { gql } from '@apollo/client';
import client from '../../Common/apollo';
import { useQuery, NetworkStatus } from '@apollo/react-hooks';
import './TagsListPage.scss';

const tagsContent = [
  {
    name: '태그명1',
    content: '내용1',
    count: 1,
  },
  {
    name: '태그명2',
    content: '내용2',
    count: 2,
  },
  {
    name: '태그명3',
    content: '내용1',
    count: 1,
  },
  {
    name: '태그명4',
    content: '내용1',
    count: 1,
  },
  {
    name: '태그명5',
    content: '내용1',
    count: 1,
  },
  {
    name: '태그명6',
    content: '내용1',
    count: 1,
  },
  {
    name: '태그명7',
    content: '내용1',
    count: 1,
  },
  {
    name: '태그명8',
    content: '내용1',
    count: 1,
  },
  {
    name: '태그명9',
    content: '내용1',
    count: 1,
  },
];
const TagsListPage: React.FC = () => {
  const [tagActive, setTagActive] = useState('trending');
  const [tags, setTags] = useState(tagsContent);
  const [ref, inView] = useInView({
    threshold: 0.5, // 해당 부분이 50%이상 보일 때 0~1사이
  });
  const handleClickTab = (type: string) => {
    setTagActive(type);
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
      <Header></Header>
      <div style={{ marginTop: '3rem' }}>
        <div className="tagsHeaderWrapper">
          <div className="tagsHeader">
            <Link
              className={tagActive === 'trending' ? 'tagActive' : ''}
              to="/tags?sort=trending"
              onClick={() => handleClickTab('trending')}
            >
              인기순
            </Link>
            <Link
              className={tagActive === 'alphabetical' ? 'tagActive' : ''}
              to="/tags?sort=alphabetical"
              onClick={() => handleClickTab('alphabetical')}
            >
              이름순
            </Link>
            <div
              className="tagTabUnderline"
              style={tagActive === 'trending' ? { transform: 'translateX(0rem)' } : { transform: 'translateX(8rem)' }}
            ></div>
          </div>
        </div>
        <section className="tagsContents">
          {!loading &&
            tags.length > 0 &&
            tags.map((tag: any, index) => {
              return (
                <Fragment>
                  {tags.length - 1 == index ? (
                    <div className="tagContent" ref={ref}>
                      <div>
                        <Link className="tagTitle" to={`/tags/${tag.name}`}>
                          {tag.name}
                        </Link>
                        <p>{tag.content}</p>
                      </div>
                      <div className="tagCount">총 {tag.count}개의 포스트</div>
                    </div>
                  ) : (
                    <div className="tagContent">
                      <div>
                        <Link className="tagTitle" to={`/tags/${tag.name}`}>
                          {tag.name}
                        </Link>
                        <p>{tag.content}</p>
                      </div>
                      <div className="tagCount">총 {tag.count}개의 포스트</div>
                    </div>
                  )}
                </Fragment>
              );
            })}
          {loading && tags.length == 0 && <h1>Loading 중입니다.</h1>}
          {!loading && tags.length == 0 && <h1>데이터가 존재하지 않습니다.</h1>}
        </section>
      </div>
    </div>
  );
};

export default TagsListPage;
