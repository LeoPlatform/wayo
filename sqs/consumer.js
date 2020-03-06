const AWS = require('aws-sdk')
const uuid = require('uuid')
const sqs = new AWS.SQS({apiVersion: '2012-11-05'})

const DEMO_SQS_URL = 'https://sqs.us-west-2.amazonaws.com/111111111111/demo-queue'
const MAX_LONG_POLL = 20
const AttributeNames = {
  All : 'All',
  Policy : 'Policy',
  VisibilityTimeout : 'VisibilityTimeout',
  MaximumMessageSize : 'MaximumMessageSize',
  MessageRetentionPeriod : 'MessageRetentionPeriod',
  ApproximateNumberOfMessages : 'ApproximateNumberOfMessages',
  ApproximateNumberOfMessagesNotVisible : 'ApproximateNumberOfMessagesNotVisible',
  CreatedTimestamp : 'CreatedTimestamp',
  LastModifiedTimestamp : 'LastModifiedTimestamp',
  QueueArn : 'QueueArn',
  ApproximateNumberOfMessagesDelayed : 'ApproximateNumberOfMessagesDelayed',
  DelaySeconds : 'DelaySeconds',
  ReceiveMessageWaitTimeSeconds : 'ReceiveMessageWaitTimeSeconds',
  RedrivePolicy : 'RedrivePolicy',
  FifoQueue : 'FifoQueue',
  ContentBasedDeduplication : 'ContentBasedDeduplication',
  KmsMasterKeyId : 'KmsMasterKeyId',
  KmsDataKeyReusePeriodSeconds : 'KmsDataKeyReusePeriodSeconds'
}
const consumerInstanceId = uuid.v4()

function processData(data) {
  console.log(`${consumerInstanceId} received data`)
  if (!data.Messages) {
    console.log(`${consumerInstanceId} NO MESSAGES IN QUEUE`)
    longPoll()
  } else {
    const message = data.Messages[0]
    console.log(`${consumerInstanceId} START "Processing" data`, JSON.parse(message.Body))
    setTimeout(() => {
      console.log(`${consumerInstanceId} DONE "Processing" data`)
      // Delete message so it is not processed again
      sqs.deleteMessage({
        QueueUrl: DEMO_SQS_URL,
        ReceiptHandle: message.ReceiptHandle
      }, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else longPoll()
      });
    }, 1500)
  }
}

function longPoll() {
  console.log(`${consumerInstanceId} starting long poll`)
  sqs.receiveMessage({
    QueueUrl: DEMO_SQS_URL, 
    AttributeNames: [AttributeNames.All],
    MaxNumberOfMessages: 1,
    WaitTimeSeconds: MAX_LONG_POLL
  }, function(err, data) {
    if (err) console.log(err, err.stack)
    else processData(data);           
  });
}

longPoll()

