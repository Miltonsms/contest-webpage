/**
 * @author First Cognit Team (Frank Sam, Brandon Molina, Sergio Merida, Oscar Cortez, Milton Ramirez)
 */
/**
* Create a variable for the API call parameters
*/
var m = new mandrill.Mandrill('2ZMRx5Wr9KOKm3hCKTfc4Q');


/**
* sendTheMail function that is called when the button is clicked.
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
    $(function ()  
      { $("#nameField").popover({content: "Your name."});
		$("#emailField").popover({content: "Your email."});
		$("#companyField").popover({content: "Your company."});
		$("#messageField").popover({content: "Your message."})  
    });  
   });
