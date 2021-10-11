import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import PostConfiguration from './PostConfiguration';
import SeperatorSave from './SeperatorSave';
import './Style/SavingComponent.scss';
import Thumbnail from './Thumbnail';
type SavingComponentType = {
  isShowSavingComponent: boolean;
  setIsShowSavingComponent: (p1: boolean) => void;
  exportContents: () => void;
  isPubilc: boolean;
  setIsPublic: (p1: boolean) => void;
  introduce: string;
  setIntroduce: (p1: string) => void;
  URL: string;
  setURL: (p1: string) => void;
  userName: string;
  thumbnail: any;
  setThumbnail: (p1: any) => void;
};
const SavingComponent: React.FC<SavingComponentType> = ({
  isShowSavingComponent,
  setIsShowSavingComponent,
  exportContents,
  isPubilc,
  setIsPublic,
  introduce,
  setIntroduce,
  URL,
  setURL,
  userName,
  thumbnail,
  setThumbnail,
}) => {
  return (
    <div className={'saving_component'} style={{ display: isShowSavingComponent ? 'flex' : 'none' }}>
      <div className={'saving'}>
        <Thumbnail
          introduce={introduce}
          setIntroduce={setIntroduce}
          thumbnail={thumbnail}
          setThumbnail={setThumbnail}
        />
        <SeperatorSave />
        <PostConfiguration
          setIsShowSavingComponent={setIsShowSavingComponent}
          exportContents={exportContents}
          isPubilc={isPubilc}
          setIsPublic={setIsPublic}
          URL={URL}
          setURL={setURL}
          userName={userName}
        />
      </div>
    </div>
  );
};
export default SavingComponent;
