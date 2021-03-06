/**
 * Created by tao on 2016/11/14.
 */
var express = require('express');
var fortune = require('./lib/fortune');

var app = express();

var handlebars = require('express3-handlebars').create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));
app.use(function (req, res, next) {
	res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
	console.log(res.locals.showTests)
	next();
});

app.set('port', process.env.PORT || 3000);

app.get('/', function (req, res) {
	res.render('home');
});

app.get('/about', function (req, res) {
	res.render('about', {
		fortune: fortune.getFortune(),
		pageTestScript: '/qa/tests-about.js'
	});
});

app.use(function (req, res) {
	res.status(404);
	res.render('404');
});

app.use(function (err, req, res, next) {
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function () {
	console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});