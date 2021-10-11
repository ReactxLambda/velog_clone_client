import React, { Fragment } from 'react';
type ButtonContainerType = {
  setIsShowSavingComponent: (p1: boolean) => void;
  exportContents: () => void;
};
const ButtonContainer: React.FC<ButtonContainerType> = ({ setIsShowSavingComponent, exportContents }) => {
  return (
    <Fragment>
      <button className={'PostConfiguration_button_container_cancle'} onClick={() => setIsShowSavingComponent(false)}>
        취소
      </button>
      <button className={'PostConfiguration_button_container_submit'} onClick={() => exportContents()}>
        출간하기
      </button>
    </Fragment>
  );
};
export default ButtonContainer;
