const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type CheckItem {
    text: String
    userId: ID
    createdAt: String
    isCheck: Boolean
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    checkItems: [CheckItem]
    userCheckItems(userId: ID!): [CheckItem]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addCheckItem(text: String): CheckItem
  }
`;

module.exports = typeDefs;
