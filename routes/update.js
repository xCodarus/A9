var data = require("../users.json");

exports.updateUser = function(request, response) {    
	// Your code goes here
	for (i=0; i < data.users.length; i++) {
		if (data.users[i].isUser == true) {
			var counter = parseInt(data.users[i].growth);
			if (counter < 8) {
				counter = counter + 1;
				data.users[i].growth = counter;
				response.render('sip', data);
			}
		}
	}
}