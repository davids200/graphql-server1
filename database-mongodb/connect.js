const { mongoose } = require('mongoose');
const { Student } = require('./models/student');

const connectMongo = () =>{
   return mongoose.connect(process.env.MONGO_URL, {useNewUrlParser : true})
}

const models = { Student };

module.exports={
   connectMongo,models, 
}
 