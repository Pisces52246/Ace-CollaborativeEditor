// import express from "express";
// import path from "path";
const express = require("express");
const path = require("path");
var app = express();

// add static assest directories
app.use("/static", express.static(__dirname + '/static'));
app.use("/build", express.static(__dirname + '/build'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000);

console.log("Listening at Port 3000");
