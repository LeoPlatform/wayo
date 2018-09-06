const path = require('path')
process.env.LEO_LOCAL = true
process.env.NODE_ENV = 'local'
process.env.LEO_LOGGER = '/.*/tide'
process.env.leo_config_bootstrap_path = process.cwd()+ path.sep + 'leo_config.js'

let leo = require("leo-sdk");
let faker = require("faker");
let botId = "producerBotId";
let orderQueue = "orderQueue";
let stream = leo.load(botId, orderQueue);

// Write 10 events to the leo bus
for (let i = 0; i < 10; i++) {
  stream.write({
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
  });
}
stream.end(err=>{
    console.log("All done loading events", err);
});