const mysql = require('mysql');

const db = mysql.createConnection({
  host : "fashova.cozsaqvvw0c6.us-east-1.rds.amazonaws.com",
  user: "root",
  password : "1a2b3c4d",
  database: "clothing"
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