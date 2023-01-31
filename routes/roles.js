const app = require('express').Router();
const rolesService = require('../services/rolesService');
const { response } = require('express');

app.post('/create-roles', async (req, res) => {
    try {
        response = await rolesService.createRoles(req, res);
        res.send(response);
    } catch (error) {
        res.send(error);
    }
});

app.post('/getRoleById', async (req, res) => {
    try {
        response = await rolesService.getRoleById(req, res);
        res.send(response);
    } catch (error) {
        res.send(error);
    }
});

app.put('/updateRoleById/:roleId', async (req, res) => {
    try {
        let roleId = req.params.roleId;
        response = await rolesService.updateRoles(req, res,roleId);
        res.send(response);
    } catch (error) {
        res.send(error);
    }
});
app.delete('/deleteRoleById/:roleId', async (req, res) => {
    try {
        let roleId = req.params.roleId;
        console.log("role :",roleId)
        response = await rolesService.deleteRoleById(req, res,roleId);
        res.send(response);
    } catch (error) {
        res.send(error);
    }
});
module.exports = app;