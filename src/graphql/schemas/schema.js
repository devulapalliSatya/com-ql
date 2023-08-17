const { buildSchema } =require("graphql");

const typeDefs = buildSchema(`
  type Data {
    Name: String!
    Age: Int!
  }

  type Query {
    getAllData: [Data!]!
    queryCustomers: GetCustomersResp
  }
  
  type Mutation {
    createData(Name: String!, Age: Int!): Data!
  }

  type Address {
    id: String!
    title: String
    firstName: String
    lastName: String
    streetName: String
    streetNumber: String
    postalCode: Int
    city: String
    country: String
    phone: String
    mobile: String
    email: String
  }

  type User {
    typeId: String
    id: String
  }

  type CustomerLastModifiedBy {
    clientId: String
    isPlatformClient: Boolean
    user: User
  }

  type CustomerCreatedBy {
    clientId: String
    isPlatformClient: Boolean
  }

  type Customer {
    id: String!
    version: Int!
    versionModifiedAt: String!
    lastMessageSequenceNumber: Int
    createdAt: String!
    lastModifiedAt: String
    customerNumber: String
    email: String!
    firstName: String!
    lastName: String!
    title: String
    dateOfBirth: String
    password: String
    addresses: [Address!]
    shippingAddressIds: [String!]
    billingAddressIds: [String!]
    isEmailVerified: Boolean
    key: String
    authenticationMode: String
    lastModifiedBy: CustomerLastModifiedBy
    createdBy: CustomerCreatedBy
  }

  type GetCustomersResp {
    limit: Int
    offset: Int
    count: Int
    total: Int
    results:[Customer!]
  }
`);
module.exports = { typeDefs };