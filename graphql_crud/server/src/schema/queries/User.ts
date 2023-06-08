import { GraphQLList } from 'graphql';
import { UserType } from '../typedefs/User';
import { Users } from '../dao/Users';

export const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    resolve() {
        return Users.find();
    },
}