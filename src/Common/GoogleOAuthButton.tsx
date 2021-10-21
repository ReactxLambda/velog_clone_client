import { useCallback, useEffect, useRef, useState } from 'react';
import GoogleLogin from 'react-google-login';
import { useHistory } from 'react-router-dom';
import { getUserInfo, insertUser, isUserExist } from '../Query/UserQuery';

const responseGoogle = async (
  response: any,
  isSuccess: boolean,
  setUserName: (p1: string) => void,
  setUserImage: (p1: string) => void,
  setIsUserExist: (p1: boolean) => void,
): Promise<void> => {
  console.log(response);
  if (isSuccess) {
    const googleId: string = response.googleId;
    const googleNickName: string = response.profileObj.name;
    const googleEmail: string = response.profileObj.email;
    const googleIdImage: string = response.profileObj.imageUrl;
    if (!(await isUserExist(googleId))) {
      // insertUser(googleId, googleEmail, googleIdImage);
      console.log('User is not exist');
      setIsUserExist(false);
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
  const [isUserExist, setIsUserExist] = useState(true);
  const history = useHistory();

  useEffect(() => {
    if (!test) {
      history.push('/register');
    }
  }, [test]);

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_CLIENT_ID as string}
      render={(renderProps) => (
        <button className="velog_header_button_container_login" onClick={renderProps.onClick}>
          로그인
        </button>
      )}
      buttonText="Login"
      onSuccess={(res) => responseGoogle(res, true, setUserName, setUserImage, setIsUserExist)}
      onFailure={(res) => responseGoogle(res, false, setUserName, setUserImage, setIsUserExist)}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleOAuthButton;
