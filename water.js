var net = require('net');
var HOST =  '127.0.0.1';
var PORT = 6969;
var num = 4
var client = new net.Socket();
client.connect(PORT, HOST, function() {
 console.log('5935512023: ' + HOST + ':' + PORT);
 client.write('5935512023');
});
client.on('data', function(data) {
 console.log('DATA: ' + data);
 if(data == "OK") 
 	client.write(''+num)
 if(data == "WRONG") 
 	client.write(''+(num++))
 if(data == "BINGO"){
 	console.log("\nBINGO!! "+num)
 	client.destroy()}
});
// Add a 'close' event handler for the client socket
client.on('close', function() {
 console.log('Connection closed');
});
