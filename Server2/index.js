require('newrelic');
const express = require('express');
const path = require('path');
const app = express();
const PORT = 8000;
const cass = require('../database/Cassandra/index.js');
const psql = require('../database/Postgresql/index.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/api/Products', (req,res) => {
  console.log(req.method, 'i was invoked');
  cass.getdata(res);
});


app.post('api/Products', (req,res) => {
  var listingdata = req.body;
  psql.postdata(listingdata, res)
});


app.put('api/Products', (req,res) => {

});


app.delete('api/Products', (req,res) => {

});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
