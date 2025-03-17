'use strict';
const { SpotImage,Spot } = require('../models');
const spotIm = require('../seeders/data/spotImData');
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    for(let spot of spotIm){
      const {name,url,preview} = spot;
      const foundspot = await Spot.findOne({
        where:{
          name
        }
      });
      await SpotImage.create({
        "spotId":foundspot.id,url,preview
      },options)
    }
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'SpotImages';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options,null,{});
  }
};
