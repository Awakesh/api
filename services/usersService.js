const { Sequelize, QueryTypes } = require('sequelize');
const db = require('../db/models/index.js');
// const Op = Sequelize.Op;
// const models = require("../db/models");
// const Joi = require('@hapi/joi');
// const md5 = require('md5');
// var qs = require('querystring');


/*--------
 * Function for front-end user registration
 * @param {type} req
 * @param {type} res
 * @returns user object as JSON
 */
async function userRegistration(req, res) {
    var data = req.body;
    var response = {};
    console.log("I am here")
    console.log(data);
   
}


module.exports = {
    userRegistration
}