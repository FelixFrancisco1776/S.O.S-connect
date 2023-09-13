import { gql } from '@apollo/client';
// change the querys to match the checklist
export const QUERY_USER = gql`
query GET_BY_USERNAME($username: String) {
  user(username: $username) {
    _id
    email
    username
    checkLists {
      items {
        text
        isCheck
      }
      title
    }
  }
}
`;


export const GET_ALL_CHECKLISTS = gql`
query GET_ALL_CHECKLISTS {
  checkLists {
    _id
    createdAt
    items {
      text
      isCheck
    }
    title
    userId
  }
}
`;

export const QUERY_SINGLE_THOUGHT = gql`
  query getSingleThought($thoughtId: ID!) {
    thought(thoughtId: $thoughtId) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        thoughtAuthor
        createdAt
      }
    }
  }
`;
