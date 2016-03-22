'use strict';
module.exports = function(app) {
  app.route('/')
	.get(function(req, res) {
	var ip = req.headers['x-forwarded-for'] || 
     req.connection;
     var parsed = {
         'ip-address': ip,
         'language': req.headers["accept-language"].split(',')[0],
         'OS': req.headers['user-agent'].split(') ')[0].split(' (')[1]
     };
     res.send(JSON.stringify (parsed, null, 4));
    });
}; 