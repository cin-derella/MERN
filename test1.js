var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');

myReadStream.on('data', function(chun) {
  console.log('new chunk recieved:');
  console.log(chun);
});

/*
var counter123 = require('./test');

console.log(counter123(['Shirley', 'is', 'back']));

var fs = require('fs');
var readMe = fs.readFileSync('readMe.txt', 'utf8');
fs.writeFileSync('writeMe.txt', 'you got it!');
*/
