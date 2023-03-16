const validator = require('validator');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    studentId: {
        type: String,
        required: true,
        unique: [true, "Student Number already exists"],
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },

    createdAt: {
            type: Date,
            default: Date.now
        },

    // password: {
    //     type: String,
    //     required: [true, "Please enter your email"],
    //     minLength: [6, "Your password must be at least 6 characters long"],
    //     select: false, //don't send back password after request
    // },
    // role: {
    //     type: String,
    //     default: 'user',
    //     enum: {
    //         values: [
    //             'user',
    //             'admin'
    //         ],
    //     }
    // },
    // createdAt: {
    //     type: Date,
    //     default: Date.now
    // },

});
const Student = mongoose.model("Students", studentSchema);
module.exports = { Student };
