import React, { useState, useEffect, useCallback, Fragment } from 'react';
import PostCard from '../../Component/post/PostCard';
import { Box, Container } from '@material-ui/core';
import { useInView } from 'react-intersection-observer';
import Wrapper from '../../Component/post/Wrapper';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/react-hooks';
//https://slog.website/post/8

const datas = () => {
  //받아서 넘길꺼니가아?
  let array = [
    {
      id: ' 1',
      title: 'title1',
      content:
        'content1content1content1content1content1content1content1content1content1content1content1content1content1content1content1content1content1',
      date: 'date1',
      CntCmmt: 1,
      fileURL: 'fileURL1',
    },
    {
      id: '2',
      title: 'title2',
      content: 'content2',
      date: 'date2',
      CntCmmt: 2,
      fileURL: 'fileUR2',
    },
    {
      id: '3',
      title: 'title3',
      content: 'content3',
      date: 'date3',
      CntCmmt: 3,
      fileURL: 'fileUR3',
    },
    {
      id: '4',
      title: 'title4',
      content: 'content4',
      date: 'date4',
      CntCmmt: 4,
      fileURL: 'fileUR4',
    },
    {
      id: '5',
      title: 'title5',
      content: 'content5',
      date: 'date5',
      CntCmmt: 5,
      fileURL: 'fileUR5',
    },
    {
      id: '6',
      title: 'title6',
      content: 'content6',
      date: 'date6',
      CntCmmt: 6,
      fileURL: 'fileUR6',
    },
    {
      id: '7',
      title: 'title7',
      content: 'content7',
      date: 'date7',
      CntCmmt: 71,
      fileURL: 'fileUR71',
    },
    {
      id: ' 8',
      title: 'title8',
      content: 'content8',
      date: 'date8',
      CntCmmt: 81,
      fileURL: 'fileUR81',
    },

    {
      id: '9',
      title: 'title9',
      content: 'content9',
      date: 'date9',
      CntCmmt: 91,
      fileURL: 'fileUR91',
    },
    {
      id: '10',
      title: 'title10',
      content: 'content10',
      date: 'date10',
      CntCmmt: 10,
      fileURL: 'fileURL10',
    },
    {
      id: '11',
      title: 'title11',
      content: 'content11',
      date: 'date11',
      CntCmmt: 111,
      fileURL: 'fileUR111',
    },
    {
      id: '12',
      title: 'title12',
      content: 'content12',
      date: 'date12',
      CntCmmt: 121,
      fileURL: 'fileUR121',
    },

    {
      id: '13',
      title: 'title13',
      content: 'content13',
      date: 'date13',
      CntCmmt: 131,
      fileURL: 'fileUR131',
    },
    {
      id: '14',
      title: 'title14',
      content: 'content14',
      date: 'date14',
      CntCmmt: 141,
      fileURL: 'fileUR141',
    },
    {
      id: '15',
      title: 'title15',
      content: 'content15',
      date: 'date15',
      CntCmmt: 151,
      fileURL: 'fileUR151',
    },
    {
      id: '16',
      title: 'title16',
      content: 'content16',
      date: 'date16',
      CntCmmt: 161,
      fileURL: 'fileUR161',
    },
  ];

  return array;
};

const TrendingPostsPage: React.FC = () => {
  // const [items, setItems] = useState([]);
  // const [page, setPage] = useState(1);
  // const [loading, setLoading] = useState(false);
  //게시물 리스트
  let [posts, setPosts] = useState(datas);
  const [ref, inView] = useInView();

  const GET_POST = gql`
    {
      posts {
        id
        thumbnail
        title
        url
        user_id
        content
        created_at
        interest {
          created_at
          user {
            id
          }
        }
      }
    }
  `;
  //https://www.apollographql.com/docs/react/pagination/core-api/#the-fetchmore-function
  //fetchMore? reFecth?
  const { loading, error, data, fetchMore } = useQuery(GET_POST, {
    variables: { take: 3 },
  });
  // 서버에서 아이템을 가지고 오는 함수
  // const getItems = useCallback(async () => {
  //   // await axios.get(`${Your Server Url}/page=${page}`).then((res) => {
  //   //   setItems(prevState => [...prevState, res])
  //   // })
  //   const { loading, error, data } = useQuery(GET_POST);
  //   if (loading) {
  //     setLoading(true);
  //   }
  //   if (data && data.posts) {
  //     setLoading(false);
  //     console.log('데이터는 : ', data.posts);
  //     console.log('타입은? ', typeof data.posts);
  //   }
  // }, [page]);

  // const getItems = () => {
  //   // await axios.get(`${Your Server Url}/page=${page}`).then((res) => {
  //   //   setItems(prevState => [...prevState, res])
  //   // })

  //   if (loading) {
  //     setLoading(true);
  //   }
  //   if (data && data.posts) {
  //     setLoading(false);
  //     console.log('데이터는 : ', data.posts);
  //     console.log('타입은? ', typeof data.posts);
  //   }
  // };

  // `getItems` 가 바뀔 때 마다 함수 실행
  // useEffect(() => {
  //   getItems();
  // }, [getItems]);

  // useEffect(() => {
  //   // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
  //   console.log('befor inView : ', inView);
  //   console.log('befor loading : ', loading);
  //   if (inView && !loading) {
  //     setPage((prevState) => prevState + 1);
  //   }
  //   console.log('after inView : ', inView);
  //   console.log('after loading : ', loading);
  // }, [inView, loading]);

  //첫 렌더링 시
  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    console.log('첫 렌더링 시에만 반응');
    console.log('inView', inView);
  }, []);

  const fetchPosts = async () => {
    await fetchMore({ variables: { offset: 1 } });
  };

  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    console.log(inView);
    if (inView) {
      console.log('refetch 구역 ');
      console.log('fetchMore async', fetchPosts());
      console.log('fetchMore', fetchMore({ variables: {} }));
    }
  }, [inView]);

  useEffect(() => {
    console.log('loading : ', loading);
    console.log('data : ', data);
    if (!loading && data.posts.length > 0) {
      console.log('posts에 state 값 set ');
      setPosts(posts.concat(data.posts));
    }
  }, data);

  return (
    <Box display="flex" flexWrap="wrap" mx={20} mt={3}>
      {/*테스트
      Element {inView.toString()}*/}

      {!loading &&
        data.posts.length > 0 &&
        posts.map((value, idx) => {
          console.log('posts.length  : ', posts.length);
          console.log('data.posts.length  : ', data.posts.length);
          console.log('idx  : ', idx);

          return (
            <Fragment>
              {posts.length - 1 == idx ? (
                <Wrapper ref={ref}>
                  <PostCard post={value}></PostCard>
                </Wrapper>
              ) : (
                <PostCard post={value}></PostCard>
              )}
            </Fragment>
          );
        })}
      {loading && <h1>Loading 중입니다.</h1>}
    </Box>
  );
};
export default TrendingPostsPage;
