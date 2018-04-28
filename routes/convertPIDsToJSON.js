// direct link to Chevy Bolt Custom PID spreadsheet https://docs.google.com/spreadsheets/d/1sY5n8WFu52U6a4_mg3MdcGcmDk3scAP8_muSy-BlXPc/edit#gid=946940079
const parse = require('csv-parse')
const fs = require('fs')
var inputFile = './ChevyBoltPIDS.csv'

var PIDObj = {}
var line1Formatted;
var line2Formatted;
var parser = parse({delimiter: ','}, function(err, data) {
  data.splice(0,1)
  data.forEach(function(line) {
    line1Formatted = line[1].replace(/[`~!@#$%^&*()_|+\-=÷¿?;:'",.<>\{\}\[\]\\\/\s]/g,''); // remove all special characters and spaces
    line2Formatted = line[2].replace(/[`~!@#$%^&*()_|+\-=÷¿?;:'",.<>\{\}\[\]\\\/\s]/g,'');
    if(line2Formatted.length > 0 || line1Formatted.length > 0) { //check to make sure each cell contains data
      PIDObj[line2Formatted] = line1Formatted
    }

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