const express = require('express');
const app = express.Router();
const posts = require('../models/posts');


app.get('/', (req, res, next) => {
    res.send(posts.getAllPosts());
})
    .get('/:title', (req, res, next) => {
        res.send(posts.getPostByTitle(req.params.title));
    })
    .post('/:uid', (req, res, next) => {
        posts.addPost(req.body);
        res.send(posts.getAllPosts());
    })
    .delete('/:title', (req, res, next) => {
        posts.deletePost(req.params.title);
        res.send(posts.getAllPosts());
    });
    
    module.exports = app;
