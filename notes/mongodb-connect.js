const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/todos', (err, client) => {
  if (err) {
    console.log(err.message)
    return
  }
  const db = client.db('todos')
  console.log('Connect to MongoDB')
  // db.collection('Todos').insertOne({
  //   text: 'do something else',
  //   completed: false
  // }).then(todo => console.log(todo.ops)).catch(err => console.log(err.message))

  // db.collection('Users').insertOne({
  //   name:'User Guy',
  //   age: 33,
  //   location: 'here'
  // }).then(todo => console.log(todo.ops))
  // .catch(err => console.log(err.message))

  db.collection('Todos').find()
  .toArray()
  .then(todos => console.log(todos))
  .catch(err => console.log(err.message))

  client.close()
})
