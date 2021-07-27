const { MongoClient } = require("mongodb");
// Replace the following with values for your environment.
// const username = encodeURIComponent("<username>");
// const password = encodeURIComponent("<password>");
// const clusterUrl = "<MongoDB cluster url>";

const username = "root";
const password = "IIB2rhzGpS92O0kR";
const dbName = "full_dse"
const authMechanism = "SCRAM-SHA-256";
// Replace the following with your MongoDB deployment's connection string.

const uri =
  `mongodb+srv://${username}:${password}@cluster0.pgge9.mongodb.net/${dbName}?retryWrites=true&w=majority`;

  // Create a new MongoClient
const clientDB = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// Function to connect to the server
async function run() { 
    // Connect the client to the server
    await clientDB.connect();
    console.log("Connected successfully to server");
}

run().catch(console.dir);

module.exports = clientDB;