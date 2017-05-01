var express =require('express')
var parseurl=require('parseurl')
var session=require('express-session')
var app=express()
app.use(session({
   secret: 'keyboard cat',
   resave:false,
   saveUninitialized:true
}))
app.use(function (req,res,next){
var views =req.session.views
if(!views){
views=req.session.views={}
}
var pathname=parseurl(req).pathname
views[pathname]=(views[pathname] || 0)+1
next()
})
app.use('/',function(req,res,next){
var num=req.session.num
if(!num){
num=req.session.num=0
}
req.session.num=num+1
console.log('=====')
app.get('/foo',function(req,res,next){
res.send('you viewed this page '+req.session.views['/foo']+'times')
})
app.get('/bar',function(req,res,next){
res.send('you viewed this page'+req.session.views['/bar']+'times')
})
app.listen(3000);
console.log('Web server has started on http://123.206.27.123:3000/');
