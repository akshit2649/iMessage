const resolvers = {
  Query: {
    searchUsers: () => {},
  },
  Mutation: {
    createUsername: () => {
      console.log("HEY AT THE API");
    },
  },
  //   Subscription: {},
};

export default resolvers;
