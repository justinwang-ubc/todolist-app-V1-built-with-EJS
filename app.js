// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date =require(__dirname + "/date.js");      // date is link to a export



const app = express();

let items =["buy food", "cook food", "eat food"] ;
let workitems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {


  let day =  date.getdate();     // custom node module call
  // var currentday = today.getDay();
  // var day = "";
  //
  // switch (currentday) {
  //   case 0:
  //     day = "sunday"
  //     break;
  //   case 1:
  //     day = "monday"
  //     break;
  //   case 2:
  //     day = "tuesday"
  //     break;
  //   case 3:
  //     day = "wednesday"
  //     break;
  //   case 4:
  //     day = "thursday"
  //     break;
  //   case 5:
  //     day = "friday"
  //     break;
  //   case 6:
  //     day = "saturday"
  //     break;
  //   default:
  // console.log("error current day is equal to" + currentday);
  // }
  res.render("list", { listtitle: day , newlistitems:items  });  // variable key : value
});

app.post("/",function(req,res){

   let item = req.body.newitem;

   if(req.body.button === "Work"){
     workitems.push(item);
     res.redirect("/work");
   }else{
     items.push(item);
     res.redirect("/");
   }
});

app.get("/work",function(req,res){
  res.render("list",{listtitle: "Work List", newlistitems: workitems});
});

app.post("/work",function(req,res){
  let item =req.body.newitem ;

  workitems.push(item);

  res.redirect("/work");
})

app.get("/about",function(req,res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("server is running on port 3000");
});
