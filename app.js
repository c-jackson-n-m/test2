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
app.get("/people", function(req,res,next){
	res.send(res.url);
});

app.set("port", process.env.OPENSHIFT_NODEJS_PORT || 3000);
app.set("ip",   process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");

app.listen(app.get("port"), app.get("ip"), function(ev){
	console.log("Listening...");
});
