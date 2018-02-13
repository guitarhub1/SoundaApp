/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
/*app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
//app.use(bodyParser.json());

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST home page. */
router.post('/effects', function(req, res) {
	
	
	
	var sys = require('sys')
	var exec = require('child_process').exec;
	function puts(error, stdout, stderr) { sys.puts(stdout) }
	exec("sudo hello", puts);
});

module.exports = router;
