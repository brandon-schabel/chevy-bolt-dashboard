const parse = require('csv-parse')
const fs = require('fs')
var inputFile = './boltdata.csv'

var columnParser = parse({delimiter: ',', columns: true}, function(err,data) {
  data.forEach(function(line) {
    console.log(line);
  })
})

fs.createReadStream(inputFile).pipe(columnParser);