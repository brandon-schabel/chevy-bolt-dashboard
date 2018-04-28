const parse = require('csv-parse')
const fs = require('fs')
var inputFile = './boltdata.csv'
var PIDs = require('./PIDs.json')

console.log(PIDs)

var parser = parse({delimiter: ','}, function(err, data) {


  // console.log(data);
  // console.log(data[0])
  console.log(data[0])
  data[0].forEach(function(PID) {
    PID = PID.toUpperCase();
    console.log('PID', PID)
    // console.log(PIDs[PID])
    if(PID[0] === 'K') {
      PID = PID.substring(1, PID.length);

      if(PIDs[PID] === undefined) {
        console.log('PID Not Found in Log: ', PID);
      } else {
        console.log('PID Found In Log: ', PIDs[PID])
      }

    }
  })
  for(var i= 0; i < data[0].length; i++) {
    // console.log(data[0][i])
    // console.log(data[i][0])
  }
  data.forEach(function(line) {
    // console.log(line)
    //var batteryCharge = { "charge": line[3] }
    // console.log(JSON.stringify(batteryCharge));
  });
})
// read the inputFile, feed the contents to the parser
fs.createReadStream(inputFile).pipe(parser)
