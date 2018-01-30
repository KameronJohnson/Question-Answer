'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//start server
app.listen(port, function() {
    console.log("server is running on port", port);
});