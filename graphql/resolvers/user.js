const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../../database/models');
const {GraphQLError} = require('graphql');

module.exports = {
Mutation: {
async register(root, args, context) {
  console.log("in signupppppppp",args)
//const { name, email, password } = args.input;
const user=await User.create(args.input); 
 
const token = jwt.sign({ id: user.dataValues.id }, 'mySecret'); 
return { ...user, token }; 
    },



async login(root, { input }, context) {
const { email, password } = input;

const user = await User.findOne({ where: { email } });

if(!user){
  throw new Error('Invalid username or password');
}

if (user && bcrypt.compareSync(password, user.password)) {
const token = jwt.sign({ id: user.id }, 'mySecret');

if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  }
  
localStorage.setItem('token', token); 
return { ...user.dataValues, token }; 
}
},



  },



  Query:{

async getUsers(root, args, context) {
return User.findAll();
},
      
async getUser(root, { userId }, context) {
// const { userId } = input; 
console.log("userId: ",userId) 
const user = await User.findOne({ where: { id:userId } });

if(!user){
throw new Error('User does not exist!');
} 
else{
return user;
} 
},
  
      
  }
};
// async function setToken(key,info) {
//   await localStorage.setItem(key, JSON.stringify(info));
// }