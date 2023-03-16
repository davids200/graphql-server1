const { Student } = require('../../database/models');
const { v4: uuid } = require("uuid");
const { AuthenticationError } = require('apollo-server-express');
const { GraphQLError } = require("graphql"); 

module.exports = {
  Mutation: {
    async createStudent(_, {input}, { user = null }) {
    console.log("auth user",user)   
    //   if (!user) {
    //     throw new AuthenticationError('You must login to create a Student');
    //   }
const student=await Student.findOne({where: { studentId:input.studentId }});
 
if (student) {
//throw new Error('Student Number already exists!');
throw new GraphQLError('Student Number already exists!', {
  extensions: {
    code: 'DUPLICATE',
  },
});
}

      return Student.create({
        id:uuid(),
        userId: 444,
        studentId:input.studentId,
        first_name:input.first_name,
        last_name:input.last_name
      });
    },

async deleteStudent(_, { id }, context,info) {
  
const student=await Student.findOne({where: { id },
});
if(!student) throw new Error('Record does not exist!'); 
else{ 
 
const deleted=await Student.destroy({ where: {id:id}}); 

if(deleted){
  return {'message':"Student deleted successfully!"}
}
}
 },

  },

Query: {
async getAllStudents(root, args, context) {
return Student.findAll();
},

async getSingleStudent(_, { studentId }, context) {
const student=await Student.findOne({where: { studentId },
});
if(student)  return student;
else{ throw new Error('No student found!'); 
}
},
},

  Student: {
    user(Student) {
      return Student.getUser();
    },
    // comments(Student) {
    //   return Student.getComments();
    // },
  },
};


//PAGINATION EXAMPLE
  // const getBooks = (parent, args) => {
  // const first = args.first || 5;
  // const after = args.after || 0;
  // const index = bookList.findIndex((item) => item.isbn13 === after);
  // const offset = index + 1;

  // const books = bookList.slice(offset, offset + first);
  // const lastBook = books[books.length - 1];

  // return {
  // pageInfo: {
  // endCursor: lastBook.isbn13,
  // hasNextPage: offset + first < bookList.length,
  // },
  // edges: books.map((book) => ({
  // cursor: book.isbn13,
  // node: book,
  // })),
  // };
  // }

  // export default getBooks;