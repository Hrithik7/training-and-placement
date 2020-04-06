var mongoose = require("mongoose");
var DeptSchema = new mongoose.Schema({
    Dept_name: String,
});
module.exports = mongoose.model("Dept", DeptSchema);

