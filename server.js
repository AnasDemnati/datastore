var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();

var https = require("https");

app.use(logger('dev'));
app.use(bodyParser.json());

app.use('/public', express.static(__dirname + "/public"));

app.all('/*', function(req, res, next) {
  // CORS headers
  res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  // Set custom headers for CORS
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});

// Auth Middleware - This will check if the token is valid
// Only the requests that start with /api/v1/* will be checked for the token.
// Any URL's that do not follow the below pattern should be avoided unless you
// are sure that authentication is not needed
app.all('/api/v1/*', [require('./middlewares/validateRequest')]);

app.use('/', require('./routes'));

// If no route is matched by now, it must be a 404
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Start the server
app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {

setInterval(function() {
    https.get("https://dataweb-store.herokuapp.com/data");
    https.get("https://web-app-link.herokuapp.com/data");
    https.get("https://ml-datastore.herokuapp.com/data");
    https.get("https://scity-datastore.herokuapp.com/data");
    https.get("https://ca-datastore.herokuapp.com/data");
    console.log("setInterval");
}, 300000); // every 5 minutes (300000)

  console.log('Express server listening on port ' + server.address().port);
});
