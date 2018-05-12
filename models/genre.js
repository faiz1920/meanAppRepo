// import mongooes from "mongoose";
const mongooes = require('mongoose');

// Genre Schema
var genreSchema = mongooes.Schema({
    name: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

var Genre = module.exports = mongooes.model('Genre', genreSchema);

// Get Genre
module.exports.getGenres = function (callback, limit) {
    console.log('model : generes callback ' + callback);
    console.log('model : generes limit ' + limit);
    Genre.find(callback).limit(limit);
};

// Add Genre
module.exports.addGenre = function (genre, callback) {
    Genre.create(genre, callback);
};

// Update Genre
module.exports.updateGenre = function (id, genre, options, callback) {
    var query = { _id: id };
    var update = {
        name: genre.name
    };
    Genre.findOneAndUpdate(query, update, options, callback);
};

// Delete Genre
module.exports.deleteGenre = function (id, callback) {
    var query = { _id: id };
    Genre.remove(query, callback);
};