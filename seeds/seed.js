// Import sequelize connection
const sequelize = require('../config/connection');
// Import all model tables
const seedDashboard = require('./dashboardData');
const seedHome = require('./homeData');
const seedUser = require('./userData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedDashboard();

    await seedHome();

    await seedUser();

    // When no more async operations are pending, Node will exit (typically) with a status code of 0
    process.exit(0);
};

seedAll();

// SOURCE FOR FILE `Unit 14 Activity 14`
// SOURCE FOR `proces.exit(0);`: https://stackoverflow.com/questions/43147330/what-is-difference-between-method-process-exit1-and-process-exit0-in-node-js