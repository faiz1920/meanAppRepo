const express = require('express');
const router = express.Router();

// Users Routes
router.get('/users', (req, res) => {
    User.getUsers((err, users) => {
        if (err) throw err;
        res.json(users);
    });
});

router.get('/user/:id', (req, res) => {
    User.getUserById(req.params.id, (err, user) => {
        if (err) throw err;
        res.json(user);
    });
});

router.post('/user/login', (req, res) => {
    console.log(req.body);
    User.userLogin(req.body, (err, user) => {
        console.log("err " + err);
        console.log("user " + user.length);
        if (err) throw err;
        if (user && user.length > 0)
            res.json(user);
        else
            res.json(false);
    });
});

router.post('/user', (req, res) => {
    var user = req.body;
    User.addUser(user, (err, user) => {
        if (err) throw err;
        res.json(user);
    });
});
router.put('/user/:id', (req, res) => {
    var id = req.params.id;
    var user = req.body;
    User.updateUser(id, user, {}, (err, user) => {
        if (err) throw err;
        res.json(user);
    });
});

router.delete('/user/:id', (req, res) => {
    var id = req.params.id;
    User.deleteUser(id, (err, genre) => {
        if (err) throw err;
        res.json(genre);
    });
});


module.exports = router;