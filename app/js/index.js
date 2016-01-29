$(function() {


	var username;
	var connected = false;

	var socket = io();


	var addNumOfUsers(numUsers) {
		if(numUsers == 1){
			var msg = 'There is 1 user!';
		}else{
			var msg = 'There are ' + numUsers + ' users!';
		}
		console.log(message);
	}

	//socket

	socket.on('login', function(res) {
		connected = true;
		alert('you are connected');
		addNumOfUsers(res.numUsers);
	});

	socket.on('new user', function(res) {
		console.log("New user! " + res.username);
		addNumOfUsers(res.numUsers);
	});

});
