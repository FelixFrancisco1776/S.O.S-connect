import { gql } from '@apollo/client';
// change the mutation to match the checklist
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
// change the mutation to match the checklist
;
export const ADD_CHECKLIST = gql`
mutation ADD_CHECKLIST($title: String!, $userId: ID!, $items: [CheckItemInput]) {
  addCheckList(title: $title, userId: $id, items: $items) {
    _id
    createdAt
    title
    userId
    items {
      text
      isCheck
    }
  }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($thoughtId: ID!, $commentText: String!) {
    addComment(thoughtId: $thoughtId, commentText: $commentText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`
;
