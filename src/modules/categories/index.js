import { readFileSync } from 'fs';
import { join } from 'path';
import { __dirname } from '../../shared/commonjs/index.js';
import { isLoggedIn } from '../../graphql/is-loggedin.js';
import { listCategories } from './list-categories.js';
import { showCategory } from './show-category.js';
import { addCategory } from './add-category.js';
import { editCategory } from './edit-category.js';
import { removeCategory } from './remove-category.js';

const resolvers = {
  Query: {
    categories: () => {
      return listCategories();
    },
    category: (_, args) => {
      return showCategory({ id: args.id });
    },
  },
  Mutation: {
    createCategory: (_, args, contextValue) => {
      isLoggedIn(contextValue);
      return addCategory({ ...args.input });
    },
    updateCategory: (_, args, contextValue) => {
      isLoggedIn(contextValue);
      return editCategory({ id: args.id, ...args.input });
    },
    removeCategory: (_, args, contextValue) => {
      isLoggedIn(contextValue);
      return removeCategory({ id: args.id });
    },
  },
};

export default {
  typeDefs: readFileSync(join(__dirname(import.meta.url), '_schema.gql'), 'utf8'),
  resolvers,
};
