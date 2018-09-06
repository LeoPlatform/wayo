const fs = require('fs')
const file = fs.createWriteStream('./large-file');

for (let i=0; i <= 1e6; i++) {
  file.write('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non lectus tortor. Maecenas malesuada odio vel ultricies sollicitudin. Nam non neque sit amet mi interdum egestas. Suspendisse consectetur fringilla lacus vel faucibus. Pellentesque tincidunt urna id sem posuere pretium. Ut hendrerit sapien eu risus varius fringilla. Praesent consequat sapien purus, ac cursus augue tempus sed. Nam ipsum nulla, dignissim a eros eget, luctus varius risus.\n')
}

file.end();