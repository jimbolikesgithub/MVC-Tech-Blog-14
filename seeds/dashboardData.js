const { Dashboard } = require('../models');

const dashboardData = [
    {
        title: 'Will The Great One defeat Stone Cold?',
        content: 'The peoples champ only wins!',
        home_id: 1
    },
    {
        title: 'Will The Great One defeat Stone Cold?',
        content: 'The peoples champ only wins!',
        home_id: 2
    },
]

// Declare a variable, and bulk create seeds via specified table
const seedDashboard = () => Dashboard.bulkCreate(dashboardData)

module.exports = seedDashboard;