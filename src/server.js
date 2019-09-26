require('dotenv').config();
import { GraphQLServer } from 'graphql-yoga';
import logger from 'morgan';
import schema from './schema';

const PORT = process.env.PORT || 4000;

// GraphQLServer에는 express가 포함되어 있다.
const server = new GraphQLServer({ schema });

server.express.use(logger('dev')); // log 미들웨어

server.start({ port: PORT }, () =>
  console.log(`!! Server running on http://localhost:${PORT}`),
);
