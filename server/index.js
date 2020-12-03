const express = require('express');
const path = require('path');
const model = require('../database/model.js')
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/api/shoeProduct', (req, res) => {
  res.send('hello world')
})

app.get('/api/products/shoes', (req, res) => {
  model.getDefaultSet((err, data) => {
    if (err) {
      console.log(err)
    } else {
      const allColors = data.reduce((acc, value) => {
        if (!acc[value.color]) {
          return Object.assign(acc, {[value.color]: value.url})
        } else {
          return acc;
        }
      },{})

      const prettyData = {
        colorSet: allColors,
        imgData: data
      }
      console.log(prettyData);
      res.send(prettyData)
    }
  })
});

app.get('/api/products/recItems', (req, res) => {
  model.getRecItems((err, data) => {
    if (err) {
      console.log(err)
    } else {
      res.send(data)
    }
  })
});

app.get('/api/products/CarouselItem', (req, res) => {
  model.getCarouselItems((err, data) => {
    if (err) {
      console.log(err)
    } else {
      res.send(data)
    }
  })
});



app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
