var mongoose = require("mongoose");
var TPO = require("./TPO");
var Dept = require("./Deptartment");
var SubTPOSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    mobile_no: String,
    address: String,
    status: { String, default: 'Active' },
    city: String,
    state: String,
    postal_code: String,
    password: String,
    email: String,
    type:{ type:String, default: 'Sub-TPO' },
    Dept: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Dept"
        },
        Dept_name: String
    },
    TPO: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "TPO"
    }]
});
module.exports = mongoose.model("SubTPO", SubTPOSchema);

