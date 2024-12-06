const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "./config.env" });

const app = express();
const port = 5000;

// Consenti le richieste da localhost:3000
app.use(
  cors({
    origin: "http://localhost:3000", //  dominio del  frontend
  })
);

//  legge i dati JSON
app.use(express.json());

// Connessione al database
const client = new MongoClient(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//recuper i dati dalla collezione MongoDB
async function getDataFromDB(collectionName) {
  try {
    await client.connect();
    const db = client.db("traker");
    const collection = db.collection(collectionName);
    const data = await collection.find().toArray(); //dati come array
    return data;
  } catch (e) {
    console.error("Errore nella connessione o nella query:", e);
    throw e;
  } finally {
    await client.close();
  }
}

//Endpoint dati CO2
app.get("/api/co2", async (req, res) => {
  try {
    await client.connect();
    const db = client.db("traker");
    const collection = db.collection("co2_data"); // Collezione CO2
    const data = await collection.find().toArray();
    res.json(data); //formato JSON
  } catch (err) {
    console.error(err);
    res.status(500).send("Errore del server");
  } finally {
    await client.close();
  }
});

//Endpoint  metano
app.get("/api/methane", async (req, res) => {
  try {
    const data = await getDataFromDB("methane_data"); //  collezione methane
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Errore del server");
  }
});

// Endpoint NO2
app.get("/api/no2", async (req, res) => {
  try {
    const data = await getDataFromDB("no2_data");
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Errore del server");
  }
});

// Endpoint temperatura
app.get("/api/temperature", async (req, res) => {
  try {
    const data = await getDataFromDB("temperature_data");
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Errore del server");
  }
});

// Avvia  server
app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});
