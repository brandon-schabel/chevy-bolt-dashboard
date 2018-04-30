var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser')
router.use( bodyParser.json() );       // to support JSON-encoded bodies
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

/* GET home page. */
router.get('/', function(req, res, next) {
  // console.log(parse(inputFile, raw));
  res.render('index', { title: 'Express' });
});



router.get('/upload', function(req, res) {
  console.log(req)
  res.sendStatus(200);
  // console.log(res)
})



module.exports = router;
