var mongoose = require("mongoose");
var Designation = require("./Designation");
var Company = require("./Company");
var CreateExamSchema = new mongoose.Schema({
    exam_type: String,
    Total_No_Ques: String,
    Total_Time: String,
    Passing_Mark: String,
    status: { String, default: 'Pending' },
    date: Date,

    Designation: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Designation"
        },
        Designation_name: String
    },
    Company: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company"
    }]
});
module.exports = mongoose.model("Exam", CreateExamSchema);

