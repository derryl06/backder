const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;
const url =
  "mongodb+srv://derryl:krillgosong@cluster0.h1fw7jh.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);
// Database Name
const dbName = "derryours";

app.get("/", async (req, res) => {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("porto");
  const dataWeb = await collection.find({}).toArray();
  res.status(200).json({ dataWeb });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
