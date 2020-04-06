const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const TPO = require("./models/TPO");
const Student=require("./models/Student");
const Company=require("./models/Company");
const College = require("./models/College");
const Dept = require("./models/Department");
const Designation = require("./models/Designation");
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
mongoose.connect('mongodb://localhost:27017/Training_and_placement', { useNewUrlParser: true }).then(() => {
    console.log('Database connection successful')
})
    .catch(err => {
        console.error('Database connection error')
    })
    
app.use(bodyParser.json({limit: '50mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))
// MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {

//     db = client.db("Training_and_placement");

// });
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
});
// 
app.get('/api/collegelist', (req, res) => {
    // College.find({}).toArray(function (err, colleges) {
    //     var list = {};

    //     res.status(201).json({
    //         list: college
    //     });
    // });
    // College.find({}, function (err, result) {
    //     if (err) throw err;
    //     typeof (result);
    //     console.log("Find Operations: " + result);
    //     res.status(201).json({
    //         list: result
    //     });
    // });
    // });
    Dept.find().then(documents => {
        res.status(201).json({
            list: documents
        });

    })

});

app.post("/api/registerTPO", (req, res) => {
    console.log("hello");
    var tpo = new TPO({
        fullname: req.body.fullname,
        email: req.body.email,
        password: req.body.password,
        state: req.body.state,
        city: req.body.city,
        mobile_no: req.body.mobile_no,
        postal_code: req.body.postal_code,
        address: req.body.address
    });
    tpo.save();
    res.status(201).json({
        message: "TPO added Successfully"
    });
});
app.post("/api/registerCompany", (req, res) => {
    console.log("In server");
    var company = new Company({
        name: req.body.name,
        email: req.body.email,
        Company_Type:req.body.Company_type,
        password: req.body.password,
        state: req.body.state,
        city: req.body.city,
        mobile_no: req.body.mobile_no,
        postal_code: req.body.postal_code,
        address: req.body.address,
        registrationCerti: req.body.registrationCerti,
        registrationNo: req.body.registrationNo,
        logo: req.body.logo,
        about: req.body.about,
        type: req.body.type
    });
    company.save();
    res.status(201).json({
        message: "Company added Successfully"
    });
});
app.post("/api/registerStudent", (req, res) => {
    var student = new Student({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        mobile_no: req.body.mobile_no,
        enrollement_no:req.body.enrollement_no,
    });
    student.save();
    res.status(201).json({
        message: "Student added Successfully"
    });
});


app.post('/login', (req, res) => {

    if(req.body.type=='TPO'){
    TPO.findOne({ email: req.body.email, password: req.body.password,type:req.body.type }, (err, result) => {
        if (err) {
            console.log(err);

        }
        else {
            if (result) {
                console.log(result);
                res.status(201).json({
                    
                    message: "Successful",
                    list: result
                });
            }

            else {
                res.status(201).json({
                    message: "failed"
                });
            }

        }
    });
}
   else if (req.body.type == 'Company') {
        Company.findOne({ email: req.body.email, password: req.body.password, type: req.body.type }, (err, result) => {
            if (err) {
                console.log(err);

            }
            else {
                if (result) {
                    console.log(result);
                    res.status(201).json({

                        message: "Successful",
                        list: result
                    });
                }

                else {
                    res.status(201).json({
                        message: "failed"
                    });
                }

            }
        });
    }

});
app.get('/api/listTPO', (req, res) => {
    var list = [];
    TPO.find({ status: "Pending" }, (err, tpolist) => {
        if (err) {
            console.log(err);
        }
        else {
            res.status(201).json({
                tpolist: tpolist
            });
        }

    })
});
app.get('/api/approvedTPO', (req, res) => {
    var list = [];
    TPO.find({ status: "Active" }, (err, tpolist) => {
        if (err) {
            console.log(err);
        }
        else {
            res.status(201).json({
                tpolist: tpolist
            });
        }

    })
});
app.get('/api/listCompany', (req, res) => {
    var list = [];
    TPO.find({ status: "Pending" }, (err, companylist) => {
        if (err) {
            console.log(err);
        }
        else {
            res.status(201).json({
                companylist: companylist
            });
        }

    })
});
app.get('/api/approvedCompany', (req, res) => {
    var list = [];
    TPO.find({ status: "Active" }, (err, companylist) => {
        if (err) {
            console.log(err);
        }
        else {
            res.status(201).json({
                companylist: companylist
            });
        }

    })
});
app.get('/api/statustoactive/:id', (req, res) => {
    TPO.findByIdAndUpdate(req.params.id, { "status": "Active" }, (err, tpo) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Activated");
            res.status(201).json({
                message: "TPO Activated"
            });
        }
    })
});
app.get('/api/statustopending/:id', (req, res) => {
    TPO.findByIdAndUpdate(req.params.id, { "status": "Pending" }, (err, tpo) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Deactivated");
            res.status(201).json({

                message: "TPO Pending"
            });
        }
    })
});
module.exports = app;
// app.post('/api/addcollege', (req, res) => {

    //     var designation = new Designation({
    //         Designation_name: req.body.Designation_name

    //     })
    //     designation.save();
    // });