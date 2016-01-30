//setting up basic server
var express = require('express');
var app = express();

//colors!
var colors = require('colors');

var http = require('http').Server(app);
var io = require('socket.io')(http);

//defining port
var port = 8080;

//turning on app
http.listen(port);
console.log("#################################".green);
console.log("App is now listening on port 8080".green);
console.log("#################################".green);

//routing
app.use(express.static(__dirname + '/app'));

var users = 0;

io.on('connection', function(socket) {
	console.log("User connected");
	var newUser = true;

	socket.on('add user', function(user) {
		console.log(user);
		if(!newUser)
			return;

		//storing username in socket
		socket.username = user;

		newUser = false;

		//increment user count
		users++;

		socket.emit('login', {
			numUsers: users
		});

		socket.broadcast.emit('new user', {
			username: socket.username,
			numUsers: users
		});
	});

});
