
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

    if(err) {
        return console.log('Unable to connect to the database server.');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

/*
    db.collection('Users').find({name: 'Casey'}).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch users', err);
    })*/
    //we will use 3 methods to delete documents
    //1. deleteMany
    //2. Delete 1
    //3. findOneAndDelete


 /*   db.collection('Todos').deleteMany({text: 'Eat lunch.'}).then((result) => {
        console.log(result);
    });*/
    //client.close();

   /* db.collection('Todos').deleteOne({text: 'Eat lunch.'}).then((result) => {
        console.log(result);
    });*/

    /*db.collection('Todos').findOneAndDelete({computed: false}).then((result) => {
        console.log(result);
    })*/
    //id=  5af1c93a09666b05a3f4c805
   /* db.collection('Users').deleteMany({name: 'Casey'}).then((result) => {
        console.log(result);
    });*/

    /*db.collection('Users').findOneAndDelete({_id: new ObjectID('id here')}).then((result) => {
        console.log(JSON.stringify((result, undefined, 2)));
    });*/
});