//how to connect to mongodb server

const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/'

const connectToMongo = () =>{
    mongoose.connect(mongoURI, () =>{
        console.log('Connected to mongoDB succesfully');
    })
}

module.exports = connectToMongo;