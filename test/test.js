var chai = require('chai');
var expect = chai.expect;
var io = require('socket.io-client');

// Replace 'http://3.238.254.226:4141' with your server address
var serverAddress = 'http://3.238.254.226:4141';

describe('Socket Connection', function() {
    var client;

    beforeEach(function(done) {
        // Connect to the server before each test
        client = io.connect(serverAddress);
        client.on('connect', function() {
            console.log('Connected to server');
            done();
        });
    });

    afterEach(function(done) {
        // Disconnect from the server after each test
        if (client.connected) {
            console.log('Disconnecting from server');
            client.disconnect();
        }
        done();
    });

    it('should connect to the server', function(done) {
        // Check if the client is connected
        expect(client.connected).to.be.true;
        done();
    });
});
