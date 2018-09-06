const { Readable } = require('stream');

// const inStream = new Readable();
//
// inStream.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ'); // this pushes ALL data at once
// inStream.push(null);
//
// instream.pipe(process.stdout);

const inStream = new Readable({
  read(size) {
    setTimeout(() => {
      if (this.currentCharCode > 90) {
        this.push(null);
        return;
      }
      this.push(String.fromCharCode(this.currentCharCode++));
    }, 100);
  }
});

inStream.currentCharCode = 65;
inStream.pipe(process.stdout);

process.on('exit', () => {
  console.error(
    `\n\ncurrentCharCode is ${inStream.currentCharCode}`
  );
});
process.stdout.on('error', process.exit);

//read three characters. head command causes node process to exit
//node readable.js | head -c3