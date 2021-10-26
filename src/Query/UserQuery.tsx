import client from '../Common/apollo';
import { gql } from '@apollo/client';
import { UserType } from '../Page/Global/GlobalType/GlobalType';

const userInfoQuery = (userId: string): string => `
query {
  user(where: { id: "${userId}" }) {
    id
    email
    velog_name
    introduction
    image
    social
    token
  }
}
`;

const userInsertMutation = (
  id: string,
  email: string,
  velog_name: string,
  image: string,
  token: string,
  password?: string,
  introduction?: string,
) => `
mutation {
  createOneuser(data: { 
      id: "${id}",
      password: "${password !== undefined ? password : ''}",
      email: "${email}",
      velog_name : "${velog_name}",
      token : "${token}"
      introduction: "${introduction !== undefined ? introduction : ''}",
      image: "${image}" }) 
      {
          id
      }
}
`;
const gqlLogger = (query: string): any => {
  console.log(query);
  return gql(query);
};
export const getUserInfo = async (userId: string): Promise<UserType> => {
  const response: any = await client.query({
    query: gqlLogger(userInfoQuery(userId)),
  });
  const userInfo: UserType = response.data.user;
  return userInfo;
};

export const insertUser = async (
  id: string,
  email: string,
  velog_name: string,
  image: string,
  token: string,
  introduction?: string,
  password?: string,
): Promise<boolean> => {
  const response: any = await client.mutate({
    mutation: gqlLogger(userInsertMutation(id, email, velog_name, image, token, password, introduction)),
  });
  console.log(`Id : ${response.data.createOneuser.id}`);
  if (response.data.createOneuser.id === null) return false;
  else return true;
};

export const isUserExist = async (userId: string): Promise<boolean> => {
  const userInfo = await getUserInfo(userId);
  if (userInfo === null) return false;
  else return true;
};
