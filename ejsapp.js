let express = require("express");
const bodyParser = require("body-parser");

let app = express();

app.set("view engine", "ejs"); //our app that we created using the express module will use the ejs as its view engien.
app.get("/", function(req, res){
    var today = new Date();
    var currentDay = today.getDay();
    var day = "";
    switch (currentDay) {
        case 0:
        day= "Sunday";
        break;
        case 1:
        day= "Monday";
        break;
        case 2:
        day= "Tuesday";
        break;
        case 3:
        day= "Wednesday";
        break;
        case 4:
        day= "Thursday";
        break;
        case 5:
        day= "Friday";
        break;
        case 6:
        day= "Saturday";
        break;
    default:
        console.log("are you sure?")
        break;
}
    
    res.render("list", {
        kindOfDay: day
    });

});



app.listen("3000", function(){
    console.log("server is running on the port 3000")
});



