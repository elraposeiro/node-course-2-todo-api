//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if (err) {
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to Mongo DB Server');

// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID("59be61dad6f28f8679308d93"),
// }, {
//   $set: {
//     completed: true
//     }
//   }, {
//     returnOriginal: false
// }).then((result) => {
//   console.log(result);
// });

// db.collection('Users').findOneAndUpdate({
//   _id: new ObjectID("59bd4d0fb8a49041e0d750fd"),
// }, {
//   $set: {
//     name: 'Filipe'
//     }
//   }, {
//     returnOriginal: false
// }).then((result) => {
//   console.log(result);
// });

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID("59bd4d0fb8a49041e0d750fd"),
}, {
  $inc: { age: 1}
  }, {
    returnOriginal: false
}).then((result) => {
  console.log(JSON.stringify(result, undefined, 2));
});

// db-close();

});
