import { Button } from '@material-ui/core';
import React from 'react';
import './Style/PostConfiguration.scss';
type PostConfigurationType = {
  setIsShowSavingComponent: (p1: boolean) => void;
};
const PostConfiguration: React.FC<PostConfigurationType> = ({ setIsShowSavingComponent }) => {
  return (
    <div className={'PostConfiguration'}>
      <div>포스트 설정 컴포넌트</div>
      <Button onClick={() => setIsShowSavingComponent(false)}>취소</Button>
    </div>
  );
};
export default PostConfiguration;
