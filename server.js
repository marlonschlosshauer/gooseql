import express from 'express';
import { graphqlHTTP } from "express-graphql";

import {
	GraphQLSchema,
	GraphQLObjectType,
    GraphQLString,
    GraphQLList
} from 'graphql';

import data from './temp/data.js';

const {companies, users, projects} = data;

const UserType = new GraphQLObjectType({
	name: 'User',
	description: 'A user',
	fields: () => ({
		id: { type: GraphQLString },
		name: { type: GraphQLString }
	})

});

const RootType = new GraphQLObjectType({
	name: "Query",
	description: "Entrypoint for API",
	fields: () => ({
		users: {
			type: new GraphQLList(UserType),
			description: 'List of ALL users',
			resolve: () => users
		}
	})
});

const schema = new GraphQLSchema({
	query: RootType
});

const app = express();

app.use('/q', graphqlHTTP({
	schema: schema,
	graphiql: true
}));

app.listen(5000, () => console.log("Server is running"));

