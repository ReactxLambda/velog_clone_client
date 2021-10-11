import { gql } from '@apollo/client';

export const GET_POST = gql`
  {
    posts {
      id
      thumbnail
      title
      url
      user_id
      content
      created_at
      interest {
        created_at
        user {
          id
        }
      }
    }
  }
`;
