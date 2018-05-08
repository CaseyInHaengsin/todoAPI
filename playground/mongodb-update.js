
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

    if(err) {
        return console.log('Unable to connect to the database server.');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

/*    db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5af1d25ec75b9f037f48d9b6')},

        {$set:
                {
                    completed: true
                },

        },
        {returnOriginal: false}).then((result) => {
        console.log(result);
    });*/
/*

    db.collection('Users').findOneAndUpdate({_id: new ObjectID('5af1d8b3c75b9f037f48d9d0')},

        {$set:
                {
                    name: 'Ben'
                },

        },
        {returnOriginal: false}).then((result) => {
        console.log(result);
    });
*/


    db.collection('Users').findOneAndUpdate({_id: new ObjectID('5af1d8b3c75b9f037f48d9d0')},

        {$inc:
                {
                    age: 1
                },

        },
        {returnOriginal: false}).then((result) => {
        console.log(result);
    });

    //client.close();

});