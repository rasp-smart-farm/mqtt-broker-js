var mqtt = require('mqtt');
var client  = mqtt.connect('ws://tts.toannhu.com:8080')

setInterval(function () {
	client.publish('smartFarm', 'Hello mqtt', function(error) {
		console.log(error)
	});
	console.log('Message Sent');
}, 5000);