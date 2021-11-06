const express = require('express');
const { graphqlHTTP } = require("express-graphql");

const {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString
} = require('graphql');

const schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'World',
		fields: () => ({
			terrain: {
				type: GraphQLString,
				resolve: () => 'Water'
			}
		})
	})
})


const app = express();


app.use('/q', graphqlHTTP({
	schema: schema,
	graphiql: true
}));

app.listen(5000, () => console.log('Server is running'));
