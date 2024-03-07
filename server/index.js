const express = require("express");
// const axios = require("axios");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/users.js");

const port = 1001;

const app = express();
app.use(express.json());

app.use(cors());

mongoose.connect("mongodb://localhost/userCRUD");

app.post("/createUser", (req, res) => {
  User.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
}); 

app.get("/", (req, res) => {
  User.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  User.findById({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;
  User.findByIdAndDelete({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  User.findByIdAndUpdate(
    { _id: id },
    {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
    }
  )
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});