const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  password: 'Password00/',
  database: 'Adidas',
});

connection.connect((err) => {
  if (err) console.log(err);
  console.log('MYSQL server connected!');
});

module.exports = connection;
