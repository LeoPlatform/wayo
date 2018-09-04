
const AWS = require('aws-sdk')
var kinesis = new AWS.Kinesis({apiVersion: '2013-12-02'})

const DEFAULT_SHARD_ID = 'shardId-000000000000'
const DEMO_STREAM = 'demo-stream'

const ShardIteratorType = {
  AT_SEQUENCE_NUMBER : "AT_SEQUENCE_NUMBER",
  AFTER_SEQUENCE_NUMBER : "AFTER_SEQUENCE_NUMBER",
  TRIM_HORIZON : "TRIM_HORIZON",
  LATEST : "LATEST",
  AT_TIMESTAMP : "AT_TIMESTAMP"
}

kinesis.getShardIterator({
  ShardId: DEFAULT_SHARD_ID,
  ShardIteratorType: ShardIteratorType.TRIM_HORIZON,
  StreamName: DEMO_STREAM,
}, function(err, data) {
  if (err) return console.log(err, err.stack); 
  kinesis.getRecords({
    ShardIterator: data.ShardIterator,
    Limit: 10000
  }, function(err, data) {
    if (err) return console.log(err, err.stack); 
    const orders = data.Records.map(r => JSON.parse(r.Data.toString()))
    console.log(orders);
  });
});
