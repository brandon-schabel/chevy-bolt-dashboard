const parse = require('csv-parse')
const fs = require('fs')
var inputFile = './ChevyBoltPIDS.csv'

var PIDObj = {}

var parser = parse({delimiter: ','}, function(err, data) {
  data.forEach(function(line) {
    PIDObj[line[1]] = line[2]
  });
  console.log(PIDObj)

  var path = './PIDJSONOutput.txt',
    buffer = new Buffer(JSON.stringify(PIDObj));

  fs.open(path, 'w', function(err, fd) {
    if (err) {
      throw 'error opening file: ' + err;
    }

    fs.write(fd, buffer, 0, buffer.length, null, function(err) {
      if (err) throw 'error writing file: ' + err;
      fs.close(fd, function() {
        console.log('file written');
      })
    });
  });
})

// read the inputFile, feed the contents to the parser
fs.createReadStream(inputFile).pipe(parser)