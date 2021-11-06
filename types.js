import { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLNonNull } from 'graphql';
import { v4 as uuid } from 'uuid';

import data from './temp/data.js';

const { companies, users, projects } = data;

const UserType = new GraphQLObjectType({
	name: 'User',
	description: 'A user',
	fields: () => ({
		id: { type: GraphQLNonNull(GraphQLString) },
		name: { type: GraphQLString },
		company: {
			type: CompanyType,
			resolve: ({ company }) => companies.find(c => c.id === company)
		},
		projects: {
			type: new GraphQLList(ProjectType),
			resolve: (user) => projects.filter(x => user.projects.some(y => x.id == y))
		}
	})

});

const ProjectType = new GraphQLObjectType({
	name: 'Project',
	description: 'A project by a company',
	fields: () => ({
		id: { type: GraphQLNonNull(GraphQLString) },
		name: { type: GraphQLString },
		company: { type: GraphQLString },
	})

});

const CompanyType = new GraphQLObjectType({
	name: 'Company',
	description: 'A company',
	fields: () => ({
		id: { type: GraphQLNonNull(GraphQLString) },
		name: { type: GraphQLString },
	})

});

const RootMutationType = new GraphQLObjectType({
	name: 'Mutation',
	description: 'Root Muttation',
	fields: () => ({
		addUser: {
			type: UserType,
			description: 'Add a user',
			args: {
				name: { type: GraphQLNonNull(GraphQLString) },
				company: { type: GraphQLNonNull(GraphQLString) },
				projects: { type: new GraphQLList(GraphQLString) }
			},
			resolve: (parent, { name, company, projects }) => users[users.push({ name, company, projects: projects ?? [], id: uuid() }) - 1]
		}
	})
});

const RootType = new GraphQLObjectType({
	name: "Query",
	description: "Entrypoint for API",
	fields: () => ({
		user: {
			type: UserType,
			description: 'A users',
			args: {
				id: { type: GraphQLString },
			},
			resolve: (parent, args) => users.find(u => u.id === args.id)
		},
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

export { UserType, ProjectType, RootType, RootMutationType };
