////////////////////////////
///     DEPENDENCIES     
////////////////////////////
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = 3033;


// app.listen(port, function() {
//     console.log('I\m watching you...', port);
// });

app.listen(process.env.PORT, process.env.IP);
console.log('Powering on...');
console.log('Paired');


