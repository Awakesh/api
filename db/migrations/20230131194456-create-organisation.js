'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Organisations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      logo: {
        type: Sequelize.STRING
      },
      industry: {
        type: Sequelize.STRING
      },
      country_id: {
        type: Sequelize.STRING
      },
      state_teritory: {
        type: Sequelize.STRING
      },
      address_1: {
        type: Sequelize.STRING
      },
      address_2: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      postal_code: {
        type: Sequelize.BIGINT
      },
      iec: {
        type: Sequelize.BIGINT
      },
      org_currency: {
        type: Sequelize.BIGINT
      },
      inventory_start_date: {
        type: Sequelize.DATE
      },
      fiscal_year: {
        type: Sequelize.BIGINT
      },
      contact_no: {
        type: Sequelize.BIGINT
      },
      email: {
        type: Sequelize.STRING
      },
      default_org_flag: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Organisations');
  }
};