// const { gql } = require('apollo-server-express');

// module.exports = gql`

//  type Student {
//     studentId: String!
//      first_name: String!
//      last_name: String!
//     #  class: ClassType
//     #  createdAt: String
//     #  updatedAt: String

//  }

// extend type Query {
//     getAllStudents: [Student!]
//     getSingleStudent(studentId: String!): Student
//     }
//  extend type Mutation {
//      createStudent(input: StudentInput!): Student
//  }

//  type CreateStudentResponse {
//     studentId: String!
//     first_name: String!
//     last_name: String!
//  }

//  enum ClassType {
//   S1
//   S2
//   S3
//   S4
//   S5
//   S6
//   }
//   input StudentInput{
//     studentId: String
//     first_name: String
//     last_name: String
//     } 
// `;
