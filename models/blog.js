const mongoose = require("mongoose")
const schema =  mongoose.Schema(
    {
        "name":String,
        "emailid":String,
        "password":String
        
    }
)
let blogmodel = mongoose.model("users",schema);
module.exports = {blogmodel}