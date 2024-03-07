const User = require("../models/users");

exports.addUser = (req, res) => {
  User.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
};
exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
};
exports.getUser = (req, res) => {
  const id = req.params.id;
  User.findById({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
};
exports.delUser = (req, res) => {
  const id = req.params.id;
  User.findByIdAndDelete({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
};
exports.editUser = (req, res) => {
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
};


