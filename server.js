import express from 'express';
import { graphqlHTTP } from "express-graphql";
import { GraphQLSchema } from 'graphql';
import { RootType, RootMutationType } from './types.js';

const schema = new GraphQLSchema({
	query: RootType,
	mutation: RootMutationType,
});

const app = express();

app.use('/q', graphqlHTTP({
	schema: schema,
	graphiql: true
}));

app.listen(5000, () => console.log("Server is running"));

