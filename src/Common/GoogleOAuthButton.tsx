import { useEffect, useRef, useState } from 'react';
import GoogleLogin from 'react-google-login';
import { getUserInfo, insertUser, isUserExist } from '../Query/UserQuery';

const responseGoogle = async (
  response: any,
  isSuccess: boolean,
  setUserName: (p1: string) => void,
  setUserImage: (p1: string) => void,
): Promise<void> => {
  if (isSuccess) {
    const googleId: string = response.googleId;
    const googleNickName: string = response.it.Re;
    const googleEmail: string = response.it.Tt;
    const googleIdImage: string = response.it.lK;
    if (!(await isUserExist(googleId))) {
      insertUser(googleId, googleEmail, googleIdImage);
      console.log('User is not exist');
    } else {
      setUserName(googleNickName);
      setUserImage(googleIdImage);
      console.log('User is exist');
    }
  }
};

type GoogleOAuthButtonType = {
  setUserName: (p1: string) => void;
  setUserImage: (p1: string) => void;
};
const GoogleOAuthButton: React.FC<GoogleOAuthButtonType> = ({ setUserName, setUserImage }) => {
  console.log(process.env.REACT_APP_CLIENT_ID as string);
  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_CLIENT_ID as string}
      render={(renderProps) => (
        <button className="velog_header_button_container_login" onClick={renderProps.onClick}>
          로그인
        </button>
      )}
      buttonText="Login"
      onSuccess={(res) => responseGoogle(res, true, setUserName, setUserImage)}
      onFailure={(res) => responseGoogle(res, false, setUserName, setUserImage)}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleOAuthButton;
