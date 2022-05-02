const User = require('./User');
const Home = require('./Home');
const Dashboard = require('./Dashboard');

User.hasOne(Home, {
    foreignKey: 'user_id',
})

Home.belongsTo(User, {
    foreignKey: 'user_id',
})

module.exports = { User, Home, }