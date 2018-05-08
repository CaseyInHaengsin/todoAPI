

//const MongoClient = require('mongodb').MongoClient;
//this code (below) is identical to the code above
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

console.log(obj);

//this is object de-structuring. it is a good way to extract the value from
//an object and set it equal to a variable
//var user = {name: 'Casey', age: 28};

//var {name} = user;

//console.log(name);
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

    if(err) {
       return console.log('Unable to connect to the database server.');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

/*    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result) => {
       if(err){
           return console.log('Unable to insert todo', err);

       }

       console.log(JSON.stringify(result.ops));

    });*/

    //insert new doc into Users collection. Give it a name property, age property
    //and a location string
/*

    db.collection('Users').insertOne({
        name: 'Casey',
        _id: '123',
        age: 28,
        location: 'Salt Lake City'
    }, (err, result) => {
        if(err){
            return console.log('unable to insert user', err);
        }
        console.log(JSON.stringify(result.ops));

    });
*/





    client.close();

});