var mqtt = require('mqtt')
var client = mqtt.connect('ws://pi.toannhu.com:8080')

client.on('connect', function () {
    client.subscribe('myTopic')

})

client.on('message', function (topic, message) {

    context = message.toString();
    console.log(context)
})