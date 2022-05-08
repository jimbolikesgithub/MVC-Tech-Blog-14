const { Home } = require('../models');

const homeData = [
    {
        comment: 'Can you smell what The Rock is cookin?',
        dashboard_id: 1
    },
    {
        comment: 'What? What? What? What? What? What? What?',
        dashboard_id: 2,
    },
]

// Declare a variable, and bulk create seeds via specified table
const seedHome = () => Home.bulkCreate(homeData)

module.exports = seedHome;