const { User, CheckItem } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
    checkItems: async (parent, args, context) => {
      return CheckItem.find();
    },
    userCheckItems: async (parent, args, context) => {
      return CheckItem.find({
        userId: args.userId
      });
    }
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    addCheckItem: async(parent, args, context) => {
      const item = await CheckItem.create({
        text: args.text,
        userId: "64fe6b7ab451d4dd27e6a63d" // test id
       });

       return item;
    }
  },
};

module.exports = resolvers;
