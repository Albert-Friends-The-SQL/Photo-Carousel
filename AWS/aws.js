const AWS = require('aws-sdk');
const request = require('./config.js');


AWS.config.update({
  accessKeyId: request.request.accessKeyId,
  secretAccessKey: request.request.secretAccessKey
});

var s3 = new AWS.S3();

const sharp = require('sharp');
const axios = require('axios');

axios.get('https://loremflickr.com/1500/585')
  .then((data) => {
    var upload = new AWS.S3.ManagedUpload({
      params: {
        Bucket: albumBucketName,
        Key: photoKey,
        Body: data,
        ACL: "public-read"
      }
    });
    return upload;
  })
  .catch((e) => {
    console.log(e)
  });

// var uploadPhotos = () => {
//   sharp('https://loremflickr.com/1500/585').toBuffer(function(err, outputBuffer) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log (outputBuffer);
//     }

//   })
// }

// console.log()

// uploadPhotos();
