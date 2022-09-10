const AWS = require('aws-sdk');

const upload = async (bucket, data) => {
  AWS.config.update({ region: 'us-east-1' });
  const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

  const buffer = Buffer.from(data, 'base64');

  const uploadParams = {
    Key: 'documento.pdf',
    Body: buffer,
    ContentEncoding: 'base64',
    ContentType: 'application/pdf',
    Bucket: bucket
  };

  //call S3 to retrieve upload file to specified bucket
  await s3.upload(uploadParams, function (err, data) {
    if (err) {
      console.log("Error", err);
      return 'Error';
    } if (data) {
      console.log("Upload Success", data.Location);
      return 'Success';
    }
  });
}

module.exports.S3 = {
  upload
}