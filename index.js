const express = require ("express");
const { createServer } = require ("http");
const { ApolloServer } = require ("apollo-server-express");
const dotenv = require ("dotenv");

const { typeDefs } = require ("./src/graphql/schemas/schema.js");
const { resolvers } = require ("./src/graphql/resolvers/resolver.js");

dotenv.config();

class App {
    async startServer() {
        try {
            const app = express();
            const server = new ApolloServer({ typeDefs, resolvers });
            await server.start();
            server.applyMiddleware({ app, path: '/graphql' });

            const httpServer = createServer(app);

            httpServer.listen(process.env.PORT, () => {
                console.log(`Server is running on port ${process.env.PORT}`);
            });
        } catch (error) {
            console.log("Internal Server Error", error);
        }
    }
}

new App().startServer();