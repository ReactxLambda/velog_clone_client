import React, { Fragment } from 'react';
import IconButtonMui from '@material-ui/core/IconButton';
import Image from '@material-ui/icons/Image';
import { styled } from '@material-ui/core/styles';
const Input = styled('input')({
  display: 'none',
});
const UploadImageButton: React.FC = () => {
  const change = (event: any) => {
    console.log(event.target.files[0]);
  };
  return (
    <Fragment>
      <Input id="icon-button-file" type="file" onChange={change} />
      <label htmlFor="icon-button-file">
        <IconButtonMui aria-label="upload picture" component="span">
          <Image />
        </IconButtonMui>
      </label>
    </Fragment>
  );
};

export default UploadImageButton;
