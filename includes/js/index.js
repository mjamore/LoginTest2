function isEmailValid(email)
{
	var emailRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var testAgainstRegEx = emailRegEx.test(email);
	return testAgainstRegEx;
}

// This function tests for a password that is a minimum of 8 characters, has at least 1 number, at least 1 uppercase letter, and at least 1 lowercaser letter. 
function isPWValid(pw)
{
	if( pw.length >= 8 )
	{
		// has a number && has at least 1 capital letter
		var regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
		var testAgainstRegEx = regEx.test(pw);
		return testAgainstRegEx;
	}
	else
	{
		return false;
	}
}

function arePWsEqual(pw1, pw2)
{
	return pw1 === pw2;
}

// For valid input, make input field BG green, give it a green border, add checkmark image, remove corresponding error message.
function inputIsValid(input)
{
	$(this).removeClass("invalid").addClass("valid");
	$(this).next().slideUp();
}

// For invalid input, make input filed BG red, give it a red border, add X image, show corresponding error message.
function inputIsInvalid(input)
{
	$(this).removeClass("valid").addClass("invalid");
	$(this).next().slideDown();
}

function validate(form)
{
	// if all inputs of the login form have the class "valid" ? submit form to login.php : handle error ;
	
	var inputs = $(this).find('input').not('[type="submit"]');
	var $inputs = $(inputs);
	var counter = 0;

	$inputs.each(function(){
		if( $(this).hasClass('valid') ){
			alert("valid in the house");
			counter++;
		}
		else
		{
			alert("no valid");
			return false;
		}
	});

	return counter === inputs.length;
}


(function()
{
	// login and registration email
		$('input[type="email"]').on('blur', function() {
			isEmailValid(this.value) ? inputIsValid.call(this) : inputIsInvalid.call(this);
		});

		$('input[type="email"]').on('focus', function() {
			$(this).removeClass("invalid");
		});


	// login and register pw
		$('input[type="password"]').on('blur', function() {
			isPWValid(this.value) ? inputIsValid.call(this) : inputIsInvalid.call(this);
		});

		$('input[type="password"]').on('focus', function() {
			$(this).removeClass("invalid");
		});


	// register pw confirmation
		$('#pw2-register').on('blur', function() {
			var pw1 = $('#pw1-register').val();
			var pw2 = $('#pw2-register').val();
			arePWsEqual(pw1, pw2) ? inputIsValid.call(this) : inputIsInvalid.call(this);
		});


	// on form submission, run validate()
		$('input[type="submit"]').parent().on('submit', function(e) {
			var email = $(this).find('input[type="email"]').eq(0);
			isEmailValid(email.val()) ? inputIsValid.call(email) : inputIsInvalid.call(email);
			var pw = $(this).find('input[type="password"]').eq(0);
			isPWValid(pw.val()) ? inputIsValid.call(pw) : inputIsInvalid.call(pw);
			if ( validate.call(this) )
			{
				alert("validate function is true.");
				return true;
			}
			else
			{
				e.preventDefault();
				alert("some of the form fields are not valid.");
				return false;
			}
		});

})();









