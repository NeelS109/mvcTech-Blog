const blogSeeds = require('./blogSeeds');
const userSeeds = require('./userSeeds');
const commentSeeds = require('./commentSeeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  
  await blogSeeds();

  await userSeeds();
  
  await commentSeeds();

  process.exit(0);
};

seedAll();