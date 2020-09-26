var express = require('express')
var app = express();

var port = process.env.PORT || 8080;

app.get('*', function(req,res,next) {
  if(req.headers['x-forwarded-proto'] != 'https' && process.env.NODE_ENV === 'production')
    res.redirect('https://'+req.hostname+req.url)
  else
    next() /* Continue to other routes if we're not redirecting */
});


app.listen(port, function() {
	console.log('app running')
})

