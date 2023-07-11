import { readFileSync } from 'fs';
import { join } from 'path';
import { __dirname } from '../../shared/commonjs/index.js';
import { isLoggedIn } from '../../graphql/is-loggedin.js';
import { listItems } from './list-items.js';
import { showItem } from './show-item.js';
import { addItem } from './add-item.js';
import { editItem } from './edit-item.js';
import { removeItem } from './remove-item.js';
import { addOption } from './add-option.js';
import { removeOption } from './remove-option.js';
import { showCategory } from '../categories/show-category.js';
import { showMeasurement } from '../measurements/show-measurement.js';
import { listOptions } from './list-options.js';

const resolvers = {
  Query: {
    items: () => {
      return listItems();
    },
    item: (_, args) => {
      return showItem({ id: args.id });
    },
  },
  Mutation: {
    createItem: (_, args, contextValue) => {
      isLoggedIn(contextValue);
      return addItem({ ...args.input });
    },
    updateItem: (_, args, contextValue) => {
      isLoggedIn(contextValue);
      return editItem({ id: args.id, ...args.input });
    },
    removeItem: (_, args, contextValue) => {
      isLoggedIn(contextValue);
      return removeItem({ id: args.id });
    },
    createItemOption: (_, args, contextValue) => {
      isLoggedIn(contextValue);
      return addOption({ ...args.input });
    },
    removeItemOption: (_, args, contextValue) => {
      isLoggedIn(contextValue);
      return removeOption({ id: args.id });
    },
  },
  Item: {
    category: (parent) => {
      return showCategory({ id: parent.category_id });
    },
    options: (parent) => {
      return listOptions({ item_id: parent.id });
    },
  },
  Option: {
    measurement: (parent) => {
      return showMeasurement({ id: parent.measurement_id });
    },
    item: (parent) => {
      return showItem({ id: parent.item_id });
    },
  },
};

export default {
  typeDefs: readFileSync(join(__dirname(import.meta.url), '_schema.gql'), 'utf8'),
  resolvers,
};
