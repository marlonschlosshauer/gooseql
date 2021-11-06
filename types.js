import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';

import data from './temp/data.js';

const { companies, users, projects } = data;

const UserType = new GraphQLObjectType({
	name: 'User',
	description: 'A user',
	fields: () => ({
		id: { type: GraphQLString },
		name: { type: GraphQLString }
	})

});

const ProjectType = new GraphQLObjectType({
	name: 'Project',
	description: 'A project by a company',
	fields: () => ({
		id: { type: GraphQLString },
		name: { type: GraphQLString },
		company: { type: GraphQLString },
	})

});

const CompanyType = new GraphQLObjectType({
	name: 'Company',
	description: 'A company',
	fields: () => ({
		id: { type: GraphQLString },
		name: { type: GraphQLString },
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
		},
		projects: {
			type: new GraphQLList(ProjectType),
			description: 'List of ALL projects',
			resolve: () => projects
		},
		companies: {
			type: new GraphQLList(CompanyType),
			description: 'List of ALL companies',
			resolve: () => companies
		}
	})
});

export { UserType, ProjectType, RootType };
