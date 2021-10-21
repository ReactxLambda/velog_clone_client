import React from 'react';
import './Style/BottomButtonBar.scss';
type BottomButtonBarType = {
  userName_c: string;
  userId_c: string;
  userIntroduce_c: string;
};
export const BottomButtonBar: React.FC<BottomButtonBarType> = ({ userName_c, userId_c, userIntroduce_c }) => {
  return (
    <div className="BottomButtonBar">
      <div className="BottomButtonBar_Buttons">
        <button className="BottomButtonBar_Buttons_cancel">취소</button>
        <button className="BottomButtonBar_Buttons_next">다음</button>
      </div>
    </div>
  );
};
