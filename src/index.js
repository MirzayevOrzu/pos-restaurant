import http from 'http';
import express from 'express';
import cors from 'cors';
import config from './shared/config/index.js';
import configureGraphQLServer from './graphql/index.js';

const app = express();
const httpServer = http.createServer(app);

const { server, gqlServerMiddleware } = configureGraphQLServer(httpServer);
await server.start();
app.use('/graphql', cors(), express.json(), gqlServerMiddleware());

httpServer.listen({ port: config.port }, () => {
  console.log(`Server is listening on port ${config.port}`);
});
