// /Users/Kishan/mongodb/bin/mongod.exe --dbpath=/Users/Kishan/mongodb-data

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/rest-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Database Successfully Run");
  })
  .catch((e) => {
    console.log(e);
  });
