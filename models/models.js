const Sequelize = require('sequelize');
const sequelize = new Sequelize('blog', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});
sequelize.sync({ force: false })
  .then(() => {
    console.log('Database is connecteed')
});
module.exports = sequelize;