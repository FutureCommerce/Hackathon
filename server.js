var feed = require("feed-read");



var express = require('express');
var app = express();

app.use('/', express.static('app'));

app.get('/commits', function (req, res) {
  feed("https://github.com/FutureCommerce/Hackathon/commits/master.atom", function(err, articles) {
    if (err) throw err;
    res.send(articles);
  });
});



var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});

