var mosca = require('mosca');
var settings = {
	http: {
		port: 8080,
		bundle: true,
		static: './'
	}
}

var server = new mosca.Server(settings);

server.on('ready', function () {
    console.log("ready");
});