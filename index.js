const express = require("express");
const app = express();
let port = process.env.port||8080;

app.listen(port,(req)=>{
  console.log(`server started at: localhost:${port}`);
})

app.set("view engine","ejs");
app.use(express.static("public"));

app.get("/",(req,res)=>{
   res.render("index.ejs");
});
app.get("/news",(req,res)=>{
   res.render("index.ejs");
});
