'use strict';

const { ReviewImage, Review } = require('../models');
const riData = require('../seeders/data/reviewimageData');
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    for (let ri of riData){
      const {review, url} = ri;
      const foundreview = await Review.findOne({
        where:{
          review
        }
      });

      await ReviewImage.create({
        'reviewId':foundreview.id,url
      },options)
    }
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'ReviewImages';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options,null,{});
  }
};
