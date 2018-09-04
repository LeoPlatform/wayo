
const AWS = require('aws-sdk')
var kinesis = new AWS.Kinesis({apiVersion: '2013-12-02'})

var params = {
  Records: [
    {
      Data: 'The quick brown fox',
      PartitionKey: '123456789',
    },
    {
      Data: 'jumped over the lazy dog',
      PartitionKey: '123456789',
    }
  ],
  StreamName: 'hello-stream'
};

kinesis.putRecords(params, function(err, data) {
  if (err) console.log(err, err.stack)
  else     console.log(data);
});