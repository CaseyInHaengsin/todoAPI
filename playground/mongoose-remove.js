const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


//todo.remove
/*
Todo.remove({}).then((result) => {
    console.log(result);
});*/

Todo.findOneAndRemove({_id: '5afac65d994393051dc1f35f'}).then((todo) => {

});

Todo.findByIdAndRemove('5afac65d994393051dc1f35f').then((todo) => {
    console.log(todo);
});

