let express    = require('express'),
    app        = express(),
    bodyParser = require('body-parser'),
    ejs        = require('ejs');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

const campgrounds = require('./routes/campgrounds'),
      index       = require('./routes/index');

app.use('/', index);
app.use('/campgrounds', campgrounds);

app.get('*', (req, res) => {
    res.send('Page Not Found!<br><a href="/">Home</a>')
});

//Start server
const listener = app.listen(30000, '127.0.0.1', function () {
    let port = listener.address().port;
    let host = listener.address().address;
    console.log('\n === Server started on http://' + host + ':' + port + ' ===\n');
});