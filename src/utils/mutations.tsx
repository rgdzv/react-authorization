import { gql } from '@apollo/client'

export const CURRENT_USER = gql`
  query {
    currentUser {
      id
      firstName
      secondName
      email
    }
  }
`;

export const SIGN_UP = gql`
  mutation signup(
    $firstName: String!
    $secondName: String!
    $email: String!
    $password: String!
  ) {
    signup(
      firstName: $firstName
      secondName: $secondName
      email: $email
      password: $password
    )
  }
`;

export const SIGN_IN = gql`
  mutation signin($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        id
        firstName
        secondName
        email
      }
      token
    }
  }
`;

export const EDIT_CURRENT_USER = gql`
  mutation editUser(
    $id: Int!
    $firstName: String!
    $secondName: String!
    $email: String!
    $password: String!
  ) {
    editUser(
      id: $id
      firstName: $firstName
      secondName: $secondName
      email: $email
      password: $password
    ) {
      id
      firstName
      secondName
      email
    }
  }
`;