var express = require('express');
var router = express.Router();

function MathRand(n) { 
  let c=""; 
  for(let i=0;i<n;i++){ 
    c+=Math.floor(Math.random()*10); 
  }
  return c
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sms', function (req, res) {
    let Alidayu = require('alidayu-node');
    let alidayu = new Alidayu('23791472', '5be7d069598ca6ca69f10f31cc6731a7');
  
    let num = MathRand(6)
    alidayu.smsSend({
        sms_free_sign_name: '371p物联网',
        sms_param: {number: num},
        rec_num: req.query.tel,
        sms_template_code: 'SMS_47995098'
    });
    console.log('check phone: '+req.query.tel+'\n'+'check sms: '+num);

    res.send({tel:req.query.tel,num:num})
});

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
