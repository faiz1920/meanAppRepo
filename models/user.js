// import mongooes from "mongoose";
const mongooes = require("mongoose");

// User Schema
var userSchema = mongooes.Schema({
  // _id: {
  //     type: String,
  //     required: true
  // },
  user_name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  user_type: {
    type: String,
    required: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

var User = (module.exports = mongooes.model("User", userSchema));

// Get Users
module.exports.getUsers = function(callback, limit) {
  User.find(callback).limit(limit);
};

// Get User by Id
module.exports.getUserById = function(id, callback) {
  User.findById(id, callback);
};

// User Login
module.exports.userLogin = function(login, callback) {
  User.find(
    {
      _id: login.id,
      password: login.password
    },
    callback
  );
};

// Add User
module.exports.addUser = function(user, callback) {
  User.create(user, callback);
};

//Working
// Update User
// module.exports.updateUsers = function (id, user, options, callback) {
//     var query = {
//         _id: id
//     };
//     var update = {
//         title: user.title,
//         author: user.author
//     };
//     User.findOneAndUpdate(query, update, options, callback);
// };

// Delete User
module.exports.deleteUser = function(id, callback) {
  var query = {
    _id: id
  };
  User.remove(query, callback);
};
