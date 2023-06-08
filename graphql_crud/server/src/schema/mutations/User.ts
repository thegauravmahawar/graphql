import { GraphQLString } from "graphql";
import { UserType } from "../typedefs/User";

export const CREATE_USER = {
    type: UserType,
    args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    resolve(parent: any, args: any) {
        const { name, email, password } = args;
        return args;
    }
}