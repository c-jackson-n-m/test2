var express = require("express"),
	path = require("path");

//create a new express app
var app = express();

//connect to mongoose
//mongoose.connect(process.env.OPENSHIFT_MONGODB_DB_URL+"users");

//add app variables
app.set("port", process.env.OPENSHIFT_NODEJS_PORT || 8888);
app.set("ip", process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");

//configure some connect middlewares
app.get("/", function(req,res,next){
	res.send("Hello world");
});

//listen for http connections
app.listen(app.get("port"), app.get("ip"), function(ev){
	console.log("Listening for http connections on some port and some ip address");
});
