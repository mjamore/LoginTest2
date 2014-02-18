<!doctype html>
	<head lang="en">
		<meta charset="UTF-8">
		<title>Newer Login Test</title>

		<link rel="stylesheet" href="includes/css/index.css">
	</head>

	<body>
		<h4>Login or Register Below</h4>

		<div id="content">

			<div id="form-login-container">
				<h3>Login</h3>
				<form id="form-login" name="form-login" action="login.php" method="GET">
					<label for="email-login">Email Address:</label>
					<input id="email-login" name="email-login">
					<p class="error">This is not a valid email address.</p>

					<br>
					
					<label for="pw-login">Password:</label>
					<input id="pw-login" name="pw-login">
					<p class="error">Must contain at least: - 8 characters, - 1 number, - 1 capital letter</p>

					<br>

					<input id="submit-login" name="submit-login" type="submit" value="Login">
				</form>
			</div> <!-- #form-login-container -->

			<div id="form-register-container">
				<h3>Register</h3>
				<form id="form-register" name="form-register" action="register.php" method="GET">
					<label for="email-register">Email Address:</label>
					<input id="email-register" name="email-register">
					<p class="error">This is not a valid email address.</p>

					<br>
					
					<label for="pw1-register">Password:</label>
					<input id="pw1-register" name="pw1-register">
					<!-- <p>Password must be at least 8 characters, containing at least 1 number and 1 capital letter.</p> -->
					<p class="error">Must contain at least: - 8 characters, - 1 number, - 1 capital letter</p>

					<br>

					<label for="pw2-register">Confirm Password:</label>
					<input id="pw2-register" name="pw2-register">
					<p class="error">The passwords do not match.</p>

					<br>

					<input id="submit-register" name="submit-register" type="submit" value="Register">
				</form>
			</div> <!-- #form-register-container -->

		</div> <!-- #content -->

	</body>

	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	<script src="includes/js/indexmin.js"></script>
	<script src="http://localhost:35729/livereload.js"></script>
</html>