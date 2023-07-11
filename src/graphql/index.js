import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';
import jwt from 'jsonwebtoken';
import config from '../shared/config/index.js';
import { schema } from './schema.js';

export { isLoggedIn } from './is-loggedin.js';
export { pubsub } from './pubsub.js';

function configureGraphQLServer(httpServer) {
  const wsServer = new WebSocketServer({ server: httpServer, path: '/graphql' });
  const serverCleanup = useServer({ schema }, wsServer);

  const server = new ApolloServer({
    schema,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      {
        async serverWillStart() {
          return {
            async drainServer() {
              await serverCleanup.dispose();
            },
          };
        },
      },
    ],
  });

  const gqlServerMiddleware = () =>
    expressMiddleware(server, {
      context: ({ req }) => {
        const token = req.headers.authorization;

        if (token) {
          const decoded = jwt.verify(token, config.jwt.secret);

          return { user: decoded.user };
        }

        return { user: {} };
      },
    });

  return { server, gqlServerMiddleware };
}

export default configureGraphQLServer;
