import { readFileSync } from 'fs';
import { join } from 'path';
import { __dirname } from '../../shared/commonjs/index.js';
import { search } from './search.js';

const resolvers = {
  Query: {
    search: (_, args) => {
      return search(args.contains);
    },
  },
  SearchResult: {
    __resolveType(obj, contextValue, info) {
      // Only Author has a name field
      if (obj.name && obj.description) {
        return 'Item';
      }
      // Only Book has a title field
      if (obj.name && obj.inc_by) {
        return 'Measurement';
      }
      if (obj.username) {
        return 'User';
      }
      if (obj.name) {
        return 'Category';
      }
      return null; // GraphQLError is thrown
    },
  },
  ItemType: {
    GOOD: 'good',
    FOOD: 'food',
  },
};

export default {
  typeDefs: readFileSync(join(__dirname(import.meta.url), '_schema.gql'), 'utf8'),
  resolvers,
};
