var mongoose = require("mongoose");
var DesignationSchema = new mongoose.Schema({
    Designation_name: String,
});
module.exports = mongoose.model("Designation", DesignationSchema);

