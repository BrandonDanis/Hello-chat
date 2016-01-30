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

		var notification = '<div class="alert alert-warning fade in" style="padding-top: 15px;" role="alert"><strong>New User!</strong> ~USERNAME~ </div>';
		notification = notification.replace(/~USERNAME~/g, res.username);

		$('.loginSection .row').append(notification);

		setTimeout(function() {
			$('.loginSection .row .alert').remove();
		}, 5000);

	});

});
