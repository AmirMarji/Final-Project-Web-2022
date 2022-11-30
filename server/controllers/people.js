const express = require('express');
const app = express.Router();
const people = require('../models/people');

app.get('/:uid', (req, res, next) => {
    res.send(people.getAllPeople);
})
    .get('/:uid/:id', (req, res, next) => {
        res.send(people.getPersonById(req.params.id));
    }
    );

    module.exports = app;


