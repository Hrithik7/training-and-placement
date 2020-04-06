var mongoose = require("mongoose");
var College = require('./College');
var TPOSchema = new mongoose.Schema({
    fullname: String,
    mobile_no: String,
    address: String,
    status: { type: String, default: 'pending' },
    city: String,
    state: String,
    postal_code: String,
    password: String,
    email: String,
    type:{ type:String, default: 'TPO' },
    College: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "College"
        },
        College_name: String
    }
});
module.exports = mongoose.model("TPO", TPOSchema);

