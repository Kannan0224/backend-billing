const mongoose = require('mongoose');


const mechanicSchema = new mongoose.Schema({
    name : { type : String},
    code : { type : Number},
    mobileNumber : { type : Number}
})


module.exports = mongoose.model("Mechanic",mechanicSchema)