var express = require('express');
var cors = require('cors');
require('dotenv').config()

var app = express();

// Importing multer middleware
const bodyParser = require('body-parser');
const multer  = require('multer');
const upload = multer({ dest: './public/data/uploads/' });

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

// Uploading & Analysing File API Endpoint

app.post('/api/fileanalyse', upload.single('upfile'),function(req, res){
  res.json({name: req.file.originalname, type: req.file.mimetype, size: req.file.size});
})



const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
