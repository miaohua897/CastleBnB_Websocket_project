const bcrypt = require('bcryptjs');
const userData = [
  // {

  //   firstName: "John",
  //   lastName: "Smith",
  //   email: "john.smith@gmail.com",
  //   username: "JohnSmith",
  //   hashedPassword: bcrypt.hashSync('secret password')
  // },
  {
    email: 'demo@user.io',
    username: 'Demo-lition',
    firstName:'Demtion',
    lastName:'DL',
    hashedPassword: bcrypt.hashSync('password')
  },
  {
    email: 'user1@user.io',
    username: 'FakeUser1',
    firstName:'Faser1',
    lastName:'DL',
    hashedPassword: bcrypt.hashSync('password2')
  },
  {
    email: 'user2@user.io',
    username: 'FakeUser2',
    firstName:'Fer2',
    lastName:'DL',
    hashedPassword: bcrypt.hashSync('password3')
  }
]
module.exports =userData