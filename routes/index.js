var express = require('express');
var router = express.Router();
const parse = require('csv-parse')
// var inputFile = require('./boltdata.csv')
const fs = require('fs')
var inputFile = './boltdata.csv'

var parser = parse({delimiter: ','}, function(err, data) {
  // console.log(data);

  data.forEach(function(line) {
    console.log(line)
    // console.log(line[2])
    /*
    console.log(line[0])
    for(var i = 0; i < line.length; i++) {
      console.log(line[i]);

    }
    */
    var batteryCharge = { "charge": line[3] }
    // console.log(line);
    console.log(JSON.stringify(batteryCharge));
  });
})
// read the inputFile, feed the contents to the parser
fs.createReadStream(inputFile).pipe(parser)

// var parser = parse

/* GET home page. */
router.get('/', function(req, res, next) {
  // console.log(parse(inputFile, raw));
  res.render('index', { title: 'Express' });
});

module.exports = router;
