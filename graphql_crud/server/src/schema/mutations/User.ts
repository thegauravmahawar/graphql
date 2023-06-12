import { GraphQLID, GraphQLString } from "graphql";
import { UserType } from "../typedefs/User";
import { Users } from "../dao/Users";

export const CREATE_USER = {
    type: UserType,
    args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    async resolve(parent: any, args: any) {
        const { name, email, password } = args;
        await Users.insert({ name, email, password });
        return args;
    }
}

export const DELETE_USER = {
    type: UserType,
    args: {
        id: { type: GraphQLID },
    },
    async resolve(parent: any, args: any) {
        const { id } = args;
        await Users.delete(id);
        return 'User deleted with id ${id}.';
    }
}