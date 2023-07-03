import { listCategories } from '../modules/categories/list-categories.js';
import { showCategory } from '../modules/categories/show-category.js';
import { listItems } from '../modules/items/list-items.js';
import { showItem } from '../modules/items/show-item.js';
import { listMeasurements } from '../modules/measurements/list-measurements.js';
import { showMeasurement } from '../modules/measurements/show-measurement.js';
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
  Item: {
    category: (parent) => {
      return showCategory({ id: parent.category_id });
    },
  },
};
