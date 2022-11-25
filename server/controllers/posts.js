const express = require('express');
const router = express.Router();
const {getAllPosts, getPostByTitle} = require('../models/posts');

