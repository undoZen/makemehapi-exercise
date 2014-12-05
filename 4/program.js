'use strict';
var Hapi = require('hapi');
var server = Hapi.createServer('localhost', Number(process.argv[2] || process.env.PORT || 8080));
var path = require('path');

server.route({
        path: '/foo/bar/baz/{filename}',
        method: 'GET',
        handler: {
            directory: {path: path.join(__dirname, 'static')}
        }});
    
server.start();