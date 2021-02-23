var express = require('express');
var router = express.Router();

/* GET articles. */
router.get('/', (req, res, next) => {
    db.collection("articles").find().toArray(function(err, result) {
       res.json(result);
    });
});

/* GET trending articles. */
router.get('/trending', (req, res, next) => {
    db.collection("articles").find().sort({ sales: 1 }).toArray(function(err, result) {
        res.json(result);
    });
});

module.exports = router;
