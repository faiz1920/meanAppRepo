//Importing Modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
// const path = require('path');
const app = express();
const port = 3000;
const dbUrl = 'mongodb://localhost/demo';
const multer = require("multer");

// Models
Genre = require('./models/genre');
Book = require('./models/book');
Customer = require('./models/customer');

// Routes
const routeApp = require('./routes/app.route');
const routeGenre = require('./routes/genre.route');
const routeBook = require('./routes/book.route');
const routeCustomer = require('./routes/customer.route');



// Middleware
app.use(bodyParser({ limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
//Enables Cross Origin Resource Sharing
// app.use(cors());  
app.use(function (req, res, next) {
    //set headers to allow cross origin request.
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/api', routeApp);
app.use('/api', routeGenre);
app.use('/api', routeBook);
app.use('/api', routeCustomer);

//Database Connection
mongoose.connect(dbUrl);
// mongoose.connection.on('connected', () => {
//     console.log(`Connected to Mongo Database => ${dbUrl}`);
// })
// const db = mongoose.connection;


// Database Connection
//Set up default mongoose connection
// const mongoDBUrl = 'mongodb://localhost/test';
// mongoose.connect(mongoDBUrl);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('connected', console.info.bind(console, `MongoDB Connected to ${dbUrl}`));
db.on('error', console.error.bind(console, 'MongoDB connection error!'));


app.listen(port, () => {
    console.log("Server started at port : " + port);
});



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






// Node.js way of creating server
// var http = require('http');

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello World!');
// }).listen(8080);