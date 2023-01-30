'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      
    }
  }
  Users.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    language: DataTypes.STRING,
    profile_picture: DataTypes.STRING,
    role_id: DataTypes.BIGINT,
    org_ids: DataTypes.STRING,
    permission_id: DataTypes.BIGINT,
    is_admin: DataTypes.BOOLEAN,
    is_active: DataTypes.BOOLEAN
   }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};