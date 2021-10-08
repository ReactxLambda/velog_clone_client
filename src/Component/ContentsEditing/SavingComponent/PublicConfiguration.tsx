import React, { Fragment } from 'react';
type PublicConfigurationType = {
  isPubilc: boolean;
  setIsPublic: (p1: boolean) => void;
};
const PublicConfiguration: React.FC<PublicConfigurationType> = ({ isPubilc, setIsPublic }) => {
  return (
    <Fragment>
      <div>
        <h3>공개 설정</h3>
      </div>
      <div className={'PostConfiguration_button_container'}>
        <button
          className={isPubilc ? 'PostConfiguration_selected_button' : 'PostConfiguration_unselected_button'}
          onClick={() => setIsPublic(true)}
        >
          전체 공개
        </button>
        <button
          className={isPubilc ? 'PostConfiguration_unselected_button' : 'PostConfiguration_selected_button'}
          style={{ marginLeft: '10px' }}
          onClick={() => setIsPublic(false)}
        >
          비공개
        </button>
      </div>
    </Fragment>
  );
};
export default PublicConfiguration;
