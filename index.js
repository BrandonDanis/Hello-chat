//setting up basic server
var express = require('express');
var app = express();

//colors!
var colors = require('colors');

var server = require('http').createServer(app);
var io = require('socket.io')(server);

//defining port
var port = process.env.PORT || 8080;

//turning on app
app.listen(port);
console.log("#################################".green);
console.log("App is now listening on port 8080".green);
console.log("#################################".green);

//routing
app.use(express.static(__dirname + '/public'));

var users = 0;

io.on('connection', function(socket) {
	var newUser = true;

	socket.on('add user', function(user) {
		if(!newUser)
			return;

		//storing username in socket
		socket.username = user;

		newUser = false;

		//increment user count
		users++;

		socket.emit('login', {
			numUsers = users;
		});

		socket.broadcast.emit('new user', {
			username: socket.username,
			numUser: numUsers
		});
	});

});
