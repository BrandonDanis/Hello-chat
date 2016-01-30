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

		var notification = '<div class="alert alert-warning alert-dismissible fade in" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button> <strong>New User!</strong> ~USERNAME~ </div>';
		notification = notification.replace(/~USERNAME~/g, res.username);

		$('.loginSection').append(notification);

		setTimeout(function() {
			$('.loginSection .alert').remove();
		}, 2000);

	});

});
