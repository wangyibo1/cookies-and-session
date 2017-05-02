var express =require('express');
var cookieParser =require('cookie-parser');
var app=express();
app.use(cookieParser());
app.get('/read',function(req,res,next){
	res.json(req.cookies);
})
app.get('/write',function(req,res,next){
res.cookie('my_cookie','hello',{expires: new Date(Date.now()+2*60*1000)});//2minutes expires
res.json(req.cookies);
});
app.listen(9000);
console.log("Server running at port:9000");
