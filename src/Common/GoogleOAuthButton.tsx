import { useEffect, useRef, useState } from 'react';
import GoogleLogin from 'react-google-login';
import { setUserImage } from '../Store/user';

const responseGoogle = (response: any) => {
  setUserImage(response.it.lK);
  console.log(response);
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
