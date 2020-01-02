const express = require('express'),
    router  = express.Router();

router.get('/', (req, res, next) => {
    res.render('login');
});

router.post('/', (req, res, next) => {
    res.send(req.body);
});

module.exports = router;