var express = require('express');
var router = express.Router();
// var fileUpload = require('express-fileupload');
// var multer = require('multer');
var bodyParser = require('body-parser')
router.use( bodyParser.json() );       // to support JSON-encoded bodies
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

const log = require('simple-node-logger').createSimpleLogger('project.log');




/* GET home page. */
router.get('/', function(req, res, next) {
  // console.log(parse(inputFile, raw));
  res.render('index', { title: 'Express' });
});


// router.post('/upload', function(req,res) {
//   console.log(req.files)
//   // console.log(req);
//   // console.log(res);
//   // console.log(next);
//   if (!req.files)
//     return res.status(400).send('No files were uploaded.');
//
//   // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
//   var sampleFile = req.files.boltdata;
//
//   // Use the mv() method to place the file somewhere on your server
//   sampleFile.mv('./uploadedLogs/filename.csv', function(err) {
//     if (err)
//       return res.status(500).send(err);
//
//     res.send('File uploaded!');
//   });
//
//
// })

router.get('/upload', function(req, res) {
  console.log(req)
  res.sendStatus(200);
  // console.log(res)
})

/*
router.get('/upload*', function(req, res) {
  console.log("WILDCARD")
  console.log(req)
  res.sendStatus(200);
  // console.log(res)
})
*/

/*
router.post('/upload', function(req,res) {
  console.log(req)
  console.log(res)
})
*/

// var Storage = multer.diskStorage({
//   destination: function(req, file, callback) {
//     callback(null, "./Images");
//   },
//   filename: function(req, file, callback) {
//     callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
//   }
// });
//
//
// var upload = multer({
//   storage: Storage
// }).array("imgUploader", 3); //Field name and max count
//
// router.post("/upload", function(req, res) {
//   upload(req, res, function(err) {
//     if (err) {
//       return res.end("Something went wrong!");
//     }
//     return res.end("File uploaded sucessfully!.");
//   });
// });

module.exports = router;
