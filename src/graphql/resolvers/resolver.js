const { createRequestBuilder, features } = require ("@commercetools/api-request-builder");
const dotenv = require ("dotenv")

dotenv.config();

const { DEV_PROJECT_KEY } = process.env;
const { client } = require ("../../client/client.js")
const { TestData } = require ("../../data.js")

const projectKey = DEV_PROJECT_KEY;

const resolvers = {
    Query: {
        getAllData() {
            return TestData;
        },

        async queryCustomers() {
            try {
                const customerService = createRequestBuilder({ projectKey }).customers;

                const createGetProjectRequest = {
                    uri: customerService.build(),
                    method: "GET",
                };

                const data = await client.execute(createGetProjectRequest);
                return data.body;
            } catch (error) {
                console.log(error);
            }
        }
    },

    Mutation: {
        createData(parent, args) {
            const newData = args;
            TestData.push(newData);
            return newData;
        },
    },
};

module.exports = { resolvers };
