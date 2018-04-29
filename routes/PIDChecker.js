// this file is used to check know Bolt PIDs against the PIDs in the log
const parse = require('csv-parse')
const fs = require('fs')
var inputFile = './boltdata.csv'
var PIDs = require('./PIDs.json')

console.log(PIDs)

var parser = parse({delimiter: ','}, function(err, data) {
  data[0].forEach(function(PID) {
    PID = PID.toUpperCase();
    if(PID[0] === 'K') { // for some reason torque logs adds k's to the pids in the log
      PID = PID.substring(1, PID.length);

      if(PIDs[PID] === undefined) {
        console.log('PID Not Found in Log(probably regular PID): ', PID);
      } else {
        console.log('PID Found In Log: Name: ', PIDs[PID], PID)
      }

    }
    else {
      console.log("Not a PID: ", PID)
    }
  })
})

// read the inputFile, feed the contents to the parser
fs.createReadStream(inputFile).pipe(parser)
