import { readFileSync } from 'fs';
import { join } from 'path';
import { pubsub } from '../../graphql/pubsub.js';
import { __dirname } from '../../shared/commonjs/index.js';
import { isLoggedIn } from '../../graphql/is-loggedin.js';
import { listUsers } from './list-users.js';
import { showUser } from './show-user.js';
import { addUser } from './add-user.js';
import { editUser } from './edit-user.js';
import { removeUser } from './remove-user.js';
import { loginUser } from './login-user.js';

const resolvers = {
  Query: {
    users: () => {
      return listUsers();
    },
    user: (_, args) => {
      return showUser({ id: args.id });
    },
  },
  Mutation: {
    createUser: async (_, args, contextValue) => {
      isLoggedIn(contextValue);
      const result = await addUser({ ...args.input });

      pubsub.publish('USER_CREATED', { userCreated: result });

      return result;
    },
    updateUser: (_, args, contextValue) => {
      isLoggedIn(contextValue);
      return editUser({ id: args.id, ...args.input });
    },
    removeUser: (_, args, contextValue) => {
      isLoggedIn(contextValue);
      return removeUser({ id: args.id });
    },
    login: (_, args, contextValue) => {
      isLoggedIn(contextValue);
      return loginUser(args.input);
    },
  },
  Subscription: {
    userCreated: {
      subscribe: () => pubsub.asyncIterator(['USER_CREATED']),
    },
  },
};

export default {
  typeDefs: readFileSync(join(__dirname(import.meta.url), '_schema.gql'), 'utf8'),
  resolvers,
};
