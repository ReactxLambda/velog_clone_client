import { Telegram } from '@material-ui/icons';
import React from 'react';

type UserNameLogContainerType = {
  username?: string;
};

const defaultProps: UserNameLogContainerType = {
  username: 'velog',
};
const UserNameLogContainer: React.FC<UserNameLogContainerType> = ({ username }) => {
  return (
    <div className={'velog_header_logo_username_container'}>
      <div className={'logo'}>
        <Telegram />
      </div>
      <div className={'username'}>{username}</div>
    </div>
  );
};
UserNameLogContainer.defaultProps = defaultProps;

export default UserNameLogContainer;
