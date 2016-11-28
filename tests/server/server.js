"use strict";

let app = require('express')();

app.get('/', function (request, response) {
    response.end('<a href="/link1">Link1</a><a href="/link2">Link2</a>');
});

app.get('/link1', function (request, response) {
    response.end("You are on link1");
});

app.get('/link2', function (request, response) {
    response.end("You are on link2");
});

let server = app.listen(8080, function () {
    const host = 'localhost';
    const port = server.address().port;

    console.log('Testing server listening at http://%s:%s', host, port);
});