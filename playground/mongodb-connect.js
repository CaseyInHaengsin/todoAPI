

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

    if(err) {
       return console.log('Unable to connect to the database server.');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

  /*  db.collection('Todos').insertOne({
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

    db.collection('Users').insertOne({
        name: 'Casey',
        age: 28,
        location: 'Salt Lake City'
    }, (err, result) => {
        if(err){
            return console.log('unable to insert user', err);
        }
        console.log(JSON.stringify(result.ops));

    })

    client.close();

});