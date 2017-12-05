var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  axios.get('http://backend:3000/api')
    .then(function(response){
      res.json(response.data);
    });
});

module.exports = router;
