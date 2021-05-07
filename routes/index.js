var express = require("express");
var session = require('express-session');
var router = express.Router();
var bodyParser = require("body-parser");
var app = express();
var ntlm = require('express-ntlm')

router.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

router.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

const restClient = require("superagent-bluebird-promise");
const path = require("path");
const url = require("url");
const util = require("util");
const Promise = require("bluebird");
const _ = require("lodash");
const querystring = require("querystring");
const securityHelper = require("../lib/security/security");
const crypto = require("crypto");
const colors = require("colors");
var https = require('follow-redirects').https;
const fs = require("fs");
const apiKeyAuth = require('api-key-auth');

/* GET login page. */
router.get("/", function (req, res, next) {
  res.render('login');
});

/* POST AUTH page. */
router.post('/auth', function (req, res) {
  // Authenticate
  var username = req.body.uid;
  var password = req.body.password;

  var options = {
    'method': 'POST',
    'hostname': 'ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com',
    'path': '/techtrek/login',
    'headers': {
      'x-api-key': 'QNd2HPwfhv2bK2pNt4pfl79YaNoq7p0X7XeSPkKY',
      'Content-Type': 'text/plain'
    },
    'maxRedirects': 20
  };

  var outbound = JSON.stringify({
    "userName": username,
    "userPass": password
  })

  httpRequest(options, outbound).then(function (body) {
    try {
      console.log("body: ");
      console.log(body);

      console.log("custID: " + body.custID);

      res.render('index', {
        name: body.firstName + " " + body.lastName,
        nric: body.nric,
        address: body.address,
        phoneNumber: body.phoneNumber,
        email: body.email,
        gender: body.gender,
        age: body.age,
        accountKey: body.accountKey,
        custID: body.custID
      })
    } catch (err) {

    }
  })
});

/* get Transaction page. */
router.get('/transaction', function (req, res) {
  // Authenticate
  var username = req.body.uid;
  var password = req.body.password;

  var options = {
    'method': 'POST',
    'hostname': 'ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com',
    'path': '/techtrek/login',
    'headers': {
      'x-api-key': 'QNd2HPwfhv2bK2pNt4pfl79YaNoq7p0X7XeSPkKY',
      'Content-Type': 'text/plain'
    },
    'maxRedirects': 20
  };

  var outbound = JSON.stringify({
    "userName": username,
    "userPass": password
  })

  httpRequest(options, outbound).then(function (body) {
    try {
      console.log("body: ");
      console.log(body);

      console.log("accountKey: " + body.accountKey);

      res.render('index', {
        name: body.firstName + " " + body.lastName,
        nric: body.nric,
        address: body.address,
        phoneNumber: body.phoneNumber,
        email: body.email,
        gender: body.gender,
        age: body.age,
        accountKey: body.accountKey,
        custID: body.custID
      })
    } catch (err) {

    }
  })
});

// function for post to get Data from SAP PI
function httpRequest(postRequest, postData) {
  return new Promise(function (resolve, reject) {
    var req = https.request(postRequest, function (res) {
      // reject on bad status
      if (res.statusCode < 200 || res.statusCode >= 300) {
        return reject(new Error("statusCode=" + res.statusCode));
      }
      // cumulate data
      var body = [];
      res.on("data", function (chunk) {
        body.push(chunk);
      });
      // resolve on end
      res.on("end", function () {
        try {
          body = JSON.parse(Buffer.concat(body).toString());
        } catch (e) {
          reject(e);
        }
        resolve(body);
      });
    });
    // reject on request error
    req.on("error", function (err) {
      // This is not a "Second reject", just a different sort of failure
      reject(err);
      res.render('error');
      // Todo: Throw alert back to front end
      // alert(err);
    });
    if (postData) {
      req.write(postData);
    }
    // IMPORTANT
    req.end();
  });
}

module.exports = router;