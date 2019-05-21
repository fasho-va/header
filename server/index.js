//imports
const express = require("express");
const app = express();
const port = 3004;

//middlewear
app.use(express.static('public'));


//routes



//listen
app.listen(port, console.log(`listening on port ${port}`));