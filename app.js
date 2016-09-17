var app = require("express")();

app.get("/", function(req,res,next){
	res.send("I am an expressjs app");
});

app.set("port", 3000 || process.env.OPENSHIFT_PORT);
app.set("ip", "127.0.0.1" || process.env.OPENSHIFT_IP);

app.listen(app.get("port"), app.get("ip"));
