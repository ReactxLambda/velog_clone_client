import { Button, styled } from '@material-ui/core';
import React, { Fragment } from 'react';
const Input = styled('input')({
  display: 'none',
});
type ThumbnailUploadButtonType = {
  thumbnail: any;
  setThumbnail: (p1: any) => void;
};
export const ThumbnailUploadButton: React.FC<ThumbnailUploadButtonType> = ({ thumbnail, setThumbnail }) => {
  const change = (event: any) => {
    console.log(event.target.files[0]);
  };
  return (
    <Fragment>
      <label htmlFor="contained-button-file">
        <Input id="contained-button-file" type="file" onChange={setThumbnail} />
        <Button className={'Thumbnail_upload_container_button'} component="span">
          썸네일 업로드
        </Button>
      </label>
    </Fragment>
  );
};
