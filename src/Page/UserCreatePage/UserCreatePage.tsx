import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import BottomBar from '../../Component/ContentsEditing/BottomBar';
import { BottomButtonBar } from '../../Component/UserCreate/BottomButtonBar';
import { UserCreateInput } from '../../Component/UserCreate/UserCreateInput';
import { insertUser } from '../../Query/UserQuery';
import './Style/UserCreatePage.scss';
type UserCreatePageType = {};
const UserCreatePage: React.FC<UserCreatePageType> = ({}) => {
  const location = useLocation();
  const history = useHistory();
  const locationData: any = location.state;
  const userName: string = locationData.userName;
  const userEmail: string = locationData.userEmail;
  const userImage: string = locationData.userImage;
  const [userName_c, setUserName_c] = useState('');
  const [userId_c, setUserId_c] = useState(userName);
  const [userIntroduce_c, setUserIntroduce_c] = useState('');

  return (
    <div className="UserCreatePage_wrapper">
      <h1 className="UserCreatePage_Hello">환영합니다!</h1>
      <div className="UserCreatePage_Hello_description">기본 회원 정보를 등록해주세요.</div>
      <div className="UserCreatePage_contents">
        <UserCreateInput label={'이름'} input={userName_c} setInput={setUserName_c} placeholder={'이름을 입력하세요'} />
        <UserCreateInput label={'아이디'} input={userId_c} setInput={setUserId_c} placeholder={'아이디를 입력하세요'} />
        <UserCreateInput
          label={'한줄 소개'}
          input={userIntroduce_c}
          setInput={setUserIntroduce_c}
          placeholder={'당신을 한 줄로 소개해보세요'}
        />
      </div>
      <BottomButtonBar
        userImage={userImage}
        userEmail={userEmail}
        userName_c={userName_c}
        userId_c={userId_c}
        userIntroduce_c={userIntroduce_c}
      ></BottomButtonBar>
    </div>
  );
};

export default UserCreatePage;
