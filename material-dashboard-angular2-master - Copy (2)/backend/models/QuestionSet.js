var mongoose = require("mongoose");
var Company = require("./Company");
var Designation = require("./Designation");
var Exam = require("./CreateExam");
var QuestionSetSchema = new mongoose.Schema({
    Question_name: String,
    Option1: String,
    Option2: String,
    Option3: String,
    Option4: String,
    Answer: String,
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
    }],
    Exam: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Exam"
    }]
});
module.exports = mongoose.model("Question", QuestionSetSchema);

