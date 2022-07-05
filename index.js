
const express = require('express')
const multer = require('multer')
require('./src/db/conn')
const { User, Emergency } = require('./src/models/userSchema')
const PORT = process.env.PORT || 3000;
const path = require('path');
const { create } = require('domain');


app = express();
app.use(express.json())

//multer storage

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/images")
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})

var upload = multer({ storage: storage });


var multipleimages = upload.fields([{ name: "front" }, { name: "back" }, { name: "selfie" }])

//routes started 

// default page
app.get("/", (req, res) => {
    res.send("HELLO THIS IS SERVER")
})






//post users


app.post("/users", multipleimages, (req, res) => {

    console.log("HELLO", req.body)

    const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phonenumber: req.body.phonenumber,
        language: req.body.language,
        dob: req.body.dob,
        currency: req.body.currency,
        address: req.body.address,
        houseno: req.body.houseno,
        state: req.body.state,
        city: req.body.city,
        street: req.body.street,
        zipcode: req.body.zipcode,
        issuingcountry: req.body.issuingcountry,
    })
    //user save
    user.save().then((resolve) => {
        console.log(resolve._id)
        res.json(resolve)

        //emegency data
        const emergency = new Emergency({

            emname: req.body.emname,
            emnumber: req.body.emnumber,
            emrelationship: req.body.emrelationship,
            ememail: req.body.ememail,
            emlanguage: req.body.emlanguage,
            user: resolve._id,
        })

        //emergency save
        emergency.save().then((resolve) => {
            console.log("emergencydetails saved")
            res.json("emergency details saved")
        }).catch(err => {
            console.log("emergency", err)
        })

    })
        .catch(err => {
            console.log(err)
        })
})






// //get users


app.get('/users', async (req, res) => {
    // try {
    //     const alldata = await User.find()


    //     res.send(alldata)


    // }
    // catch (e) {
    //     res.send(e)
    // }
    try {
        const emer = await Emergency.find().populate("user")


        res.send(emer)


    }
    catch (e) {
        res.send(e)
    }



})

// get by idd 
app.get('/users/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const userdata = await Emergency.findById({ _id: _id })
        res.send(userdata)

    }
    catch (e) {
        res.send(e)
    }
})



// delete
app.delete('/users/:id', async (req, res) => {
    try {

        const deleteuser = await User.findByIdAndDelete(req.params.id)
        if (!req.params.id) {
            return res.status(400).send();
        }
        res.send(deleteuser)


    }
    catch (e) {
        res.send(e)
    }
})
app.listen(PORT, () => {
    console.log(`you are listening to ${PORT}`)
})