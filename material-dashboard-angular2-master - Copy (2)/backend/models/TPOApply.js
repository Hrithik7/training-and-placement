var mongoose = require("mongoose");
var Student = require("./Student");
var TPO = require("./TPO");
var Requirement = require("./Requirement");
var TPOApplySchema = new mongoose.Schema({
    status: String,
    date: Date,
    Student: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student"
    }],
    Requirement: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Requirement"
    }],
    TPO: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "TPO"
    }]

});
module.exports = mongoose.model("TPOApply", TPOApplySchema);

