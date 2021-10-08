import { Button } from '@material-ui/core';
import { ImageSearch } from '@material-ui/icons';
import Image from '@material-ui/icons/Image';
import React from 'react';
import UploadImageButton from '../UploadImageButton';
import './Style/Thumbnail.scss';
import { ThumbnailUploadButton } from './ThumbnailUploadButton';
type ThumnailType = {
  introduce: string;
  setIntroduce: (p1: string) => void;
  thumbnail: any;
  setThumbnail: (p1: any) => void;
};
const Thumbnail: React.FC<ThumnailType> = ({ introduce, setIntroduce, thumbnail, setThumbnail }) => {
  return (
    <div className={'Thumbnail'}>
      <div>
        <h3>포스트 미리보기</h3>
      </div>
      <div className={'Thumbnail_upload_container'}>
        <ImageSearch className={'Thumbnail_upload_container_icon'} />
        <ThumbnailUploadButton thumbnail={thumbnail} setThumbnail={setThumbnail} />
      </div>
      <textarea
        className={'Thumbnail_introducing'}
        placeholder={'당신의 포스트를 짧게 소개해보세요.'}
        value={introduce}
        onChange={(event) => setIntroduce(event.target.value)}
      ></textarea>
    </div>
  );
};
export default Thumbnail;
