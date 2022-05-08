const { Home } = require('../models');

const homeData = [
    {
        comment: 'Can you smell what The Rock is cookin?'
    },
    {
        comment: 'What? What? What? What? What? What? What?'
    },
]

// Declare a variable, and bulk create seeds via specified table
const seedHome = () => Home.bulkCreate(homeData)

module.exports = seedHome;