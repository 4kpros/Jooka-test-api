const express = require('express');
const router = express.Router();

const { PostModel } = require('../models/postModel');
const { isValidObjectId } = require('mongoose');

// Get all posts
router.get('/all', (req, res) => {
    PostModel.find((err, docs) => {
        if(!err) res.send(docs);
        else console.log("Error to get data : " + err);
    });
});

// Save new post
router.post('/', (req, res) => {
    const newRecord = new PostsModel({
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        sender: req.body.sender,
        thumbnail: req.body.thumbnail,
    });
    newRecord.save((err, docs) => {
        if(!err) res.send(docs);
        else console.log('Error creating new data');
    });
});

// Delete post
router.delete('/:id', (req, res) => {
    if(!isValidObjectId.isValid(req.params.id))
        return res.status(400).send("ID unknown : " + req.params.id);
    
    PostModel.findByIdAndRemove(
        req.params.id,
        (err, docs) => {
            if(!err) res.send(docs);
            else console.log("Delete error : " + err);
        }
    );
});


module.exports = router;
