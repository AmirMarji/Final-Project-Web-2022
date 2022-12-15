const express = require('express');
const app = express.Router();
const AI_API = require('../models/chatGPTFetch');

app.get('/:uid', (req, res, next) => {
    res.send(AI_API.fetchGPT);
}
);  

module.exports = app;   
