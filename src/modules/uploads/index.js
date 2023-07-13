import { createWriteStream, readFileSync } from 'fs';
import { join } from 'path';
import { finished } from 'stream/promises';
import GraphQLUpload from 'graphql-upload/GraphQLUpload.mjs';
import { __dirname } from '../../shared/commonjs/index.js';

const resolvers = {
  Mutation: {
    singleUpload: async (parent, { file }) => {
      const { createReadStream, filename, mimetype, encoding } = await file;

      // Invoking the `createReadStream` will return a Readable Stream.
      // See https://nodejs.org/api/stream.html#stream_readable_streams
      const stream = createReadStream();

      // This is purely for demonstration purposes and will overwrite the
      // local-file-output.txt in the current working directory on EACH upload.
      const out = createWriteStream(filename);
      stream.pipe(out);
      await finished(out);

      return { filename, mimetype, encoding };
    },
  },
  Upload: GraphQLUpload,
};

export default {
  typeDefs: readFileSync(join(__dirname(import.meta.url), '_schema.gql'), 'utf8'),
  resolvers,
};
