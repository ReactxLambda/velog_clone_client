import { Telegram } from '@material-ui/icons';
import React from 'react';

type UserNameLogContainerType = {
  userName?: string;
};

const defaultProps: UserNameLogContainerType = {
  userName: 'velog',
};
const UserNameLogContainer: React.FC<UserNameLogContainerType> = ({ userName }) => {
  return (
    <div className={'velog_header_logo_username_container'}>
      <div className={'logo'}>
        <Telegram />
      </div>
      <div className={'username'}>{userName}</div>
    </div>
  );
};
UserNameLogContainer.defaultProps = defaultProps;

export default UserNameLogContainer;
