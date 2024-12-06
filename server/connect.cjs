const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "../server/config.env" });

console.log("ATLAS_URI:", process.env.ATLAS_URI);
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db);

async function getDataFromDB(collectionName) {
  try {
    await client.connect();
    const db = client.db("traker");
    const collection = db.collection(collectionName);
    const data = await collection.find({}).toArray();
    return data;
  } catch (e) {
    console.error("Errore nella connessione o nella query:", e);
    throw e;
  } finally {
    await client.close();
  }
}

module.exports = { getDataFromDB };
