import { readFileSync } from 'fs';
import { join } from 'path';
import { __dirname } from '../../shared/commonjs/index.js';
import { listMeasurements } from './list-measurements.js';
import { showMeasurement } from './show-measurement.js';
import { addMeasurement } from './add-measurement.js';
import { editMeasurement } from './edit-measurement.js';
import { removeMeasurement } from './remove-measurement.js';

const resolvers = {
  Query: {
    measurements: () => {
      return listMeasurements();
    },
    measurement: (_, args) => {
      return showMeasurement({ id: args.id });
    },
  },
  Mutation: {
    createMeasurement: (_, args) => {
      return addMeasurement({ ...args.input });
    },
    updateMeasurement: (_, args) => {
      return editMeasurement({ id: args.id, ...args.input });
    },
    removeMeasurement: (_, args) => {
      return removeMeasurement({ id: args.id });
    },
  },
};

export default {
  typeDefs: readFileSync(join(__dirname(import.meta.url), '_schema.gql'), 'utf8'),
  resolvers,
};
