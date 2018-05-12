//Importing Modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
// const path = require('path');
const route = require('./routes/genre.route');
const app = express();
const port = 3000;
const dbUrl = 'mongodb://localhost/bookstore';
const multer = require("multer");

// Models
Genre = require('./models/genre');
Book = require('./models/book');


// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//Enables Cross Origin Resource Sharing
// app.use(cors());  
app.use(function (req, res, next) {
    //set headers to allow cross origin request.
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/api', route);

//Database Connection
mongoose.connect(dbUrl);
mongoose.connection.on('connected', () => {
    console.log(`Connected to Mongo Database => ${dbUrl}`);
})
// const db = mongoose.connection;



// Routes
// app.get('/', (req, res) => {
//     console.info("New Request...");
//     res.send('Hello World');
// });

// app.get('/api/genres', (req, res) => {
//     Genre.getGenres((err, genres) => {
//         if (err) throw err;
//         res.json(genres);
//     });
// });

// app.post('/api/genre', (req, res) => {
//     var genre = req.body;
//     Genre.addGenre(genre, (err, genre) => {
//         if (err) throw err;
//         res.json(genre);
//     });
// });

// app.put('/api/genre/:id', (req, res) => {
//     var id = req.params.id;
//     var genre = req.body;
//     Genre.updateGenre(id, genre, {}, (err, genre) => {
//         if (err) throw err;
//         res.json(genre);
//     });
// });

// app.delete('/api/genre/:id', (req, res) => {
//     var id = req.params.id;
//     Genre.deleteGenre(id, (err, genre) => {
//         if (err) throw err;
//         res.json(genre);
//     });
// });

// app.get('/api/books', (req, res) => {
//     Book.getBooks((err, books) => {
//         if (err) throw err;
//         res.json(books);
//     });
// });
// app.get('/api/book/:id', (req, res) => {
//     Book.getBookById(req.params.id, (err, book) => {
//         if (err) throw err;
//         res.json(book);
//     });
// });

// app.post('/api/book', (req, res) => {
//     var book = req.body;
//     Book.addBook(book, (err, book) => {
//         if (err) throw err;
//         res.json(book);
//     });
// });
// app.put('/api/book/:id', (req, res) => {
//     var id = req.params.id;
//     var book = req.body;
//     Book.updateBook(id, book, {}, (err, book) => {
//         if (err) throw err;
//         res.json(book);
//     });
// });

// app.delete('/api/book/:id', (req, res) => {
//     var id = req.params.id;
//     Book.deleteBook(id, (err, genre) => {
//         if (err) throw err;
//         res.json(genre);
//     });
// });



app.listen(port, () => {
    console.log("Server started at port : " + port);
});



// Node.js way of creating server
// var http = require('http');

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello World!');
// }).listen(8080);