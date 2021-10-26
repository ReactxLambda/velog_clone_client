export type social = {
  git: string;
  home: string;
  email: string;
};

export type UserType = {
  id: string;
  email: string;
  velog_name: string;
  introduction: string;
  image: string;
  social: social;
  token: string;
};
