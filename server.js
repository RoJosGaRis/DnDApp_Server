require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", (error) => console.error(error));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use(express.json());
app.use(cors());

const creatureRouter = require("./routes/creatures");
app.use("/creatures", creatureRouter);

app.listen(4000, () => {
  console.log("Server is running on port 27017");
});
