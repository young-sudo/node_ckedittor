var express = require('express');
var path = require('path');
//跨域
var cors = require('cors');

const hostname = '127.0.0.1';
const  post = 3100;


var indexRouter = require('./routes/index');

var app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

app.use('/', indexRouter);

app.listen(post,() =>{
  console.log(`Files Server running at http://${hostname}:${post}`)
});