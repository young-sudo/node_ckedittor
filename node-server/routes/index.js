var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('ckeditor');
});

// 展示
var content ;

router.post('/show',(req,res) => {
  content = req.body.data;
  res.send("http://"+ req.headers.host +"/show");
})
router.get('/show',(req,res) => {
  res.render('show',{content : content});
})

module.exports = router;
