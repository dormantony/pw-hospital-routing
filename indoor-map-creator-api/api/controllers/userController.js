'use strict';
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Project = mongoose.model('Project');

exports.getUserById = function (req, res) {
  console.log('req.body.userId2: ' + req.body.userId);
  User.findOne({ userId: req.body.userId }, function (err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.deleteUserById = function (req, res) {
  User.remove({
    userId: req.body.userId
  }, function (err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
};

exports.createUser = function (req, res) {
  console.log(req.body);
  var newUser = new User(req.body);
  newUser.save(function (err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.getAllProjectsByUserById = function (req, res) {
  console.log(req.params.userId);
  User.findOne({ _id: req.params.userId })
    .populate('_projects')
    .exec(function (err, user) {
      if (err)
        res.send(err);
      res.json(user._projects);
    });
};
