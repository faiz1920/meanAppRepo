const express = require('express');
const router = express.Router();

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


module.exports = router;