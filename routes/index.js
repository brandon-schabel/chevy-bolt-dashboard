var express = require('express');
var router = express.Router();
const parse = require('csv-parse')
// var inputFile = require('./boltdata.csv')
const fs = require('fs')
var inputFile = './boltdata.csv'

var parser = parse({delimiter: ';'}, function(err, data) {
  console.log(data);
})

console.log(fs.createReadStream(inputFile).pipe(parser))

// var parser = parse

/* GET home page. */
router.get('/', function(req, res, next) {
  // console.log(parse(inputFile, raw));
  res.render('index', { title: 'Express' });
});

module.exports = router;
