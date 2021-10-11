import { Button } from '@material-ui/core';
import { AddBox } from '@material-ui/icons';
import React, { useState } from 'react';
import ButtonContainer from './ButtonContainer';
import PublicConfiguration from './PublicConfiguration';
import SeriesConfiguration from './SeriesConfiguration';
import './Style/PostConfiguration.scss';
import URLConfiguration from './URLConfiguration';
type PostConfigurationType = {
  setIsShowSavingComponent: (p1: boolean) => void;
  exportContents: () => void;
  isPubilc: boolean;
  setIsPublic: (p1: boolean) => void;
  URL: string;
  setURL: (p1: string) => void;
  userName: string;
};
const PostConfiguration: React.FC<PostConfigurationType> = ({
  setIsShowSavingComponent,
  exportContents,
  isPubilc,
  setIsPublic,
  URL,
  setURL,
  userName,
}) => {
  return (
    <div className={'PostConfiguration_wraper'}>
      <div>
        <PublicConfiguration isPubilc={isPubilc} setIsPublic={setIsPublic} />
        <URLConfiguration userName={userName} URL={URL} setURL={setURL} />
        <SeriesConfiguration />
      </div>
      <div className={'PostConfiguration_button_container'}>
        <ButtonContainer setIsShowSavingComponent={setIsShowSavingComponent} exportContents={exportContents} />
      </div>
    </div>
  );
};
export default PostConfiguration;
