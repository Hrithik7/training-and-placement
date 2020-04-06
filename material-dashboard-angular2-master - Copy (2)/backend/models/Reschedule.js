var mongoose = require("mongoose");
var Exam = require("./CreateExam");
var QuestionSetSchema = new mongoose.Schema({
    Reschedule_date: Date,
    reason: String,

    Exam: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Exam"
    }]
});
module.exports = mongoose.model("Question", QuestionSetSchema);

