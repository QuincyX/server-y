var express = require('express');
var router = express.Router();

// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

var captchapng = require('captchapng');

router.get('/captcha.png', function(req, res) {
  console.log('img number： '+req.query.n)
  let p = new captchapng(80,30,req.query.n);
  p.color(0, 0, 0, 0); 
  p.color(80, 80, 80, 255);
  let img = p.getBase64();
  let imgbase64 = new Buffer(img,'base64');
  res.writeHead(200, {
      'Content-Type': 'image/png'
  });
  res.end(imgbase64);
});

module.exports = router;
