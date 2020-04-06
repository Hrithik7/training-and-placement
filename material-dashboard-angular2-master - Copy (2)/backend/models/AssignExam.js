var mongoose = require("mongoose");
var Student = require("./Student");
var Exam = require("./CreateExam");
var AssignExamSchema = new mongoose.Schema({
    Assign_date: Date,
    Student: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student"
    }],
    Exam: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Exam"
    }],
});
module.exports = mongoose.model("AssignExam", AssignExamSchema);

