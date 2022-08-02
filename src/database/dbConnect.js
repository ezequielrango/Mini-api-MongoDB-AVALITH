const { db } = require('./config');
const {uri,name} = db;
const mongoose = require('mongoose');

const dbConnect = () => {

    mongoose.connect(uri, {
    useNewUrlParser : true,
    useUnifiedTopology : true

    })
       .then(()=> console.log(`Database connect: ${name}`))
       .catch(e => console.log(e));


}   

module.exports = dbConnect;