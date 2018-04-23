const net = require('net');
const http = require('http');
const faye = require('faye');
const config = require('./config');

var currentConfig = config.getConfig();
const LOCAL_PORT = currentConfig.homeseerProxyPort;
const REMOTE_ADDR = currentConfig.homeseerApiHost;
const REMOTE_PORT = currentConfig.homeseerApiPort;

var server = http.createServer();
var bayeux = new faye.NodeAdapter({
    mount: '/faye',
    timeout: 45,
});

var gracefulShutdown = function () {
    console.log("Received kill signal, shutting down gracefully.");
    server.close(function () {
        console.log("Closing out open connections.");
        // Destroy all open sockets
        for (var socketId in sockets) {
            console.log('socket', socketId, 'destroyed');
            sockets[socketId].destroy();
        }
        process.exit()
    });
}

try {
      var serviceSocket = new net.Socket();
      
      try {
         serviceSocket.connect(parseInt(REMOTE_PORT), REMOTE_ADDR);
      }
      catch(err) {
         throw err.message;
      }

      // Maintain a hash of all connected sockets
      var sockets = {},
         nextSocketId = 0;
      serviceSocket.on('connect', function (socket) {
         console.log("Proxy server connected to remote host: " + REMOTE_ADDR + ":" + REMOTE_PORT);
         // Add a newly connected socket
         var socketId = nextSocketId++;

         sockets[socketId] = serviceSocket;
         console.log('socket', socketId, 'opened');
      });

      serviceSocket.on('error', function (e) {
         if (e.code == 'EADDRINUSE') {
            console.log('Address in use.');
         } else if (e.code == 'ECONNREFUSED') {
            console.log('Unable to connect to server. Connection Refused');
         } else if (e.code == 'ETIMEDOUT') {
            console.log("Timed out trying to connect to remote host.");
         } else {
            console.log(e.code);
         }
         console.log("Shutting down");
         server.close();
      });

      serviceSocket.on("data", function (data) {
         console.log('<< From remote to proxy', data.toString());

         bayeux.getClient().publish('/homeseer/statuschange', data.toString());
         console.log('>> From proxy to client', data.toString());
      });

      //Attach to the HTTP server instance--the proxy--and begin listening on specified local port
      bayeux.attach(server);
      server.listen(LOCAL_PORT);
      console.log("Proxy server running and broadcasting on port " + LOCAL_PORT);


      process.on('SIGTERM', gracefulShutdown);
      // listen for INT signal e.g. Ctrl-C
      process.on('SIGINT', gracefulShutdown);
} catch (err) {
    console.log(err);
}