var mongoose = require("mongoose");
var AdminSchema = new mongoose.Schema({
    email: String,
    password: String,
    type:{ type:String, default: 'Admin' },
});
module.exports = mongoose.model("Admin", AdminSchema);

