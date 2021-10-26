import { UserType } from '../Page/Global/GlobalType/GlobalType';

export const getUserStorage = (): UserType | null => {
  const temp_cu: string | null = window.localStorage.getItem('CURRENT_USER');
  if (temp_cu == null) {
    return null;
  } else {
    return JSON.parse(temp_cu) as UserType;
  }
};

export const setUserStorage = (userInfo: UserType): void => {
  console.log(userInfo);
  window.localStorage.setItem('CURRENT_USER', JSON.stringify(userInfo));
};

export const removeUserStorage = () => {
  window.localStorage.removeItem('CURRENT_USER');
};
