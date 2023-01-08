const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const mongoose = require("mongoose");

const CONNECTION_URL =
  "mongodb+srv://developer:teamKryoTek.007@kryotek-mongo-cbqnm.mongodb.net/test?retryWrites=true";
const DATABASE_NAME = "demo";

// Models
Genre = require("./models/genre");
Book = require("./models/book");
Customer = require("./models/customer");
User = require("./models/user");
Product = require("./models/product");

var app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

var database, collection;

app.listen(3000, () => {
  mongoose.connect(CONNECTION_URL);
  database = mongoose.connection
    .on("connected", () => {
      console.log(`Connected to Mongo Database => ${CONNECTION_URL}`);
      //   createCollections();
      //   console.log(User.find());

      User.getUsers((err, users) => {
        if (err) throw err;
        console.log(users);
      });
    })
    .on("error", () => {
      console.log(`Error in Mongo Database Connection => ${CONNECTION_URL}`);
    });

  //   MongoClient.connect(CONNECTION_URL, (error, client) => {
  //     if (error) {
  //       throw error;
  //     }
  //     database = client.db(DATABASE_NAME);
  //     console.log("Connected to `" + DATABASE_NAME + "`!");
  //     createCollections();
  //   });
});

function createCollections() {
  let collectionsName = ["User", "User", "User"];
  // check collection exits
  collectionsName.forEach(collectionName => {
    database
      .collection(collectionName)
      .find({})
      .toArray(function(err, result) {
        if (err) throw err;
        //   if no record found insert demo data and create collection
        if (result.length <= 0) {
          console.log("Creating Collection : " + collectionName);
          collection = database.collection(collectionName);
          User.create(
            {
              user_name: "faiz1920",
              password: "myPassword",
              user_type: "admin",
              create_date: new Date()
            },
            r => {
              console.log(r);
            }
          );
          //   collection.insert(
          //     { firstname: "Maria", lastname: "Raboy" },
          //     (error, result) => {
          //       if (result) {
          //         console.log("Collection Created : " + collectionName);
          //       }
          //     }
          //   );
        }
      });
  });
}
