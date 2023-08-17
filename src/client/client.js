const { createClient } = require ("@commercetools/sdk-client");

const { createAuthMiddlewareForClientCredentialsFlow } = require ("@commercetools/sdk-middleware-auth");
const { createHttpMiddleware } = require ("@commercetools/sdk-middleware-http");
// const { SdkAuth } = require ("@commercetools/sdk-auth);
const axios = require("axios");

const dotenv = require ("dotenv");

dotenv.config();

console.log("Getting started with commercetools Nodejs SDK");

const { DEV_CLIENT_ID, DEV_CLIENT_SECRET, DEV_PROJECT_KEY, DEV_API_URL, DEV_AUTH_URL, DEV_SCOPES } = process.env;

const projectKey = DEV_PROJECT_KEY

// Create a httpMiddleware for the your project AUTH URL
const authMiddleware = createAuthMiddlewareForClientCredentialsFlow({
    host: DEV_AUTH_URL,
    projectKey,
    credentials: {
        clientId: DEV_CLIENT_ID,
        clientSecret: DEV_CLIENT_SECRET,
    },
    scopes: [DEV_SCOPES],
    axios,
});

// Create a httpMiddleware for the your project API URL
const httpMiddleware = createHttpMiddleware({
    host: DEV_API_URL,
    axios,
});

// Create a client using authMiddleware and httpMiddleware
const client = createClient({
    middlewares: [authMiddleware, httpMiddleware],
});

module.exports = { client };