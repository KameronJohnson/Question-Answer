'use strict'

var express = require('express');
var router = express.Router();

//GET /questions
//Route for questions collections
router.get("/", function(req, res) {
    // return all the questions
    res.json({
        response: "You sent me a GET request"
    });
});

//Post /questions
//Route for creating questions
router.post("/", function(req, res) {
    res.json({
        response: "You sent me a POST request",
        body: req.body
    });
});

//GET /questions/qID
//Route for specific questions
router.get("/:qID", function(req, res) {
    // return all the questions
    res.json({
        response: "You sent me a GET request for qID " + req.params.id
    });
});

//POST /questions/:qID/answers
//Route for creating an answer
router.post("/:qID/answers", function(req, res) {
    res.json({
        response: "You sent me a POST request to /answers",
        questionId: req.params.qID,
        body: req.body
    });
});

//PUT /questions/:qID/answers/:aID
//Edit a specific answer
router.put("/:qID/answers/:aID", function(req, res) {
    res.json({
        response: "You sent me a PUT request to update aID " + req.params.aID,
        questionId: req.params.qID,
        answerId: req.params.aID,
        body: req.body
    });
});

//DELETE /questions/:id/answers/:id
//Delete a specific answer
router.delete("/:qID/answers/:aID", function(req, res) {
    res.json({
        response: "You sent me a DELETE request for aID " + req.params.aID,
        questionId: req.params.qID,
        answerId: req.params.aID,
    });
});

//POST /questions/:id/answers/:id/vote-up
//POST /questions/:id/answers/:id/vote-down
//Upvote an answer
router.post("/:qID/answers/:aID/vote-:dir", function(req, res, next) {
        if(req.params.dir.search(/^(up|down)$/) === -1) {
            var err = new Error("Not Found");
            err.status = 404;
            next(err);
        } else {
            next();
        }
    },function(req, res) {
    res.json({
        response: "You sent me a POST request to /vote " + req.params.dir,
        questionId: req.params.qID,
        answerId: req.params.aID,
        vote: req.params.dir
    });
});
module.exports = router;