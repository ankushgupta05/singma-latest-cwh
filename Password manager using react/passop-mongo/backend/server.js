const express = require('express')
const app = express()

// require('dotenv').config()
// console.log(process.env.MONGO_URI) // remove this after you've confirmed it is working

const dotenv = require('dotenv')
const { MongoClient } = require('mongodb');
const bodyparser = require('body-parser')

const cors = require('cors')

app.use(bodyparser.json())
app.use(cors())

dotenv.config()

// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'passop';



const port = 3000
// await client.connect();
client.connect();

// get all the password
app.get('/',async (req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.find({}).toArray();
//   res.send('Hello World22!')
  res.json(findResult)

})

// Save a password
app.post('/',async (req, res) => {
    const password = req.body
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    // const findResult = await collection.find({}).toArray();
    const findResult = await collection.insertOne(password)
//   res.send('Hello World22!')
//   res.send(req.body)
  res.send({success:true , result: findResult})

})


// Delete a password
app.delete('/',async (req, res) => {
    const password = req.body
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    // const findResult = await collection.find({}).toArray();
    const findResult = await collection.deleteOne(password)
//   res.send('Hello World22!')
//   res.send(req.body)
  res.send({success:true , result: findResult})

})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})


/* 
install :-
npm i  dotenv

source 'https://www.npmjs.com/package/dotenv'
*/


/* 
mongodb package install

npm i mongodb

source  'https://www.npmjs.com/package/mongodb'
*/


/* 
install 

npm i body-parser

*/