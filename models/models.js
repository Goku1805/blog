const Sequelize = require('sequelize');
const sequelize = new Sequelize('blog', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

const User = sequelize.define('user', {
 id: {
 	type: Sequelize.INTEGER,
 	primaryKey:true,
 	autoIncrement: true,
 },
 posts: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  userId:{
  	type:Sequelize.INTEGER,
  	allowNull: false,
  },
});

const Post = sequelize.define('post', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	title: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	body: {
		type: Sequelize.TEXT,
		allowNull: false,
	}
});

const Comment = sequelize.define('comment', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	body: {
		type: Sequelize.TEXT,
		allowNull: false,
	}
})

sequelize.sync({ force: false })
  .then(() => {
    console.log('Database is connected')
});
module.exports = { 
	sequelize, User, Post, Comment 
};