'use strict';
var express    = require('express');        
var app        = express();                 
var route      = require('./public/JSscript/headerParse.js');
var port = process.env.PORT || 8080;
app.use('/static', express.static(process.cwd() + '/public/JSscript/'));
route(app);
app.listen(port, function() {
    console.log('micro-parser.js listening on port ' + port);
});