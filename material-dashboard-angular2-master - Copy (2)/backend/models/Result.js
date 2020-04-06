var mongoose = require("mongoose");
var Student = require("./Student");
var Exam = require("./CreateExam");
var SubTPO = require("./Sub_TPO");
var ResultSchema = new mongoose.Schema({
    Total_Marks: String,
    result_status: String,
    Total_Marks_Obtain: String,
    Date_of_Exam: Date,
    Date_of_Declaration: Date,
    Student: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student"
    }],
    Exam: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Exam"
    }],
    SubTPO: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTPO"
    }]
});
module.exports = mongoose.model("Result", ResultSchema);

