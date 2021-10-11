import React, { Fragment } from 'react';
type URLConfigurationType = {
  userName: string;
  URL: string;
  setURL: (p1: string) => void;
};
const URLConfiguration: React.FC<URLConfigurationType> = ({ userName, URL, setURL }) => {
  return (
    <Fragment>
      <div>
        <h3>URL 설정</h3>
      </div>
      <div className={'PostConfiguration_URL'}>
        <div>/@{userName}/</div>
        <input className={'PostConfiguration_input'} value={URL} onChange={(event) => setURL(event.target.value)} />
      </div>
    </Fragment>
  );
};
export default URLConfiguration;
