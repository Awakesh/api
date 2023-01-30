const app = require('express').Router();
const usersService = require('../services/usersService.js');
const { response } = require('express');

app.post('/register', async (req, res) => {
    try {
        response = await usersService.userRegistration(req, res);
        res.send(response);
    } catch (error) {
        res.send(error);
    }
});

module.exports = app;