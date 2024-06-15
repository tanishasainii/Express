const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const path = require('path');
const port = 3000;


app.use(bodyParser.urlencoded({ extended: false }));


//routing 
app.get("/", (req, res) => {
	res.send("This is the homepage");
});
app.get("/contact", (req, res) => {
	res.send("Contact us!!");
});


app.listen(port, ()=>{
  console.log('server is running on '+ port);
});
