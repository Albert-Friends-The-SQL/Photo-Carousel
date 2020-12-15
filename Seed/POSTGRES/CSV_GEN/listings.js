
const fs = require('fs');

const writelistings = fs.createWriteStream('/tmp/sqllistings.csv');
writelistings.write('id, Productimg, Listingnum, colorway\n', 'utf8');



function Createproductlistings (writer, encoding, callback) {
  var counter = 1;
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i --;
      id ++;
      var data = '';
      var color = ['red','blue','green'];
      var numvars = Math.floor(Math.random() * (3) + 1);
      for(var j = 0; j < numvars; j++) {
        var randomindex = Math.floor(Math.random() * (color.length));
        var variant = color.splice(randomindex,1);
        var numimgs = Math.floor(Math.random() * (6 - 3 + 1) + 3);
        for(var b = 0; b < numimgs; b++) {
          var imgkey = Math.floor(Math.random() * (999 + 1));
          data += `${counter},${imgkey}, ${id}, ${variant}\n`;
          counter ++;
        }

      }
      if (i === 0) {
        writer.write(data, encoding, callback)
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if( i > 0) {
      writer.once('drain',write);
    }
  }
  write();
}



Createproductlistings(writelistings, 'utf8', () => {
  writelistings.end();
})


//node ./Seed/POSTGRES/CSV_GEN/listings.js