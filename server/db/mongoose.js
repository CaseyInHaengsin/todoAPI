var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};

//save new something

//console.log('Server running');
/*
var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minLength: 1,
        trim: true

    },
    completed: {
        type: Boolean,
        default: false
    },

    completedAt: {
        type: Number,
        default: null
    }

});*/
//mongoose can cast a number into a string. if you pass a number instead
//of a string, it will still run.

