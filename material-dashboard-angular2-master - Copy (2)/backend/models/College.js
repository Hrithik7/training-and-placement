var mongoose = require("mongoose");
var CollegeSchema = new mongoose.Schema({
    College_name: String,
});
module.exports = mongoose.model("College", CollegeSchema);

