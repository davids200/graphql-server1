const { gql } = require('apollo-server-express');

module.exports = gql`

 type User {
     id: Int!
     id2:String
     name: String!
     email: String!
     password: String!
     posts: [Post!]
 }

 extend type Mutation {
     register(input: RegisterInput!): RegisterResponse
     login(input: LoginInput!): LoginResponse     
 }

extend type Query{
getUsers: [User!]
getUser(userId: String!):User
}

 type RegisterResponse {
    id: Int!
    name: String!
    email: String!
    token:String!
 }

 input RegisterInput {
    id2:String
     name: String!
     email: String!
     password: String!
 }

 input LoginInput {
     email: String
     password: String
 }

 type LoginResponse {
    id: Int!
    name: String!
    email: String!
    token: String
 }
`;
