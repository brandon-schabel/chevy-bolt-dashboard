const parse = require('csv-parse')
const fs = require('fs')
var inputFile = './boltdata.csv'
var PIDs = require('./PIDs.json')
var parsedData = {}

// console.log(PIDs)
var parser = parse({delimiter: ','}, function(err, data) {

  // go through names and find PIDs
  for(var i = 0; i < data[0].length; i++) {
    PID = data[0][i]
    console.log(PID)
    PID = PID.toUpperCase();
    if(PID[0] === 'K') {
      PID = PID.substring(1, PID.length);
j
      if(PIDs[PID] === undefined) {
        // console.log('PID Not Found in Log(probably regular PID): ', PID);
      } else {
        // console.log('PID Found In Log: Name: ', PIDs[PID], PID)
        //parsedData[PIDs[PID]]['name'] = PIDs[PID]
        //parsedData[PIDs[PID]]['id'] = PID
      }

    }
    else {
      // console.log("Not a PID: ", PID)
    }
  }



/*
  data.forEach(function(line) {
    console.log(line)
    //var batteryCharge = { "charge": line[3] }
    // console.log(JSON.stringify(batteryCharge));
  });
  */
})
// read the inputFile, feed the contents to the parser
fs.createReadStream(inputFile).pipe(parser)

var columnParser = parse({delimiter: ',', columns: true}, function(err,data) {
  data.forEach(function(line) {

    for(id in line){
      PID = id
      PID = PID.toUpperCase();
      if(PID[0] === 'K') {
        PID = PID.substring(1, id.length);
        if(PIDs[PID] === undefined) {
          console.log('PID Not Found in Log(probably regular PID): ', PID);
        } else {
          PID = PIDs[PID]
        }

      }
      else {
        console.log("Not a PID: ", PID)
      }


      if(parsedData[PID]) {
        parsedData[PID].push(line[id])
      } else {
        parsedData[PID] = []
      }
    }
  })

  console.log(parsedData);
})

fs.createReadStream(inputFile).pipe(columnParser);



  /*
[{
    name: 'speed',
    id: '',
    data: [{time:2310745123074, speed: 234}],
    session: 323443134314
  }
]
  */