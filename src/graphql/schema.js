import { makeExecutableSchema } from '@graphql-tools/schema';
import commonModule from '../modules/common/index.js';

// Modules
import usersModule from '../modules/users/index.js';
import measurementsModule from '../modules/measurements/index.js';
import categoriesModule from '../modules/categories/index.js';
import itemsModule from '../modules/items/index.js';
import uploadsModule from '../modules/uploads/index.js';

export const schema = makeExecutableSchema({
  typeDefs: [
    usersModule.typeDefs,
    measurementsModule.typeDefs,
    categoriesModule.typeDefs,
    commonModule.typeDefs,
    itemsModule.typeDefs,
    uploadsModule.typeDefs,
  ],
  resolvers: [
    usersModule.resolvers,
    measurementsModule.resolvers,
    categoriesModule.resolvers,
    commonModule.resolvers,
    itemsModule.resolvers,
    uploadsModule.resolvers,
  ],
});
