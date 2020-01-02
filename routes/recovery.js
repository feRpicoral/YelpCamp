const express = require('express'),
    router  = express.Router();

router.get('/', (req, res, next) => {
    res.render('recovery');
});

router.post('/', (req, res, next) => {
    res.status(204).send();
});

module.exports = router;