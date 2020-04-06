var mongoose = require("mongoose");
var Student = require("./Student");
var Company = require("./Company");
var Requirement = require("./Requirement");
var ShortListSchema = new mongoose.Schema({
    status: String,
    Student: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student"
    }],
    Requirement: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Requirement"
    }],
    Company: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company"
    }]
});
module.exports = mongoose.model("ShortList", ShortListSchema);

