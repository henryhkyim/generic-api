const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  const reqfile = req.url.substr(1);
  console.log(`Requesting file ${reqfile}`);
  fs.readFile(reqfile, (error, data) => {
    if (error) {
      console.log(`Error reading file ${reqfile} - ${error}`);
      res.write('Hello world');
    } else {
      res.write(data);
    }
    res.end();
  });
}).listen(3000, '127.0.0.1', () => {
  console.log('Http server started and is listening port 3000...');
})
