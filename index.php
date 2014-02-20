<!doctype html>
	<head lang="en">
		<meta charset="UTF-8">
		<title>Newer Login Test</title>

		<link rel="stylesheet" href="includes/css/index.css">
	</head>

	<body>
		<h1>Login or Register Below</h1>

		<p id="page-description">This login system was built to show I'm a bad ass.  It uses JS/jQuery on the client side for form validation and PHP/MySQL on the server to process form data and store registration data.</p>

		<div id="content">

			<div id="form-login-container">
				<h3>Login</h3>
				<form id="form-login" name="form-login" action="login.php" method="POST">
					<label for="email-login">Email Address:</label>
					<input id="email-login" name="email-login" type="email">
					<p class="error">This is not a valid email address.</p>

					<br>
					
					<label for="pw-login">Password:</label>
					<input id="pw-login" name="pw-login" type="password">
					<div class="error">
						<p>Must contain at least:</p>
						<ul>
							<li>8 characters</li>
							<li>1 number</li>
							<li>1 uppercase letter</li>
							<li>1 lowercase letter</li>
						</ul>
					</div>

					<br>

					<input id="submit-login" name="submit-login" type="submit" value="Login">
				</form>
			</div> <!-- #form-login-container -->

			<div id="form-register-container">
				<h3>Register</h3>
				<form id="form-register" name="form-register" action="register.php" method="GET">
					<label for="email-register">Email Address:</label>
					<input id="email-register" name="email-register" type="email">
					<p class="error">This is not a valid email address.</p>

					<br>
					
					<label for="pw1-register">Password:</label>
					<input id="pw1-register" name="pw1-register" type="password">
					<div class="error">
						<p>Must contain at least:</p>
						<ul>
							<li>8 characters</li>
							<li>1 number</li>
							<li>1 uppercase letter</li>
							<li>1 lowercase letter</li>
						</ul>
					</div>

					<br>

					<label for="pw2-register">Confirm Password:</label>
					<input id="pw2-register" name="pw2-register" type="password">
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