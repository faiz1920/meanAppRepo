const express = require('express');
const router = express.Router();
const multer = require("multer");
const fs = require('fs');

var DIR = './uploads/';
var upload = multer({
    dest: DIR
}).single('photo');

// Home Routes
router.get('/', (req, res) => {
    console.info("New Request...");
    res.send('Hello World');
});

//Get Menu

router.post('/menu', (req, res) => {
    var user = req.body;
    console.log(JSON.stringify(user.user_type));
    fs.readFile('json/menu.json', 'utf8', function (err, menuList) {
        if (err) {
            return res.json(err);
        }
        console.log(menuList);
        // res.json(data);

        buildMenu(JSON.parse(menuList));

    });
});

function buildMenu(menuList) {
    console.log("Building menu..." + JSON.stringify(menuList));
    let all_menu = [];
    for (let menu of menuList) {
        let keys = Object.keys(menu);
        // console.log("Keys : " + keys);
        let l_menu = new Object();
        for (let key of keys) {
            // console.log("Key : " + key)
            if (menu["access"].includes("admin")) {
                if (key === "children" && menu[key] != null) {
                    l_menu[key] = buildMenu(menu[key]);
                } else
                    l_menu[key] = menu[key];
            }
        }
        console.log("l_menu : " + JSON.stringify(l_menu));
    }
}

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