const AWS = require('aws-sdk')
const faker = require('faker')
const sqs = new AWS.SQS({apiVersion: '2012-11-05'})

const EVERY_SECONDS = 3
const DEMO_SQS_URL = 'https://sqs.us-west-2.amazonaws.com/111111111111/demo-queue'

var generateParams = () => ({
  MessageBody: JSON.stringify({
    customerId: faker.random.number(100),
    orderId: faker.random.uuid(),
    product: faker.commerce.product(),
    dateOfSale: faker.date.past(),
    color: faker.commerce.color(),
    department: faker.commerce.department(),
    productName: faker.commerce.productName(),
    price: faker.commerce.price(),
    salesAgenId: faker.random.number(10),
    salesZip: faker.address.zipCode(),
    shippingAddress: {
      address1: faker.address.streetAddress(),
      address2: faker.address.secondaryAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zip: faker.address.zipCode()
    }
  }),
  QueueUrl: DEMO_SQS_URL
});

setInterval(() => 
  sqs.sendMessage(generateParams(), function(err) {
    if (err) return console.log(err, err.stack); // an error occurred
    console.log("Message Sent to Queue: " + DEMO_SQS_URL)
  })
, EVERY_SECONDS * 1000)