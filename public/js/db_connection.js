// Make db connection
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "smrt_myinfo"
});

// If connected, insert into database
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO personal_information (NRIC, Full Name, Sex, Race, Nationality, Date Of Birth, Email, Mobile Number, Registered Address, Housing Type, Marital Status, Highest Education Level) VALUES (uinfin, name, sex, race, nationality, dob, email, mobileno, regadd, housingtype, marital, edulevel)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
