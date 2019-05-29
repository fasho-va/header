//imports
const express = require("express");
const db = require("../database/index");
const app = express();
const port = 3004;

//middlewear
app.use(express.static('public'));


//routes
app.get("/api/names", (req,res) => {
  db.retrieveAllNames((err,names) => {
    if (err) {
      console.log("error", err);
    } else {
      res.status(200);
      res.send(names);
    }
  })
})


//listen
app.listen(port, console.log(`listening on port ${port}`));