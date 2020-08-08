const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('blog', 'root', 'root', {
  
   dialect: 'mysql'
  
});

const user = sequelize.define('user-blog', {
  id:{
  	type:Sequelize.INTEGER,
  	primaryKey: true
  },
  description: {
    type: Sequelize.TEXT
  }
});