
const AWS = require('aws-sdk')
const faker = require('faker')

const kinesis = new AWS.Kinesis({apiVersion: '2013-12-02'})

const EVERY_SECONDS = 3

function putData(jsonObj) {
  var params = {
    Records: [
      {
        Data: Buffer.from(JSON.stringify(jsonObj)),
        PartitionKey: '123456789',
      }
    ],
    StreamName: 'demo-stream'
  };
  
  kinesis.putRecords(params, function(err, data) {
    if (err) console.log(err, err.stack)
    else     console.log(data);
  });
}

setInterval(() => {
  putData({
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
  })
}, EVERY_SECONDS * 1000)