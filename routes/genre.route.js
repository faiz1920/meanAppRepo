const express = require('express');
const router = express.Router();
const multer = require("multer");
var DIR = './uploads/';
var upload = multer({dest: DIR}).single('photo');

// Home Routes
router.get('/', (req, res) => {
    console.info("New Request...");
    res.send('Hello World');
});

// Genres Routes
// Get Genre
router.get('/genres', (req, res) => {
    console.log('route : generes');
    Genre.getGenres((err, genres) => {
        if (err) throw err;
        res.json(genres);
    });
});

// Add Genre
router.post('/genre', (req, res) => {
    var genre = req.body;
    Genre.addGenre(genre, (err, genre) => {
        if (err) throw err;
        res.json(genre);
    });
});

// Update Genre
router.put('/genre/:id', (req, res) => {
    var id = req.params.id;
    var genre = req.body;
    Genre.updateGenre(id, genre, {}, (err, genre) => {
        if (err) throw err;
        res.json(genre);
    });
});

// Delete Genre
router.delete('/genre/:id', (req, res) => {
    var id = req.params.id;
    Genre.deleteGenre(id, (err, genre) => {
        if (err) throw err;
        res.json(genre);
    });
});

// Books Routes
router.get('/books', (req, res) => {
    Book.getBooks((err, books) => {
        if (err) throw err;
        res.json(books);
    });
});
router.get('/book/:id', (req, res) => {
    Book.getBookById(req.params.id, (err, book) => {
        if (err) throw err;
        res.json(book);
    });
});

router.post('/book', (req, res) => {
    var book = req.body;
    Book.addBook(book, (err, book) => {
        if (err) throw err;
        res.json(book);
    });
});
router.put('/book/:id', (req, res) => {
    var id = req.params.id;
    var book = req.body;
    Book.updateBook(id, book, {}, (err, book) => {
        if (err) throw err;
        res.json(book);
    });
});

router.delete('/book/:id', (req, res) => {
    var id = req.params.id;
    Book.deleteBook(id, (err, genre) => {
        if (err) throw err;
        res.json(genre);
    });
});


// Upload Files
router.post('/upload', function (req, res, next) {
    var path = '';
    upload(req, res, function (err) {
        if (err) {
            // An error occurred when uploading
            console.log(err);
            return res.status(422).send("an Error occured")
        }
        // No error occured.
        path = req.file.path;
        return res.send("Upload Completed for " + path);
    });
});

module.exports = router;