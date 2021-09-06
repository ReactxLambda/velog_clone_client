import React, { useState } from 'react';
import PostCard from '../../Component/post/PostCard';
import { Box, Container } from '@material-ui/core';
import { RouteComponentProps } from 'react-router-dom';
const reading = {
  width: '1376px',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const data = () => {
  //받아서 넘길꺼니가아?
  let array = [
    {
      key: 1,
      title: 'title1',
      content: 'content1',
      date: 'date1',
      CntCmmt: 1,
      fileURL: 'fileURL1',
    },
    {
      key: 2,
      title: 'title2',
      content: 'content2',
      date: 'date2',
      CntCmmt: 2,
      fileURL: 'fileUR2',
    },
    {
      key: 3,
      title: 'title3',
      content: 'content3',
      date: 'date3',
      CntCmmt: 3,
      fileURL: 'fileUR3',
    },
    {
      key: 4,
      title: 'title4',
      content: 'content4',
      date: 'date4',
      CntCmmt: 4,
      fileURL: 'fileUR4',
    },
    {
      key: 5,
      title: 'title5',
      content: 'content5',
      date: 'date5',
      CntCmmt: 5,
      fileURL: 'fileUR5',
    },
    {
      key: 6,
      title: 'title6',
      content: 'content6',
      date: 'date6',
      CntCmmt: 6,
      fileURL: 'fileUR6',
    },
    {
      key: 7,
      title: 'title7',
      content: 'content7',
      date: 'date7',
      CntCmmt: 71,
      fileURL: 'fileUR71',
    },
    {
      key: 8,
      title: 'title8',
      content: 'content8',
      date: 'date8',
      CntCmmt: 81,
      fileURL: 'fileUR81',
    },

    {
      key: 9,
      title: 'title9',
      content: 'content9',
      date: 'date9',
      CntCmmt: 91,
      fileURL: 'fileUR91',
    },
    {
      key: 10,
      title: 'title10',
      content: 'content10',
      date: 'date10',
      CntCmmt: 10,
      fileURL: 'fileURL10',
    },
    {
      key: 11,
      title: 'title11',
      content: 'content11',
      date: 'date11',
      CntCmmt: 111,
      fileURL: 'fileUR111',
    },
    {
      key: 12,
      title: 'title12',
      content: 'content12',
      date: 'date12',
      CntCmmt: 121,
      fileURL: 'fileUR121',
    },

    {
      key: 13,
      title: 'title13',
      content: 'content13',
      date: 'date13',
      CntCmmt: 131,
      fileURL: 'fileUR131',
    },
    {
      key: 14,
      title: 'title14',
      content: 'content14',
      date: 'date14',
      CntCmmt: 141,
      fileURL: 'fileUR141',
    },
    {
      key: 15,
      title: 'title15',
      content: 'content15',
      date: 'date15',
      CntCmmt: 151,
      fileURL: 'fileUR151',
    },
    {
      key: 16,
      title: 'title16',
      content: 'content16',
      date: 'date16',
      CntCmmt: 161,
      fileURL: 'fileUR161',
    },
  ];

  return array;
};
type ReadingListPageProps = {} & RouteComponentProps<{
  type: 'liked' | 'read';
}>;
const ReadingListPage: React.FC<ReadingListPageProps> = ({ match }) => {
  const { type } = match.params;
  console.log(type);

  let [dataArray, setDataArray] = useState(data);
  return (
    <div style={reading}>
      <h3>읽기목록</h3>
      <div
        style={{
          display: 'flex',
          marginTop: '2rem',
        }}
      >
        <Box display="flex" flexWrap="wrap">
          {dataArray.map((value) => {
            return (
              <Box m={1}>
                <PostCard post={value}></PostCard>
              </Box>
            );
          })}
        </Box>
      </div>
    </div>
  );
};
export default ReadingListPage;
