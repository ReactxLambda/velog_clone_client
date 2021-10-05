import React, { useState, useEffect, useCallback, Fragment } from 'react';
import PostCard from '../../Component/post/PostCard';
import { Box, Container } from '@material-ui/core';
import { useInView } from 'react-intersection-observer';
import Wrapper from '../../Component/post/Wrapper';

import { gql } from '@apollo/client';
import client from '../../Common/apollo';
import { useQuery, NetworkStatus } from '@apollo/react-hooks';
import { RouteComponentProps } from 'react-router-dom';
//https://slog.website/post/8
type TrendingPostsPage = {} & RouteComponentProps<{
  type: 'day' | 'week' | 'month' | 'year';
}>;
const TrendingPostsPage: React.FC<TrendingPostsPage> = ({ match }) => {
  let { type } = match.params;
  if (type == undefined) type = 'week';

  console.log(type);
  // const [items, setItems] = useState([]);
  // const [page, setPage] = useState(1);
  // const [loading, setLoading] = useState(false);

  //게시물 리스트
  let [posts, setPosts] = useState([]);
  const [ref, inView] = useInView({
    threshold: 0.5, // 해당 부분이 50%이상 보일 때 0~1사이
  });

  // let [count, setCount] = useState(12);
  // let count = 12;
  const [count, setCount]: [number, (number: number) => void] = useState(8);

  const GET_POST = gql`
    query {
      posts_trend(
        take:8,
        interval : "${type}"
      ) {
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

  // const GET_POST = gql`
  // query($take : int!){
  //   posts (
  //     take:$take
  //   ){
  //     id
  //     thumbnail
  //     title
  //     url
  //     user_id
  //     content
  //     created_at
  //     interest {
  //       created_at
  //       user {
  //         id
  //       }
  //     }
  //   }
  // }
  // `;

  //https://www.apollographql.com/docs/react/pagination/core-api/#the-fetchmore-function
  //fetchMore? reFecth?

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
      setPosts(posts.concat(data.posts_trend));
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
      client
        .query({
          query: gql`
            query {
              posts_trend (
                take : 4,
                skip:${count},
                interval : "${type}"
              ){
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
      `,
        })
        .then((response) => {
          console.log('count :', count);
          console.log('response.data.posts_trend.length  :', response.data.posts_trend.length);
          if (response.data.posts_trend.length === 0) {
          } else if (response.data.posts_trend.length != 0) {
            setPosts(posts.concat(response.data.posts_trend));
          }
        });

      // setPosts(posts.concat(data));
      console.log('함수 밖loading : ', loading);
      console.log('NetworkStatus : ', NetworkStatus.fetchMore);
      console.log('NetworkStatus : ', NetworkStatus.ready);
      console.log(data);
    }
  }, [inView]);

  // useEffect(() => {
  //   console.log('loading : ', loading);
  //   console.log('data : ', data);
  //   if (!loading && data.posts_trend.length > 0) {
  //     console.log('posts에 state 값 set ');
  //     // setPosts(posts.concat(data.posts_trend));
  //   }
  // }, [data]);

  return (
    <Box display="flex" flexWrap="wrap" mx={20} mt={3}>
      {
        /*테스트
      Element {inView.toString()}*/
        // console.log(data);
        console.log(posts)
      }

      {!loading &&
        posts.length > 0 &&
        posts.map((value, idx) => {
          // console.log('posts.length  : ', posts.length);
          // console.log('posts.length  : ', posts.length);
          // console.log('idx  : ', idx);

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
      {loading && posts.length == 0 && <h1>Loading 중입니다.</h1>}
      {!loading && posts.length == 0 && <h1>데이터가 존재하지 않습니다.</h1>}
    </Box>
  );
};
export default TrendingPostsPage;
