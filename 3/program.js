'use strict';
var Hapi = require('hapi');
var server = Hapi.createServer('localhost', Number(process.argv[2] || process.env.PORT || 8080));

server.route({
        path: '/',
        method: 'GET',
        handler: {
            file: 'index.html'
        }});
    
server.start();