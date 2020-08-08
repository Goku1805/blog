const models = require('./models/models.js');
const init =  () => {
   models.sequelize.sync({force: true});
  console.log('Tables have synced!');
}

init();