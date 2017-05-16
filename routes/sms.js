var express = require('express');
var router = express.Router();

let num = String(Math.floor(Math.random()*900000)+100000);

router.get('/', function (req, res) {
  let Alidayu = require('alidayu-node');
  let alidayu = new Alidayu('23641498', '3aeb09ce9f0d17fda2bcc73e4201458d');
  alidayu.smsSend({
    sms_free_sign_name: '371p物联网',
    sms_param: {number: num},
    rec_num: req.query.tel,
    sms_template_code: 'SMS_47995098'
  }, function(error, response) {
    if (!error) console.log(response);
    else console.log(error);
  });
  console.log('check phone: '+req.query.tel+'\n'+'check sms: '+num);
  res.send({tel:req.query.tel,num:num})
});

router.get('/next', function (req, res) {
    if(req.query.num == num){
        res.send(true)
    }else{
        res.send(false)
    }
});

module.exports = router;
