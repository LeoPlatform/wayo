const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  // fs.readFile('./large-file', (err, data) => {
  //   if (err) throw err;
  
  //   res.end(data);
  // });

  const src = fs.createReadStream('./large-file');
  src.pipe(res);
});

server.listen(8000);
// $ node server.js
// $ curl -i localhost:8000