import { GraphQLString } from "graphql";
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