var data = require('../users.json');

exports.view = function(req, res) {
	data["viewAlt"] = false;
	res.render('sip', data);
}

exports.viewAlt = function(req, res) {
	data["viewAlt"] = true;
	res.render('sip', data);
}