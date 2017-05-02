var express =require('express');
var cookieParser =require('cookie-parser');
var app=express();
app.use(cookieParser());
app.get('/read',function(req,res,next){
	res.json(req.cookies);
})
app.get('/write',function(req,res,next){
res.cookie('a','123')
res.cookie('b','456',{httpOnly:true})
res.cookie('my_cookie','hello',{maxAge:1*60*1000});//2minutes expires
res.json(req.cookies);
});
app.listen(9000);
console.log("Server running at port:9000");
