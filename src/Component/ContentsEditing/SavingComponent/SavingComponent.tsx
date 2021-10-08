import { Button } from '@material-ui/core';
import React from 'react';
import PostConfiguration from './PostConfiguration';
import SeperatorSave from './SeperatorSave';
import './Style/SavingComponent.scss';
import Thumbnail from './Thumbnail';
type SavingComponentType = {
  isShowSavingComponent: boolean;
  setIsShowSavingComponent: (p1: boolean) => void;
};
const SavingComponent: React.FC<SavingComponentType> = ({ isShowSavingComponent, setIsShowSavingComponent }) => {
  return (
    <div className={'saving_component'} style={{ display: isShowSavingComponent ? 'flex' : 'none' }}>
      <div className={'saving'}>
        <Thumbnail />
        <SeperatorSave />
        <PostConfiguration setIsShowSavingComponent={setIsShowSavingComponent} />
      </div>
    </div>
  );
};
export default SavingComponent;
