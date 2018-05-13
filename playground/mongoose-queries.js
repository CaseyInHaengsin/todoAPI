const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//var id = '5af7a3693efc05068e107936';
var userID = '5af209459947fc0485e8a74c';

//query users collection



/*Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});*/

/*Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo);
});*/

/*
Todo.findById({id}).then((todo) => {
    if(!todo){
        return console.log('Id not found');
    }
    console.log('Todo by Id', todo);
}).catch((e) => console.log(e));
*/



User.findById(userID).then((user) => {
   if(!user){
       return console.log('ID not found for user');
   }
   console.log('User by ID', user);
}).catch((e) => console.log(e));