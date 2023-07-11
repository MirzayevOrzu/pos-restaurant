import { UnauthorizedError } from '../shared/errors/index.js';

export const isLoggedIn = (context) => {
  if (!context.user.id) {
    throw new UnauthorizedError('You need to login!');
  }
};
