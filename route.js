const apiRoute = require('express').Router();
const userRoute = require('./routes/user.js');

apiRoute.use(userRoute)

module.exports = apiRoute;