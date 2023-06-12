import { GraphQLID, GraphQLString } from "graphql";
import { UserType } from "../typedefs/User";
import { MessageType } from "../typedefs/Message";
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
    type: MessageType,
    args: {
        id: { type: GraphQLID },
    },
    async resolve(parent: any, args: any) {
        const { id } = args;
        await Users.delete(id);
        return {success: true, message: 'User deleted with id ${id}.'};
    }
}

export const UPDATE_PASSWORD = {
    type: MessageType,
    args: {
        email: { type: GraphQLString },
        oldPassword: { type: GraphQLString },
        newPassword: { type: GraphQLString },
    },
    async resolve(parent: any, args: any) {
        const { email, oldPassword, newPassword } = args;
        const user = await Users.findOne({where: {email: email}});

        if (!user) {
            throw new Error("No user found.");
        }

        const userPassword = user?.password;

        if (oldPassword === userPassword) {
            await Users.update({email: email}, {password: newPassword});

            return {success: true, message: "Password updated successfully."};
        } else {
            throw new Error("No user found.");
        }
    }
}