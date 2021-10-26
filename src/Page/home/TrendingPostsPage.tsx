import React, { useState, useEffect, useCallback, Fragment } from 'react';
import PostCard from '../../Component/post/PostCard';
import { Box, Container } from '@material-ui/core';
import { useInView } from 'react-intersection-observer';
import Wrapper from '../../Component/post/Wrapper';

import { gql } from '@apollo/client';
import client from '../../Common/apollo';
import { useQuery, NetworkStatus } from '@apollo/react-hooks';
import { RouteComponentProps } from 'react-router-dom';
import './PostsPage.scss';

//https://slog.website/post/8
type TrendingPostsPage = { term: string };
const TrendingPostsPage: React.FC<TrendingPostsPage> = ({ term }) => {
  //게시물 리스트
  let [posts, setPosts] = useState([]);
  const [ref, inView] = useInView({
    threshold: 0.5, // 해당 부분이 50%이상 보일 때 0~1사이
  });

  const [count, setCount]: [number, (number: number) => void] = useState(8);
  console.log(`trending term : ${term}`);
  const GET_POST = gql`
    query {
      posts_trend(
        take:8,
        interval : "${term}"
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
                interval : "${term}"
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

      console.log('함수 밖loading : ', loading);
      console.log('NetworkStatus : ', NetworkStatus.fetchMore);
      console.log('NetworkStatus : ', NetworkStatus.ready);
      console.log(data);
    }
  }, [inView]);

  const onSignIn = (googleUser: any) => {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  };

  return (
    <div className="posts_wrapper">
      {!loading &&
        posts.length > 0 &&
        posts.map((value, idx) => {
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
    </div>
  );
};
export default TrendingPostsPage;
