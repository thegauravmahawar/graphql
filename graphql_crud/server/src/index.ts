import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from './schema';
import cors from 'cors'
import { DataSource } from "typeorm";
import { Users } from "./schema/dao/Users";


const main = async () => {

    const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'pguser',
        password: 'pgpass',
        database: 'pgdb',
        logging: true,
        synchronize: true,
        entities: [Users],
    });

    dataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

    const app = express()
    app.use(cors())
    app.use(express.json())

    app.use("/graphql", graphqlHTTP({
        schema: schema,
        graphiql: true
    }))

    app.listen(3002, () => {
        console.log("Server running on port 3002.");
    })
}

main().catch((err) => {
    console.log(err);
})
