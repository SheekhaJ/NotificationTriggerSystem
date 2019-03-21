const express = require('express');
const bodyParser = require('body-parser')

var app = express();
var port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    // console.log("Hello world!");
    res.render('index');
});

app.listen(port, function(){
    console.log("app is running on port "+port);
})