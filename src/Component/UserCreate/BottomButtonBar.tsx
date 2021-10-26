import React from 'react';
import { useHistory } from 'react-router';
import { setUserStorage } from '../../Common/UserLocalStorage';
import { UserType } from '../../Page/Global/GlobalType/GlobalType';
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
  const onClick = async () => {
    const result: UserType = await insertUser(userId_c, userEmail, userName_c, userImage, userIntroduce_c, '');
    setUserStorage(result);
    if (result) history.goBack();
  };
  const history = useHistory();
  const onBackClick = () => {
    history.goBack();
  };
  return (
    <div className="BottomButtonBar">
      <div className="BottomButtonBar_Buttons">
        <button className="BottomButtonBar_Buttons_cancel" onClick={onBackClick}>
          취소
        </button>
        <button className="BottomButtonBar_Buttons_next" onClick={onClick}>
          다음
        </button>
      </div>
    </div>
  );
};
