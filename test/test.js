var chai = require('chai');
var io = require('socket.io-client')
var app = require('../index');
var client = io('http://3.238.254.226:4141');
 
console.log('Server started...Waiting for client connection...');
it('Client connected...', function(done) {
  client.on('connect', function (data) {
    done();
  });
});
