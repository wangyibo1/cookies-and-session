var express =require('express')
var parseurl=require('parseurl')
var session=require('express-session')
var app=express()
function my_session(){
    var data={};
    return function(req,res,next){
    var id=req.signedCookies.session)_id || uuid.v4();
    res.cookie('session_id',id,{
    maxAge:600000,
    path:'/'
    httpOnly:true,
    signed:true
});
req.session=clone(data[id] || {});
res.on('finish',function(){
console.log('save session: ',req.session);
data[id]=clone(req.session);
})
next();
}
}
app.use(cookieParser('asdasdqweqwe'));
app.use(my_session());

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
