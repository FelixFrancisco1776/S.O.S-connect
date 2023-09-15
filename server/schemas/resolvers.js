const { User, CheckList } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("checkLists");
    },
    user: async (parent, { username }, context) => {
      if (!username) {
        if (context.user) {
          const loggedInUsername = context.user.username;
          console.log(loggedInUsername);
          return User.findOne({ username: loggedInUsername }).populate(
            "checkLists"
          );
        } else {
          throw AuthenticationError;
        }
      } else {
        return User.findOne({ username }).populate("checkLists");
      }
    },
    checkLists: async (parent, args, context) => {
      return CheckList.find().populate("user");
    },
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
    addCheckList: async (parent, args, context) => {
      if (context.user) {
        //  add a new checklist to the database
        const checklist = await CheckList.create({
          title: args.title,
          items: args.items,
          // userId: args.userId
          user: context.user._id, // test id
        });

        //  update the currently logged in user's checklist to include this newly created checklist
        const updatedUser = await User.findOneAndUpdate(
          {
            _id: context.user._id, // test id
          },
          {
            $push: { checkLists: checklist._id },
          }
        );

        return checklist;
      } else {
        throw AuthenticationError;
      }
    },
  },
};

module.exports = resolvers;
