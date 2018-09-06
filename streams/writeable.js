// const { Writable } = require('stream');
// // echo stream
// const outStream = new Writable({
//   // chunk is usually a buffer
//   // encoding of the buffer
//   // must call callback when done processing data chunk
//   write(chunk, encoding, callback) {
//     console.log(chunk.toString());
//     callback();
//   }
// });
//
// process.stdin.pipe(outStream);

process.stdin.pipe(process.stdout);