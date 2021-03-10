var express = require('express');
var router = express.Router();
ObjectId = require("mongodb").ObjectId;

/* GET article by ObjectId. */
router.get('/:id', (req, res, next) => {
    db.collection("articles").find( { _id: ObjectId(req.params.id) } ).toArray(function(err, result) {
        res.json(result);
    });
});

module.exports = router;
