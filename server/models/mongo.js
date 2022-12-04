require('dotenv').config();

const { MongoClient, ServerApiVersion } = require('mongodb');
console.log(process.env.MONGO);
const uri = process.env.MONGO ?? "";

const options = { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 }

const client = new MongoClient(uri, options);

module.exports = {
    connect: ()=> client.connect() 
}