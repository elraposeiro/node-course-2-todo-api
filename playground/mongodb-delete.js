//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if (err) {
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to Mongo DB Server');

// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
//   console.log(result);
// });


// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
//   console.log(result);
// });

// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//   console.log(result);
// });
//  db.close();


db.collection('Users').deleteMany({name: 'Filipe'}).then((result) => {
  console.log(result);
});

db.collection('Users').findOneAndDelete({_id: ObjectID("59bd4dfd3337f3658c011c9e")}).then((result) => {
  console.log(result);
});

});
