var express = require('express');
var app = express();

app.use(express.static('public'));
var http = require('http').Server(app);
http.listen(3000);

var fs = require('fs');
var io = require('socket.io')(http);

fs.watch(__dirname, { recursive:true }, function () {
	console.log('watching :' + __dirname + 'Port:3000');
	io.emit('file-change-event');
});