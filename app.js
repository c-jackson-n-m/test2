var app = require("express")();

app.get("/", function(req,res,next){
	res.send("I am an expressjs app");
});
app.get("/message", function(req,res,next){
	res.send("I am the message");
});
app.get("/girls", function(req,res,next){
	res.send("Yeah, we have the all!");
});

app.set("port", 3000 || process.env.OPENSHIFT_NODEJS_PORT);
app.set("ip", "127.0.0.1" || process.env.OPENSHIFT_NODEJS_IP);

app.listen(app.get("port"), app.get("ip"), function(){
	console.log("Listening...");
});
