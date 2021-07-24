var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/ShopNowBD', {useNewUrlParser:true,useUnifiedTopology: true });
app.use(express.static('public'))
app.set("view engine" , "ejs");
app.use(bodyParser.urlencoded({extended: true}));

	var products = [
         

]


app.get("/ShopNowBD",function (req,res) {
	res.render("index");
});

app.get("/sellOn",function (req,res) {
	res.render("sellOn");
});

app.get("/allPro",function (req,res) {

	 res.render("allPro",{products:products});
});

app.post("/allPro",function (req,res) {
	var name = req.body.name;
	var image = req.body.image;
	var newPro = {name: name, image: image}
	console.log(newPro);
	products.push(newPro);
	res.redirect("/allPro");

})



app.get("/logIn",function (req,res) {
	
});














app.listen(3000,function () {
	console.log("you are ready");
})