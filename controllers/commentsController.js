const express = require('express');
const router = express.Router();

const { CommentModel } = require('../models/commentModel');

// Get all comments
router.get('/all', (req, res) => {
    CommentModel.find((err, docs) => {
        if(!err) res.send(docs);
        else console.log("Error to get data : " + err);
    });
});

// Save new comment
router.post('/', (req, res) => {
    const newRecord = new CommentModel({
        sender_mail: req.body.sender_mail,
        content: req.body.content,
        date: req.body.date,
    });
    newRecord.save((err, docs) => {
        if(!err) res.send(docs);
        else console.log('Error creating new data');
    });
});

module.exports = router;