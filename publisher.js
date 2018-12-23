var mqtt = require('mqtt');
var client = mqtt.connect('ws://pi.toannhu.com:8080');

client.on('connect', function () {

    setInterval(function () {
        client.publish('myTopic', 'Hello mqtt');
        console.log('Message Sent');
    }, 5000);

});