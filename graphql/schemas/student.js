const { gql } = require('apollo-server-express');

module.exports = gql`
 
 type Student {
     id: String!
     studentId: String! 
     first_name: String!
     user: User!
     last_name: String!
     createdAt: String
     updatedAt: String
 }

extend type Query {
getAllStudents: [Student!]
getSingleStudent(studentId: String!): StudentResponse
}

extend type Mutation {
createStudent(input:StudentInput!): CreateStudentResponse
deleteStudent(id: ID!):DeleteResponse
}

type DeleteResponse{
id:String  
message:String  
}



type StudentResponse{
id:String!
studentId: String!
first_name: String!
last_name: String!  
}

input StudentInput{
id:String!
studentId: String!
first_name: String!
last_name: String!
}

type CreateStudentResponse {
id: String!
studentId: String!
first_name: String!
last_name: String! 
}

`;
