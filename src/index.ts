import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import cors from 'cors';
import { createConnection } from 'typeorm';
 

const main = async () => {

    const app = express()
app.use(cors())
app.use(express.json())
// app.use("/grphql", graphqlHTTP({
//     schema,
//     graphiql: true
// })  )

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

};


main().catch((err) => {
    console.log(err);
});