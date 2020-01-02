const express = require('express'),
    router  = express.Router();

router.get('/', (req, res, next) => {
    res.render('signup');
});

router.post('/', (req, res, next) => {
    res.send(req.body);
});

module.exports = router;