const express = require('express');
const app = express.Router();
const posts = require('../models/posts');


app.get('/:uid', (req, res, next) => {
    res.send(posts.getAllPosts);
})
    .get('/:uid/:title', (req, res, next) => {
        res.send(posts.getPostByTitle(req.params.title));
    })
    .post('/:uid', (req, res, next) => {
        posts.addPost(req.body);
        res.send(posts.getAllPosts);
    })
    .delete('/:uid/:title', (req, res, next) => {
        posts.deletePost(req.params.title);
        res.send(posts.getAllPosts);
    });
    
    module.exports = app;
