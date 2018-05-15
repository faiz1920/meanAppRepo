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