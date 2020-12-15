const { Pool, Client} = require ('pg');

const client = new Client ({
  user: 'postgres',
  host: 'localhost',
  database: 'adidas',
  password: 'postgres',
  port: 5432,
})

client.connect()
.catch(err => {
  console.log(err,'Could not connect to the database');
});


//
var getdata = (res) => {
  var listingid = 9999995;
  console.log('I was invoked');
  client.query(`Select * from carousel_imgs, carousel_listings where carousel_listings.Listingnum = '${listingid}' AND carousel_listings.Productimg = carousel_imgs.id`, (err,data) => {
    if(err) {
      console.log('errrror', err);
      res.send(err);
    }
    var rows = data.rows;
    var ordereddata = {id: listingid};
    for(var i = 0; i < rows.length; i ++) {
      var current = rows[i];
      if(!ordereddata[current.colorway]) {
        ordereddata[current.colorway] = [];
      }
      ordereddata[current.colorway].push({url: current.link, id: current.id})
    }
    console.log(ordereddata);
    res.send(ordereddata);
  })
}



var postdata = (data, res) => {
// Insert into tester (Productimg, Listingnum, colorway) values (3, 1, 'gold');
  client.query(`Select * from carousel_imgs, carousel_listings where carousel_listings.Listingnum = '${listingid}' AND carousel_listings.Productimg = carousel_imgs.id`, (err,rows) => {
    if(err) {
      console.log('errrror', err);
      res.send(err);
    }
    console.log(rows);
    res.send(rows);
  })
}


var updatedata = (res) => {
// Update test_imgs set link = ${newlink} from tester where tester.id = ${id} AND tester.productimg = test_imgs.id;
  client.query(`Select * from carousel_imgs, carousel_listings where carousel_listings.Listingnum = '${listingid}' AND carousel_listings.Productimg = carousel_imgs.id`, (err,rows) => {
    if(err) {
      console.log('errrror', err);
      res.send(err);
    }
    console.log(rows);
    res.send(rows);
  })
}



var deletedata = (res) => {

  client.query(`Select * from carousel_imgs, carousel_listings where carousel_listings.Listingnum = '${listingid}' AND carousel_listings.Productimg = carousel_imgs.id`, (err,rows) => {
    if(err) {
      console.log('errrror', err);
      res.send(err);
    }
    console.log(rows);
    res.send(rows);
  })
}

// `Select * from carousel_imgs, carousel_listings where carousel_listings.Listingnum = '1' AND carousel_listings.Productimg = carousel_imgs.id`


// node ./Seed/seedimgs.js


module.exports = {
  getdata,
  postdata,
  updatedata,
  deletedata
}




//create index : testlistingnum