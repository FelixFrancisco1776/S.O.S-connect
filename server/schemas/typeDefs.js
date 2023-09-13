const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    checkLists: [CheckList]
  }

  type CheckItem {
    text: String!
    isCheck: Boolean
  }

  type CheckList {
    _id: ID!
    title: String!
    createdAt: String
    userId: ID!
    items: [CheckItem]
  }

  type Auth {
    token: ID!
    user: User
  }

  input CheckItemInput {
    text: String!
  }

  type Query {
    users: [User]
    user(username: String): User
    checkLists: [CheckList]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addCheckList(title: String!, items: [CheckItemInput]): CheckList
  }
`;

module.exports = typeDefs;
