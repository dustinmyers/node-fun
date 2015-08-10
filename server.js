////////////////////////////
///     DEPENDENCIES     
////////////////////////////
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var request = require('request');
var twilio = require('twilio');

var accountSid = 'AC23fbb68bb57bb2d84122c6f35d012e68'; 
var authToken = '613ddba778a968f24def6527ffcaf835'; 
 
var client = twilio(accountSid, authToken);


var app = express();
var port = 3033;

////////////////////////////
///     MIDDLEWARE     
////////////////////////////
app.use(express.static('public'));
// app.use(bodyParser());    ------normal
app.use(bodyParser.urlencoded({             
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());

var message = {
    "message": "HELLO WORLD!!!"
};
////////////////////////////
///     ENDPOINTS     
////////////////////////////
app.get('/api/message', function(req, res) {
    return res.json(message);
});
app.post('/api/send_text_message', function(req, res) {
    console.log(req.body.message);
    // request.post('https://' + accountSid + ':' + authToken + '@api.twilio.com/2010-04-01/Accounts/' + accountSid + '/Messages.json')
    client.messages.create({ 
    	to: "2089641796", 
    	from: "+12082153865", 
    	body: "req.body.message",   
    }, function(err, message) { 
    	console.log(message.sid); 
    });
});



// app.listen(port, function() {
//     console.log('I\m watching you...', port);
// });

app.listen(process.env.PORT, process.env.IP);
console.log('Powering on...');
console.log('Paired');


