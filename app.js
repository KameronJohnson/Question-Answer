'use strict';

var express = require('express');
var jsonParser = require('body-parser').json;
var app = express();
var routes = require('./routes');

var port = process.env.PORT || 3000;

//when app gets request, this middleware will
//parse the request's body as json, and make it accessible
// from the request's body property
app.use(jsonParser());

app.use("/questions", routes);

//start server
app.listen(port, function() {
    console.log("server is running on port", port);
});