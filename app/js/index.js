$(function() {


	var username;
	var connected = false;

	var socket = io();

	$usernameInput = $(".usernameInput");

	$("#loginButton").click(function(){
		//username check
		socket.emit('add user', $usernameInput.val());
	});


	//socket stuff
	socket.on('login', function(res) {
		connected = true;
		alert('you are connected');
	});

	socket.on('new user', function(res) {
		console.log("New user! " + res.username);
	});

});
