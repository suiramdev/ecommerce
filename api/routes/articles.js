var express = require('express');
var router = express.Router();

/* GET articles. */
router.get('/', (req, res, next) => {
    db.query("SELECT * FROM articles", function(err, rows, fields) {
        res.json(rows);
    });
});

/* GET trending articles. */
router.get('/trending', (req, res, next) => {
    db.query("SELECT * FROM articles ORDER BY article_sales", function(err, rows, fields) {
        res.json(rows);
    });
});

module.exports = router;
