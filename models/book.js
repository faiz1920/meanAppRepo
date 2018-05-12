// import mongooes from "mongoose";
const mongooes = require('mongoose');

// Book Schema
var bookSchema = mongooes.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    author: {
        type: String
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

var Book = module.exports = mongooes.model('Book', bookSchema);

// Get Books
module.exports.getBooks = function (callback, limit) {
    Book.find(callback).limit(limit);
};

// Get Book by Id
module.exports.getBookById = function (id, callback) {
    Book.findById(id, callback);
};

// Add Book
module.exports.addBook = function (book, callback) {
    Book.create(book, callback);
};

// Update Book
module.exports.updateBook = function (id, book, options, callback) {
    var query = { _id: id };
    var update = {
        title: book.title,
        author: book.author
    };
    Book.findOneAndUpdate(query, update, options, callback);
};

// Delete Book
module.exports.deleteBook = function (id, callback) {
    var query = { _id: id };
    Book.remove(query, callback);
};