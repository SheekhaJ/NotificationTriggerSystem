const express = require('express');
const bodyParser = require('body-parser')
const nodeMailer = require('nodemailer')

var app = express();
var port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.render('index');
});

app.post('/send-email', function(req, res){
    console.log('in send-email function!');
    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: "jariwals@oregonstate.edu",
            pass: 'OSU$heekha0408'
        }
    });

    let mailOptions = {
        from: 'Notification Trigger System <jariwals@oregonstate.edu>',
        to: req.body.email,
        subject: req.body.notification,
        text: req.body.message,
        html: '<b> Email from Notification Trigger System </b>'
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) console.log(error);
        console.log('email sent '+info.messageId+' response: '+info.response);
        res.render('index');
    })

});

app.listen(port, function(){
    console.log("app is running on port "+port);
});