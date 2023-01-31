const { Sequelize, QueryTypes } = require('sequelize');
const db = require('../db/models/index.js');
// const Op = Sequelize.Op;
const models = require("../db/models");
const Joi = require('@hapi/joi');
// const md5 = require('md5');
var qs = require('querystring');


/*--------
 * Function for front-end user registration
 * @param {type} req
 * @param {type} res
 * @returns user object as JSON
 */
async function createRoles(req, res) {
    var data = req.body;
    const {error, value} = validateUserRoles(data);
    if (error) {
        console.log("jjj")
        return res.status(200).send({
            status: 0,
            message: error.message,
        });
    }
    var userRolesData = {
        name:data['name'],
        description:data['description']
    };
    return await models.Role.create(userRolesData).then(async objComp => {
        if (objComp.id) {
            return res.status(200).send({
                status: 1,
                message: 'We really appreciate your choice and are looking forward to help you boost your business. We believe that, with the help of our platform, you’ll be able to increase your profit and successfully Turn your business digital.',
                data: objComp.dataValues
            });
        }else{
            return res.status(200).send({
                status: 0,
                message: 'Something goes wrong, Please Try again.',
            });
        }
    })
}

async function getRoleById(req,res){
    var data = req.body;
    if (typeof data['roleId'] === 'undefined') {
        return {
            status: 0,
            message: 'Invalid request!',
        };
    }
    let columns = ['id', 'name','description'];
    return await models.Role.findOne({ attributes: columns, where: {id : data['roleId']} })
    .then(result => {
        console.log("dsdfdffff --->",result);
        if (result) {
            return res.status(200).send({
                status: 1,
                message: 'We really appreciate your choice and are looking forward to help you boost your business. We believe that, with the help of our platform, you’ll be able to increase your profit and successfully Turn your business digital.',
                data: result
            });
            
        } else {
            return res.status(200).send({
                status: 0,
                message: 'No matching record found.',
                data: result
            });
            
        }
    }).catch(err => {
        return res.status(200).send({
            status: 0,
            message: 'Something went wrong, Please Try again.',
            data: err
        });
    });

}

async function updateRoles(req,res,roleId){
    let data = req.body;
    if(roleId == undefined){
        return {
            status: 0,
            message: 'Invalid request!',
        };
    }
    const {error, value} = validateUserRoles(data);
    if (error) {
        console.log("jjj")
        return res.status(200).send({
            status: 0,
            message: error.message,
        });
    }
    var userRolesUpdateData = {
        name:data['name'],
        description:data['description']
    };
    return await models.Role.update(userRolesUpdateData, {
        where: {
          id: roleId
        }
    })
    .then(result => {
        console.log("dsdfdffff --->",result);
        if (result) {
            return res.status(200).send({
                status: 1,
                message: 'We really appreciate your choice and are looking forward to help you boost your business. We believe that, with the help of our platform, you’ll be able to increase your profit and successfully Turn your business digital.',
                data: result
            });
            
        } else {
            return res.status(200).send({
                status: 0,
                message: 'No matching record found.',
                data: result
            });
            
        }
    }).catch(err => {
        return res.status(200).send({
            status: 0,
            message: 'Something went wrong, Please Try again.',
            data: err
        });
    });

}
async function deleteRoleById(req,res,roleId){
    if(roleId == undefined){
        return {
            status: 0,
            message: 'Invalid request!',
        };
    }
    return await models.Role.destroy({
        where: {
            id: roleId
        }
    })
    .then(result => {
        console.log("dsdfdffff --->",result);
        if (result) {
            return res.status(200).send({
                status: 1,
                message: 'We really appreciate your choice and are looking forward to help you boost your business. We believe that, with the help of our platform, you’ll be able to increase your profit and successfully Turn your business digital.',
                data: result
            });
            
        } else {
            return res.status(200).send({
                status: 0,
                message: 'No matching record found.',
                data: result
            });
            
        }
    }).catch(err => {
        return res.status(200).send({
            status: 0,
            message: 'Something went wrong, Please Try again.',
            data: err
        });
    });
    
}


async function validateUserRoles(data) {
    if (typeof fieldPref == 'undefined' || fieldPref.length == 0) {
        var fieldPref = '';
    }
    const schema = Joi.object().keys({
        [fieldPref + 'name']: Joi.string().max(50).required().messages({
            'string.empty': `Role Name cannot be an empty field`,
            'any.required': `Role Name is a required field`
        }),
        [fieldPref + 'description']: Joi.string().max(50).required().messages({
            'string.empty': `description cannot be an empty field`,
            'any.required': `description is a required field`
        })
    }).options({allowUnknown: true});
    return schema.validate(data);
}


module.exports = {
    createRoles,
    getRoleById,
    updateRoles,
    deleteRoleById
}