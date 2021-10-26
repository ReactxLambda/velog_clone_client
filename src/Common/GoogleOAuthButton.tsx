import { useCallback, useEffect, useRef, useState } from 'react';
import GoogleLogin from 'react-google-login';
import { useHistory } from 'react-router-dom';
import { getUserInfo, insertUser, isUserExist } from '../Query/UserQuery';
import { UserType } from '../Page/Global/GlobalType/GlobalType';
import { setUserStorage } from './UserLocalStorage';
const responseGoogle = async (
  response: any,
  isSuccess: boolean,
  setUserName: (p1: string) => void,
  setUserImage: (p1: string) => void,
  setIsUserExistMap: (any: any) => void,
  userName: string,
): Promise<void> => {
  console.log(response);
  if (isSuccess) {
    const googleId: string = response.googleId;
    const googleEmail: string = response.profileObj.email;
    const googleNickName: string = googleEmail.split('@')[0];
    const googleIdImage: string = response.profileObj.imageUrl;

    if (await isUserExist(googleId)) {
      // insertUser(googleId, googleEmail, googleIdImage);
      userName = googleNickName;
      console.log(userName);
      console.log('User is not exist');
      setIsUserExistMap({ userName: userName, userEmail: googleEmail, userImage: googleIdImage, isUserExist: false });
    } else {
      const userInfo: UserType = await getUserInfo(googleId);
      setUserStorage(userInfo);
      // window.localStorage.setItem('CURRENT_USER', JSON.stringify(CURRENT_USER));
      setUserName(userInfo.velog_name);
      setUserImage(userInfo.image);
      console.log('User is exist');
    }
  }
};

type GoogleOAuthButtonType = {
  userName: string;
  setUserName: (p1: string) => void;
  setUserImage: (p1: string) => void;
};
const GoogleOAuthButton: React.FC<GoogleOAuthButtonType> = ({ setUserName, setUserImage }) => {
  console.log(process.env.REACT_APP_CLIENT_ID as string);
  const [isUserExistMap, setIsUserExistMap] = useState({
    userName: '',
    userEmail: '',
    userImage: '',
    isUserExist: true,
  });
  const history = useHistory();
  var userName = '';

  useEffect(() => {
    if (!isUserExistMap.isUserExist) {
      history.push({
        pathname: '/register',
        state: {
          userName: isUserExistMap.userName,
          userEmail: isUserExistMap.userEmail,
          userImage: isUserExistMap.userImage,
        },
      });
    }
  }, [isUserExistMap]);

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_CLIENT_ID as string}
      render={(renderProps) => (
        <button className="velog_header_button_container_login" onClick={renderProps.onClick}>
          로그인
        </button>
      )}
      buttonText="Login"
      onSuccess={(res) => responseGoogle(res, true, setUserName, setUserImage, setIsUserExistMap, userName)}
      onFailure={(res) => responseGoogle(res, false, setUserName, setUserImage, setIsUserExistMap, userName)}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleOAuthButton;
