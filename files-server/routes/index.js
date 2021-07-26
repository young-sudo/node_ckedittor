var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var path = require('path');
var fs =require('fs');

//图片上传
router.post('/upload',(req,res) => {
  let address ="http://" + req.headers.host;
  //图片上传路径
  var  uploadURL = path.join(__dirname,"../public/images");
  var form = formidable({
    multiples : true,
    uploadDir : uploadURL
  });
  form.parse(req,(err,fields,files) => {                  
    //files 是  {upload: File {}} 对象
    let newFileName = MathRand() + Date.now() + path.extname(files.upload.name);  //图片名
    let newName = path.join(uploadURL,newFileName)    //文件路径即文件名
    fs.rename(
      files.upload.path,
      newName,
      (err) => {if(err){console.log(err)}})
    let returnObj = new Object();
    returnObj.uploaded = 1;
    returnObj.fileName = newFileName;
    returnObj.url = address + "/images/" + newFileName;
    res.json(returnObj); 
    })

    //随机生成六位数
    function MathRand() {
      var Num = "";
      for (var i = 0; i < 6; i++) {
        Num += Math.floor(Math.random() * 10);
      }
      return Num;
    }
})

module.exports = router;
