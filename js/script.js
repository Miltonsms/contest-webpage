/**
* @description String that contains the api key.
*/
var apiKey = '2ZMRx5Wr9KOKm3hCKTfc4Q';
/**
* @name m
* @description A new instance of mandrill
*/
var m = new mandrill.Mandrill(apiKey);

/**
* @function sendTheMail 
* @description A function that is called when the send mail button is clicked.
* @param {string} name Variable will save the name input.
* @param {string} company Variable will save the company input.
* @param {string} email Variable will save the email input.
* @param {string} messageString Variable will save the message input.
* @param {string} messageBody String that will contain all the strings before.
* @param {object} params Object that will send parameters to mandrill.
*/
function sendTheMail() {
	
	var name = $("#nameField").val();
	var company = $("#companyField").val();
	var email = $("#emailField").val();
	var messageString = $("#messageField").val();
	$("#nameField").val("");
	$("#companyField").val("");
	$("#emailField").val("");
	$("#messageField").val("");
	var messageBody = "Name: " + name + "\nCompany: " + company + "\nMessage:\n\n"+messageString;
	var params = {
		"message": {
			"from_email":email,
			"to":[{"email":"tabarinisergio@gmail.com"}],
			"subject": "New contact mail",
			"text": messageBody
		}
	};

	m.messages.send(params, function(res) {
		console.log(JSON.stringify(res));
	}, function(err) {
		console.log(JSON.stringify(err));
	});
}


$(document).ready(function() {
	/**
	*@description Function that shows a dialog box in the input fields.
	*/
	$(function ()  
	{ $("#nameField").popover({content: "Your name."});
		$("#emailField").popover({content: "Your email."});
		$("#companyField").popover({content: "Your company."});
		$("#messageField").popover({content: "Your message."})  
	});
	/*
	*@description Function that shows an option to go to the top of the page.
	*/
	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});
	/*
	*@description Function that shows/hide the option to scroll to the top of the page.
	*/
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});
 
});
