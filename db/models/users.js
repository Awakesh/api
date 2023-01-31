'use strict';
const { Access } = require("./access");
const { Role } = require("./role");
const { Organisation } = require("./organisation");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      Users.hasMany(models.Role,{
        foreignKey:"role_id"
      }),
      Users.hasMany(models.Access,{
        foreignKey:"permission_id"
      }),
      Users.hasMany(models.Organisation,{
        foreignKey:"org_ids"
      })
    }
  }
  Users.init({
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    language: DataTypes.STRING,
    profile_picture: DataTypes.STRING,
    role_id: DataTypes.BIGINT,
    org_ids: DataTypes.BIGINT,
    permission_id: DataTypes.BIGINT,
    is_admin: DataTypes.BOOLEAN,
    is_active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};