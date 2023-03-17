const express = require('express');
const { createServer } = require('http');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');
const typeDefs = require('../graphql/schemas');
const resolvers = require('../graphql/resolvers');
const context = require('../graphql/context');
const app = express(); 
//const connectMongo = require('../dataSources/mongodb/connection');

const HEADER_NAME = 'authorization'

app.use(cors());

[]
const apolloServer = new ApolloServer({
  cors: {
    origin: '*',
    credentials: true,
  },
  typeDefs,
  resolvers,
  context: context,
  introspection: true,
  playground: {
    settings: {
      'schema.polling.enable': false,
      'editor.fontSize': 18,
    },
  },
});

//connectMongo()
apolloServer.applyMiddleware({ app, path: '/graphql' });

const server = createServer(app);

module.exports = server;
