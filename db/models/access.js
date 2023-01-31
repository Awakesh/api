'use strict';
const {
  Model
} = require('sequelize');
const Users = require("./users");
module.exports = (sequelize, DataTypes) => {
  class Access extends Model {
    static associate(models) {
      Access.belongsTo(models.Users)
    }
  }
  Access.init({
    name: DataTypes.STRING,
    view: DataTypes.BIGINT,
    create: DataTypes.BOOLEAN,
    edit: DataTypes.BOOLEAN,
    delete: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Access',
  });
  return Access;
};