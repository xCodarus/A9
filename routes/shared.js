var data = require('../users.json');

exports.viewProject = function(req, res){
	var tempName = req.params.name;
	for (i=0; i < data.users.length; i++) {
		if (data.users[i].isUser == true) {
			var youScore = data.users[i].growth;
		} 
		else if (data.users[i].name == tempName) {
			var themName = data.users[i].name;
			var themScore = data.users[i].growth;
		}
	}
	res.render('shared', {
		"friendName": themName,
		"friendScore": themScore,
		"userScore": youScore,
		"viewAlt": data.viewAlt
	})
}