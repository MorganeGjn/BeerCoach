var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var Beer = require('./routes/beer');
var User = require('./routes/user');
var SchemaUser = require('./models/User.js');
var mongoose = require('mongoose');
var Users = mongoose.model('Users', SchemaUser);
var comment = require('./routes/comment');
var session = require('express-session');
var crypto = require('crypto');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/Beers', express.static(path.join(__dirname, 'dist')));
app.use('/Beer', Beer);
app.use('/User', User);
app.use('/Comment', comment);
app.use(session({secret: 'FortyTw0iSth34nsWeRToLife,Univers&everything'}));
var sess;
app.get('/isLogged', function(req,res){
	sess=req.session;
	if(sess.isLogged == true && sess.name != null ){
		res.send({logged : true, user: sess.name});
	}
	else{
		res.send({logged : false});
	}

});
app.post('/login',function(req,res){
  sess = req.session;
  var loginName = req.body.email;
  var pass = req.body.pass;
  var passhash = crypto.createHash('sha256').update(pass).digest('hex');
  Users.find({email: loginName, password: passhash },function (err, users) {
    if (err) return console.error(err);
    //console.log(Object.keys(users).length);
    if(Object.keys(users).length ==1){
      sess.name = loginName;
      sess.isLogged = true;
      sess.pass = pass;
      res.json('done');
    }
    else{
      sess.isLogged= false;
      res.json({status : -1 , msg : "user or pass unknown"});
    }
  });
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/mean-angular5', { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

module.exports = app;
