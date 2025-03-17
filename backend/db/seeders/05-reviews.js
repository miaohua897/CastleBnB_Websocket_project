'use strict';
const { Review, User, Spot } = require('../models');
const reviewData = require('../seeders/data/reviewData');
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      for (let rev of reviewData) {
        const { username,name,review,stars} = rev;
        const founduser = await User.findOne({
          where:{
            username
          }
        });
        const foundspot = await Spot.findOne({
          where:{
            name
          }
        });
        await Review.create({
          review,stars,'userId':founduser.id,'spotId':foundspot.id
        })
      }
  },
  async down (queryInterface, Sequelize) {
    options.tableName = 'Reviews';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options,null,{});
  }
};
