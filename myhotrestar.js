var express = require("express");
var path = require("path");

var app = express();
var PORT = 777;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations=[]
var waiting=[]

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/addreservations", function(req, res) {
    res.sendFile(path.join(__dirname, "addreservations.html"));
});

app.get("/reservations_waiting", function(req, res) {
    res.sendFile(path.join(__dirname, "reservations_waiting.html"));
});

app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
});

app.get("/api/waiting", function(req, res) {
    return res.json(waiting);
});

app.post("/api/reservations", function(req, res) {
    var newreservation = req.body;
    console.log(newreservation);
  if (reservations.length<5){
    reservations.push(newreservation)
    res.json(newreservation);
  }
  else{
    waiting.push(newreservation)
    res.json(newreservation); 
  }
});


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
