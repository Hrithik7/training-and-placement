var mongoose = require("mongoose");
var Student = require("./Student");
var Company = require("./Company");
var TPO = require("./TPO");
var FeedbackSchema = new mongoose.Schema({
    No_of_Rating: String,
    Description: String,
    Student: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student"
    }],
    Company: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company"
    }],
    TPO: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "TPO"
    }]
});
module.exports = mongoose.model("Feedback", FeedbackSchema);

