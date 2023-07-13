import http from 'http';
import express from 'express';
import cors from 'cors';
import config from './shared/config/index.js';
import configureGraphQLServer from './graphql/index.js';

const app = express();
app.use(cors());
app.use(express.json());
const httpServer = http.createServer(app);

configureGraphQLServer(httpServer, app).then((httpServer) => {
  httpServer.listen({ port: config.port }, () => {
    console.log(`Server is listening on port ${config.port}`);
  });
});
