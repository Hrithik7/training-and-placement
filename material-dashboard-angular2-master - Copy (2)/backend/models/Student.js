var mongoose = require("mongoose");
var SubTPO = require("./TPO");
var Dept = require("./Department");
var College = require("./College");
var StudentSchema = new mongoose.Schema({
    firstname: { type:String, default: '' },
    lastname: { type:String, default: '' },
    enrollement_no:{ type:String, default: '' },
    mobile_no: String,
    address:  { type:String, default: '' },
    gender:  { type:String, default: '' },
    dob:  { type:String, default: '' },
    status: { type:String, default: 'Active' },
    update_profile:{type:String,default:'Pending'},
    city:  { type:String, default: '' },
    state:  { type:String, default: '' },
    postal_code:  { type:String, default: '' },
    password: { type:String, default: '' },
    email: { type:String, default: '' },
    type:{ type:String, default: 'Student' },
    Dept: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Dept",
            default: null
        },
        Dept_name: String
    },
    SubTPO_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "TPO",
        default: null
    }],
    College: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "College",
            default: null
        },
        College_name: String
    },
});
module.exports = mongoose.model("Student", StudentSchema);

