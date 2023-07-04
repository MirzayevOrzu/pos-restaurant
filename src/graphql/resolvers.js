import { addCategory } from '../modules/categories/add-category.js';
import { editCategory } from '../modules/categories/edit-category.js';
import { listCategories } from '../modules/categories/list-categories.js';
import { removeCategory } from '../modules/categories/remove-category.js';
import { showCategory } from '../modules/categories/show-category.js';
import { listItems } from '../modules/items/list-items.js';
import { showItem } from '../modules/items/show-item.js';
import { listMeasurements } from '../modules/measurements/list-measurements.js';
import { showMeasurement } from '../modules/measurements/show-measurement.js';
import { listOptions } from '../modules/options/list-options.js';
import { addUser } from '../modules/users/add-user.js';
import { editUser } from '../modules/users/edit-user.js';
import { listUsers } from '../modules/users/list-users.js';
import { removeUser } from '../modules/users/remove-user.js';
import { showUser } from '../modules/users/show-user.js';

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
    createUser: (_, args) => {
      return addUser({ ...args.input });
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
