//import express from express

const express = require("express");

const app = express();
const path = require("path");
//prosses/process.env is an object where the web where we host gives its port

const PORT = process.env.PORT || 3000;
//app.set(key,value) this will set the key and value in the app object's container 
//app.set(view engine,ejs) tells which engine we are using
//whenever express uses the engine then it i'll check in app obj that which view engine are we using 
app.set('view engine','ejs')


//we use get method to get the value

// console.log(app.get('view engine'))

app.use(express.static('public'))



//"/"= root folder in web address

//getting api first parameter is route and second parameter is acalback function in which 1st parameter is data and second parameter is what u want to give the user as response
//res.send will send its value to html

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname) + "/views/index.html");
  console.log(__dirname);
  //we get the URL of the current folder though __dirname
  //path.resolve removes space and extra slashes etc in the link it cleans the link
});
app.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname) + "/views/about.html");
});
        
app.get('/download',(req,res)=>{

res.download(path.resolve(__dirname) + "/views/about.html")
//will download about.htm when u visit /download route
})
      //1st parameter is port and second is a callback function the function works when the server starts

app.listen(PORT, () => {
  console.log(`${PORT} port`);
});                                    