import { AddBox } from '@material-ui/icons';
import React, { Fragment } from 'react';
type SeriesConfigurationType = {
  isPubilc: boolean;
  setIsPublic: (p1: boolean) => void;
};
const SeriesConfiguration: React.FC = () => {
  return (
    <Fragment>
      <h3>시리즈 설정</h3>
      <button className={'PostConfiguration_series_button'}>
        <AddBox style={{ marginRight: '5px' }} />
        시리즈에 추가하기
      </button>
    </Fragment>
  );
};
export default SeriesConfiguration;
