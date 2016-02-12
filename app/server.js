'use strict';

const app = require('./express');
const cluster = require('express-cluster');
const http = require('http');

let server = http.createServer(app);

let host = process.env.HOST || '127.0.0.1';
let port = process.env.PORT || 3000;

cluster(function(worker) {
  server.listen(port, host, () => {
    console.log('Server running on http://' + host + ':' + port + ' with pid ' + process.pid);
  });
});