import { onRequest } from 'firebase-functions/v2/https'
import { createServer } from './server';
import userRoutes from './routes/user.routes';

const server = createServer()

server.use('/', userRoutes);
export const api = onRequest({
  region: ['asia-southeast1']
}, server);