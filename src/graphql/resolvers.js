import { listUsers } from '../modules/users/list-users.js';
import { showUser } from '../modules/users/show-user.js';

export default {
  Query: {
    users: () => {
      return listUsers();
    },
    user: (_, args) => {
      return showUser({ id: args.id });
    },
  },
};
