import React from 'react';
import { insertUser } from '../../Query/UserQuery';
import './Style/BottomButtonBar.scss';
type BottomButtonBarType = {
  userName_c: string;
  userId_c: string;
  userIntroduce_c: string;
  userEmail: string;
  userImage: string;
};
export const BottomButtonBar: React.FC<BottomButtonBarType> = ({
  userImage,
  userName_c,
  userId_c,
  userIntroduce_c,
  userEmail,
}) => {
  const onClick = () => {
    insertUser(userId_c, userEmail, userImage, userIntroduce_c, '');
  };
  return (
    <div className="BottomButtonBar">
      <div className="BottomButtonBar_Buttons">
        <button className="BottomButtonBar_Buttons_cancel">취소</button>
        <button className="BottomButtonBar_Buttons_next" onClick={onClick}>
          다음
        </button>
      </div>
    </div>
  );
};
