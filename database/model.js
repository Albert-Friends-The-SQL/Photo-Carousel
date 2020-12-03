const db = require('./index.js');

const getDefaultSet = (callback) => {
  //have separate main product table
  const string = `SELECT id, url, color FROM Shoes WHERE productId = 'FV1733'`

  db.query(string,(err, data) => {
    if (err) {
      callback(err)
    } else (
      callback(null, data)
    )
  })
};

const getRecItems = (callback) => {
  const string = 'SELECT url, name, price, size FROM Shirts UNION SELECT url, name, price, size FROM Pants UNION SELECT url, name, price, size FROM Socks UNION SELECT url, name, price, size FROM Accessories ORDER BY RAND() LIMIT 4'
  db.query(string, (err, data) => {
    if (err) {
      callback(err)
    } else (
      callback(null, data)
    )
  })
}

const getCarouselItems = (callback) => {
  //have separate side products table
  const string = `SELECT url, name, price FROM Shoes WHERE productId != 'FV1733' ORDER BY RAND()`

  db.query(string,(err, data) => {
    if (err) {
      callback(err)
    } else (
      callback(null, data)
    )
  })
}


module.exports = {
  getDefaultSet,
  getRecItems,
  getCarouselItems
}