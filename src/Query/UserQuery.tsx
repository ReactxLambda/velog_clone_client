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
  velog_name: string,
  email: string,
  image: string,
  password?: string,
  introduction?: string,
) => `
mutation {
  createOneuser(data: { 
      id: "${velog_name}",
      password: "${password !== undefined ? password : ''}",
      email: "${email}",
      introduction: "${introduction !== undefined ? introduction : ''}",
      image: "${image}" }) 
      {
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
): Promise<UserType> => {
  const response: any = await client.mutate({
    mutation: gqlLogger(
      userInsertMutation((velog_name = velog_name + 15), (email = email + 15), image, password, introduction),
    ),
  });
  console.log(`Id : ${response.data.createOneuser.id}`);
  return response.data.createOneuser as UserType;
  // if (response.data.createOneuser.id === null) return false;
  // else return true;
};

export const isUserExist = async (userId: string): Promise<boolean> => {
  const userInfo = await getUserInfo(userId);
  if (userInfo === null) return false;
  else return true;
};
