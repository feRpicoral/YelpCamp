const express = require('express'),
      router  = express.Router();

//Get campground by ID
router.get('/', (req, res, next) => {
    res.render('campground');
});

//New campground form
router.get('/new', (req, res, next) => {
    res.render('new');
});

//Add new campground to the DB
router.post('/', (req, res, next) => {

    let campground = {
        name: req.body.name,
        image: req.body.image,
        description: req.body.description
    };
    res.send(req.body);

    // next();
}, ((req, res) => {
    res.redirect('/');
}));

module.exports = router;