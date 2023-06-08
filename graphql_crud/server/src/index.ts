import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from 'cors'
import { DataSource } from "typeorm";


const main = async () => {

    const app = express()
    app.use(cors())
    app.use(express.json())

    // app.use("/graphql", graphqlHTTP({
    //     schema,
    //     graphiql: true
    // }))

    app.listen(3002, () => {
        console.log("Server running on port 3002.");
    })
}

main().catch((err) => {
    console.log(err);
})
