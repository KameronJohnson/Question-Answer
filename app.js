'use strict';

const express = require('express');
const app = express();
const jsonParser = require('body-parser');

const port = process.env.PORT || 3000;

app.use(function(req, res, next) {
    console.log("Hello Middleware");
    next();
});

//start server
app.listen(port, function() {
    console.log("server is running on port", port);
});