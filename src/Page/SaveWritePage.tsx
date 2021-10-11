import { Box, Button, TextField } from '@material-ui/core';
import React, { useState, useEffect, useCallback, Fragment } from 'react';

const SaveWritePage: React.FC = () => {
  return (
    <Fragment>
      post 저장하기
      <Box m={10} style={{ width: '768px', display: 'flex' }}>
        <Box>
          <h3>포스트 미리보기</h3>
          <Box>
            {/**content */}
            <Box>
              {/**이미지 */}
              <img src="/images/image.png" />
              <Button variant="contained">썸네일 업로드</Button>
            </Box>
            <Box>
              {/**textarea */}
              <TextField
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                defaultValue="Default Value"
                variant="outlined"
              />
            </Box>
          </Box>
        </Box>
        <Box>
          <Box>
            <h3>공개 설정</h3>
            <Button variant="contained">전체 공개</Button>
            <Button variant="contained">비공개</Button>
          </Box>
          <Box>
            <h3>URL 설정</h3>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          </Box>
          <Box>
            <h3>시리즈 설정</h3>
            <Button variant="contained">시리즈에 추가하기</Button>
          </Box>
          <Button variant="contained">취소</Button>
          <Button variant="contained">출간하기</Button>
        </Box>
      </Box>
    </Fragment>
  );
};

export default SaveWritePage;
