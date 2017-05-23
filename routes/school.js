var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

var models = require('../models');
var School_post = models.School_post;

// 发布新【学校动态】
router.post('/new', function(req, res, next) {
  console.log(req.body)
  let time = new Date().format("yyyy-MM-dd");
  let post = new School_post({
    name:req.body.name,
    date:time,
    category:req.body.category,
    content:req.body.content,
    read:'1',
    liked:'1'
  }); 
  post.save(); 
  res.send(post); 
  console.log(post)
});

// 查询所有【学校动态】
router.get('/post', function(req, res) {
    School_post.find(function(err, doc) { 
        res.send(doc); 
        console.log(doc)
    }); 
});

module.exports = router;
