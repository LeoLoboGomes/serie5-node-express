var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log(req.body.name);
  const fs = require('fs');

  let person = {
    name: req.body.name,
    age: req.body.age,
  };

  fs.readFile("./public/database.json", function (err, data) {
    var json = JSON.parse(data);
    json.person.push(person);    
    fs.writeFile("./public/database.json", JSON.stringify(json), function(err){
      if (err) throw err;
      console.log('Dado armazenado');
    });
  });
});

router.get('/', function(req, res, next) {
  const fs = require('fs');

  fs.readFile("./public/database.json", function (err, data) {
    if(err) throw err;
    var json = JSON.parse(data);
    res.send(json);
  });
});

module.exports = router;
