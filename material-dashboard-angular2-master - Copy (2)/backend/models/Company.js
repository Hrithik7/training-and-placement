var mongoose = require("mongoose");

var CompanySchema = new mongoose.Schema({
    name: { type:String, default: '' },
    logo: { type:String, default: '' },
    Company_type: { type:String, default: '' },
    about: { type:String, default: '' },
    registrationCerti: { type:String, default: '' },
    RegistrationNo: { type:String, default: '' },
    mobile_no: { type:String, default: '' },
    address: { type:String, default: '' },
    status: { type:String, default: 'Pending' },
    city: { type:String, default: '' },
    state: { type:String, default: '' },
    postal_code: { type:String, default: '' },
    password: { type:String, default: '' },
    email: { type:String, default: '' },
    type:{ type:String, default: 'Company' },
});
module.exports = mongoose.model("Company", CompanySchema);

