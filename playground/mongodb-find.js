//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if (err) {
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to Mongo DB Server');

//   db.collection('Todos').find({_id: new ObjectID('59bd4b1bb679427b684be0b6')
// }).toArray().then((docs) => {
//     console.log('Todos');
//     console.log(JSON.stringify(docs, undefined, 2));
//   }, (err) => {
//     console.log('Unable to fetch todos', err);
//   });
//
// //  db.close();
// });

// db.collection('Todos').find()
// .count().then((count) => {
//   console.log(`Todos count: ${count}`);
//
// }, (err) => {
//   console.log('Unable to fetch todos', err);
// });
//
// //  db.close();
// });

db.collection('Users').find({name: 'Filipe'})
.toArray().then((docs) => {
  console.log(JSON.stringify(docs, undefined, 2));

}, (err) => {
  console.log('Unable to fetch todos', err);
});

//  db.close();
});
