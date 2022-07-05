const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minlength: 3
    },
    lastname: {
        type: String,
        required: true,
        minlength: 3
    },
    phonenumber: {
        type: Number,
        required: true,
        min: 10,
        // unique: [true, 'phone number already exist']
    },
    language: {
        type: String,
        required: true,

    },
    dob: {
        type: Date,
        required: true,
    },
    currency: {
        type: String,
        required: true,

    },
    address: {
        type: String,
        required: true,
    },
    houseno: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    street: {
        type: String,
        required: true,
    },
    zipcode: {
        type: String,
        required: true,
    },
    issuingcountry: {
        type: String,
        required: true,
    },

    front: {
        type: String,

    },
    back: {
        type: String,

    },
    selfie: {
        type: String,

    }

})
const emegencySchema = new mongoose.Schema({
    emname: {
        type: String,
        required: true,
    },
    emnumber: {
        type: String,
        required: true,
    },
    emrelationship: {
        type: String,
        required: true,
    },
    ememail: {
        type: String,
        required: true,
    },
    emlanguage: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

const User = new mongoose.model('User', userSchema);
const Emergency = new mongoose.model('Emergency', emegencySchema);

module.exports = { User, Emergency };