'use strict';

const { Booking,User,Spot } = require('../models');
const bookingData = require('../seeders/data/bookingData');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    for (let book of bookingData){
      const {  username, name,startDate,endDate} = book;
      const founduser = await User.findOne({
        where:{
          username
        }
      });
      console.log(founduser.id);
      const foundspot = await Spot.findOne({
        where:{
           name
        }
      });
      await Booking.create({
        'spotId':foundspot.id,'userId':founduser.id,
        startDate,endDate
      },options)
    }
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Bookings';
    const Op = Sequelize.Op;
      return queryInterface.bulkDelete(options,null,{})
  }
};

