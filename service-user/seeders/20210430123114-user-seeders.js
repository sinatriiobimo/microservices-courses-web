'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('users', [
        {
          name: 'Sinatrio Bimo Wahyudi',
          profession: 'Admin Micro',
          role: 'admin',
          email: 'sinatrio@gmail.com',
          password: await bcrypt.hash('cimanggis123', 10),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Haikal Ardikatama',
          profession: 'Mobile Developer',
          role: 'student',
          email: 'haikal@gmail.com',
          password: await bcrypt.hash('cimanggis123', 10),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Anugrah Akbar Praramadhan',
          profession: 'Machine Learning Engineer',
          role: 'student',
          email: 'anugrah@gmail.com',
          password: await bcrypt.hash('cimanggis123', 10),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Manfred Michael',
          profession: 'Data Scientist',
          role: 'student',
          email: 'manfred@gmail.com',
          password: await bcrypt.hash('cimanggis123', 10),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Muhammad Alfaiz Khisma Authar',
          profession: 'Mobile Developer',
          role: 'student',
          email: 'faiz@gmail.com',
          password: await bcrypt.hash('cimanggis123', 10),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Adam Rozaq Sobari',
          profession: 'Cloud Engineer',
          role: 'student',
          email: 'adam@gmail.com',
          password: await bcrypt.hash('cimanggis123', 10),
          created_at: new Date(),
          updated_at: new Date()
        },
    ], {});
   
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
