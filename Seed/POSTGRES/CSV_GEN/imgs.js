const fs = require('fs');

const writelinks = fs.createWriteStream('/tmp/imgs.csv');
writelinks.write('id,link\n', 'utf8');

function createimglinks (writer, encoding, callback) {
  let i = 1000;
  let id = -1;
  function write() {
    let ok = true;
    do {
      i --;
      id ++;
      const link = `https://sdc-main-carousel.s3-us-west-1.amazonaws.com/images/${id}.jpg`;
      const data = `${id}, ${link}\n`;
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




createimglinks(writelinks, 'utf8', () => {
  writelinks.end();
})

//node ./Seed/POSTGRES/CSV_GEN/imgs.js