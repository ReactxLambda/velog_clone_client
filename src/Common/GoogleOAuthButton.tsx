import { useEffect, useRef, useState } from "react";
import GoogleLogin from 'react-google-login';

const responseGoogle = (response : any) => {
    console.log(response);
}

function GoogleOAuthButton() {
    return (
        <GoogleLogin
        clientId="330104992592-3bc3qepc1hujfo2anfmslit49klo0v42.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
    />
    )
}

export default GoogleOAuthButton