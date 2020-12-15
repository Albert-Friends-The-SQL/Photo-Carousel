const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
  keyspace: 'test'
});


var getdata = (res) => {
  var listingid = Math.floor(Math.random() * (10000000) + 1);
  client.execute(`Select photo_id, link, color from listings where Listing_num = ${listingid}`)
  .then((data) => {
    var rows = data.rows
    var ordereddata = {id: listingid};
    for(var i = 0; i < rows.length; i ++) {
      var current = rows[i]
      if(!ordereddata[current.color]) {
        ordereddata[current.color] = [];
      }
      ordereddata[current.color].push({url: current.link, id: current.photo_id})
    }
    return ordereddata;
  })
  .catch(e => {
    console.log(e);
    res.sendStatus(503)
  })
  .then((structureddata) => {
    res.send(structureddata);
  });
}
// photo_id & link & color




// var postdata = (res) => {
//   var listingid = Math.floor(Math.random() * (10000000) + 1);
//   client.execute(`Select photo_id, link, color from listings where Listing_num = ${listingid}`)
//   .then((data) => {
//     var rows = data.rows
//     var ordereddata = {id: listingid};
//     for(var i = 0; i < rows.length; i ++) {
//       var current = rows[i]
//       if(!ordereddata[current.color]) {
//         ordereddata[current.color] = [];
//       }
//       ordereddata[current.color].push({url: current.link, id: current.photo_id})
//     }
//     return ordereddata;
//   })
//   .catch(e => {
//     console.log(e);
//     res.sendStatus(503)
//   })
//   .then((structureddata) => {
//     console.log(structureddata)
//     res.end();
//   });
// }

module.exports = {
  getdata
}