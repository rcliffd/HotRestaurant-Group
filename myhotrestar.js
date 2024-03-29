var express = require("express");
var path = require("path");

var app = express();
var PORT = 777;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations=[]

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "reservations.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
});


app.post("/api/reservations", function(req, res) {
    var newreservation = req.body;
    console.log(newreservation);
    reservations.push(newreservation)
    res.json(newreservation);
});


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
