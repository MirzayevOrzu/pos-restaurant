import { PubSub } from 'graphql-subscriptions';
import { addCategory } from '../modules/categories/add-category.js';
import { editCategory } from '../modules/categories/edit-category.js';
import { listCategories } from '../modules/categories/list-categories.js';
import { removeCategory } from '../modules/categories/remove-category.js';
import { showCategory } from '../modules/categories/show-category.js';
import { addItem } from '../modules/items/add-item.js';
import { editItem } from '../modules/items/edit-item.js';
import { listItems } from '../modules/items/list-items.js';
import { removeItem } from '../modules/items/remove-item.js';
import { showItem } from '../modules/items/show-item.js';
import { addMeasurement } from '../modules/measurements/add-measurement.js';
import { editMeasurement } from '../modules/measurements/edit-measurement.js';
import { listMeasurements } from '../modules/measurements/list-measurements.js';
import { removeMeasurement } from '../modules/measurements/remove-measurement.js';
import { showMeasurement } from '../modules/measurements/show-measurement.js';
import { listOptions } from '../modules/items/list-options.js';
import { addUser } from '../modules/users/add-user.js';
import { editUser } from '../modules/users/edit-user.js';
import { listUsers } from '../modules/users/list-users.js';
import { removeUser } from '../modules/users/remove-user.js';
import { showUser } from '../modules/users/show-user.js';
import { addOption } from '../modules/items/add-option.js';
import { removeOption } from '../modules/items/remove-option.js';

const pubsub = new PubSub();

export default {
  Query: {
    users: () => {
      return listUsers();
    },
    user: (_, args) => {
      return showUser({ id: args.id });
    },
    categories: () => {
      return listCategories();
    },
    category: (_, args) => {
      return showCategory({ id: args.id });
    },
    measurements: () => {
      return listMeasurements();
    },
    measurement: (_, args) => {
      return showMeasurement({ id: args.id });
    },
    items: () => {
      return listItems();
    },
    item: (_, args) => {
      return showItem({ id: args.id });
    },
  },
  Mutation: {
    createUser: async (_, args) => {
      const result = await addUser({ ...args.input });

      pubsub.publish('USER_CREATED', { userCreated: result });

      return result;
    },
    updateUser: (_, args) => {
      return editUser({ id: args.id, ...args.input });
    },
    removeUser: (_, args) => {
      return removeUser({ id: args.id });
    },
    createCategory: (_, args) => {
      return addCategory({ ...args.input });
    },
    updateCategory: (_, args) => {
      return editCategory({ id: args.id, ...args.input });
    },
    removeCategory: (_, args) => {
      return removeCategory({ id: args.id });
    },
    createMeasurement: (_, args) => {
      return addMeasurement({ ...args.input });
    },
    updateMeasurement: (_, args) => {
      return editMeasurement({ id: args.id, ...args.input });
    },
    removeMeasurement: (_, args) => {
      return removeMeasurement({ id: args.id });
    },
    createItem: (_, args) => {
      return addItem({ ...args.input });
    },
    updateItem: (_, args) => {
      return editItem({ id: args.id, ...args.input });
    },
    removeItem: (_, args) => {
      return removeItem({ id: args.id });
    },
    createItemOption: (_, args) => {
      return addOption({ ...args.input });
    },
    removeItemOption: (_, args) => {
      return removeOption({ id: args.id });
    },
  },
  Subscription: {
    userCreated: {
      subscribe: () => pubsub.asyncIterator(['USER_CREATED']),
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
