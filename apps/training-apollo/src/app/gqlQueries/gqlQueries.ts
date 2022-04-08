import { gql } from '@apollo/client';

export const GET_ALL_TODOS = gql`
  {
    allTodos {
      id
      title
      status
    }
  }
`;

export const GET_ALL_USERS = gql`
  {
    allUsers {
      id
      name
    }
  }
`;
