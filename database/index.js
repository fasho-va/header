const mysql = require('mysql');

const db = mysql.createConnection({
  host : "localhost",
  user: "root",
  password : "",
  database: "fashova"
});

const retrieveAllNames = (callback) => {
  let sql = "SELECT name FROM womens_jeans";
  db.query(sql, (err,names) => {
    if (err) {
      callback(err);
    } else {
      callback(null,names);
    }
  })
}

module.exports = {
  retrieveAllNames,
}