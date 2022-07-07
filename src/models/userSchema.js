const mongoose = require('mongoose');
const validator = require('validator');


const phonenumberSchema = new mongoose.Schema({
    Phonenumber: String
})

const userSchema = new mongoose.Schema({
    phoneNo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Phonenumber"
    },
    language: {
        lang: {
            type: String,
            required: true,

        },
        currency: {
            type: String,
            required: true,

        }
    },
    dob: {
        type: Date,
        required: true,
    },

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
    address: {
        houseno: {
            type: String,
            required: true,
        },
        street: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        zipcode: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },

    }
})



const idProof = new mongoose.Schema({
    issu_country: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    name: {
        type: String,

    },
    front: {
        type: String,

    },
    back: {
        type: String,

    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    phoneNo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Phonenumber"
    },

})

const selfieSchema = new mongoose.Schema({
    selfie: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    phoneNo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Phonenumber"
    },
})




const emegencySchema = new mongoose.Schema({
    emergencyData: {
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
        // user: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: 'User'
        // },
        phoneNo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Phonenumber"
        },
    }
})





const OtpNUmber = new mongoose.model("Phonenumber", phonenumberSchema)
const User = new mongoose.model('User', userSchema);
const Emergency = new mongoose.model('Emergency', emegencySchema);
const IdProof = new mongoose.model('IdProof', idProof);
const Selfie = new mongoose.model('Selfie', selfieSchema)
module.exports = { User, Emergency, IdProof, Selfie, OtpNUmber };