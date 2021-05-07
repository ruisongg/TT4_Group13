var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var ActiveDirectory = require('activedirectory');

// // Authenticate SMRT LDAP

// // Initialize
// var ActiveDirectory = require('activedirectory');
// var config = {
//     url: 'ldaps://smrtnet.ads',
//     baseDN: 'dc=domain,dc=com'
// };
// var ad = new ActiveDirectory(config);
// var username = '';
// var password = '';

// // Authenticate
// ad.authenticate(username, password, function (err, auth) {
//     if (err) {
//         console.log('ERROR: ' + JSON.stringify(err));
//         return;
//     }
//     if (auth) {
//         console.log('Authenticated!');
//     } else {
//         console.log('Authentication failed!');
//     }
// });

var app = express();
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.render('login');
});

app.post('/auth', function (req, res) {
    // Authenticate SMRT LDAP

    // Initialize
    var ActiveDirectory = require('activedirectory');
    var config = {
        url: 'ldaps://smrtnet.ads',
        baseDN: 'dc=domain,dc=com'
    };
    var ad = new ActiveDirectory(config);
    var username = req.body.uid;
    var password = req.body.password;

    console.log("UserID: " + username);
    console.log("Password: " + password);

    // Authenticate
    ad.authenticate(username, password, function (err, auth) {
        if (err) {
            console.log('ERROR: ' + JSON.stringify(err));
            return;
        }
        if (auth) {
            console.log('Authenticated!');
            res.redirect('/');
        } else {
            console.log('Authentication failed!');
        }
    });
});

app.get('/index', function (req, res) {
    if (req.session.loggedin) {
        res.send('Welcome back, ' + req.session.username + '!');
    } else {
        res.send('Please login to view this page!');
    }
    res.end();
});

app.listen(3001);