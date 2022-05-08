// Login (User info)
const User = require('./User');
// Comments
const Home = require('./Home');
// Posts
const Dashboard = require('./Dashboard');

Dashboard.hasMany(Home, {
    foreignKey: 'dashboard_id',
})

Dashboard.belongsTo(User, {
    foreignKey: 'home_id',
})

Home.belongsTo(User, {
    foreignKey: 'home_id',
})

module.exports = { User, Home, Dashboard }

// SOURCE FOR sequelize associations (easier method of using foreign keys): https://sequelize.org/docs/v6/core-concepts/assocs/#:~:text=To%20do%20this%2C%20Sequelize%20provides,The%20HasMany%20association