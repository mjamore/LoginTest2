function isEmailValid(email)
{
	var emailRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var testAgainstRegEx = emailRegEx.test(email);
	if( testAgainstRegEx )
	{
		console.log("email is valid");
		return true;
	}
	else
	{
		console.log("email is NOT valid");
		return false;
	}
}

function isPWValid(pw)
{
	if( pw.length >= 8 )
	{
		// has a number && has at least 1 capital letter
		var regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
		var abcd = regEx.test(pw);
		if( abcd )
		{
			return true;
		}
		else
		{
			return false
		}
	}
	else
	{
		return false;
	}
}

function arePWsEqual(pw1, pw2)
{
	if( pw1 === pw2 )
	{
		return true;
	}
	else
	{
		return false;
	}
}



function inputIsValid(input)
{
	$(this).removeClass("invalid").addClass("valid");
	$(this).next().slideUp();
}

function inputIsInvalid(input)
{
	$(this).removeClass("valid").addClass("invalid");
	$(this).next().slideDown();
}



(function()
{
	// login email
	$('#email-login').on('blur', function() {
		if( isEmailValid(this.value) )
		{
			inputIsValid.call(this);
		}
		else
		{
			inputIsInvalid.call(this);
		}
	});

	$('#email-login').on('focus', function() {
		$(this).removeClass("invalid");
	});


	// login pw
	$('#pw-login').on('blur', function() {
		if( isPWValid(this.value) )
		{
			inputIsValid.call(this);
		}
		else
		{
			inputIsInvalid.call(this);
		}
	});

	$('#pw-login').on('focus', function() {
		$(this).removeClass("invalid");
	});




	// register email
	$('#email-register').on('blur', function() {
		if( isEmailValid(this.value) )
		{
			inputIsValid.call(this);
		}
		else
		{
			inputIsInvalid.call(this);
		}
	});

	$('#email-register').on('focus', function() {
		$(this).removeClass("invalid");
	});


	// register pw
	$('#pw1-register').on('blur', function() {
		if( isPWValid(this.value) )
		{
			inputIsValid.call(this);
		}
		else
		{
			inputIsInvalid.call(this);
		}
	});

	$('#pw1-register').on('focus', function() {
		$(this).removeClass("invalid");
	});


	// register pw confirmation
	$('#pw2-register').on('blur', function() {
		var pw1 = $('#pw1-register').val();
		var pw2 = $('#pw2-register').val();
		
		if( arePWsEqual(pw1, pw2) )
		{
			inputIsValid.call(this);
		}
		else
		{
			inputIsInvalid.call(this);
		}
	});

})();









