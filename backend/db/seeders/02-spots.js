'use strict';

const { Spot, User } = require('../models');
const spotData = require('../seeders/data/spotData');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    for(let spotsingle of spotData){
      const {address,city,state,country,lat,lng, name,description,price} = spotsingle;
      const founduser = await User.findOne({
        where :{
          username : spotsingle.username
        }
      });
      await Spot.create({
        address,city,state,country,lat,lng, name,description,price,'ownerId':founduser.id
      },options)
    }
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Spots';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options,null,{});  
  }
};
