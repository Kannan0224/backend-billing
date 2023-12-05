const mongoose = require('mongoose');


const dbConnection = async () =>{
    await mongoose.connect("mongodb+srv://kannan02:Admin123@kannancluster.1zo8wrv.mongodb.net/?retryWrites=true&w=majority")
}

module.exports = dbConnection;