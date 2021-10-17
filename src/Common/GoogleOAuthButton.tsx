import { useEffect, useRef, useState } from 'react';
import GoogleLogin from 'react-google-login';
import { getUserInfo, insertUser, isUserExist } from '../Query/UserQuery';

const responseGoogle = async (response: any): Promise<void> => {
  const googleId: string = response.googleId;
  const googleNickName: string = response.it.Re;
  const googleEmail: string = response.it.Tt;
  const googleIdImage: string = response.it.lK;
  if (!(await isUserExist(googleId))) {
    insertUser(googleId, googleEmail, googleIdImage);
    console.log('User is not exist');
  } else {
    console.log('User is exist');
  }
};

type GoogleOAuthButtonType = {};
const GoogleOAuthButton: React.FC<GoogleOAuthButtonType> = (buttonStyle: any) => {
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
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleOAuthButton;
