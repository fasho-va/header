const mysql = require('mysql');

const db = mysql.createConnection({
  host : "localhost",
  user: "root",
  password : "",
  database: "fashova"
});

const retrieveInfo = (callback) => {
  let sql = "SELECT  uuid, name, price FROM womens_jeans";
  db.query(sql, (err,names) => {
    if (err) {
      callback(err);
    } else {
      callback(null,names);
    }
  })
}

module.exports = {
  retrieveInfo,
}