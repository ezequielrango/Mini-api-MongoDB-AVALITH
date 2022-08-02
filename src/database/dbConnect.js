const { db } = require('./config');
const {user ,name,password} = db;
const mongoose = require('mongoose');

const dbConnect = () => {
    
    const url = "mongodb://localhost/skill_factory";

    mongoose.connect(url, {
        useNewUrlParser : true,
        useUnifiedTopology : true
    
    })
       .then(()=> console.log(`Database connect: ${name}`))
       .catch(e => console.log(e));


}   

module.exports = dbConnect;