const { User } = require('../../database/models');
const jwt = require('jsonwebtoken');
const { AuthenticationError } = require('apollo-server-express')

const verifyToken = async (token) => {
  
  try {
    if (!token) return null;

    const { id } = await jwt.verify(token, 'mySecret');

    console.log("find by pk",id)

    const user = await User.findByPk(id);
    console.log("top user",user)
    return user;
  } catch (error) {
    throw new AuthenticationError(error.message);
  }
};

module.exports = async ({ req }) => {

 console.log("req.headers.authorization.split(' ');",req)
//const token = (req.headers && req.headers.authorization) || '';
 
if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}
 const token = localStorage.getItem('token');
 console.log("req.headers",token)
  // console.log("req.headers.authorization",req.headers.authorization)
 
const user = await verifyToken(token)
   
 return { user };
};

// function getToken(key) {
//    var item = localStorage.getItem("token");
//   // return JSON.parse(item);
// }