

const mongoose = require('mongoose');
const validator = require('validator');

var UserSchema = new mongoose.Schema({

})

var User = mongoose.model('User',
    {
        email: {
            type: String,
            minlength: 1,
            required: true,
            trim: true,
            unique: true,
            validate: {
                validator: validator.isEmail,
                message: '${VALUE} is not a valid email'
            }

        },
        password: {
            type: String,
            require: true,
            minlength: 6

        },
        tokens: [{
            access: {
                type: String,
                require: true
            },
            token: {
                type: String,
                required: true
            }
        }]



    });

module.exports = {User};