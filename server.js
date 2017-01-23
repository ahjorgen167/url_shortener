var express = require('express')
var passport = require('passport');
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var bodyParser = require('body-parser');


var app = express()

var csurf = require('csurf')


app.use(cookieParser());
app.use(session({ secret: "process.env.SESSION_SECRET" }));
app.use(csurf());

// If using passport. Used in mean.io/meanjs

app.use(function(req, res, next) {
  res.cookie('XSRF-TOKEN', req.csrfToken());
  next();
});

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', (process.env.PORT || 3000))
app.use(express.static(__dirname + '/public/shortener/'))

require ("./server/app.js")(app);

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port') + "\nStarting At:\n" + new Date().toString());
})