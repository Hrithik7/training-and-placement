var mongoose = require("mongoose");
var Designation = require("./Designation");
var Company = require("./Company");
var RequirementSchema = new mongoose.Schema({
    type: String,
    status: { String, default: 'Active' },
    Description: String,
    datefrom: Date,
    dateto:Date,
    primary_skills: String,
    job_Title:String,
    expierence:String,
    location:String,
    education_requirement:String,
    Company_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company"
    }],

    Designation: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Designation"
        },
        Designation_name: String
    },
});
    
module.exports = mongoose.model("Requirement", RequirementSchema);

