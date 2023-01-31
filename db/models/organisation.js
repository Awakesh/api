'use strict';
const {
  Model
} = require('sequelize');
const Users = require('./users');
module.exports = (sequelize, DataTypes) => {
  class Organisation extends Model {
    static associate(models) {
      Organisation.belongsTo(models.Users)
    }
  }
  Organisation.init({
    name: DataTypes.STRING,
    logo: DataTypes.STRING,
    industry: DataTypes.STRING,
    country_id: DataTypes.STRING,
    state_teritory: DataTypes.STRING,
    address_1: DataTypes.STRING,
    address_2: DataTypes.STRING,
    city: DataTypes.STRING,
    postal_code: DataTypes.BIGINT,
    iec: DataTypes.BIGINT,
    org_currency: DataTypes.BIGINT,
    inventory_start_date: DataTypes.DATE,
    fiscal_year: DataTypes.BIGINT,
    contact_no: DataTypes.BIGINT,
    email: DataTypes.STRING,
    default_org_flag: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Organisation',
  });
  return Organisation;
};