var mqtt = require('mqtt')
var client  = mqtt.connect('ws://tts.toannhu.com:8080')

client.on('connect', function () {
    client.subscribe('smartFarm')

})

client.on('message', function (topic, message) {
    context = message.toString();
    console.log(context)
})