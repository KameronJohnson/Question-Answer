'use strict';

var express = require('express');
var app = express();
var routes = require('./routes');

var jsonParser = require('body-parser').json;
var logger = require('morgan');

app.use(logger("dev"));

var port = process.env.PORT || 3000;

//when app gets request, this middleware will
//parse the request's body as json, and make it accessible
// from the request's body property
app.use(jsonParser());

app.use("/questions", routes);

//catch 404
app.use(function(req, res, next) {
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// Error Handler
app.use(function(err, req, res, next){
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    })
});

//start server
app.listen(port, function() {
    console.log("server is running on port", port);
});