
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

    if(err) {
        return console.log('Unable to connect to the database server.');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

 /*   db.collection('Todos').find({
        _id: new ObjectID('5aef7c00836ca30accb0e2a2')
    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2))
    }, (err) => {
        console.log('unable to fetch todos', err);
    });*/
/*
    db.collection('Todos').find({name: 'Casey'}).toArray().then((docs) => {
        console.log(`Todos`);
        console.log(JSON.stringify(docs, undefined, 2))
    }, (err) => {
        console.log('unable to fetch todos', err);
    });*/

    db.collection('Users').find({name: 'Casey'}).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch users', err);
    })
    //client.close();

});