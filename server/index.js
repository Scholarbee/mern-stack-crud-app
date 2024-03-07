const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes/routes.js");

const port = process.env.PORT || 1001;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get("/", (req, res) => {
  res.send("API server is working...");
});

app.use("/api", routes);

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log("Connected to mongoDB");
  app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
  });
});
