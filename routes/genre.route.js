const express = require('express');
const router = express.Router();

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


module.exports = router;