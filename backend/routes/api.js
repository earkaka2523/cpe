var express = require('express');
var router = express.Router();

var client = require('mongodb').MongoClient;

const uri = "mongodb://mongo:27017/test";

router.get('/', function(req, res, next) {
	client.connect(uri, function(err, db) {
		if(err) return next(err);
		var collection = db.collection('stores');
		collection.find({}).toArray(function(err, docs) {
			if(err) return next(err);
			db.close();
			return res.json(docs);
		});
	});
});

router.post('/', function(req, res, next) {
  client.connect(uri, function(err, db) {
    if(err) return next(err);
    var collection = db.collection('stores');
    collection.insertOne(req.body, function(err, docs) {
      if(err) return next(err);
      db.close();
      return res.send("Success");
    });
  });
});

router.delete('/', function(req, res, next) {
  console.log(req.body);
  res.send("DELETE");
});


router.put('/', function(req, res, next) {
  console.log(req.body);
  res.send("PUT");
});

module.exports = router;
